'use client'
import Card from "@/components/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import dynamic from "next/dynamic";
import "./Paginate.css"
import { PacmanLoader } from "react-spinners";
const ReactPaginate = dynamic(() => import('react-paginate'), { ssr: true })
import { Carousel, } from "react-bootstrap";
import CarouselItem from "@/components/Carousel/CaroselItem"
const CarouselMutil = dynamic(() => import("@/components/Carousel"), { ssr: true });
import Tab from "@/components/Tab";
import { onValue, ref } from "firebase/database";
import { database } from "@/util/Firebase/firebase";


const User = () => {
    const [data, setData] = useState(null);
    const [itemOffset, setItemOffset] = useState(0);
    const [comment, setComment] = useState([]);
    useEffect(() => {
        const commentsRef = ref(database, `comments`);
        onValue(commentsRef, (snapshot) => {
            const commentsData = snapshot.val() || [];
            setComment(commentsData);
        });
    }, []);
    useEffect(() => {
        getArticleList();

    }, [itemOffset]);
    const getArticleList = async () => {
        try {
            if (!data) {
                const res = await axios.get("/api/article?p=" + itemOffset);

                console.log(res.data);
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
                            <Card key={index} id={a.id} image={`/assert/ArticleImage/${a.thumbnail}`} title={`${a.title}`} sumComment={Object.keys(comment[a.id]).length} view={a.view}></Card >
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
        <>{
            !data ? <div className="container d-flex align-items-center" style={{ height: "50vh" }}><PacmanLoader color="#765827" className="d-block mx-auto" /></div> :
                <div className="container" >
                    <div className="w-100 d-flex justify-content-around">
                        <div style={{ width: "45%" }} >
                            {data && <CarouselMutil>
                                {
                                    data?.article.map((a, index) =>
                                    (
                                        <>
                                            <CarouselItem key={index} id={a.id} image={`/assert/ArticleImage/${a.thumbnail}`} title={`${a.title}`} sumComment={0} view={a.view}></CarouselItem>
                                        </>
                                    )
                                    )
                                }
                            </CarouselMutil>}
                        </div>
                        <div className="mb-3" style={{ width: "15%" }}>
                            <Items key={"page"} currentItems={data.article} />
                        </div>
                        <div className="mb-3" style={{ width: "15%" }}>
                            <Tab />
                        </div>
                    </div>
                </div>
        }


        </>
    );
}
export default User;
function setComments(arg0: unknown[]) {
    throw new Error("Function not implemented.");
}

