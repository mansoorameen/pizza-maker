import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PizzaMan from '../assets/PizzaMan.png'

function Checkout({ ingredients }) {

    const [ success, setSuccess ] = useState(false);

    return (
        <div style={{ display: 'flex'}}>
            <div style={{ flex: 1}}>
            <h2 style={{ marginTop: '2rem', textAlign: 'center'}}><i>My Pizza Ingredients</i></h2>
            <div style={{ marginTop: '2rem', marginLeft: '13rem'}}>
                <ul style={{ listStyle: 'none'}}> 
        {Object.keys(ingredients).map(ingredient => { 
          return ( 
              ingredients[ingredient] && 
              <li><h3>{ingredient[0].toUpperCase() + ingredient.substr(1)}</h3></li>
        )})}
        </ul>
        </div>
        <div style={{ marginLeft: '10rem'}}>
        <button 
        onClick={() => setSuccess(true)} 
        className='btn btnconfirm'>
            Place Order
            </button>
        <Link to='/'>
        <button className='btn'>
                Go Back
                </button>
        </Link>
        </div>
        
            </div>

            <div style={{ flex: 1 }}>
                {success && ( 
                    <div>
                        <img src={PizzaMan} alt="Pizza Man"></img>
                        <div>Thanks for making the order!</div>
                        <div>Your order No. #{Math.floor(Math.random() * 50000)}</div>
                    </div>
                ) 
                }
            </div>
        </div>
    )
}

export default Checkout
