"use client";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";

const TextEditor = dynamic(() => import("../../../../components/TextEditor"), {
  ssr: false,
});
import { useEffect, useState } from "react";
import ListArticle from "../../../../components/ListArticle";

const Article = () => {



  return (
    <>

        <ListArticle />
    
    </>
  );
};
export default Article;
