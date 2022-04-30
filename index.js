const reader = require ("./../refactoring/lib/utils/reader")
const explorerService = require ('./../refactoring/lib/services/explorerService')

const explorers = reader.readJsonFile("explorers.json")
console.log (explorers)

console.log ("Desarrollar Test2: Filtrar por mision node")
console.log ("Estos son los: " ,explorers)
//console.log (explorerService.filterByMission (explorers, "node"));

// Aplicación del ExplorerService sobre la lista de explorers
// ExplorerService.filterByMission(explorers, "node");
// ExplorerService.getAmountOfExplorersByMission(explorers, "node");
// ExplorerService.getExplorersUsernamesByMission(explorers, "node");