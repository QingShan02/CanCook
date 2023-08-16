'use client'
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import "./Paginate.css"
import "./index.css"
import { PacmanLoader } from "react-spinners";
const ReactPaginate = dynamic(() => import('react-paginate'), { ssr: true })
import CarouselItem from "@/components/Carousel/CaroselItem"
const CarouselMutil = dynamic(() => import("@/components/Carousel"), { ssr: true });
import Tab from "@/components/Tab";
import { onValue, ref } from "firebase/database";
import { database } from "@/util/Firebase/firebase";
import Link from "next/link";
import { Result } from "postcss";

const User = () => {
    const [data, setData] = useState(null);
    const [data2, setData2] = useState(null);
    const [itemOffset, setItemOffset] = useState(0);
    const [comment, setComment] = useState([]);
    const [hotTopics, setHotTopics] = useState([]);

    useEffect(() => {
        const commentsRef = ref(database, `comments`);
        onValue(commentsRef, (snapshot) => {
            const commentsData = snapshot.val() || [];
            // Object.keys(comment[a.id]).length}
            setComment(commentsData);
        });
    }, []);

    console.log(comment);

    useEffect(() => {
        getArticleList();
        getHotTopics();

        console.log(hotTopics)
    }, [itemOffset]);

    const getArticleList = async () => {

        //     try {
        //         if (!data) {
        //             const res = await axios.get("/api/article?p=" + itemOffset);
        //             setData(res.data);

        //         }
        //     } catch (error) {
        //         console.error('Error fetching data:', error);
        //     }
    }

    const getHotTopics = async () => {

        const response = await axios.get("/api/article/hotTopics");
        setHotTopics(response.data);

    }
    useEffect(() => {
        // Gọi API để lấy danh sách sản phẩm
        axios.get("/api/article")
            .then(response => {
                setData2(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    const Items = ({ currentItems }) => {
        return (
            <>
                {currentItems &&
                    currentItems.map((a, index) =>
                    (
                        <>
                            <div className="col-lg-4 mb-5 mt-1">
                                <Card key={index} id={a.id} image={`/assert/ArticleImage/${a.thumbnail}`} title={`${a.title}`} sumComment={comment[a.id] ? Object.keys(comment[a.id]).length : 0} view={a.view}></Card >
                            </div></>
                    )
                    )
                }
            </>
        );
    }
    function PaginatedItems({ itemsPerPage }) {
        const [itemOffset, setItemOffset] = useState(0);
        const endOffset = itemOffset + itemsPerPage;
        const currentItems = data2.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(data2.length / itemsPerPage);

        const handlePageClick = (event) => {
            const newOffset = (event.selected * itemsPerPage) % data2.length;
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

    const itemsPerPage = data?.pageCount;
    const pageCount = itemsPerPage;

    const handlePageClick = (event) => {
        const newOffset = event.selected;
        setItemOffset(newOffset);
    };

    return (
        <div className="container">
            {
                !data2 ? <div className="container d-flex align-items-center" style={{ height: "50vh" }}>
                    <PacmanLoader color="#765827" className="d-block mx-auto" /></div> :
                    <div className="row">
                        {/* w-100 d-flex justify-content-around */}
                        <div className="col-md-6 col-lg-6">
                            <div  >
                                {data2 && <CarouselMutil>
                                    {
                                        data2?.map((a, index) =>
                                        (
                                            <>
                                                <CarouselItem key={index} id={a.id} image={`/assert/ArticleImage/${a.thumbnail}`} title={`${a.title}`}
                                                    // sumComment={0} 
                                                    view={a.view}></CarouselItem>
                                            </>
                                        )
                                        )
                                    }
                                </CarouselMutil>}
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <img src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?cs=srgb&dl=pexels-valeria-boltneva-842571.jpg&fm=jpg" className="h-100 w-100 " alt="" />
                        </div>
                        <div className="col-lg-3">
                            <img src="https://i.pinimg.com/564x/b5/1d/01/b51d0123430cb2f3c222e5448afe26f4.jpg" className="h-100 w-100 " alt="" />
                        </div>
                        <div className="row mt-5">
                            {/* <div className="col-md-6 col-lg-3 ">
                                <div className="mb-3" >
                                    <Items key={"page"} currentItems={data.article} />
                                </div>
                            </div> */}

                            <div className="col-md-6 col-lg-9">
                                <div className="row mb-2 text-primary">
                                    <h3>Món ăn đơn giản</h3>
                                </div>
                                <div className="row">
                                    <PaginatedItems itemsPerPage={9} />
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="row mb-2 text-primary">
                                    <h3 className="text-center">Dinh dưỡng & Mẹo vặt</h3>
                                </div>
                                <div className="mb-3 ps-4 border-start border-dark-subtle">
                                    <Tab comment={comment}/>
                                </div>
                            </div>
                        </div>
                    </div>
            }

            {
                hotTopics.length > 0 ? <div className="container">
                    <h3 className="text-start">Chủ đề nổi bật</h3>
                    <section className="row">
                        {hotTopics.map((ht, index) => (
                            <div className=" col-12 col-sm-12 col-md-6 col-lg-3" key={index}
                                style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "", textDecoration: "none" }} >
                                <Link href={`/article/${ht.id}`}>
                                    <img src={`./assert/ArticleImage/${ht.thumbnail}`} style={{ width: "262px", height: "150px" }} className="imgHotTopic" /></Link>
                                <p className="mt-3 text-center">{ht.title}</p>
                            </div>
                        ))}
                    </section>
                </div> : null
            }


        </div>
    );
}
export default User;
function setComments(arg0: unknown[]) {
    throw new Error("Function not implemented.");
}


