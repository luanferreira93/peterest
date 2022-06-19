export default function PetCard({listPet}){
    return(
        listPet.map(pet=>{
            return <img src={pet}/>
        })
    )

}