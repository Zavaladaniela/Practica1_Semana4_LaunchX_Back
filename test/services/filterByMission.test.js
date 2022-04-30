//const Reader = require ('./../../test/utils/reader.test.js')
//const { filterByMission } = require('./../../lib/services/explorerService')
const Reader = require('./../../lib/utils/reader')

const ExplorerService = require ('./../../lib/services/explorerService')

describe ('Prueba para el filtrado', () =>{
    test ("Test 2: Prueba para el filtrado por mision", () =>{
        //console.log (ExplorerService.filterByMission (explorers, "node"));
        const explorers = Reader.readJsonFile ('./explorers.json')
        const explorerMission = ExplorerService.filterByMission (explorers, "node")
        //const explorerfilter = explorerMission.mission
        //const ExplorerService = new explorerService ("node")
        //console.log (explorerMission)
        console.log (explorerMission)
        expect(explorerMission.length).toBe(10)
    })
})