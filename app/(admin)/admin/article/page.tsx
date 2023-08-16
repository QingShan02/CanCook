"use client";
import { Button } from "antd";
import ListArticle from "../../../../components/ListArticle";
import Link from "next/link";

const Article = () => {
  return (
    <div className="container">
      <h1>Danh sách bài viết</h1>
      <hr />
      <div className="d-flex justify-content-end">
        <Link href={"/admin/article/create"}>
          <Button
            type="default"
            className="float-end mt-3 me-2"
          >
            Thêm sản phẩm
          </Button>
        </Link>
      </div>
      <ListArticle />

    </div>
  );
};
export default Article;
