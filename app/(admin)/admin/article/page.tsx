"use client";
import ListArticle from "../../../../components/ListArticle";
import Link from "next/link";

const Article = () => {
  return (
    <div className="container">
      <h1>Danh sách bài viết</h1>
      <hr />
      <div className="d-flex justify-content-end">
        <Link href={"/admin/article/create"} className="btn btn-primary">Thêm bài viết</Link>
      </div>
      <ListArticle />

    </div>
  );
};
export default Article;
