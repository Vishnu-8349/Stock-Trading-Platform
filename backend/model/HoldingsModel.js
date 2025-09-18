const { model } = require("mongoose");

const {HoldingsSchema} = require("../schemas/HoldingsScehma");

const HoldingsModel = new model("holding", HoldingsSchema);

module.exports = { HoldingsModel };