'use client'
import { signIn, signOut, useSession } from 'next-auth/react';
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
    const { data: session } = useSession();
    console.log(session);

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container text-center d-block">
                    <div className="row ">
                        <div className="col-lg-3 my-auto">
                            <button className="navbar-toggler my-2 float-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <a className="navbar-brand float-end ms-5" href="/">
                                <img src="../../../images/logo.png" alt="Bootstrap" width={100} />
                            </a>
                        </div>
                        <div className="col-lg-8 mt-4">
                            <div className="collapse navbar-collapse row" id="navbarNavAltMarkup">
                                <div className=" justify-content-center col-12 ">
                                    <ul className="navbar-nav mt-3">
                                        <li className="nav-item">
                                            <a className="nav-link active text-inline" aria-current="page" href="/">Trang chủ</a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Loại
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="/category/L01">Dinh Dưỡng</a></li>
                                                <li><a className="dropdown-item" href="/category/L02">Thông Tin</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                        <li className="m-auto">
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
                            <a className="navbar-brand float-end ms-5" href="/">
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