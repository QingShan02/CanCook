const CarouselItem = (props) =>{
    return (
        <div className="img-card">
            <img src={props.image} className="w-100 " alt="" />
            <div className="over"></div>
            <h3 className="img-title">{props.title}</h3>
        </div>
    );
}
export default CarouselItem;