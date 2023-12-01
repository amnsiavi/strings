import { loadEnvConfig } from "@next/env";
import { Client, QueryResult } from "pg";

const projectDir = process.cwd();

loadEnvConfig(projectDir);

const portString: string | undefined = process.env.POSTGRES_PORT;
const port: number | undefined = portString
  ? parseInt(portString, 10)
  : undefined;

export async function getClient(): Promise<Client> {
  const client = new Client({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    port: port,
    database: process.env.POSTGRES_DATABASE,
    password: process.env.POSTGRES_PASSWORD,
  });

  return client;
}

export async function sql(
  sql: string,
  values?: Array<any>
): Promise<QueryResult<any>> {
  const client = await getClient();
  await client.connect();
  const res = await client.query(sql, values);
  await client.end();
  return res;
}
