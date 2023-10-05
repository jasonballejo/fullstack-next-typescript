import Link from "next/link";
import FormPost from "./Form";

export const revalidate = 0;

async function getPosts() {
  const res = await fetch(`${process.env.BASE_URL}/api/getPosts`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default async function Home() {
  // Do this to specific the data you are returning
  const data: { id: number; title: string }[] = await getPosts();
  return (
    <main className="py-4 px-48">
      <div className="my-10">
        <FormPost />
      </div>
      {data.map((post) => (
        <h1 key={post.id} className="text-3xl py-6">
          {post.title}
        </h1>
      ))}
    </main>
  );
}
