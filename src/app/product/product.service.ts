import { Product } from "./product.model";

// dodaj u providers u koreni modul!
export class ProductService {
    private products : Product [] =  [
        {
            id: "0",
            name: "Suknja",
            type: "Odeća",
            price: 1500,
            imageUrl: "path/to/suknja.jpg"
        },
        {
            id: "1",
            name: "Haljina",
            type: "Odeća",
            price: 2000,
            imageUrl: "path/to/suknja.jpg"
        },
        {
            id: "2",
            name: "Haljina",
            type: "Odeća",
            price: 2500,
            imageUrl: "path/to/suknja.jpg"
        },
        {
            id: "3",
            name: "Cipele",
            type: "Obuća",
            price: 3000,
            imageUrl: "path/to/suknja.jpg"
        }
    ]



    getProducts(){
        return this.products;
    }
}

