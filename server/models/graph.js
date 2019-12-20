const Joi = require("joi");
const mongoose = require("mongoose");

const graphSchema = new mongoose.Schema({
	userId: {
		type: String,
		required: true
    },
    graphs: {
        type: Array,
        required: true
    }
});

const Graph = mongoose.model("Graph", graphSchema);

exports.Graph = Graph;