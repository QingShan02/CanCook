"use client";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const TextEditor = dynamic(() => import("../../../../components/TextEditor"), {
  ssr: false,
});
import { useState } from "react";
import ListPosts from "../../../../components/ListPosts";
import TitleEditor from "../../../../components/TitleEditor";

const Posts = () => {      
  const handleChange = (e: any) => setValue(e);
  const titleHandleChange = (e:any) =>setTitleValue(e.target.value);
  const [titleValue,setTitleValue] = useState("");
  const [value, setValue] = useState("");
  const search = useSearchParams();
  const status = search.get("editArticle");
  return (
    <>
      {status ? (
        <div className="container">
          <div className="row">
          <div className="col-12">
              <h2>Title Editor</h2>
              <TitleEditor value={titleValue} handleChange={titleHandleChange} />
            </div>
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
        <ListPosts />
      )}
    </>
  );
};
export default Posts;
