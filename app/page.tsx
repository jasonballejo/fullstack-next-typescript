import Link from "next/link";
import FormPost from "./Form";
import TableComp from "./TableComp";

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
  const data: { id: number; title: string; content: string }[] =
    await getPosts();
  return (
    <main className="py-4 px-48">
      <div className="my-10">
        <FormPost />
      </div>
      <div className="text-white">
        <h1 className="text-3xl">Today's Task:</h1>

        <table className="">
          <tr className="flex gap-10">
            <th>Number</th>
            <th>Title</th>
            <th>Content</th>
          </tr>
          {data.map((post) => (
            <TableComp key={post.id} {...post} />
          ))}
        </table>
      </div>
    </main>
  );
}
