const express = require('express');
const router = express.Router();
const magasinController = require('../controllers/magasinController');
const pagesController = require('../controllers/pagesController');

router.get('/', magasinController.getMagasins)
router.get('/magasins/:slug', magasinController.getMagasinBySlug)
router.get('/magasins', magasinController.getMagasins)
router.get('/about', pagesController.about);
router.get('/contact', pagesController.contact);

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