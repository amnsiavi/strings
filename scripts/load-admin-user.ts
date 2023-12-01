import bcrypt from "bcrypt";
import { getClient } from "@/postgres/client";

async function loadAdminUser(username: string, password: string) {
  console.log(`Executing  loading admin user data ${username} ${password}`);
  const client = await getClient();

  const saltRounds: number = 10;
  const hash: string = await bcrypt.hash(password, saltRounds);

  try {
    await client.connect();
    await client.query(
      "insert into public.users (username, password, is_admin) values ($1, $2, $3)",
      [username, hash, true]
    );
  } catch (error) {
    await client.query("rollback");
    console.log(error);
  } finally {
    await client.end();
  }
}

const username: string = process.argv[2];
const password: string = process.argv[3];

loadAdminUser(username, password);
