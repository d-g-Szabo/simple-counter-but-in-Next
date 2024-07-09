"use client";
import { useState } from "react";
export default function CounterPage() {
  const [count, setCount] = useState(0);

  function handleButtonClick() {
    setCount(count + 1);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button className="text-4xl font-bold" onClick={handleButtonClick}>
        Counter
      </button>
      <h1>{count}</h1>
    </main>
  );
}
