import React from 'react';
import Cheese from '../assets/Cheese.png';
import Basil from '../assets/Basil.png';
import Mushroom from '../assets/Mushroom.png';
import Olive from '../assets/Olive.png';
import Pineapple from '../assets/Pineapple.png';
import Base from '../assets/Base.png';
import Tomato from '../assets/Tomato.png';


function Customize({ ingredients, setIngredients }) {

    const changeIngredients = (event) => {
        let newIngredients = JSON.parse(JSON.stringify(ingredients));
        newIngredients[event] = !newIngredients[event];
        setIngredients(newIngredients);
    }

    return (
        <div style={{ display: 'flex'}}>

            <div style={{ border: '2px solid black', flex: 1}}>
                <div style={{ maxHeight: 500, maxWidth: 500, position: 'relative'}}>
                <img src={Cheese} alt='Cheese' height='100%' width='100%' className="ingredients" />
                <img src={Pineapple} alt='Pineapple' height='100%' width='100%' className="ingredients" />
                <img src={Basil} alt='Basil' height='100%' width='100%' className="ingredients" />
                <img src={Mushroom} alt='Mushroom' height='100%' width='100%' className="ingredients" />
                <img src={Olive} alt='Olive' height='100%' width='100%' className="ingredients" />
                <img src={Tomato} alt='Tomato' height='100%' width='100%' className="ingredients" />
                <img src={Base} alt='Pizza Base' height='100%' width='100%' />
                </div>
            </div>

            <div style={{ border: '2px solid black', flex: 1}}>
               
            <label class="container-checkbox">Cheese
                <input type="checkbox" id="cheese" onChange={(e) => changeIngredients(e.target.id)} />
                <span class="checkmark"></span>
            </label>

            <label class="container-checkbox">Basil
                <input type="checkbox" id="basil" onChange={(e) => changeIngredients(e.target.id)} />
                <span class="checkmark"></span>
            </label>

            <label class="container-checkbox">Mushroom
                <input type="checkbox" id="mushroom" onChange={(e) => changeIngredients(e.target.id)} />
                <span class="checkmark"></span>
            </label>

            <label class="container-checkbox">Olive
                <input type="checkbox" id="olive" onChange={(e) => changeIngredients(e.target.id)} />
                <span class="checkmark"></span>
            </label>

            <label class="container-checkbox">Pineapple
                <input type="checkbox" id="pineapple" onChange={(e) => changeIngredients(e.target.id)} />
                <span class="checkmark"></span>
            </label>

            <label class="container-checkbox">Tomato
                <input type="checkbox" id="tomato" onChange={(e) => changeIngredients(e.target.id)} />
                <span class="checkmark"></span>
            </label>

            </div>
        </div>
    )
}

export default Customize
