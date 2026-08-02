"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function signup(prevState, formData) {
  const supabase = await createClient();

  const name = formData.get("name")?.toString() ?? "";
  const email = formData.get("email")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  if (!name || !email || !password) {
    return { error: "Please fill in your name, email, and password." };
  }

// signup.js
const { error } = await supabase.auth.signUp({
  email,
  password,
  options: {
    data: { name },
    emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
  },
});

  if (error) {
    return { error: error.message };
  }

redirect("/join/confirm-email");
}