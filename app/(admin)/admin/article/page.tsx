"use client";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const TextEditor = dynamic(() => import("../../../../components/TextEditor"), {
  ssr: false,
});
import { useEffect, useState } from "react";
import ListArticle from "../../../../components/ListArticle";
import axios from "axios";

const Article = () => {
  const handleChange = (e: any) => setValue(e);
  const [value, setValue] = useState("");
  const search = useSearchParams();
  const status = search.get("editArticle");
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/api/article");
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {status ? (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Content Editor</h2>
              <TextEditor value={value} handleChange={handleChange} />
            </div>
            <div className="col-12">
              <button className="btn btn-success">Submit</button>
            </div>
          </div>
        </div>
      ) : (
        <ListArticle />
      )}
    </>
  );
};
export default Article;
