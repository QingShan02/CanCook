"use client"
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import axios from 'axios';
import { Article } from "@/common/model/Article";
import { SubmitHandler } from "react-hook-form";
const TextEditor = dynamic(() => import("../../../../../components/TextEditor"), {
    ssr: false,

});
const Detail = ({ params }) => {
    const handleChange = (e: any) => setValue(e);
    const [titleValue, setTitleValue] = useState("");
    const [value, setValue] = useState("");
    const [status, setStatus] = useState(false);
    const [dataArticle, setDataArticle] = useState<any>([]);
    const [directory, setdirectory] = useState('');
    const data = useMemo(() => {
        return axios.get(`/api/article/${params.id}`).then(s => {
            setDataArticle(s.data);
            const directoryArray = s.data.directory.map(item => item.directoryid);
            setdirectory(directoryArray);
            return s.data;

        });
    }, []);

    const Submit: SubmitHandler<Article> = async (data) => {
        try {
            await axios.put(`/api/article/${params.id}/update`, data);
            console.log("ok");

        } catch (error) {
            console.log(error);
        }
        window.location.href = "/admin/article";
    }
    return (
        <>{params.id}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Content Editor</h2>
                        <TextEditor Submit={Submit} title={dataArticle.title} img={null} content={dataArticle.content} category={dataArticle.category} directory={directory} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Detail;