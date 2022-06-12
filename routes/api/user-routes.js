const router = require('express').Router();
const {
  addUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  removeFromBuddyList,
  addNewFriend,
} = require('../../controllers/user-controller');

// /api/comments/<pizzaId>
router.route('/').post(addUser).get(getAllUsers);

router.route('/:userId').get(getOneUser).put(updateUser).delete(deleteUser);

router.route('/:userId/friends/:friendId').post(addNewFriend).delete(removeFromBuddyList);
// /api/comments/<thoughtId>/<userId>

module.exports = router;
