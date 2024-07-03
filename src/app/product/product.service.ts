import { Product } from "./product.model";

// dodaj u providers u koreni modul!
export class ProductService {
    private products : Product [] =  [
            {
                "id": "0",
                "name": "Majica",
                "type": "Odeća",
                "price": 1200,
                "imageUrl": "majica.jpg"
            },
            {
                "id": "1",
                "name": "Farmerke",
                "type": "Odeća",
                "price": 3500,
                "imageUrl": "path/to/suknja.jpg"
            },
            {
                "id": "2",
                "name": "Haljina",
                "type": "Odeća",
                "price": 2800,
                "imageUrl": "path/to/suknja.jpg"
            },
            {
                "id": "3",
                "name": "Patike",
                "type": "Obuća",
                "price": 4500,
                "imageUrl": "path/to/suknja.jpg"
            },
            {
                "id": "4",
                "name": "Jakna",
                "type": "Odeća",
                "price": 5200,
                "imageUrl": "path/to/suknja.jpg"
            },
            {
                "id": "5",
                "name": "Sandale",
                "type": "Obuća",
                "price": 2000,
                "imageUrl": "path/to/suknja.jpg"
            },
            {
                "id": "6",
                "name": "Šešir",
                "type": "Dodaci",
                "price": 900,
                "imageUrl": "path/to/suknja.jpg"
            },
            {
                "id": "7",
                "name": "Šal",
                "type": "Dodaci",
                "price": 1100,
                "imageUrl": "path/to/suknja.jpg"
            },
            {
                "id": "8",
                "name": "Čizme",
                "type": "Obuća",
                "price": 6300,
                "imageUrl": "path/to/suknja.jpg"
            },
            {
                "id": "9",
                "name": "Šorc",
                "type": "Odeća",
                "price": 1800,
                "imageUrl": "path/to/suknja.jpg"
            }
        
        
    ]
        

    getProducts(){
        return this.products;
    }
}

