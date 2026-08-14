"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function setupProfileAction(formData) {
    const supabase = await createClient();

    const {
        data: { user },
        error: authError,
    } = await supabase.auth.getUser();

    console.log("user:", user);
    console.log("auth error:", authError);

    const { data, error } = await supabase
        .from("profiles")
        .insert({
            id: user.id,
            full_name: formData.get("fullName"),
            role: formData.get("role"),
        });
    const role = formData.get("role");

    if (role === "dev") {
        const { data: devData, error: devError } = await supabase
            .from("developer_profiles")
            .insert({
                id: user.id,
                dev_name: formData.get("devName"),
            });

        console.log("developer profile data:", devData);
        console.log("developer profile error:", devError);
    }
    else{
        const { data: recData, error: recError } = await supabase
            .from("recruiter_profiles")
            .insert({
                id: user.id,
                company_name: formData.get("companyName"),
            });
    }

    console.log("insert data:", data);
    console.log("insert error:", error);

    redirect("/dashboard");
}