import React from 'react';
import '../Style/Components/Nutrition.scss'
import PropTypes from 'prop-types';


// Component Nutrition avec les props et aussi le propTypes pour definier les types de chaque element .

function Nutrition(props) {
    return (
        <div className='div-energy'>
            <div className='icon-energy'>
                <img src={props.image} alt='icon'/>
            </div>
            <div className='infos-energy'>
                <p className='p-bold' style={{color:'black'}}>{props.data}</p>
                <div className='text-p'>
                <p  className='text'>{props.text}</p>
                </div>
            </div> 
        </div>
    ); 
}

export default Nutrition;

Nutrition.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired
}