import beetles from '../assets/beetles.jpg';
import nature from '../assets/ournature.jpg';
import backyard from '../assets/backyard.jpg';
import oops from '../assets/oops.jpg';
import safari from '../assets/safari.jpg';
import mapBrown from '../assets/mapBrown.svg?react';
import mapGreen from '../assets/mapGreen.svg?react';
import mapOrange from '../assets/mapOrange.svg?react';
import safariPlay from '../assets/safari-play.svg?react';
import backyardPlay from '../assets/backyard-play.svg?react';

const exhibitions = [
    {
        "id": 1,
        "name": "BEETLES",
        "description": "This exhibition presents a fascinating collection centered on beetles, highlighting their incredible diversity, intricate forms, and ecological significance. Through scientific illustrations, macro photography, and mixed media works, it showcases both artistic and biological perspectives on these remarkable insects.",
        "image": beetles,
        "floor": "3rd Floor",
        "time": "Aprox. 1 hour",
        "type": "Temporary",
        "icon": mapBrown,
        "buttonText": "See on map",
        "link": "#",
    },
    {
        "id": 2,
        "name": "Our Nature",
        "description": "This exhibition offers an in-depth look at the rich and diverse landscapes of Danish nature, from coastal habitats and ancient forests to heathlands and wetlands. Through specimens, interactive displays, and scientific insights, visitors can explore the ecosystems, flora, and fauna that define Denmark’s natural heritage.",
        "image": nature,
        "floor": "Ground Floor",
        "time": "Aprox. 1 hour",
        "type": "Permanent",
        "icon": mapGreen,
        "buttonText": "See on map",
        "link": "#",
    },
    {
        "id": 3,
        "name": "Oops!",
        "description": "This exhibition explores chance and coincidence in the universe—from cosmic randomness like the Big Bang to unexpected patterns in nature and science. Through immersive displays and interactive installations, visitors reflect on how accidental events have shaped the cosmos, life, and our understanding of existence.",
        "image": oops,
        "floor": "1st Floor",
        "time": "Aprox. 40 mins",
        "type": "Temporary",
        "icon": mapOrange,
        "buttonText": "See on map",
        "link": "#",
    },
    {
        "id": 4,
        "name": "Expedition to Africa",
        "description": "This exhibition follows a 1947 Danish expedition to Africa, showcasing encounters with wildlife, landscapes, and cultures. Through photos, notes, and artifacts, it highlights the journey’s impact on science and our view of a changing world.",
        "image": safari,
        "floor": "Ground Floor",
        "time": "Aprox. 30 mins",
        "type": "Permanent",
        "icon": safariPlay,
        "buttonText": "Start journey",
        "link": "safariPages/slider",
    },
    {
        "id": 5,
        "name": "The Global Backyard",
        "description": "The Global Backyard showcases the rich diversity of animal life worldwide—starting just outside our door. Featuring taxidermy specimens from every continent, the exhibition connects global ecosystems with often-overlooked local wildlife, offering a closer look at nature’s wonders and stories.",
        "image": backyard,
        "floor": "2nd Floor",
        "time": "Aprox. 1 hour",
        "type": "Permanent",
        "icon": backyardPlay,
        "buttonText": "Start journey",
        "link": "safariPages/slider",
    }
]

export default exhibitions;