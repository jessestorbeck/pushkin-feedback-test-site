const fs = require("fs");
const jsYaml = require("js-yaml");
const path = require("path");
const stim = require("../web page/src/stim").default;
const config = require("../web page/src/config").default;

// Count the expected number of trials
// Non-experimental trials (consent, instructions, etc.)
const nonExpTrials = 4;
// Experimental trials (and any other trials that are looped with experimental trials)
// This number will always be at least stim.length * 2 because of fixation trials
const expTrials = stim.length * (2 + config.correctiveFeedback + (config.responseType !== "2afc"));
// Total expected trials
const trialCount = nonExpTrials + expTrials;

// Export experiment information
const expConfig = jsYaml.load(fs.readFileSync(path.resolve(__dirname, "../config.yaml")));
const expInfo = {
  longName: expConfig.experimentName,
  shortName: expConfig.shortName,
  archived: expConfig.archived,
  paused: expConfig.dataPaused,
  simulationMode: true, // Do all jsPsych plugins used have simulation mode?
  dataRows: trialCount,
};

module.exports = { expInfo };
