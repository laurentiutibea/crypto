const cors = require("cors");

module.exports = function(app) {
  app.use(cors({
	  origin: "*",
	  methods: ["GET","PUT","POST","DELETE","PATCH","OPTIONS"],
	  exposedHeaders: ["X-Total-Count", "Content-Range"]
	  }));
};