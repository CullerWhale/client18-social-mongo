const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ReactionSchema = new Schema(
  {
    // set custom id to avoid confusion with parent comment _id
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      max: 280
    },
    // writtenBy: {
    //   type: String,
    //   required: true,
    //   trim: true
    // },
    userName: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

// const CommentSchema = new Schema(
//   {
//     writtenBy: {
//       type: String,
//       required: true
//     },
//     commentBody: {
//       type: String,
//       required: true
//     },
//     createdAt: {
//       type: Date,
//       default: Date.now,
//       get: createdAtVal => dateFormat(createdAtVal)
//     },
//     // use reactionSchema to validate data for a reaction
//     reactions: [ReactionSchema]
//   },
//   {
//     toJSON: {
//       virtuals: true,
//       getters: true
//     },
//     id: false
//   }
// );

// CommentSchema.virtual('reactionCount').get(function() {
//   return this.reactions.length;
// });

// const Reaction = model('Reaction', ReactionSchema);

module.exports = ReactionSchema;
