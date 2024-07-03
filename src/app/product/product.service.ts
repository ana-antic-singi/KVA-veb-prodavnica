import { Product } from "./product.model";

// dodaj u providers u koreni modul!
export class ProductService {
    private products : Product [] =  [
            {
                "id": "0",
                "name": "Majica",
                "type": "Odeća",
                "price": 1200,
                "imageUrl": "https://as2.ftcdn.net/v2/jpg/04/79/81/65/1000_F_479816596_ng414nYfCwSAEVHU99a0pSVsKUzo0xuv.jpg"
            },
            {
                "id": "1",
                "name": "Farmerke",
                "type": "Odeća",
                "price": 3500,
                "imageUrl": "https://as2.ftcdn.net/v2/jpg/05/24/45/77/1000_F_524457786_R64kuagbIEcRwf0zF6o8HktsTdyCUxsQ.jpg"
            },
            {
                "id": "2",
                "name": "Haljina",
                "type": "Odeća",
                "price": 2800,
                "imageUrl": "https://as2.ftcdn.net/v2/jpg/05/91/10/05/1000_F_591100502_TBMXTEGpzBzkL20WiPdOgDY6kpbuQdpG.jpg"
            },
            {
                "id": "3",
                "name": "Patike",
                "type": "Obuća",
                "price": 4500,
                "imageUrl": "https://as1.ftcdn.net/v2/jpg/07/22/56/12/1000_F_722561273_ZyKmM8Ys8iARZ49mHlOIt6rbLdyM9TAW.jpg"
            },
            {
                "id": "4",
                "name": "Jakna",
                "type": "Odeća",
                "price": 5200,
                "imageUrl": "https://as1.ftcdn.net/v2/jpg/08/33/25/18/1000_F_833251865_BrMfsFLAYxMxNxMHdtyloJiF6BQwEuY7.jpg"
            },
            {
                "id": "5",
                "name": "Papuče za plažu",
                "type": "Obuća",
                "price": 2000,
                "imageUrl": "https://as2.ftcdn.net/v2/jpg/03/35/26/39/1000_F_335263972_zlXO8cSJCxQdSyFsnoHr717s8yDdqYPg.jpg"
            },
            {
                "id": "6",
                "name": "Kačket",
                "type": "Dodaci",
                "price": 900,
                "imageUrl": "https://as2.ftcdn.net/v2/jpg/05/11/70/41/1000_F_511704102_ouaUUnk0rozgqizvaiAbutYtXfLpveoa.jpg"
            },
            {
                "id": "7",
                "name": "Torba",
                "type": "Dodaci",
                "price": 4000,
                "imageUrl": "https://as2.ftcdn.net/v2/jpg/03/55/00/51/1000_F_355005102_ey4TepJAGlDPh87p1XBmRkX3Ay8E9Nue.jpg"
            },
            {
                "id": "8",
                "name": "Štikle",
                "type": "Obuća",
                "price": 3300,
                "imageUrl": "https://as2.ftcdn.net/v2/jpg/07/02/36/15/1000_F_702361509_W7A66MGj6nS1EJ2ZjRRdRAAH2AZr5i00.jpg"
            },
            {
                "id": "9",
                "name": "Šorc",
                "type": "Odeća",
                "price": 1800,
                "imageUrl": "https://as1.ftcdn.net/v2/jpg/08/61/45/28/1000_F_861452895_o3OWvNCg4MwZvlcvEF4tGiW9HLD8uQPB.jpg"
            },
            {
                "id": "10",
                "name": "Suknja",
                "type": "Odeća",
                "price": 2000,
                "imageUrl": "https://as1.ftcdn.net/v2/jpg/05/20/89/16/1000_F_520891639_lnSvJ2VwooLX3dAZJ2y9QkS6sHBJbmrs.jpg"
            },
        
    ]
        

    getProducts(){
        return this.products;
    }
}

