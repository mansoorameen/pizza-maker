import React from 'react';
import { motion } from 'framer-motion';
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

                <motion.div
                initial={{ scale: 0 }}
                animate={{ 
                    // y: ingredients["cheese"] ? 100 : -100,
                    // opacity: ingredients["cheese"] ? 1 : 0,
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
{/* 
                <motion.div
                transition={{ duration: 1 }}
                className=""
                > */}
                <img src={Base} alt='Pizza Base' height='100%' width='100%' />
                {/* </motion.div> */}

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
            {JSON.stringify(ingredients)}
        </div>
    )
}

export default Customize
