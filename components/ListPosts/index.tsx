const ListPosts = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex justify-content-between align-items-center activity">
                        <div><i className="fa fa-clock-o" /><span className="ml-2">11h 25m</span></div>
                        <div><span className="activity-done">Done Activities(4)</span></div>
                        <div className="icons"><i className="fa fa-search" /><i className="fa fa-ellipsis-h" /></div>
                    </div>
                    <div className="mt-3">
                        <ul className="list list-inline">
                            <li className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center"><i className="fa fa-check-circle checkicon" />
                                    <div className="ml-2">
                                        <h6 className="mb-0">Kickoff meeting</h6>
                                        <div className="d-flex flex-row mt-1 text-black-50 date-time">
                                            <div><i className="fa fa-calendar-o" /><span className="ml-2">22 May 2020 11:30 PM</span></div>
                                            <div className="ml-3"><i className="fa fa-clock-o" /><span className="ml-2">6h</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <div className="d-flex flex-column mr-2">
                                        <div className="profile-image"><img className="rounded-circle" src="https://i.imgur.com/xbxOs06.jpg" width={30} /><img className="rounded-circle" src="https://i.imgur.com/KIJewDa.jpg" width={30} /><img className="rounded-circle" src="https://i.imgur.com/wwd9uNI.jpg" width={30} /></div><span className="date-time">11/4/2020 12:55</span></div>
                                    <i className="fa fa-ellipsis-h" />
                                </div>
                            </li>
                            <li className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center"><i className="fa fa-check-circle checkicon" />
                                    <div className="ml-2">
                                        <h6 className="mb-0">User Interview</h6>
                                        <div className="d-flex flex-row mt-1 text-black-50 date-time">
                                            <div><i className="fa fa-calendar-o" /><span className="ml-2">25 May 2020 12:34 AM</span></div>
                                            <div className="ml-3"><i className="fa fa-clock-o" /><span className="ml-2">4h</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <div className="d-flex flex-column mr-2">
                                        <div className="profile-image"><img className="rounded-circle" src="https://i.imgur.com/xbxOs06.jpg" width={30} /><img className="rounded-circle" src="https://i.imgur.com/wwd9uNI.jpg" width={30} /></div><span className="date-time">12/5/2020 12:55</span></div><i className="fa fa-ellipsis-h" /></div>
                            </li>
                            <li className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center"><i className="fa fa-check-circle checkicon" />
                                    <div className="ml-2">
                                        <h6 className="mb-0">Prototyping</h6>
                                        <div className="d-flex flex-row mt-1 text-black-50 date-time">
                                            <div><i className="fa fa-calendar-o" /><span className="ml-2">17 May 2020 1:34 PM</span></div>
                                            <div className="ml-3"><i className="fa fa-clock-o" /><span className="ml-2">6h</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <div className="d-flex flex-column mr-2">
                                        <div className="profile-image"><img className="rounded-circle" src="https://i.imgur.com/xbxOs06.jpg" width={30} /><img className="rounded-circle" src="https://i.imgur.com/KIJewDa.jpg" width={30} /></div><span className="date-time">16/4/2020 1:55</span></div><i className="fa fa-ellipsis-h" /></div>
                            </li>
                            <li className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center"><i className="fa fa-check-circle checkicon" />
                                    <div className="ml-2">
                                        <h6 className="mb-0">Call with client</h6>
                                        <div className="d-flex flex-row mt-1 text-black-50 date-time">
                                            <div><i className="fa fa-calendar-o" /><span className="ml-2">12 May 2020 12:35 AM</span></div>
                                            <div className="ml-3"><i className="fa fa-clock-o" /><span className="ml-2">6h</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                    <div className="d-flex flex-column mr-2">
                                        <div className="profile-image"><img className="rounded-circle" src="https://i.imgur.com/wwd9uNI.jpg" width={30} /></div><span className="date-time">11/4/2020 12:55</span></div><i className="fa fa-ellipsis-h" /></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default ListPosts;