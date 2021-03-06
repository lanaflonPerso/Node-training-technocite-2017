const { catchErrors } = require('../handlers/errorHandlers');

const express = require('express');
const router = express.Router();
const magasinController = require('../controllers/magasinController');
const pagesController = require('../controllers/pagesController');
const userController = require('../controllers/userController');
const authenticationController = require('../controllers/authenticationController')

router.get('/', magasinController.getMagasins)
router.get('/magasins/:slug', magasinController.getMagasinBySlug)
router.get('/magasins', magasinController.getMagasins)
router.get('/magasins/add', authenticationController.isLoggedIn, magasinController.addMagasin);
router.get('/magasins/:id/edit', authenticationController.isLoggedIn, magasinController.editMagasin);
router.get('/about', pagesController.about);
router.get('/contact', pagesController.contact);
router.post('/magasins/add',
    magasinController.upload,
    magasinController.resize,
    magasinController.createMagasin);
router.post('/magasins/add/:id',
    magasinController.upload,
    magasinController.resize,
    magasinController.updateMagasin);

// USers controller
router.get('/login', userController.loginForm)
router.get('/register', catchErrors(userController.registerForm))

router.post('/login', authenticationController.login)
router.get('/logout', authenticationController.logout)

router.post('/register', userController.validateRegister, userController.register, authenticationController.login)

module.exports = router;















// Do work here
// router.get('/', (req, res) => {
//   let obj = req.query;
//   console.log(obj.name)
//   res.send('Hey! It works!');
// });
// router.get('/:name', (req, res) => {
//   let arr = [1,2,3]
//   console.log([...arr,4,5])
//   let obj ={
//     name:"gilles"
//   }
//   console.log({...obj,job:"ceo"})
//   res.send('Hey! It works!'+  [...req.params.name].reverse().join(''))
// });