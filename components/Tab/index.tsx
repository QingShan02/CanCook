import { Tabs } from "antd";
import Card from "../Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { database, onValue, ref } from "@/util/Firebase/firebase";
import ReactPaginate from "react-paginate";

const Tab = ({ comment }) => {
    const [aofcate, setAofcate] = useState([]);
    useEffect(() => {
        getArticleList("L01");
    }, []);
    const getArticleList = async (e?) => {
        try {
            const res = await axios.get(`/api/category/${e}`);
            if (res.data) {
                setAofcate(res.data.listposts);
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
                            <div className="">
                                <Card key={index} id={a.id} image={`../assert/ArticleImage/${a.thumbnail}`} title={`${a.title}`} sumComment={comment[a.id] ? Object.keys(comment[a.id]).length : 0} view={a.view} ></Card>
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
        const currentItems = aofcate.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(aofcate.length / itemsPerPage);

        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % aofcate.length;
            setItemOffset(newOffset);
        };
        return (
            <>
                <Items key={pageCount} currentItems={currentItems} />
                <div className="row"></div>
                <div className="justify-content-center d-flex  mt-5">
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
                </div>
            </>
        );
    }

    const onTabClick = async (e) => {
        getArticleList(e);

    }
    return (
        <Tabs
            type="card"
            defaultActiveKey="1"
            items={[
                {
                    label: 'Dinh dưỡng',
                    key: 'L01',
                    children: <PaginatedItems itemsPerPage={2} />,
                    // aofcate.map((a, index) => {
                    //     return (<Card key={index} id={a.id} image={`/assert/ArticleImage/${a.thumbnail}`}
                    //         sumComment={Object.keys(comment[a.id]).length}
                    //         title={`${a.title}`} view={a.view}></Card >)
                    // }),

                },
                {
                    label: 'Mẹo vặt',
                    key: 'L04',
                    children: <PaginatedItems itemsPerPage={2} />,
                },
            ]}
            onChange={onTabClick} />
    );
}
export default Tab;