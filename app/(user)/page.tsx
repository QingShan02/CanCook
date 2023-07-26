'use client'

import { Article } from "@/common/model/Article";
import Card from "@/components/Card";
import axios from "axios";
import { useEffect, useState } from "react";

const User = () => {
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
        <>
            <div className="container text-center">
                <div className="row">
                    {
                        data.map((a, index) => (
                            <div className="col">
                                <Card key={index} id={a.id} image={`../assert/ArticleImage/${a.thumbnail}`} title={`${a.title}`} sumComment={1000}></Card>
                            </div>
                        ))
                    }
                </div></div>

        </>
    );
}
export default User;
