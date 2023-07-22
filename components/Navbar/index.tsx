import "./index.css";

const Navbar = () => {
    return (
        <div className="container d-flex justify-content-center">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>

                    <div className="collapse navbar-collapse float-end" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Trang chủ</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Bữa ăn
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Sáng</a></li>
                                    <li><a className="dropdown-item" href="#">Trưa</a></li>
                                    <li><a className="dropdown-item" href="#">Chiều</a></li>
                                    <li><a className="dropdown-item" href="#">Tối</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Nguyên liệu
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Thịt gà</a></li>
                                    <li><a className="dropdown-item" href="#">Thịt bò</a></li>
                                    <li><a className="dropdown-item" href="#">Thịt lợn</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Rau chân vịt</a></li>
                                    <li><a className="dropdown-item" href="#">Salad</a></li>
                                    <li><a className="dropdown-item" href="#">Rau cải thìa</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Món ăn
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dành cho
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Người gầy</a></li>
                                    <li><a className="dropdown-item" href="#">Người béo</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tin tức</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Về chúng tôi</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Liên hệ</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;