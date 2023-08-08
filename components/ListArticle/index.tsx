"use client"

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
const ListArticle = () => {

    const [data, setData] = useState<any>({});
    const [pageCurrent, setPageCurrent] = useState(0);
    const next = () =>{
        let count = pageCurrent;
        if(count>= data.pageCount-1){
            setPageCurrent(0);
        }else{
            setPageCurrent(count+1);
        }
    }
    const prev = () =>{
        let count = pageCurrent;
        if(count== 0){
            setPageCurrent(data.pageCount-1);
        }else{
            setPageCurrent(count-1);
        }
    }
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/article?p='+pageCurrent);
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [pageCurrent]);
    const deleteItem = async(id) =>{
        await axios.delete("/api/article/"+id);
        window.location.reload();
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex justify-content-between align-items-center activity">
                        <div><i className="fa fa-clock-o" /><span className="ml-2">Tiêu đề</span></div>
                        <div><span className="activity-done">Ngày đăng</span></div>
                        <div className="icons"><i className="fa fa-search" /><i className="fa fa-ellipsis-h" /></div>
                    </div>
                    <div className="mt-3">
                        <ul className="list list-inline">
                            {data?.article?.map((article) => (
                                <li key={article.id} className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center" style={{width:"170px"}}><i className="fa fa-check-circle checkicon" />
                                        <div className="ml-2">
                                            <h6 className="mb-0">{article.title}</h6>

                                            <div className="d-flex flex-row mt-1 text-black-50 date-time">
                                                <div><i className="fa fa-calendar-o" /><span className="ml-2">{article.staffname}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="d-flex flex-column mr-2">
                                            <div className="profile-image"><img className="rounded-circle d-block mx-auto" src="https://i.imgur.com/wwd9uNI.jpg" width={30} /></div><span className="date-time">{article.createdate}</span></div>
                                        <i className="bi bi-ellipsis" />
                                    </div>

                                    <div className="d-flex flex-row align-items-center">
                                        <Link
                                            href={{
                                                pathname: "/admin/article/"+article.id
                                            }}
                                        >
                                            <button className="btn btn-dark"><i className="bi bi-pencil-square"></i></button>
                                        </Link>
                                            <button onClick={()=>deleteItem(article.id)} className="ms-3 btn btn-danger"><i className="bi bi-trash2-fill"></i></button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-3">
                        <button onClick={prev} className="btn btn-primary">Trước đó</button>
                        <span  className="px-3">{pageCurrent+1}</span>
                        <button onClick={next} className="btn btn-primary">Tiếp theo</button>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default ListArticle;
