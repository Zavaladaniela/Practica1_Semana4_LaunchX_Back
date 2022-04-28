const reader = require ("./../refactoring/lib/utils/reader")

const explorers = reader.readJsonFile("explorers.json")

console.log (explorers)