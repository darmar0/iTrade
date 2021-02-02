import React from "react"

const SupInvRow =({index,data,deleteFromToInvoice})=>{

    return(
        <tr className="d-flex resFont">
        <td className="col ordinal">{index}.</td>
        <td className="col-3">{data.productSerial}</td>
        <td className="col-3">{data.productName}</td>
        <td className="col-2">{data.productQuantity}</td>
        <td className="col-2">{data.productPrice}</td>
        <td className="col-2 action">
            <button className="btn btn-secondary ml-4 resFont" onClick={()=>deleteFromToInvoice(data.id)} >Delete</button></td>
    </tr> 
    )
}

export default SupInvRow