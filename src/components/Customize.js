import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import Cheese from '../assets/Cheese.png';
import Basil from '../assets/Basil.png';
import Mushroom from '../assets/Mushroom.png';
import Olive from '../assets/Olive.png';
import Pineapple from '../assets/Pineapple.png';
import Base from '../assets/Base.png';
import Tomato from '../assets/Tomato.png';


function Customize({ ingredients, setIngredients }) {

    // const changeIngredients = (event) => {
    //     let newIngredients = JSON.parse(JSON.stringify(ingredients));
    //     newIngredients[event] = !newIngredients[event];
    //     setIngredients(newIngredients);
    // }

    const onChange = (event, name) => {
        let newIngredients = JSON.parse(JSON.stringify(ingredients));
        newIngredients[name] = event;
        setIngredients(newIngredients);
        localStorage.setItem("ingredients", JSON.stringify(newIngredients));
    }


    return (
        <div style={{ display: 'flex'}}>
            <div style={{ flex: 1, padding: '2rem' , display: 'grid', placeItems: 'center' }}>
                <div style={{ maxHeight: 500, maxWidth: 500, position: 'relative'}}>

                <motion.div
                initial={{ scale: 0 }}
                animate={{ 
                    scale: ingredients["cheese"] ? 1 : 0
                    }}
                transition={{ duration: 0.4 }}
                className="cheese z1"
                >
                <img src={Cheese} alt='Cheese' height='100%' width='100%' />
                </motion.div>

                <motion.div
                initial={{ opacity: 0}}
                animate={{ 
                    y: ingredients["pineapple"] ? 100 : -100,
                    opacity: ingredients["pineapple"] ? 1 : 0,
                    }}
                transition={{ duration: 1 }}
                className="ingredients z3"
                >
               <img src={Pineapple} alt='Pineapple' height='100%' width='100%' />
                </motion.div>

                <motion.div
                initial={{ opacity: 0}}
                animate={{ 
                    y: ingredients["basil"] ? 100 : -100,
                    opacity: ingredients["basil"] ? 1 : 0,
                    }}
                transition={{ duration: 1 }}
                className="ingredients z4"
                >
                <img src={Basil} alt='Basil' height='100%' width='100%' />
                </motion.div>

                <motion.div
                initial={{ opacity: 0}}
                animate={{ 
                    y: ingredients["mushroom"] ? 100 : -100,
                    opacity: ingredients["mushroom"] ? 1 : 0,
                    }}
                transition={{ duration: 1 }}
                className="ingredients z4"
                >
                <img src={Mushroom} alt='Mushroom' height='100%' width='100%' />
                </motion.div>

                <motion.div
                initial={{ opacity: 0}}
                animate={{ 
                    y: ingredients["olive"] ? 100 : -100,
                    opacity: ingredients["olive"] ? 1 : 0,
                    }}
                transition={{ duration: 1 }}
                className="ingredients z4"
                >
                <img src={Olive} alt='Olive' height='100%' width='100%' />
                </motion.div>

                <motion.div
                initial={{ opacity: 0}}
                animate={{ 
                    y: ingredients["tomato"] ? 100 : -100,
                    opacity: ingredients["tomato"] ? 1 : 0,
                    }}
                transition={{ duration: 1 }}
                className="ingredients z4"
                >
                <img src={Tomato} alt='Tomato' height='100%' width='100%' />
                </motion.div>

                <img src={Base} alt='Pizza Base' height='100%' width='100%' />

                </div>
            </div>

            <div style={{ flex: 1}}>
               <div style={{ padding: '7rem 3rem'}}>
            <label class="container-checkbox">Cheese
                <input checked={ingredients["cheese"]} type="checkbox" id="cheese" onChange={(e) => onChange(e.target.checked, e.target.id)} />
                <span class="checkmark"></span>
            </label>

            <label class="container-checkbox">Basil
                <input checked={ingredients["basil"]} type="checkbox" id="basil" onChange={(e) => onChange(e.target.checked, e.target.id)} />
                <span class="checkmark"></span>
            </label>

            <label class="container-checkbox">Mushroom
                <input checked={ingredients["mushroom"]} type="checkbox" id="mushroom" onChange={(e) => onChange(e.target.checked, e.target.id)} />
                <span class="checkmark"></span>
            </label>

            <label class="container-checkbox">Olive
                <input checked={ingredients["olive"]} type="checkbox" id="olive" onChange={(e) => onChange(e.target.checked, e.target.id)} />
                <span class="checkmark"></span>
            </label>

            <label class="container-checkbox">Pineapple
                <input checked={ingredients["pineapple"]} type="checkbox" id="pineapple" onChange={(e) => onChange(e.target.checked, e.target.id)} />
                <span class="checkmark"></span>
            </label>

            <label class="container-checkbox">Tomato
                <input type="checkbox" checked={ingredients["tomato"]} 
                id="tomato" onChange={(e) => onChange(e.target.checked, e.target.id)} />
                <span class="checkmark"></span>
            </label>
            
         
            <Link to="/checkout">
            
            <button 
            style={{ backgroundColor: 'yellow', padding: '0.5rem', borderRadius: '50px', margin: '1rem 1rem 1rem 2rem'  }}>
                <h3>Checkout</h3>
                </button>
        
            </Link>
            
            </div>

            </div>
        </div>
    )
}

export default Customize
