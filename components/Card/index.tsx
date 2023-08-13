import 'bootstrap-icons/font/bootstrap-icons.css'
import "./index.css"
import { Article } from "../../common/model/Article"
import Link from 'next/link'

const Card = ({ ...props }: Article) => {
    return (
        <>
            <div className="mb-3 border" style={{ backgroundColor: "white" }}>
                <div className="product-grid">
                    <div className="product-image">
                        <Link
                            href={{
                                pathname: `/article/${props.id}`
                            }}
                            className='text-decoration-none'
                        >
                            <img
                                className="img-1"
                                src={props.image}
                            />
                        </Link>
                        <ul className="product-links row">
                            <li>
                                <a href="#">
                                    <i className="bi bi-cloud-download-fill"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bi bi-heart-fill" />
                                </a>
                            </li>
                            <li>
                                <Link
                                    href={{
                                        pathname: `/article/${props.id}`
                                    }}
                                    className='text-decoration-none'
                                >
                                    <i className="bi bi-eye-fill" />
                                </Link>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="bi bi-share-fill" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="product-content text-start">
                        <h3 className="title">
                            <Link
                                href={{
                                    pathname: `/article/${props.id}`
                                }}
                                className='text-decoration-none'
                            >
                                <span className='fw-bold'>{props.title}</span>
                            </Link>
                        </h3>
                        <div className="comment">
                            <span>{props.view} views</span>
                            <span >  {props.sumComment} comment</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card