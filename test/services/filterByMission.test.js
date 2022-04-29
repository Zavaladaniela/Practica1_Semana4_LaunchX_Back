const explorerService = require('./../../lib/services/explorerService')
//const { filterByMission } = require('./../../lib/services/explorerService')
//const explorerService = require ('./../../lib/services/explorerService')

describe ('Prueba jest', () =>{
    test ("Test 2: Prueba para el filtrado por mision", () =>{
        const ExplorerService = new explorerService ("node")
        expect(ExplorerService.filterByMission).toBe ("node")
    })
})