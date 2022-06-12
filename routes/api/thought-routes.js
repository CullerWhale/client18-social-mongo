const router = require('express').Router();
const {
  getAllThoughts,
  createThought,
  getThoughtById,
  updateThought,
  deleteThought,
  deleteReaction,
  createReaction

  
} = require('../../controllers/thought-controller');

// /api/thoughts
router
  .route('/')
  .get(getAllThoughts)
  .post(createThought); //push id in function

// /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);


router.route('/:thoughtId/reactions').post(createReaction);
router.route('/:thoughtId/:reactionId').delete(deleteReaction)

module.exports = router;
