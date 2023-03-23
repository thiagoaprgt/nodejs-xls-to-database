const xlsx = require('xlsx');
const filePath = "./teste.xls";

module.exports = function readXLS(filePath) {

    let workbook = xlsx.readFile(filePath);

    let worksheets = workbook.SheetNames;  

    let sheet = worksheets[0];

    let data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);
    
    return data;

}







