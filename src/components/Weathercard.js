import React from 'react'

const Weathercard = ({tempInfo}) => {
    
    const [weatherState, setWeatherState] = React.useState("");
    const{
        temp,
        weathermood,
        name,
        country,
      } = tempInfo;

     
      
     
  return (
    <>
     {/*our temp card*/}
     <article className='widget'>
      <div className='weatherIcon'>
      <i className={`wi ${weatherState}`}></i>
        </div>

      <div className='weatherInfo'>
        <div className='temperature'>
          <span>{Math.round(temp)}&deg;</span>
        </div>

        <div className='description'>
          <div className='weatherCondition'>{weathermood}</div>
          <div className='place'>{name}, {country}</div>
        </div>
      </div>
      <div className='date'> {new Date().toDateString()} </div>

       
       
    </article>
      
    </>
  )

    
}

export default Weathercard
