"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function FormPost() {
  const [title, setTitle] = useState("");
  const router = useRouter();

  //Create a submit post
  async function submitPost(e: React.FormEvent) {
    e.preventDefault();
    const data = await fetch(`/api/createPost`, {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    const res = await data.json();
    router.refresh();
    if (!res.ok) console.log(res.message);
  }

  return (
    <form onSubmit={submitPost}>
      <input
        className="text-black"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
      />
      <button className="ml-4 bg-teal-600" type="submit">
        Make a post here
      </button>
    </form>
  );
}
