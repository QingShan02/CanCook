"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
const Sidebar = () => {
    const path = usePathname();
    let nav = [
        {
            id: 1,
            url: "/home",
            text: "Trang chủ"
        },
        {
            id: 2,
            url: "/article",
            text: "Bài viết"
        },
        {
            id: 3,
            url: "/dashboard",
            text: "Thống kê"
        },
        {
            id: 4,
            url: "/user",
            text: "Người dùng"
        }
    ];

    const [isShow, setIsShow] = useState(false);
    const { data: session } = useSession();

    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "20%", height: "100%" }}>
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg className="bi me-2" width={40} height={32}><use xlinkHref="#bootstrap" /></svg>
                <span className="fs-4">Can Cook (Admin)</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                {
                    nav.map(s => (<li key={s.id} className="nav-item">
                        <Link href={`/admin${s.url == '/home' ? '' : s.url}`} className={`${path.replace("/admin", "").includes(s.url) ? 'nav-link text-white active' : 'nav-link text-white'}`}>{s.text}</Link></li>)
                    )
                }
            </ul>
            <hr />
            {
                !session?.user ? (
                    <button onClick={()=>signIn()} className="btn btn-primary">Login</button>
                ) : (
                    <div className="dropdown">
                        <button onClick={()=>setIsShow(!isShow)} className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width={32} height={32} className="rounded-circle me-2" />
                            <strong>mdo</strong>
                        </button>
                        <ul className={`dropdown-menu dropdown-menu-dark text-small shadow ${isShow?'d-block':''}`} aria-labelledby="dropdownUser1" >
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><button className="dropdown-item" onClick={()=>signOut()}>Sign out</button></li>
                        </ul>
                    </div>
                )
            }
        </div>

    );
}
export default Sidebar;