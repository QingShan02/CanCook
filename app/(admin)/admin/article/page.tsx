"use client";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const TextEditor = dynamic(() => import("../../../../components/TextEditor"), {
  ssr: false,
});
import { useEffect, useState } from "react";
import ListArticle from "../../../../components/ListArticle";
import Link from "next/link";

const Article = () => {



  return (
    <>
      <h1>Danh sách bài viết</h1>
      <div className="d-flex justify-content-end">
        <Link href={"/admin/article/createa"} className="btn btn-primary">Create</Link>
      </div>
      <ListArticle />

    </>
  );
};
export default Article;
