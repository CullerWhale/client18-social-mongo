const { User } = require('../models');
const { get } = require('../models/Reaction');


// addUser,
//   getAllUsers,
//   getOneUser,
//   updateUser,
//   deleteUser,
//   removeFromBuddyList,
//   addNewFriend,

const userController = {
  //add a user
  addUser(req, res) {
    User.create(body).then(dbUserData => res.json(dbUserData))
      .catch(err => res.json(err));
  },

  //get all users
  getAllUsers(req, res) {
    User.find({}).select('-__v').then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  },

  //get one user by id

  getOneUser({ params }, res) {
    User.findOne({ _id: params.id }) .select('-__v')
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => {
      console.log(err);
      res.sendStatus(500);
    });
  },

  //update user

  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true }).then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => res.json(err));
  },


  //delete a user
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
    .then(dbThoughtData => res.json(dbThoughtData))
    .catch(err => res.json(err));
  },

  // removeFromBuddyList(req,res) {}

  //add new friend 






}

// const commentController = {
//   // add comment to Thought
//   addComment({ params, body }, res) {
//     console.log(params);
//     Comment.create(body)
//       .then(({ _id }) => {
//         return Thought.findOneAndUpdate(
//           { _id: params.ThoughtId },
//           { $push: { comments: _id } },
//           { new: true }
//         );
//       })
//       .then(dbThoughtData => {
//         console.log(dbThoughtData);
//         if (!dbThoughtData) {
//           res.status(404).json({ message: 'No Thought found with this id!' });
//           return;
//         }
//         res.json(dbThoughtData);
//       })
//       .catch(err => res.json(err));
//   },

//   // add reply to comment
//   addReply({ params, body }, res) {
//     Comment.findOneAndUpdate(
//       { _id: params.commentId },
//       { $push: { replies: body } },
//       { new: true, runValidators: true }
//     )
//       .then(dbThoughtData => {
//         if (!dbThoughtData) {
//           res.status(404).json({ message: 'No Thought found with this id!' });
//           return;
//         }
//         res.json(dbThoughtData);
//       })
//       .catch(err => res.json(err));
//   },

//   // remove comment
//   removeComment({ params }, res) {
//     Comment.findOneAndDelete({ _id: params.commentId })
//       .then(deletedComment => {
//         if (!deletedComment) {
//           return res.status(404).json({ message: 'No comment with this id!' });
//         }
//         return Thought.findOneAndUpdate(
//           { _id: params.ThoughtId },
//           { $pull: { comments: params.commentId } },
//           { new: true }
//         );
//       })
//       .then(dbThoughtData => {
//         if (!dbThoughtData) {
//           res.status(404).json({ message: 'No Thought found with this id!' });
//           return;
//         }
//         res.json(dbThoughtData);
//       })
//       .catch(err => res.json(err));
//   },
//   // remove reply
//   removeReply({ params }, res) {
//     Comment.findOneAndUpdate(
//       { _id: params.commentId },
//       { $pull: { replies: { replyId: params.replyId } } },
//       { new: true }
//     )
//       .then(dbThoughtData => res.json(dbThoughtData))
//       .catch(err => res.json(err));
//   }
// };

module.exports = userController;
