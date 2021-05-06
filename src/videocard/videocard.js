import { ThumbUpSharp } from '@material-ui/icons';
import React from 'react';
import './videocard.css';
import {motion} from 'framer-motion';

const base_url = "https://image.tmdb.org/t/p/original";

const VideoCard = ({movie})=>{

    //console.log(movie)

    return(
        <motion.div initial={{opacity:0}} animate={{opacity:1}} whileHover={{scale:1.09}} exit={{opacity:0}} className="videocard">
            <img src={`${base_url}${movie.backdrop_path || movie.poster_path}`} alt=''/>
            <p>{movie.overview?.length>=63? movie.overview.substring(0,60)+'...':movie.overview}</p>
            <h2>{movie.title}</h2>
            <p className="videocard-stats">
                <div>
                {movie.media_type && `${movie.media_type}`} &ensp;
                {movie.release_date || movie.first_air_date}
                </div>
                <div>
                <ThumbUpSharp/>
                {movie.vote_count}
                </div>
            </p>
        </motion.div>
    )
}

export default VideoCard;