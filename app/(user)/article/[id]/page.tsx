'use client'

import "./index.css"
import { Article } from "../../../../common/model/Article";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { useSession } from 'next-auth/react';
import { PacmanLoader } from "react-spinners";

const Article = ({ params }) => {
    const [data, setData] = useState<Article>();
    useEffect(() => {
        const init = async () => {
            const data = await axios.get(`/api/article/${params.id}`);
            setData(data.data);
        }
        init();
    }, []);

    const fullPath = window.location.pathname;

    const { data: session } = useSession();

    const url = `https://cancook.vercel.app` + fullPath;
    console.log(url);


    return (
        <>
            {
                !data ? <div className="container d-flex align-items-center" style={{height:"50vh"}}><PacmanLoader color="#765827" className="d-block mx-auto" /></div>:<div className="container">
                <div className="col-md-8 col-lg-12">
                    <h1 className="fw-bold mt-5">{data?.title}</h1>
                    <div><section className="row " id="content" dangerouslySetInnerHTML={{ __html: data }} /></div>
                    <p className="post-source">
                        <span className="fw-lighter">Người đăng Bàng Thanh Sơn </span> <br></br>
                        <span className="fw-lighter">Cập nhật vào ngày 29/07/2023</span>
                    </p>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outline-success px-5 py-2">Đánh giá</button>
                    </div>
                    <div className="btn-group ms-3" role="group" aria-label="Basic example">
                        {session && (
                            <FacebookShareButton url={url} quote={data?.title}>
                                <button type="button" className="btn btn-outline-success px-5 py-2">Chia sẻ</button>
                            </FacebookShareButton>
                        )}
                    </div>
                    <hr className="my-5" />
                </div>
            </div>
            }



        </>
    );
}

export default Article;