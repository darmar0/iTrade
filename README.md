## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Usage](#Usage)


## General info
Invoicing, stock, and client base suite with data visualization for small business (no backend). The app is fetching JSON file, which already has some "dummy" data for easier presentation.

Here is a link to live demo presentation: 

https://itrade-invoice-app.netlify.app/

## Technologies
Project is created with:
* React version : 17.0.1
* React-modal version: 3.12.1
* React-router-dom version : 5.2.0
* Bootstrap version : 5.0
* Recharts: 2.0.3

## Usage

* #### Supplier invoice
In this section, we are importing, buying products from our supplier.
<br/>
<br/>
<br/>
![supplier-invoice](https://user-images.githubusercontent.com/69918077/106674857-4d47c580-65b4-11eb-9849-ae5d71f6f423.jpg)
<br/>
1. Supplier info : for demo purpose, you can search - Stark Industries - (dummy base data), or add a new supplier with all information needed. 
2. Product info: for demo purpose, you can search - ORNG25655 - in the serial number field (dummy base data), or fill all fields with (product serial, product name, quantity, price) in case of brand new product.
3. By clickink "add" buttton you are putting product on list,which can have multiple items.
4. At the bottom, the app needs know number of supplier invoice for archiving purpose.
5. By clicking save, a new product is already stored in the stock section of the iTrade app.

------------------------------------------------------------------------------------------------------------------------------------------------------------
* ### Invoice
In this section, we are selling products from stock.
<br/>
<br/>
<br/>
![invoice](https://user-images.githubusercontent.com/69918077/106674831-428d3080-65b4-11eb-9e0b-702edc5082e7.jpg)
<br/>
1. Customer info : for demo purpose, you can search - Alex & co - (dummy base data), or add a new customer with all information needed. <br/>
2. Product info: for demo purpose, you can search - WHIT25633 - in the serial number field (product that is alredy in stcok)
3. By clickink "add" buttton you are putting product on invoice,which can have multiple items.
4. The app needs to know  tax rate and the discount amount for the final calculation.
5. By clicking save, a newly created invoice is stored in the Client base section under the appropriate customer card.


 


	

















