import React from "react";

export default function TableComp({ ...post }) {
  return (
    <>
      <tr className="flex gap-24">
        <td>{post.id}</td>
        <td>{post.title}</td>
        <td>{post.content}</td>
      </tr>
    </>
  );
}
