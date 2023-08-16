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

const User = () => {
    const [data, setData] = useState(null);
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

        try {
            if (!data) {
                const res = await axios.get("/api/article?p=" + itemOffset);
                setData(res.data);

            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const getHotTopics = async () => {
        
                const response = await axios.get("/api/article/hotTopics");
                setHotTopics(response.data);
            
    }

    const Items = ({ currentItems }) => {
        return (
            <>
                {currentItems &&
                    currentItems.map((a, index) =>
                    (
                        <>
                            <Card key={index} id={a.id} image={`/assert/ArticleImage/${a.thumbnail}`} title={`${a.title}`} sumComment={comment[a.id] ? Object.keys(comment[a.id]).length : 0} view={a.view}></Card >
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
        <div className="container">
            {
                !data ? <div className="container d-flex align-items-center" style={{ height: "50vh" }}>
                    <PacmanLoader color="#765827" className="d-block mx-auto" /></div> :
                    <div className="row">
                        {/* w-100 d-flex justify-content-around */}
                        <div className="col-md-12 col-lg-6">
                            <div  >
                                {data && <CarouselMutil>
                                    {
                                        data?.article.map((a, index) =>
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
                        <div className="col-md-6 col-lg-3 ">
                            <div className="mb-3" >
                                <Items key={"page"} currentItems={data.article} />
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="mb-3">
                                <Tab comment={comment}/>
                            </div>
                        </div>
                    </div>
            }

            <div className="container">
                <h3 className="text-start">Hot topic</h3>
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

            </div>

        </div>
    );
}
export default User;
function setComments(arg0: unknown[]) {
    throw new Error("Function not implemented.");
}


