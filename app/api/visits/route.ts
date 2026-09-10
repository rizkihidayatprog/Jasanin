import { getStore } from "@netlify/blobs";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const store = getStore("jasanin-stats");
    const raw = await store.get("visits", {
      type: "text",
      consistency: "strong",
    });
    const next = (raw ? parseInt(raw, 10) || 0 : 0) + 1;
    await store.set("visits", String(next));
    return Response.json({ visits: next });
  } catch {
    // Blobs belum tersedia (mis. local dev) — badge disembunyikan client
    return Response.json({ visits: null });
  }
}
