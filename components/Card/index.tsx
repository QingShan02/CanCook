import 'bootstrap-icons/font/bootstrap-icons.css'
import "./index.css"

const Card = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="product-grid">
                        <div className="product-image">
                            <a href={`${1}`} className="image">
                                <img
                                    className="img-1"
                                    src="https://www.allrecipes.com/thmb/rl9KQR5reCaDXErPF4n7c2K96Bg=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(2015x0:2017x2):format(webp)/IMG_1224-4x3-5ad9a674196a41d28b5bbcdd7d14eaca.JPG"
                                />
                            </a>
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
                                    <a href="#">
                                        <i className="bi bi-eye-fill" />
                                    </a>
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
                                <a
                                    className="link-offset-2 link-underline link-underline-opacity-0"
                                    href={`${1}`}
                                >
                                    <span className='fs-4 fw-bold'>Sweet Restaurant Slaw</span>
                                </a>
                            </h3>
                            <div className="comment">
                            123 bình luận<i className="bi bi-chat-square-fill ms-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card