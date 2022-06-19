export default function PetImg({ listPet }) {
    return (
        <main>
            {
                listPet.map(pet => {
                    return (
                        <div className="img-container">
                            <img src={pet} />
                        </div>
                    )
                })
            }
        </main>

    )

}