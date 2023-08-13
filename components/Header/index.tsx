'use client'
import { signIn, signOut, useSession } from 'next-auth/react';
import "bootstrap/dist/css/bootstrap.min.css";
import Link from 'next/link';
const Header = () => {
    const { data: session } = useSession();

    return (
        <>
            <nav className="navbar navbar-expand-lg mb-3" style={{ backgroundColor: '#C8AE7D' }}>
                <div className="container text-center d-block">
                    <div className="row ">
                        <div className="col-lg-3 col-sm-3 m-auto">
                            <button className="navbar-toggler my-2 float-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <Link className="navbar-brand float-sm-start float-lg-start me-5" href="/">
                                <img src="../../../images/logo.png" className='' alt="Bootstrap" width={100} />
                            </Link>
                        </div>
                        <div className="col-lg-8 mt-4">
                            <div className="collapse navbar-collapse row" id="navbarNavAltMarkup">
                                <div className=" justify-content-center col-12 ">
                                    <ul className="navbar-nav mt-3">
                                        <li className="nav-item">
                                            <Link className="nav-link active text-inline" aria-current="page" href={"/"}>Trang chủ</Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Loại
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="/category/L01">Dinh Dưỡng</a></li>
                                                <li><a className="dropdown-item" href="/category/L02">Thông Tin</a></li>
                                                <li><a className="dropdown-item" href="/category/L04">Mẹo Vặt</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link active dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Danh Mục
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="/directory/CM01">Giảm Cân</a></li>
                                                <li><a className="dropdown-item" href="/directory/CM02">Tăng Cân</a></li>
                                                <li><a className="dropdown-item" href="/directory/CM03">Sức Khỏe</a></li>
                                                <li><a className="dropdown-item" href="/directory/CM04">Tiết Kiệm</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/about">Về chúng tôi</a>
                                        </li>
                                        <li className="m-auto float-lg-end">
                                            {session ? (
                                                <>
                                                    <span className='me-2 d-inline'>{session.user.name}</span>
                                                    {/* <img style={{ borderRadius: "50%", width: "4%" }} className='me-5 d-inline' src={`${session.user.image}`} alt="" /> */}
                                                    <a onClick={() => signOut()} className="text-decoration-none text-secondary-emphasis" aria-current="page" href="#"><i className="bi bi-person-circle me-1"></i>
                                                        Đăng xuất</a>
                                                </>
                                            ) : (
                                                <a onClick={(e) => {
                                                    e.preventDefault()
                                                    signIn('facebook')
                                                    { callbackUrl: "https://cancook.vercel.app/" }
                                                }} className="text-decoration-none text-secondary-emphasis" aria-current="page" href="#"><i className="bi bi-person-circle me-1"></i>
                                                    Đăng nhập</a>
                                            )}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 my-auto">
                            <a className="navbar-brand float-lg-end float-sm-end ms-5" href="/">
                                {session ? (
                                    <>
                                        <img style={{ borderRadius: "50%", width: "100%" }} className='me-5 d-inline' src={`${session.user.image}`} alt="" />
                                    </>
                                ) : (
                                    <img style={{ borderRadius: "50%", width: "4%" }} className='me-5 d-inline' alt="" />
                                )}
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
