import React from 'react'
import Card from './Card/Card'
import icon1 from "../../assets/card1.png"
import icon2 from "../../assets/card2.png"
import icon3 from "../../assets/card3.png"

const Cardrow = () => {
  return (
    <div className='flex justify-center'>
        <Card img={icon1} title={"TOTAL PRODUCT IN INVENTORY"} count={100}/>
        <Card img={icon2} title={"TOTAL QUANTITY IN INVENTORY"} count={100}/>
        <Card img={icon3} title={"TOTAL CUSTOMERS"} count={100}/>
    </div>
  )
}

export default Cardrow