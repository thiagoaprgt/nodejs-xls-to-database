const xls = require('./read_xls');

// console.log(xls.length);

(async () => {    
    
    const database = require('./db');
    const contato = require('./contato');
    await database.sync();    

    for (let index = 0; index < xls.length; index++) {

        contato.create(xls[index])
        
    }
    

})();


