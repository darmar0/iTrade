import React from "react"
import InvoicePreview from "./InvoicePreview.js"

const CProductRow =({takeProduct,setValues,data,addPrToInvoice,status,invoiceData,realQuantState,deletePrToInvoice,setValuesInfo})=>{
   
    const onStock = data.productName === ""? 0 : realQuantState[0].productQuantity
    console.log(status)
    return(
        <tbody>
     <tr className="d-flex">
     <td className="col ordinal">#</td>
      <td className="col-3">
         <span className="input-group">
            <input id="productSerial" type="text" className="form-control resFont" placeholder="serial number" onChange={setValues} 
            value={data.productSerial}></input>
         <span className="input-group-append"> 
            <button onClick={takeProduct} className="btn btn-secondary input-group-append resFont" >Find</button></span></span></td>
       <td className="col-3"><input id="productName" type="text" className="form-control resFont" 
        placeholder={data.productName===""? status: data.productName} disabled/> </td>
        <td className="col-2">
        <span className="input-group">
        <input id="productQuantity" type="text" className="form-control resFont" placeholder="0.0" onChange={setValues} 
        value={data.productQuantity}></input>
         <span className="input-group-append"> 
    <span onClick={takeProduct} className="input-group-text resFont" >On stock: {onStock}</span></span></span></td>
        <td className="col-2"><input id="productPrice" type="text" className="form-control resFont" placeholder={data.productPrice} disabled
        /></td>
        <td className="col-2 action action"><button className="btn btn-secondary ml-4 resFont" onClick={addPrToInvoice} disabled={data.productQuantity === 0}>Add</button></td>
    </tr>
     <InvoicePreview invoiceData={invoiceData} deletePrToInvoice={deletePrToInvoice} setValuesInfo={setValuesInfo}/>
     </tbody>

    
    )
}

export default CProductRow