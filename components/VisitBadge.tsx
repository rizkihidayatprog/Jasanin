"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export default function VisitBadge() {
  const [n, setN] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visits")
      .then((r) => r.json())
      .then((d) => {
        if (typeof d.visits === "number") setN(d.visits);
      })
      .catch(() => {});
  }, []);

  if (n === null) return null;

  return (
    <p className="brutal-sm mt-3 inline-flex items-center gap-1.5 bg-white px-2 py-1 text-xs font-bold">
      <Eye className="h-4 w-4" strokeWidth={3} />{" "}
      {n.toLocaleString("id-ID")} KUNJUNGAN
    </p>
  );
}
