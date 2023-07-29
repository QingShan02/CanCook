"use client";
import ListArticle from "../../../../components/ListArticle";
import Link from "next/link";

const Article = () => {
  return (
    <>
      <h1>Danh sách bài viết</h1>
      <div className="d-flex justify-content-end">
        <Link href={"/admin/article/create"} className="btn btn-primary">Create</Link>
      </div>
      <ListArticle />

    </>
  );
};
export default Article;
