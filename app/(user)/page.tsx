'use client'
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import "./Paginate.css"
import { PacmanLoader } from "react-spinners";
const ReactPaginate = dynamic(() => import('react-paginate'), { ssr: false })

const User = () => {
    const [data, setData] = useState(null);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        getArticleList();

    }, [itemOffset]);
    const getArticleList = async () => {
        try {
            const res = await axios.get("/api/article?p="+itemOffset);
            if (res.data) {
                setData(res.data);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const Items = ({ currentItems }) => {
        return (
            <>
                {currentItems &&
                    currentItems.map((a, index) =>
                    (
                        <>
                            <div className="col-md-3 col-sm-3 col-xs-6">
                                <Card key={index} id={a.id} image={`../assert/ArticleImage/${a.thumbnail}`} title={`${a.title}`} sumComment={0} view={a.view}></Card>
                            </div>
                        </>
                    )
                    )
                }
            </>
        );
    }
    const itemsPerPage = data?.pageCount;
    const pageCount = itemsPerPage;

    const handlePageClick = (event) => {
        const newOffset = event.selected;        
        setItemOffset(newOffset);
    };
    return (
        <>
            <div className="container text-center">
                <div className="row">
                    {
                        !data ? <div className="container d-flex align-items-center" style={{height:"50vh"}}><PacmanLoader color="#765827" className="d-block mx-auto" /></div>:
                        <>
                            <Items key={"page"} currentItems={data.article} />

                            <ReactPaginate key="1" containerClassName='react-pagination-js-border-bottom'
                                pageClassName='page'
                                activeClassName="is-active"
                                nextClassName={pageCount === 1 ? 'page disabled' : 'page'}
                                nextLabel="⟩"
                                pageRangeDisplayed={3}
                                breakLabel="..."
                                onPageChange={handlePageClick}
                                pageCount={pageCount}
                                previousClassName={pageCount === itemOffset ? 'page disabled' : 'page'}
                                previousLabel="⟨"
                                renderOnZeroPageCount={null}
                            />
                        </>
                    }
                </div>
            </div>

        </>
    );
}
export default User;
