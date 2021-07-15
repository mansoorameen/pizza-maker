import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PizzaMan from '../assets/PizzaMan.png'

function Checkout({ ingredients }) {

    const [ success, setSuccess ] = useState(false);

    return (
        <div style={{ display: 'flex'}}>
            <div style={{ flex: 1, border: '2px solid black'}}>
            <h1>My Order</h1>
            <div>
                <ul> 
        {Object.keys(ingredients).map(ingredient => { 
          return ( 
              ingredients[ingredient] && 
              <li>{ingredient[0].toUpperCase() + ingredient.substr(1)}</li>
        )})}
        </ul>
        </div>
        <button onClick={() => setSuccess(true)} 
        style={{ backgroundColor: 'yellow', padding: '0.5rem', borderRadius: '50px'  }}>
            <h3>Place Order</h3>
            </button>
        <Link to='/'>
        <button style={{ backgroundColor: 'yellow', padding: '0.5rem', borderRadius: '50px', margin: '1rem 1rem 1rem 2rem'  }}>
                <h3>Go Back</h3>
                </button>
        </Link>
        
            </div>

            <div style={{ flex: 1, border: '2px solid black'}}>
                {success && ( 
                    <div>
                        <img src={PizzaMan} alt="Pizza Man"></img>
                        <div>Thanks for making the order!</div>
                        <div>Your order No. #{Math.floor(Math.random() * 5000)}</div>
                    </div>
                ) }
            </div>
        </div>
    )
}

export default Checkout
