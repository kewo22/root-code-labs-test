export interface Vehicle {
    id: string;
    name: string;
    details: Details;
}

interface Details {
    currency: string;
    price: number;
    color: string;
    brand: string;
    manufactureYear: string;
    image: string;
    description: string;
}