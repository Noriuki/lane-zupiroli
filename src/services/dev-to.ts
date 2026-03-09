const DEV_TO_API_BASE = "https://dev.to/api";

export interface IDevToPost {
  id: number;
  url: string;
  title: string;
  description: string;
  cover_image: string | null;
}

export async function getLatestPosts(username: string, perPage = 3, page = 1): Promise<IDevToPost[]> {
  const res = await fetch(`${DEV_TO_API_BASE}/articles?username=${username}&per_page=${perPage}&page=${page}`, {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch Dev.to posts");
  }

  return res.json();
}
