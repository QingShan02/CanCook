const Footer = () => {
    return (
        <div className="container my-5">
            <div id="fb-root"></div>
<script async defer crossOrigin="anonymous" src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v17.0&appId=1114480602426398&autoLogAppEvents=1" nonce="Ldlu2aSe"></script>
            {/* Footer */}
            <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#929fba' }}>
                {/* Grid container */}
                <div className="container p-4 pb-0">
                    {/* Section: Links */}
                    <section className="">
                        {/*Grid row*/}
                        <div className="row">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">
                                    CanCook
                                </h6>
                                <p>
                                    Hãy gia nhập cùng chúng tôi và khám phá ngay hôm nay
                                </p>
                            </div>
                            {/* Grid column */}
                            <hr className="w-100 clearfix d-md-none" />
                            {/* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Chuyên mục</h6>
                                <p>
                                    <a className="text-white text-decoration-none">Thức ăn</a>
                                </p>
                                <p>
                                    <a className="text-white text-decoration-none">Dinh dưỡng</a>
                                </p>
                                <p>
                                    <a className="text-white text-decoration-none">Giảm cân</a>
                                </p>
                                <p>
                                    <a className="text-white text-decoration-none">Món lười</a>
                                </p>
                            </div>
                            {/* Grid column */}
                            <hr className="w-100 clearfix d-md-none" />
                            {/* Grid column */}
                            <hr className="w-100 clearfix d-md-none" />
                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Liên hệ</h6>
                                <p><i className="fas fa-home mr-3" />Quang Trung, Gò Vấp, HCM</p>
                                <p><i className="fas fa-envelope mr-3" /> cancook@gmail.com</p>
                                <p><i className="fas fa-phone mr-3" /> + 01 234 567 88</p>
                                <p><i className="fas fa-print mr-3" /> + 01 234 567 89</p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                                <h6 className="text-uppercase mb-4 font-weight-bold">Theo dõi chúng tôi</h6>
                                <div className="fb-page" data-href="https://www.facebook.com/profile.php?id=100095091395635" data-tabs="events" data-width="" data-height="" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/profile.php?id=100095091395635" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/profile.php?id=100095091395635">CanCook</a></blockquote></div>
                            </div>
                        </div>
                        {/*Grid row*/}
                    </section>
                    {/* Section: Links */}
                </div>
                {/* Grid container */}
                {/* Copyright */}
                <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2023 Copyright: 
                    <a className="text-white text-decoration-none" href="https://mdbootstrap.com/"> zuhot.github.com</a>
                </div>
                {/* Copyright */}
            </footer>
            {/* Footer */}
        </div>

    );
}
export default Footer;