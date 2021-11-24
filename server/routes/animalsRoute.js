const express = require( 'express' );
const AnimalRouter = express.Router();
const {AnimalController} = require( './../controllers/animalsController' );


AnimalRouter.route('/').get(AnimalController.findAnimals)
AnimalRouter.route('/new').get(AnimalController.loadNewAnimal)
AnimalRouter.route('/:id').get(AnimalController.animalByID)
AnimalRouter.route('/edit/:id').get(AnimalController.editAnimalLoad)


AnimalRouter.route('/add').post(AnimalController.postAnimal)
AnimalRouter.route('/edit/:id').post(AnimalController.editAnimal)
AnimalRouter.route('/destroy/:id').post(AnimalController.deleteAnimal)




module.exports = { AnimalRouter };