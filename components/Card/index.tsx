import 'bootstrap-icons/font/bootstrap-icons.css'
import "./index.css"
import { Article } from "../../common/model/Article"
import Link from 'next/link'

const Card = ({ ...props }: Article) => {
    return (
        <>
            <div className="col">
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
                                <span className='fs-4 fw-bold'>{props.title}</span>
                            </Link>
                        </h3>
                        <div className="comment">
                            {props.sumComment}<i className="bi bi-chat-square-fill ms-2" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card