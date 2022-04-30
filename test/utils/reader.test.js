const Reader = require('./../../lib/utils/reader')
//const ExplorerService = require('./../../lib/services/explorerService')

describe ("Prueba de jest", () =>{
    test ("Test 1: Prueba para la lectura del archivo ", () =>{
        const explorers = Reader.readJsonFile ('./explorers.json')
        console.log (explorers)
        expect(explorers.length).toBe (15)
    });

    /* test ("Test 2: Prueba para el filtrado por mision", () =>{
        console.log (ExplorerService.filterByMission (explorers, "node"));
        const explorerMission = ExplorerService.filterByMission(explorers,"node")
        //const ExplorerService = new explorerService ("node")
        console.log (explorerMission)
        expect(explorerMission.lenght).toBe (4)
    }) */
}) 