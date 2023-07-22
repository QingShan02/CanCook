"use client"
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import axios from 'axios';
const TextEditor = dynamic(() => import("../../../../../components/TextEditor"), {
    ssr: false,

});
const Detail = ({ params }) => {
    const handleChange = (e: any) => setValue(e);
    const titleHandleChange = (e: any) => setTitleValue(e.target.value);
    const [titleValue, setTitleValue] = useState("");
    const [value, setValue] = useState("");
    const [status, setStatus] = useState(false);
    const data = useMemo(() => {
        
        return  axios.get(`http://localhost:3000/api/article/${params.id}`).then(s => {
            console.log(s.data);
            return s.data;
            });
    }, []);
    return (
        <>{params.id}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Content Editor</h2>
                        {/* {data?.title} */}
                        <TextEditor value={value} handleChange={handleChange} />
                    </div>
                    <div className="col-12">

                        <button className="btn btn-success">Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Detail;