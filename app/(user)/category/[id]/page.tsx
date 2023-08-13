'use client'
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import "../../page";
import dynamic from "next/dynamic";
const ReactPaginate = dynamic(()=>import('react-paginate'),{ssr:false})

const Category = ({ params }) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        getArticleList();
    }, []);
    const getArticleList = async () => {
        try {
            const res = await axios.get(`/api/category/${params.id}`);
            if (res.data) {
                setData(res.data.listposts);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function Items({ currentItems }) {
        return (
            <>
                {currentItems &&
                    currentItems.map((a, index) =>
                    (
                        <>
                            <div className="col-md-3 col-lg-3 col-xs-6">
                                <Card key={index} id={a.id} image={`../assert/ArticleImage/${a.thumbnail}`} title={`${a.title}`} sumComment={1000} view={a.view}></Card>
                            </div>
                        </>
                    )
                    )
                }
            </>
        );
    }
    function PaginatedItems({ itemsPerPage }) {
        const [itemOffset, setItemOffset] = useState(0);
        const endOffset = itemOffset + itemsPerPage;
        const currentItems = data.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(data.length / itemsPerPage);

        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % data.length;
            setItemOffset(newOffset);
        };
        return (
            <>
                <Items key={pageCount} currentItems={currentItems} />

                <ReactPaginate key="1" containerClassName='react-pagination-js-border-bottom'
                    pageClassName='page'
                    activeClassName="is-active"
                    nextClassName={pageCount === 1 ? 'page disabled' : 'page'}
                    nextLabel="⟩"
                    onPageChange={handlePageClick}
                    pageCount={pageCount}
                    previousClassName={pageCount === itemOffset ? 'page disabled' : 'page'}
                    previousLabel="⟨"
                />
            </>
        );
    }

    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <PaginatedItems itemsPerPage={8} />
                </div>
            </div>

        </>
    );
}
export default Category;
