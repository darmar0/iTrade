import React,{useState} from "react"
import SupInvoicePreview from "./SupInvoicePreview.js"

const ProductRow =({setValues,addProducttoInvoice,takeProduct,newProduct,status,realQuantState,productsOnInvoice,resiveValues,deleteFromToInvoice})=>{
    const onStock = newProduct.productName === ""? 0 : realQuantState.length > 0? realQuantState[0].productQuantity: null;
    const [id, setValueIId] = useState()
    const [val, setValueVal] = useState()

     const setValue=(e)=>{
        setValueVal(e.target.value)
        setValueIId(e.target.id)
        resiveValues(id,val)
    }

    return(
        <tbody>
        <tr className="d-flex">
         <td className="col ordinal resFont">#</td>
         <td className="col-3 serial">
         <span className="input-group">
            <input id="productSerial" type="text" className="form-control resFont" placeholder="serial number" onChange={setValues} 
            value={newProduct.productSerial}></input>
         <span className="input-group-append"> 
            <button onClick={takeProduct} className="btn btn-secondary input-group-append resFont" >Check stock</button></span></span></td>
        <td className="col-3"><input id="productName" type="text" className="form-control resFont" value=""
        placeholder={newProduct.productName===""? status: newProduct.productName} 
        onChange={setValues}/></td>
        <td className="col-2">
        <span className="input-group">
        <input id="productQuantity" type="text" className="form-control resFont" placeholder="0.0" onChange={setValues} 
        value={newProduct.productQuantity}></input>
         <span className="input-group-append"> 
    <span onClick={takeProduct} className="input-group-text resFont" >Avalible : {onStock}</span></span></span></td>
        <td className="col-2"><input id="productPrice" type="text"  className="form-control resFont" placeholder={newProduct.productName===""? null: newProduct.productPrice}
        onChange={setValues}/></td>
        <td className="col-2 action"><button className="btn btn-secondary ml-4 resFont" onClick={addProducttoInvoice} 
        disabled={newProduct.productQuantity === 0 || newProduct.productQuantity === ""}>Add</button></td>
    </tr>
    <SupInvoicePreview newProduct={newProduct} productsOnInvoice={productsOnInvoice} setValue={setValue} deleteFromToInvoice={deleteFromToInvoice}/>
    </tbody>
    )
}

export default ProductRow

