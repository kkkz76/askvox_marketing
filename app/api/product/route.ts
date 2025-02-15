import { supabase } from "@/supabaseClient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("ProductDownload")
      .select("link") // Select only the 'link' field
      .eq("id", 1) // Filter where id = 1
      .single(); // Ensure only one record is returned

    if (error) {
      console.error("Error fetching link:", error);
      throw new Error("Link not found");
    } else {
    }
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { error: "Unknown error occurred" },
        { status: 500 }
      );
    }
  }
}
