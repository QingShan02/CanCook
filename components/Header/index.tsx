'use client'
import { signIn, signOut, useSession } from 'next-auth/react';
const Header = ({ session }) => {
    // const {data:session} = useSession()
    return (
        <>
            <div className="container mt-3">
                <div className="row">
                    <div className="col">
                        <a className="navbar-brand ms-5 me-5" href="#">
                            <img src="../../../images/logo.png" alt="Bootstrap" width={100} />
                        </a>
                    </div>
                    <div className="col-auto m-auto">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-dark" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="col-auto m-auto">
                        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                            <div className="container-fluid">
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <i className="bi bi-person-circle bg-danger"></i>
                                            {/* <a className="nav-link" aria-current="page" href="#">| Đăng nhập</a> */}
                                            <div>{session ? (
                                                <>
                                                    <p>Hello, {session.user.name}!</p>
                                                    <button onClick={() => signOut()}>Sign out</button>
                                                </>
                                            ) : (
                                                <button onClick={() => signIn('facebook')}>Sign in with Facebook</button>
                                            )}</div>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                | Tạp chí
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li><a className="dropdown-item" href="#">Sáng</a></li>
                                                <li><a className="dropdown-item" href="#">Trưa</a></li>
                                                <li><a className="dropdown-item" href="#">Chiều</a></li>
                                                <li><a className="dropdown-item" href="#">Tối</a></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">| Bản tin</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">| Giải thưởng</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Header;