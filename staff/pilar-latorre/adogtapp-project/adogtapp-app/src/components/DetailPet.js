import { deletePet } from '../logic'
import './DetailPet.sass'

const API_URL = process.env.REACT_APP_API_URL

function DetailPet({result: {id, name, breed, species, color, description } , onPetResults}){

    const handleDeletePet = id => {
        //const { token } = sessionStorage

        try {
            deletePet(  id, (error) => {

                if (error) return alert(error.message)

            }) 
            onPetResults()
        } catch (error) {
            alert(error.message)
        }
    } 

    
    return <div className="result">
        <ul className="result__ul">
       
        <li key={id} className="result__li">
            <img className="result__img" src={`${API_URL}/pets/${id}/images`}/>
            <div>
            <p className="result__p">{name}</p>
            <p className="result__p">breed: {breed}</p>
            <p className="result__p">species: {species}</p>
            <p className="result__p">color: {color}</p>
            <p className="result__p">description: {description}</p>
            <button className="result__button" onClick={()=>handleDeletePet(id) }>DELETE PET</button>
            </div>
        </li>

        </ul>
        </div>

}

export default DetailPet