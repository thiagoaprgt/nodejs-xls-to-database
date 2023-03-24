const readXLS = require('./read_xls');
const file = './teste.xls';

const xls = readXLS(file);


(async () => {    
    
    const database = require('./db');
    const contato = require('./models/contato');
    await database.sync();    

    for (let index = 0; index < xls.length; index++) {

        contato.create(xls[index])
        
    }
    

})();


