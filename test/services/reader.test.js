const Reader = require('./../../lib/utils/reader')

describe ("Prueba de jest", () =>{
    test ("Test 1: Prueba para la lectura del archivo ", () =>{
        const reader = new Reader('explorers.json')
        expect(reader.readJsonFile).toBe ('explorers.json')
    });
})