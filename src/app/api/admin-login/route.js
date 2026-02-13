import { cookies } from "next/headers";

export async function POST(req) {
  const { password } = await req.json();

  if (password === process.env.ADMIN_PASSWORD) {
    cookies().set("admin", "true", { httpOnly: true });
    return new Response("OK", { status: 200 });
  }

  return new Response("Unauthorized", { status: 401 });
}
