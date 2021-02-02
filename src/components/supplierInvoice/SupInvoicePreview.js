import React from "react"
import SupInvRow from "./SupInvRow.js"

const SupInvoicePreview=({productsOnInvoice,setValue,deleteFromToInvoice})=>{

    const invRow = productsOnInvoice.map((data,index)=>{
        return(
            <SupInvRow data={data} index={index+1} key={data.id} deleteFromToInvoice={deleteFromToInvoice}/>
        )
    })
   

    const day = new Date().getDate() <= 9? "0" + new Date().getDate():  new Date().getDate()
    const month= (new Date().getMonth()+1) <= 9? "0" +(new Date().getMonth()+1): (new Date().getMonth()+1)
    const year = new Date().getFullYear()
    const date = day+"."+month+"."+year
   
    return(
        <>
        <>{invRow}</>
        {productsOnInvoice.length !== 0 ?
        <tr className="d-flex table-secondary">
        <td className="col-4">
        <span className="input-group">
   <span  className="input-group-text resFont" >Invoice number :</span>
   <input id="supInvoiceNum" type="text" className="form-control resFont" onChange={setValue}></input>
<span className="input-group-prepend resFont"> 
</span></span>
        </td>
        <td className="col-4">
        <span className="input-group">
   <span  className="input-group-text resFont" >Due date:</span>
   <input id="dueDate" type="text" className="form-control resFont" placeholder={date}></input>
<span className="input-group-prepend"> 
</span></span>
        </td>
        <td className="col-4">
        <span className="input-group">
   <span  className="input-group-text resFont" >Date:</span>
   <input id="date" type="text" className="form-control resFont" placeholder={date} disabled value={date}></input>
<span className="input-group-prepend"> 
</span></span>
        </td>
       
        </tr> : null }
    </>
    )
}



export default SupInvoicePreview