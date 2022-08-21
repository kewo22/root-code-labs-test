import { FC, ReactElement } from "react";
import './style.scss'

const Bid: FC = (): ReactElement => {

    const x = {
        "id": "1",
        "name": "T-Cross",
        "details": {
            "currency": "LKR",
            "price": 20000000,
            "color": "#151D3B",
            "brand": "Volkswagen",
            "manufactureYear": "2018",
            "image": "https://cdn.imagin.studio/getImage?angle=01&billingTag=web&customer=carwow&make=volkswagen&modelFamily=t-cross&modelVariant=estate&modelYear=2019&paintDescription=solid---pure-white+FFFFFF&paintId=30598&tailoring=carwow&width=800&zoomLevel=0&zoomType=fullscreen",
            "description": "Roomy small SUV with lots of kit"
        }
    };

    return (
        <div className="wrapper">
            <h1>Biddings</h1>
            <div className="bid-wrapper">
                <div className="vehicle-details">
                    <img src={x.details.image} alt="vehicle" />
                    <p>{x.name}</p>&nbsp;
                    <p>{x.details.brand}</p>&nbsp;
                    <p>{x.details.manufactureYear}</p>
                </div>
                <div className="bid-amount">
                    2,000,000 LKR
                </div>
            </div>
            <div>
                TOTAL
            </div>
        </div>
    );

};

export default Bid;