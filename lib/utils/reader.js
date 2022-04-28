const fs = require ("fs");

class reader{
    static readJsonFile('./explorers.json'){
        // Part 1 Read json file ===========================
        const rawdata = fs.readFileSync("explorers.json");
        const explorers = JSON.parse(rawdata);
    }
}

module.exports= reader