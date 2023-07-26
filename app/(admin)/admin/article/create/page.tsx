"use client"
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
const TextEditor = dynamic(() => import("../../../../../components/TextEditor"), {
  ssr: false,

});
const Create = () => {
    
    

  return (<TextEditor/>)
};
export default Create;
