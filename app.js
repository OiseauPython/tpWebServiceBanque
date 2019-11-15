"use strict";

var app = require("express")();
var swaggerTools = require("swagger-tools");
var YAML = require("yamljs");
var auth = require("./api/helpers/auth");
var swaggerConfig = YAML.load("./api/swagger/swagger.yaml");

swaggerTools.initializeMiddleware(swaggerConfig, function(middleware) {
  //lance Swagger UI sur  /docs
  app.use(middleware.swaggerMetadata()); 
  
  app.use(
    middleware.swaggerSecurity({
      Bearer: auth.verifyToken
    })
  );
  
  var routerConfig = {
    controllers: "./api/controllers",
    useStubs: false
  };

  app.use(middleware.swaggerRouter(routerConfig));

  app.use(middleware.swaggerUi());
  
  app.listen(3000, function() {
    console.log("Started server on port 3000");
  });
});
