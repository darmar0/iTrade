## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Usage](#Usage)
* [Inspiration](#Inspiration)

## General info
Invoicing, stock and client base suite with data visualisation for small business (no backend). 
The app is fetching JSON file, which already has some "dummy" data for easier presentation.

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


#### Supplier invoice
In this section, we are importing, buying products from our supplier.

* Supplier info : 
For demo purpose, you can search - Stark Industries - (dummy base data)
Or add a new supplier with all information needed. 

* Product info:  
For demo purpose, you can search - ORNG25655 - in the serial number field (dummy base data)
Or fill all fields with (product serial, product name, quantity, price) in case of brand new product.
By clickink "add" buttton you are putting product on list,which can have multiple items.
At the bottom, the app needs know number of supplier invoice for archiving purpose.

By clicking save, a new product is already stored in the stock section of the iTrade app.

### Invoice
In this section, we are selling products from stock.

* Customer info : 
For demo purpose, you can search - Alex & co - (dummy base data)
Or add a new customer with all information needed. 

* Product info:  
For demo purpose, you can search - WHIT25633 - in the serial number field (product that is alredy in stcok)
By clickink "add" buttton you are putting product on invoice,which can have multiple items.
At the bottom, the app needs to know  tax rate and the discount amount for the final calculation.

by clicking save, a newly created invoice is stored in the Client base section under the appropriate customer card.

 


	

















