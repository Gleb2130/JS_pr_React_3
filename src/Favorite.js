import React from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {updateFL,updateLS} from './filmdata';
import { filmD } from "./filmdata";
const Favorite = ({ id, fav, setFilmData}) => {
    const handleFavorite = () => {
        setFilmData(prevData => prevData.map(item => {
            if (item.id === id) {
                return { ...item, favorite: !item.favorite };
            }
            return item;
        }));
        
        const index_a = filmD.findIndex(item => item.id === id); 
        console.log("film:",filmD[index_a])
        filmD[filmD.findIndex(item => item.id === id)].favorite = !filmD[filmD.findIndex(item => item.id === id)].favorite;
        updateLS(id);
    }

    return (
        <div>
            <button onClick={handleFavorite}>
                {fav ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </button>
        </div>
    );
};

export default Favorite;
