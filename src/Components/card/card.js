import React,{useEffect,useState} from 'react';
import Skeleton,{SkeletonTheme} from 'react-loading-skeleton';
import './card.css'
import {Link} from 'react-router-dom'

function card({movie}) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isLoading,setIsLoading]=useState(true)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
      
    }, [])

  return (
    <div>{
        isLoading
        ?
        <div className='cards'>
            <SkeletonTheme color='#202020' highlightColor='#444'>
                <Skeleton height={300} duration={2}/>
            </SkeletonTheme>
        </div>
        :
        <Link to={`movie/${movie.id}`} style={{textDecoration:'none',color:'white'}}>
            <div className='cards'>
                <img className='cards__img' src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:''}`} alt=''/>
                    <div className='cards__overlay'>
                        <div className='cards__title'>{movie ? movie.original_title:'' }</div>
                        <div className='cards__runtime'>
                            {movie ? movie.release_date:''}
                            <span className='cards__rating'>{movie?movie.vote_average:''}<i className='fas fa-star'/></span>
                        </div>
                        <div className='cards__description'>{movie?movie.overview.slice(0,118)+'...':''}</div>
                    </div>
            </div>
        </Link>
    }
    </div>
  )
}

export default card