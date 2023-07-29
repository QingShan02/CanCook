"use client"

import "./index.css"
import {Article} from "../../../../common/model/Article";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const Article = ({params}) => {
    const [data,setData] = useState<Article>();
    useEffect(() => {
        const init = async()=>{
            const data=await axios.get(`http://localhost:3000/api/article/${params.id}`);
            setData(data.data);
        }
        init();
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col-8">
                        {/* tiêu đề */}
                        <h1 className="fw-bold mt-5">{data?.title}</h1>
                     
                                <section className="row" dangerouslySetInnerHTML={{ __html: data }} />
                       
                        <p className="post-source">
                            <span className="fw-lighter"> </span>
                            <span className="fw-lighter">Cập nhật vào ngày 29/07/2023</span>
                        </p>

                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-success px-5 py-2">Đánh giá</button>
                            <button type="button" className="btn btn-outline-success px-5 py-2 mx-2" >Chia sẻ</button>
                        </div>

                       

                     

                        <hr className="my-5"/>

                    </div>

                    <div className="col">
                    </div>
                </div>
            </div>

        </>
    );
}

export default Article;