import React from "react"
import InvoiceRow from "./InvoiceRow.js"

const InvoicePreview=({invoiceData,deletePrToInvoice,setValuesInfo})=>{
   const invoiceRow = invoiceData.map((data,index)=>{
        return(
            <InvoiceRow invoiceData={data}  key={data.id} index={index+1} deletePrToInvoice={deletePrToInvoice}/>
        )
    })
    const date = new Date().getDate() +"."+ (new Date().getMonth()+1)+"."+ new Date().getFullYear()
    return(
  
           <>
                    <>{invoiceRow}</>
                    {invoiceData.length !== 0 ?
                    <tr className="d-flex table-secondary">
                    
                    <td className="col-3">
                    <span className="input-group">
               <span  className="input-group-text resFont" >Type :</span>
               <select id="taxes" onChange={setValuesInfo}className="form-control resFont">
                   <option >invoice</option>
                   <option >Proforma</option>
                </select>
         <span className="input-group-prepend"> 
    </span></span>
                    </td>
                    <td className="col-3">
                    <span className="input-group">
               <span  className="input-group-text resFont" >Due date</span>
               <input id="dueDate" type="text" className="form-control resFont" placeholder={date} onChange={setValuesInfo}></input>
         <span className="input-group-prepend"> 
    </span></span>
                    </td>
                    <td className="col-3">
                    <span className="input-group">
               <span  className="input-group-text resFont" >Tax rate %</span>
               <select id="taxes" onChange={setValuesInfo}className="form-control resFont">
                   <option >0</option>
                   <option >20</option>
                   <option >18</option>
                   <option >25</option>
                </select>
         <span className="input-group-prepend"> 
    </span></span>
                    </td>
                    <td className="col-3">
                    <span className="input-group">
               <span  className="input-group-text resFont" >Discount %</span>
               <input id="discount" type="text" className="form-control resFont" placeholder="0.0" onChange={setValuesInfo}></input>
         <span className="input-group-prepend"> 
    </span></span>
                    </td>
                    
                  
                    </tr> : null }
                </>
                    
              
    
   
               
            
       
    )
}


export default InvoicePreview