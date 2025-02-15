import { PLATFORM_TYPE } from "@/components/constants";
import { baseUrl } from "@/utility/utility";

export async function createFileDownloadData(
  platform: PLATFORM_TYPE
): Promise<void> {
  try {
    const response = await fetch(`${baseUrl}/api/track-download`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ platform }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error(String(error));
    }
  }
}

export async function createWebVisitData(): Promise<void> {
  try {
    const response = await fetch(`${baseUrl}/api/track-visit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error(String(error));
    }
  }
}
export async function fetchLink(): Promise<string> {
  try {
    const response = await fetch(`${baseUrl}/api/product`, {
      cache: "no-cache",
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error);
    }

    const res = await response.json();
    console.log("from fetchLink", res);
    return res.link;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    } else {
      throw new Error(String(error));
    }
  }
}
