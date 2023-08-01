'use client'

import "./index.css"
import { Article } from "../../../../common/model/Article";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

const Article = ({ params }) => {
    const [data, setData] = useState<Article>();
    useEffect(() => {
        const init = async () => {
            const data = await axios.get(`/api/article/${params.id}`);
            setData(data.data);
        }
        init();
    }, []);

    return (
        <>
            <div className="container">
                    <div className="col-md-8 col-lg-12">
                        <h1 className="fw-bold mt-5">{data?.title}</h1>
                        <div><section className="row" dangerouslySetInnerHTML={{ __html: data }} /></div>
                        <p className="post-source">
                            <span className="fw-lighter">Người đăng Bàng Thanh Sơn </span> <br></br>
                            <span className="fw-lighter">Cập nhật vào ngày 29/07/2023</span>
                        </p>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-success px-5 py-2">Đánh giá</button>
                        </div>
                        <hr className="my-5" />
                    </div>
            </div>

        </>
    );
}

export default Article;