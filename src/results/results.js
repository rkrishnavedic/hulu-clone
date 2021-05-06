import axios from '../requests/axios'
import React, { useEffect, useState } from 'react';
import VideoCard from '../videocard/videocard';
import './results.css';
import {AnimatePresence} from 'framer-motion';


const Results = ({selectedOption})=>{

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            const request = await axios.get(selectedOption);
            setMovies(request.data.results);
            //console.log(request)
            return request;
        }

        fetchData();
    },[selectedOption])

    return(
        <AnimatePresence>
        <div className="results">
            
            {movies?.map((movie)=>{
                return(
                    <VideoCard key={movie.id} movie={movie}/>
                )
            })}
           
        </div>
        </AnimatePresence>
    )
}

export default Results;