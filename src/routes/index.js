const { Router } = require("express");

const router = Router();


// Deshabilitar CORS en este componente (SOLO PARA PRUEBAS LOCALES)
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
  });


// Here we define the routes
router.use("/endpoint1", ()=> {
    console.log("endpoint1");
});


module.exports = router;
