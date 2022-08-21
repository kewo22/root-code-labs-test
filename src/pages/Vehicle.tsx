import { FC, ReactElement, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Vehicle: FC = (): ReactElement => {
    // const [searchParams] = useSearchParams();
    const { vehicleId } = useParams();

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
        <div>
            <img src={x.details.image} alt="vehicle" />
        </div>
    );
};

export default Vehicle;