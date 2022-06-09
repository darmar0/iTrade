import BarChart from "./d3/BarChart.js"
import BarChart2 from "./d3/BarChart2.js"


const Dashboard = ({invoiceData, supplierData}) => {

    const curMonth = (new Date().getMonth() + 1) <= 9 ? "0" + (new Date().getMonth() + 1) : (new Date().getMonth() + 1)
    const month = new Date().toLocaleString('default', {month: 'long'})
    const currYear = new Date().getFullYear()
    const day = new Date().getDate() <= 9 ? "0" + new Date().getDate() : new Date().getDate()
    const curDate = day + "." + curMonth + "." + currYear

    /*SALES*/
    const salesCalc = invoiceData.filter(data => data.invoiceDate === curDate)
    const todaySales = Number(salesCalc.map(tr => tr.calculation.total).reduce((a, b) => a + b, 0)).toFixed(2)
    const saleCalcM = invoiceData.filter(data => data.invoiceDate.split("")[3] + data.invoiceDate.split("")[4] === curMonth)
    const monthSale = saleCalcM.length !== 0 ? Number(saleCalcM.map(tr => tr.calculation.total).reduce((a, b) => a + b, 0)).toFixed(2) : 0.00
    const saleCalcY = invoiceData.filter(data => parseInt(data.invoiceDate.split("").slice(6).join("")) === currYear)
    const yearSale = saleCalcY !== 0 ? Number(saleCalcY.map(tr => tr.calculation.total).reduce((a, b) => a + b, 0)).toFixed(2) : 0.00


    /*MONTH SALES*/
    const dataSales = invoiceData.map(data => [data.invoiceDate].concat(data.calculation.total))
    const dataObjMonth = dataSales.map(d => ({
        date: d[0].split("")[3] + d[0].split("")[4] === String(curMonth) ? d[0].split("")[0] + d[0].split("")[1] + "/" + curMonth : null,
        sales: d[0].split("")[3] + d[0].split("")[4] === String(curMonth) ? d[1] : 0
    })).filter(d => d.date !== null)
    const dataObjY = dataSales.map(d => ({
        date: parseInt(d[0].split("").slice(6).join("")) === currYear ? d[0].split("")[0] + d[0].split("")[1] + "/" + d[0].split("")[3] + d[0].split("")[4] : null,
        sales: parseInt(d[0].split("").slice(6).join("")) === currYear ? d[1] : 0
    }))

    /*YEAR SUPPLAY*/
    const dataSupplyDate = supplierData.map(d => [d.storageDate].concat(d.products.map(p => parseInt(p.productPrice * p.productQuantity)).reduce((a, b) => a + b, 0)))
    const dataObjYearSup = dataSupplyDate.map(d => ({
        date: parseInt(d[0].split("").slice(6).join("")) === currYear ? d[0] : null,
        sales: parseInt(d[0].split("").slice(6).join("")) === currYear ? d[1] : null
    }))

    const outputMsales = [];
    dataObjMonth.forEach(function (item) {
        let existing = outputMsales.filter(function (v, i) {

            return v.date === item.date;
        });
        if (existing.length) {
            let existingIndex = outputMsales.indexOf(existing[0]);
            outputMsales[existingIndex].sales = outputMsales[existingIndex].sales + item.sales;

        } else {
            if (typeof item.sales == 'string')
                item.sales = [item.sales];
            outputMsales.push(item);
        }
    });

    outputMsales.sort(function (a, b) {
        let dateA = a.date.split("")[0] + a.date.split("")[1], dateB = b.date.split("")[0] + b.date.split("")[1];
        return dateA - dateB;
    })


    const outputTrade = dataObjY.map(x => ({date: x.date, sales: x.sales, cost: 0}))
        .concat(dataObjYearSup.map(x => ({
            // date: x.date.split("")[0] + x.date.split("")[1] + "/" + x.date.split("")[3] + x.date.split("")[4],
            sales: 0,
            cost: x.sales
        })))

    const outputTradeFinal = [];

    outputTrade.forEach(function (item) {
        let existing = outputTradeFinal.filter(function (v, i) {

            return v.date === item.date;
        });
        if (existing.length) {
            var existingIndex = outputTradeFinal.indexOf(existing[0]);
            outputTradeFinal[existingIndex].sales = outputTradeFinal[existingIndex].sales + item.sales;
            outputTradeFinal[existingIndex].cost = outputTradeFinal[existingIndex].cost + item.cost;

        } else {
            if (typeof item.sales == 'string')
                item.sales = [item.sales];

            outputTradeFinal.push(item);
        }
    });
    outputTradeFinal.sort(function (a, b) {
        if (a.date) {
            let dateA = a.date?.split("")[3] + a.date.split("")[4] + a.date.split("")[0] + a.date.split("")[1],
                dateB = b.date?.split("")[3] + b.date.split("")[4] + b.date.split("")[0] + b.date.split("")[1]
            return dateA - dateB;
        }


    });
    return (

        <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-4">
                    <div className="card text-white bg-primary">
                        <div className="card-header text-center">
                            <h5>TODAY'S SALES</h5>
                        </div>
                        <div className="card-body text-center">
                            <h2>€ {todaySales}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card text-white bg-primary">
                        <div className="card-header text-center">
                            <h5>{month.toUpperCase()} SALES</h5>
                        </div>
                        <div className="card-body text-center">
                            <h2>€ {monthSale}</h2>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="card text-white bg-primary">
                        <div className="card-header text-center">
                            <h5>THIS YEAR SALES</h5>
                        </div>
                        <div className="card-body text-center">
                            <h2>€ {yearSale}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="row mt-5 mb-5">
                <div className="col-12">
                    <BarChart outputMsales={outputMsales} month={month}/>
                </div>
            </div>
            <hr></hr>
            <div className="row mt-5 mb-5">
                <div className="col-12">
                    <BarChart2 outputTradeFinal={outputTradeFinal} month={month}/>
                </div>
            </div>
            <div className="row mt-5 mb-5">
                <div className="col-12 mt-5 mb-5">
                    <hr></hr>
                </div>
            </div>

        </div>
    )
}



export default Dashboard