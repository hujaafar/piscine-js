import { places } from "./where-do-we-go.data.js";

var scroll = window.scrollY;
const location = document.createElement("a");
location.classList.add("location");
document.body.appendChild(location);
document.addEventListener("DOMContentLoaded", () => {
    selectPlace();
});

document.addEventListener("scroll", () => {
    selectPlace();
    scroll > window.scrollY
        ? (document.querySelector(".direction").innerHTML = "N")
        : (document.querySelector(".direction").innerHTML = "S");
    scroll = window.scrollY;
});

const explore = () => {
    places.sort(compareCoordinates);
    console.log(places);
    places.forEach(place => {
        createSection(place);
    });
    const compass = document.createElement("div");
    compass.classList.add("direction");
    document.body.appendChild(compass);
};


const createSection = (place) => {
    let section = document.createElement("section");
    section.style.background = `url('./where-do-we-go_images/${
        place.name.toLowerCase().replaceAll(/ /g, "-").split(",")[0]
    }.jpg')`;
    section.style.backgroundSize = "cover";
    section.style.backgroundPosition = "center";
    section.style.backgroundRepeat = "no-repeat";
    section.style.width = "100%";
    section.style.height = "100vh";
    document.body.appendChild(section);
};


const selectPlace = () => {
    const sectionHeight = window.innerHeight;
    const scroll = window.scrollY + sectionHeight / 2;
    const sectionIndex = Math.floor(scroll / sectionHeight);
    const place = places[sectionIndex];

    location.textContent = `${place.name}\n${place.coordinates}`;
    location.href = `https://www.google.com/maps/place/${urlEncodeCoordinates(
        place.coordinates
    )}/`;
    
    console.log(
        location.href
            .split("%C2%B0").join("°")
            .split("%22").join('"')
            .split("%20").join(" ")
    );
    
    location.target = "_blank";
    location.style.color = place.color;
};


const urlEncodeCoordinates = (coordinates) =>
    coordinates
        .replaceAll(" ", "%20")
        .replaceAll("°", "%C2%B0")
        .replaceAll('"', "%22");


const compareCoordinates = (a, b) => {
    const parseCoordinates = (coord) => {
        const direction = coord.split(" ")[0].split('"')[1];
        const lat = coord.split(" ")[0];
        let deg = parseInt(lat.split("°")[0]);
        let min = parseInt(lat.split("°")[1].split("'")[0]);
        let sec = parseInt(lat.split("°")[1].split("'")[1].split('"')[0]);

        if (direction === "S") {
            deg = -deg;
            min = -min;
            sec = -sec;
        }
        return { deg, min, sec };
    };

    const aParsed = parseCoordinates(a.coordinates);
    const bParsed = parseCoordinates(b.coordinates);

    return aParsed.deg !== bParsed.deg
        ? bParsed.deg - aParsed.deg
        : aParsed.min !== bParsed.min
        ? bParsed.min - aParsed.min
        : aParsed.sec !== bParsed.sec
        ? bParsed.sec - aParsed.sec
        : 0;
};


export { explore };