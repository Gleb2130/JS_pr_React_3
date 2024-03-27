import React, { useState ,useEffect} from 'react';
import './toDo.css';
import filmList from './filmList';
import {filmD,importLS,exportLS} from './filmdata';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Form1 } from './forms/AddFilmForm';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ShowFilms = () => {
    importLS();
    exportLS();

    const [filmData, setFilmData] = useState(filmD);
    const [favoriteCount, setFavoriteCount] = useState(0);
    const [sortFavFilms,setsortFavFilms] = useState(false)
    const [addFForm,setAddFForm] = useState(false);

    const sortFav=()=>{
        sortFavFilms?setsortFavFilms(false):setsortFavFilms(true);
    }
    const setAddFFormF=()=>{
        addFForm?setAddFForm(false):setAddFForm(true)
    }

    useEffect(() => {
        const countFavorites = filmData.filter(item => item.favorite).length;
        setFavoriteCount(countFavorites);
    }, [filmData]);

    return (
        <>
        <head>
            <div className="header">
            <div className="header-title">Your App Name</div>
                <ul className="menu">
                    <li className="menu-item"><Link to="/" className="menu-link">Home</Link></li>
                    <li className="menu-item"><Link to="/con" className="menu-link">Contacts</Link></li>
                </ul>
            </div>
        </head>
            <div>
                {addFForm?<Form1 setFilmData={setFilmData} setAddFForm={setAddFForm}/>:null}
                <button onClick={setAddFFormF}>{addFForm?"Cancel":"Add"}</button>
                <button onClick={sortFav}><FavoriteBorderIcon/> {favoriteCount}</button>
            </div>
            {filmData.map((obj) => filmList(obj, setFilmData,sortFavFilms))}
        </>
    );
}

export default ShowFilms;