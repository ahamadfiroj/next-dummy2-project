"use client"

import { useState } from "react"


 const PriceComponent = ({itemData})=>{
    const [show, setShow] = useState(false)
    return <div>
        {show && <span>{itemData.price}</span>}
        <button onClick={()=>setShow(!show)}>{show ? "hide price" : "show price"}</button>
    </div>
}
export default PriceComponent;