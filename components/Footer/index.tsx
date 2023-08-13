const Footer = ({view}:any) => {

    return (
        <div className="row" >
            <div id="fb-root" data-width="380"></div>
            <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v17.0" nonce="rMUTa9i3"></script>
            {/* Footer */}
            <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#765827' }}>
                {/* Grid container */}
                <div className="container p-4 pb-0">
                    {/* Section: Links */}
                    <section className="">
                        {/*Grid row*/}
                        <div className="row">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3" >
                                <h3 className="text-uppercase mb-4 font-weight-bold">
                                    CanCook
                                </h3>
                                <p className="text-white">
                                    Hãy gia nhập cùng chúng tôi và khám phá các bữa ăn dinh dưỡng dành cho bản thân mình nhé !
                                </p>
                                <p className="text-white">
                                    Lượt truy cập: {view}
                                </p>
                                <p className="text-white">
                                    Powered by Team Nhà Báo
                                </p>
                            </div>
                            {/* Grid column */}
                            <hr className="w-100 clearfix d-md-none" />
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h3 className="text-uppercase mb-4 font-weight-bold"> Phổ biến</h3>
                                <p className="text-white">
                                    <a href="/category/L01" className="text-decoration-none text-white">Dinh dưỡng</a>
                                </p>
                                <p className="text-white">
                                    <a href="/directory/CM03" className="text-decoration-none text-white">Sức khỏe</a>
                                </p>
                                <p className="text-white">
                                    <a href="/category/CM04" className="text-decoration-none text-white">Tiết kiệm</a>
                                </p>
                            </div>
                            {/* Grid column */}
                            <hr className="w-100 clearfix d-md-none" />
                            {/* Grid column */}
                            <hr className="w-100 clearfix d-md-none" />
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h3 className="text-uppercase mb-4 font-weight-bold">Liên hệ</h3>
                                <p className=" text-white"><i className="bi bi-geo-alt-fill"></i>  Quang Trung, Gò Vấp, HCM</p>
                                <p className=" text-white"><i className="bi bi-envelope-fill"></i>  cancook@gmail.com</p>
                                <p className=" text-white"><i className="bi bi-telephone-fill"></i> + 01 234 567 88</p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 mb-3">
                                <h3 className="text-uppercase mb-4 font-weight-bold">Fanpage</h3>
                                <div className="fb-page" data-href="https://www.facebook.com/cancooknhabao/" data-tabs="timeline" data-width={318} data-height={110} data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/cancooknhabao/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/cancooknhabao/">CanCook</a></blockquote></div>

                            </div>
                        </div>
                        {/*Grid row*/}
                    </section>
                    {/* Section: Links */}
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div className="text-center p-3 row" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    <p className="my-auto text-white">© 2023 Copyright: <a className="text-white text-decoration-none" href="https://zuhot.id.vn"> zuhot.id.vn</a></p>
                </div>
                {/* Copyright */}
            </footer>
            {/* Footer */}
        </div>

    );
}
export default Footer;