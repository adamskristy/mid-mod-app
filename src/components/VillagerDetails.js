import { useParams } from "react-router-dom";


function VillagerDetails ({ villagers }) {
    const { id } = useParams()
    //console.log(id)
    
    const findAnimalById = villagers.find((v) => {
        if(id == v.id){
            return true
        } else {
            return false
        }
    })

    //console.log(findAnimalById)

    const villager = findAnimalById
    
    return ( 
        villager && (
        <div className="villager">
            <h2>Name: {villager.name['name-USen']}</h2>
            <h3>Birthday: {villager["birthday-string"]}</h3> 
            <h3>Species: {villager.species}</h3>
            <h3>Personality: {villager.personality}</h3>
            <h3>Saying: {villager.saying} </h3>
            
        </div>
        )
     );
}

export default VillagerDetails;