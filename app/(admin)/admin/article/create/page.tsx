"use client"
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { data } from "autoprefixer";
import { Article } from "@/common/model/Article";
import { SubmitHandler } from "react-hook-form";
import axios from "axios";
import * as fs from "fs";
const TextEditor = dynamic(() => import("../../../../../components/TextEditor"), {
  ssr: false,

});
const Create = () => {
  const Submit: SubmitHandler<Article> = async (data) => {
    await axios.post("http://localhost:3000/api/article", data ).then(res => console.log(res)).catch(er => console.log(er));
  }
  return (
    <div>
      <TextEditor Submit={Submit} />
    </div>
  )
};

export default Create;
