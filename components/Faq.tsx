"use client";

import { useState } from "react";
import { FAQS } from "@/lib/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="border-b-[3px] border-black bg-[#F5F5F0]">
      <div className="mx-auto max-w-4xl px-4 py-12 md:py-16">
        <h2 className="reveal font-display text-3xl font-bold md:text-5xl">
          MASIH MIKIR? WAJAR.
        </h2>
        <div className="mt-6 flex flex-col gap-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="reveal brutal bg-white">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left font-display font-bold"
                >
                  {f.q}
                  <span className="brutal-sm bg-[#FFDE1A] px-2">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <p className="border-t-[3px] border-black bg-[#F5F5F0] px-4 py-3 font-medium">
                    {f.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
