import axios from "axios"

const BASEURL = "http://localhost:8080/ingredient"

const Ingredient = ( props ) => {

  const deleteIngredient = () => {
    axios.delete(`${BASEURL}/${_id}`)
  }

  const { name, _id } = props.data

  return (
    <div className='ingredient'>
      <h1> {name} </h1>
      <button onClick={deleteIngredient}>
        Delete Ingredient
      </button>
    </div>
  )
}
export default Ingredient
