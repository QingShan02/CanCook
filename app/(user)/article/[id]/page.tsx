'use client'

import "./index.css"
import { Article } from "../../../../common/model/Article";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { useSession } from 'next-auth/react';
import { PacmanLoader } from "react-spinners";
import CommentSection from '../../../../components/Comment/CommentSection';

const Article = ({ params }) => {
    const [data, setData] = useState<Article>();
    useEffect(() => {
        const init = async () => {
            await axios.put(`/api/article/${params.id}`);
            const data = await axios.get(`/api/article/${params.id}`);
            setData(data.data);
        }
        init();
    }, []);


    const fullPath = location.pathname;
    const parts = fullPath.split('/');
    const lastPart = parts[parts.length - 1];
    console.log(lastPart);


    const { data: session } = useSession();

    const url = `https://cancook.vercel.app` + fullPath;


    return (
        <>
            {
                !data ? <div className="container d-flex align-items-center" style={{ height: "50vh" }}><PacmanLoader color="#765827" className="d-block mx-auto" /></div> : <div className="container">
                    <div className="col-md-8 col-lg-12">
                        <h1 className="fw-bold mt-5">{data?.title}</h1>
                        {params.id < 31 && (
                            <div className="goto-wrapper">
                                <p>Mục Lục</p>
                                <ul>
                                    <li>
                                        <a href="#nl">I. Nguyên Liệu</a>
                                    </li>
                                    <li><a href="#hdct">II. Hướng Dẫn Chi Tiết </a></li>
                                    <li><a href="#ht">III: Hoàn Thành</a></li>
                                </ul>
                            </div>
                        )
                        }

                        <div><section className="row " id="content" dangerouslySetInnerHTML={{ __html: data?.content }} /></div>
                        <p className="post-source">
                            <span className="fw-lighter">Lượt xem: {data.view}</span><br /><br />
                            <span className="fw-lighter">Người đăng Bàng Thanh Sơn </span> <br></br>
                            <span className="fw-lighter">Cập nhật vào ngày 29/07/2023</span>
                        </p>
                        <div className="btn-group" role="group" aria-label="Basic example">

                            <FacebookShareButton url={url} quote={data?.title}>
                                <button type="button" className="btn btn-outline-success px-5 py-2">Chia sẻ</button>
                            </FacebookShareButton>

                        </div>
                        <div>
                            <CommentSection postId={params.id} />
                        </div>
                        <hr className="my-5" />
                    </div>
                </div>
            }



        </>
    );
}

export default Article;