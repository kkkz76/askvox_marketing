import { supabase } from "@/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

const getGeolocation = async (ipAddress: string) => {
  const res = await fetch(
    `https://ipinfo.io/${ipAddress}/json?token=${process.env.IPINFO_TOKEN}`
  );
  const data = await res.json();
  return data;
};

export async function POST(req: NextRequest) {
  const data = await req.json();

  const ipAddress =
    req.headers.get("x-forwarded-for") || req.headers.get("remote-addr");

  const geoInfo = ipAddress ? await getGeolocation(ipAddress) : null;

  try {
    const { data: newDownload, error: savedDownloadError } = await supabase
      .from("DownloadStatus")
      .insert([
        {
          platform: data.platform,
          downloadedAt: new Date().toISOString(),
          country: geoInfo?.country,
        },
      ])
      .single();

    if (savedDownloadError) {
      throw new Error(
        `Failed to save download record: ${savedDownloadError.message}`
      );
    }

    return NextResponse.json(newDownload, { status: 200 });
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
