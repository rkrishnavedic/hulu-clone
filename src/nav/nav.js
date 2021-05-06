import React from 'react';
import './nav.css';
import requests from '../requests/requests';

const navData=[
    {
        title: 'Trending',
        optionName: requests.fetchTrending,
    },
    {
        title: 'Top Rated',
        optionName: requests.fetchTopRated,
    },
    {
        title: 'Action',
        optionName: requests.fetchActionMovies,
    },
    {
        title: 'Comedy',
        optionName: requests.fetchComedyMovies,
    },
    {
        title: 'Horror',
        optionName: requests.fetchHorrorMovies,
    },
    {
        title: 'Romance',
        optionName: requests.fetchRomanceMovies,
    },
    {
        title: 'Mystery',
        optionName: requests.fetchMystery,
    },
    {
        title: 'Sci-Fi',
        optionName: requests.fetchSciFi,
    },
    {
        title: 'Western',
        optionName: requests.fetchWestern,
    },
    {
        title: 'Animation',
        optionName: requests.fetchAnimation,
    },
    {
        title: 'TV Movie',
        optionName: requests.fetchTV,
    },
    
]

const Nav=({setSelectedOption})=>{
    return(
        <div className="nav">
            {navData.map((value, index)=>{
                return(
                    <h2 onClick={()=> setSelectedOption(value.optionName)} key={index}>{value.title}</h2>
                )
            })}
        </div>
    )
}

export default Nav;