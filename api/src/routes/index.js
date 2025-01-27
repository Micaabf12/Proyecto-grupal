const { Router } = require('express');
const ownersRoute = require('./owners.js')
const petsRoute = require('./pets.js')
const providersRoute = require('./providers.js')

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/owners', ownersRoute)
router.use('/pets', petsRoute)
router.use('/providers', providersRoute)


module.exports = router;
