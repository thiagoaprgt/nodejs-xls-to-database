const xlsx = require('xlsx');
const file = "./teste.xls";


const workbook = xlsx.readFile(file);
// const worksheet = workbook.Sheets["Sheet1"];
// const data = xlsx.utils.sheet_to_json(worksheet);

const worksheets = workbook.SheetNames;

// console.log(worksheets);
// console.log('---------------');

const sheet = worksheets[0];

const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheet]);

//console.log(data);


module.exports = data;




