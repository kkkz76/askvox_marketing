import { supabase } from "@/supabaseClient";
import { NextResponse } from "next/server";

export async function POST() {
  const today = new Date().toISOString().split("T")[0];

  try {
    const { data, error: selectError } = await supabase
      .from("DailyWebVisitor")
      .select("id, count")
      .eq("date", today)
      .single();

    if (selectError && selectError.code !== "PGRST116") {
      throw new Error(selectError.message);
    }

    //If a record exists, increment the count, otherwise create a new record
    let response;
    if (data) {
      // Record exists, increment count
      const { error: updateError } = await supabase
        .from("DailyWebVisitor")
        .update({ count: data.count + 1 })
        .eq("id", data.id);

      if (updateError)
        throw new Error(`Failed to update count: ${updateError.message}`);

      response = { message: "Visit count incremented successfully." };
    } else {
      // No record exists, create a new one
      const { error: insertError } = await supabase
        .from("DailyWebVisitor")
        .insert([{ date: today, count: 1 }]);

      if (insertError)
        throw new Error(`Failed to create record: ${insertError.message}`);

      response = { message: "Visit count created successfully." };
    }

    return NextResponse.json(response, { status: 200 });
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
