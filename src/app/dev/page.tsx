import React from "react";
import Test from "./_components/test";

export default function DevPage() {
  return (
    <main className="p-[clamp[1rem,5vw,5rem]] debug">
      <Test />
    </main>
  );
}
