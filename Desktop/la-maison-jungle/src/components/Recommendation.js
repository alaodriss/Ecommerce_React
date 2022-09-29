function Reacommendation(){
    const currentMonth = new Date().getMonth()

    console.log(currentMonth)

    // entre l'intervale de mois >le mois 2 et <le mois 5
    const isSpring = currentMonth >=2 && currentMonth <= 5

    console.log(isSpring)
    
    if(!isSpring){

        return <div>Ce n'est pas le moment de rempotez  </div>
    }

    return <div>C'est le printemps, rempotez !   </div>


}

export default Reacommendation