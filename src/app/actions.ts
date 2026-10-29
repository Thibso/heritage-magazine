"use server";

import { cookies } from "next/headers";

export async function create() {
  await (await cookies()).set("popup", "validate", { maxAge: 604800 });
}
