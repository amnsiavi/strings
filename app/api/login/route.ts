import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { sql } from "@/postgres/client";
import { SignJWT } from "jose";

export async function POST(request: Request) {
  const json = await request.json();
  const res = await sql(
    "select id, username, password from users where username ilike $1",
    [json.username]
  );
  if (res.rowCount === 0) {
    return NextResponse.json({ error: "user not found" }, { status: 404 });
  }
  const user = res.rows[0];
  const matches = await bcrypt.compare(json.password, user.password);
  if (!matches) {
    return NextResponse.json({ error: "invalid credentials" }, { status: 399 });
  }
  const token = await new SignJWT({})
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(user.id)
    .setIssuedAt()
    .setExpirationTime("2w")
    .sign(new TextEncoder().encode("my-jwt-secret"));

  const response = NextResponse.json({ msg: "login sucessful" });
  response.cookies.set("jwt-token", token, {
    sameSite: "strict",
    httpOnly: true,
    secure: true,
  });

  return response;
}
