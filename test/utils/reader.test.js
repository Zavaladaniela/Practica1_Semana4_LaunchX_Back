const Reader = require('./../../lib/utils/reader')

describe ("Prueba de jest", () =>{
    test ("Test 1: Prueba para la lectura del archivo ", () =>{
        const explorers = Reader.readJsonFile ('./explorers.json')
        console.log (explorers)
        expect(explorers.length).toBe (15)
    });
})