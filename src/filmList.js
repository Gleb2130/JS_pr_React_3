import React from "react";
import Favorite from "./Favorite";
import { delElementById } from "./filmdata";
const filmList = (obj, setFilmData,sortFavFilms) => {
    if (sortFavFilms && !(obj.favorite)){
        return;
    }
    const deleteElement = (ide) => {
        setFilmData(prevData => prevData.filter(item => item.id !== ide),ide);
        delElementById(ide);
    }

    return (
        <div key={obj.id}>
            <h2>{obj.name}</h2>
            <img src={obj.poster} alt="" className="poster-img" />
            <h3> Age: {obj.age}</h3>
            <p>{obj.description}</p>
            <Favorite id={obj.id} fav={obj.favorite} setFilmData={setFilmData} />
            <button onClick={() => deleteElement(obj.id)}>Del</button>
        </div>
    );
};

export default filmList;