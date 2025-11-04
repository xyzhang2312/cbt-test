// Helper functions for saving trial data [using LeanCloud]
const { Query, User } = AV;
AV.init({
          appId: "7yk2g0IxApJ23zLC6w8hW2ml-gzGzoHsz",
          appKey: "O3GGJQvRi1vLugRNUMCN0JR0",
          serverURL: "https://7yk2g0ix.lc-cn-n1-shared.com",
        });

// 
import { randCond } from "./versionInfo.js";
const Database = AV.Object.extend("causal_choice");
const database = new Database();

// function to save startData
var saveSubInfo = function(type, dataToSave){
        database.add("subInfo", {[type]:dataToSave});
        database.set("phoneNum", phoneNum);
        database.set("participantOS", navigator.userAgent);
        database.save();
}
var saveStartData = function() {
        database.set("date", new Date().toISOString().split('T')[0]);
        database.set("startTime", new Date().toLocaleTimeString());
        database.set("condition", randCond);
        database.set("expCompleted", 0);
        database.save();
};

//----------------------------------- TASK 0 -------------------------------------------
// function to save the task0 data
var saveTaskData = function(trialN, dataToSave){
        database.add("taskData", {[trialN]: dataToSave});
        database.save();
}

// function to save questionnaire data
var saveQuestData = function (questionnaire, dataToSave, completionRT) {
        database.add("quesData", {[questionnaire]: dataToSave});
        database.add("quesData",{[questionnaire+'_RT']: completionRT});
}

// function to save end data 
var saveEndData = function(){
        database.add("endTime", new Date().toLocaleTimeString());
        database.add("expCompleted", 1);
        database.save();
}

export { saveSubInfo, saveStartData, saveTaskData,saveQuestData, saveEndData }

// {
//     "reward1": [7,7,4,5,7,7,4,5],
    
//     "effort1": [0.95,0.95,0.2,0.75,0.95,0.95,0.2,0.75],
    
//     "reward2": [3,4,6,4,3,4,6,4],
     
//     "effort2": [0.35,0.75,0.55,0.2,0.35,0.75,0.55,0.2]
// }