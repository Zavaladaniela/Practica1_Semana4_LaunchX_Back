class explorerService{
    static filterByMission (explorers,mission){
        const explorerByMission = explorers.filter((explorer) => explorer.mission === mission)
        return explorerByMission
    }
    /* static getAmountOfExplorersByMission (explorers,mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
    }

    static getExplorersUsernamesByMission (explorers,mission){

    } */
}

module.exports = explorerService