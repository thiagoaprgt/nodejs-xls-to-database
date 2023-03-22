(async () => {

    const database = require('./db');
    const contato = require('./contato');
    await database.sync();

    // const novoContato = contato.create({
    //     id: 1,
    //     nome: 'Carlos',
    //     cep: 456,
    //     telefone: 789456,
    //     email: 'carlos@email'

    // });

    console.log(novoContato);

})();