import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
const ListArticle = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/article');
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex justify-content-between align-items-center activity">
                        <div><i className="fa fa-clock-o" /><span className="ml-2">11h 25m</span></div>
                        <div><span className="activity-done">Done Activities(4)</span></div>
                        <div className="icons"><i className="fa fa-search" /><i className="fa fa-ellipsis-h" /></div>
                    </div>
                    <div className="mt-3">
                        <ul className="list list-inline">
                            {data.map((article) => (
                                <li key={article.id} className="d-flex justify-content-between">
                                    <div className="d-flex flex-row align-items-center"><i className="fa fa-check-circle checkicon" />
                                        <div className="ml-2">
                                            <h6 className="mb-0">{article.title}</h6>

                                            <div className="d-flex flex-row mt-1 text-black-50 date-time">
                                                <div><i className="fa fa-calendar-o" /><span className="ml-2">22 May 2020 11:30 PM</span></div>
                                                <div className="ml-3"><i className="fa fa-clock-o" /><span className="ml-2">6h</span></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="d-flex flex-column mr-2">
                                            <div className="profile-image"><img className="rounded-circle" src="https://i.imgur.com/xbxOs06.jpg" width={30} /><img className="rounded-circle" src="https://i.imgur.com/KIJewDa.jpg" width={30} /><img className="rounded-circle" src="https://i.imgur.com/wwd9uNI.jpg" width={30} /></div><span className="date-time">{article.createdate}</span></div>
                                        <i className="fa fa-ellipsis-h" />
                                    </div>

                                    <div className="d-flex flex-row align-items-center">
                                        <Link
                                            href={{
                                                pathname: "/admin/article/"+article.id
                                            }}
                                        >
                                            <button className="btn btn-dark">Edit</button>
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default ListArticle;
