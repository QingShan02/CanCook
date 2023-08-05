'use client'

import "./index.css"
import { Article } from "../../../../common/model/Article";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { FacebookShareButton, FacebookIcon } from 'react-share';
import { useSession } from 'next-auth/react';

const Article = ({ params }) => {
    const [data, setData] = useState<Article>();
    useEffect(() => {
        const init = async () => {
            const data = await axios.get(`/api/article/${params.id}`);
            setData(data.data);
        }
        init();
    }, []);


    const { data: session } = useSession();

    const url = `https://www.youtube.com/watch?v=9WzIACv_mxs`;

    return (
        <>
            <div className="container">
                <div className="col-md-8 col-lg-12">
                    <h1 className="fw-bold mt-5">{data?.title}</h1>
                    <div><section className="row" dangerouslySetInnerHTML={{ __html: data }} /></div>
                    <p className="post-source">
                        <span className="fw-lighter">Người đăng Bàng Thanh Sơn </span> <br></br>
                        <span className="fw-lighter">Cập nhật vào ngày 29/07/2023</span>
                    </p>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-danger px-5 py-2">Lưu</button>
                        <button type="button" className="btn btn-light px-5 py-2">Đánh giá</button>
                        <button type="button" className="btn btn-light px-5 py-2">In</button>

                        <div>
                            {session && (
                                <FacebookShareButton url={url} quote={data?.title}>
                                    <button type="button" className="btn btn-light px-5 py-2">Chia sẻ</button>
                                </FacebookShareButton>
                            )}
                        </div>
                    </div >

                    <section className="mt-5">
                        <p>Ingredients
                            4 hamburger buns

                            2 tablespoons butter, softened, or as needed

                            1 pound ground chuck beef (80% lean)

                            4 6-inch squares parchment paper

                            salt to taste

                            4 slices American cheese

                            burger toppings of choice

                            Local Offers
                            00000 Change
                            Oops! We cannot find any ingredients on sale near you. Do we have the correct zip code?
                            ADVERTISEMENT
                            Directions
                            Preheat an outdoor grill for high heat and lightly oil the grate. Set a cast iron flat-top griddle or large cast iron skillet onto the grill and preheat until smoking.

                            Spread butter on the inside of the buns and toast on the flat-top until lightly browned. Set aside.

                            Form meat into 8 loosely-packed balls, 2 ounces each. Do not pack the meat tightly, as this will prevent it from smashing properly. Place each ball on the hot flat-top, cover with a piece of parchment (to prevent sticking to the spatula; re-use each parchment square on a second patty) and immediately smash down to a 1/4 inch thickness using 2 stiff, sturdy spatulas that are criss-crossed to get proper leverage as you press down. You may also use the bottom of small skillet. Sprinkle the meat with salt.

                            Grill for about 45 seconds, until the edges are dark brown and the centers are a light pink color. Using a bench scraper or firm spatula, gently scrape up the patties, flip over and immediately cover 4 of them with cheese. Grill an additional 15 to 20 seconds; stack the plain patties over the cheese-covered patties so you have 4 stacks. Move each stack to a bun and serve with your favorite toppings.

                            Tips
                            If you only have one spatula, wrap your other hand in an old dish towel for protection, and use it to press down on the spatula with both hands.

                            You can make 4 (4 ounce) patties instead of 8 (2 ounce patties), but I prefer the thinner patties that have more crispy surface area.

                            I buy American cheese freshly-sliced from the deli, but individually-wrapped slices will work too.</p>
                    </section>

                    <div className="row justify-content-evenly">
                        <button className="btn btn-danger rounded-0 col-5 py-2" type="button">Bắt đầu làm</button>
                        <button className="btn btn-outline-danger rounded-0 col-5 py-2" type="button">In</button>
                    </div>

                    <hr className="my-5" />

                    <h3>Bình luận (4)</h3>
                    <button type="button" className="btn btn-outline-success px-5 py-2">Đánh giá</button>
                </div>
                <hr className="my-5" />
            </div >

        </>
    );
}

export default Article;