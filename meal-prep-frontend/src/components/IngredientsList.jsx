
import { useState, useEffect } from 'react'; 

import axios from 'axios'


import Ingredient from './Ingredient'



const BASEURL = "http://localhost:8080/ingredient"

const IngredientsList = () => {

  const [ ingredientsList, setIngredientsList ] = useState([])

  useEffect( () => {
    axios.get(BASEURL).then((res) => {
      setIngredientsList(res.data)
    })
  }, [ingredientsList])

  return (
    <div className="ingredient-list-container">
    {
      ingredientsList.map( ingredient => 
        <Ingredient data={ingredient} />
      )
    }
    </div>
  )
}

export default IngredientsList
