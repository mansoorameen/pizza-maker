import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PizzaMan from '../assets/PizzaMan.png'

function Checkout({ ingredients }) {

    const [ success, setSuccess ] = useState(false);

    return (
        <div style={{ display: 'flex'}}>
            <div style={{ flex: 1}}>
            <h2 style={{ marginTop: '2rem', textAlign: 'center'}}>My Pizza Ingredients</h2>
            <div style={{ marginTop: '2rem', marginLeft: '13rem'}}>
                <ul style={{ listStyle: 'none'}}> 
        {Object.keys(ingredients).map(ingredient => { 
          return ( 
              ingredients[ingredient] && 
              <li><h3>{ingredient[0].toUpperCase() + ingredient.substr(1)}</h3></li>
        )})}
        </ul>
        </div>
        <button onClick={() => setSuccess(true)} 
        style={{ backgroundColor: 'yellow', padding: '0.5rem', borderRadius: '50px', margin: '2rem 0 0 12rem'  }}>
            <h3>Place Order</h3>
            </button>
        <Link to='/'>
        <button style={{ backgroundColor: 'yellow', padding: '0.5rem', borderRadius: '50px', margin: '1rem 1rem 1rem 2rem'  }}>
                <h3>Go Back</h3>
                </button>
        </Link>
        
            </div>

            <div style={{ flex: 1 }}>
                {success && ( 
                    <div>
                        <img src={PizzaMan} alt="Pizza Man"></img>
                        <div>Thanks for making the order!</div>
                        <div>Your order No. #{Math.floor(Math.random() * 50000)}</div>
                    </div>
                ) }
            </div>
        </div>
    )
}

export default Checkout
