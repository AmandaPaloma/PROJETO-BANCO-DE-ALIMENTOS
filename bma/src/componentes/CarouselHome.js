import cestasverdes from "../img/cestasverdes.jpeg"
import agriculturafamiliarhome from "../img/agriculturafamiliarhome.png"
import entregacestabasica from "../img/entregacestabasica.jpg"
import styles from "./CarouselHome.module.css"

function CarouselHome() {
    return (
        <div id="CarouselHome">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" style={{height: "400px"}}>
                        <img class="d-block w-100" src={cestasverdes} alt="First slide" style={{height: "400px"}} />
                    </div>
                    <div class="carousel-item" style={{height: "400px"}}>
                        <img class="d-block w-100" src={agriculturafamiliarhome} style={{height: "400px"}} alt="Second slide" />
                    </div>
                    <div class="carousel-item" style={{height: "400px"}}>
                        <img class="d-block w-100" src={entregacestabasica} style={{height: "400px"}} alt="Third slide" />
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default CarouselHome;