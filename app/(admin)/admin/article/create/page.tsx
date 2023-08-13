"use client"
import dynamic from "next/dynamic";
import { Article } from "@/common/model/Article";
import { SubmitHandler } from "react-hook-form";
import axios from "axios";
const TextEditor = dynamic(() => import("../../../../../components/TextEditor"), {
  ssr: false,

});
const Create = () => {
  const Submit: SubmitHandler<Article> = async (data) => {
    await axios.post("/api/article", data).then().catch(er => console.log(er));
    window.location.href = "/admin/article";
  }
  return (
    <div>
      <TextEditor Submit={Submit} />
    </div>
  )
};

export default Create;
