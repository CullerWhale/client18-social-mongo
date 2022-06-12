const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');
const ReactionSchema = require('./Reaction');

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min: 1, 
      max: 280
    },
    // createdBy: {
    //   type: String,
    //   required: true,
    //   trim: true
    // },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => dateFormat(createdAtVal)
    },
    userName: {
      type: String,
      required: true
    },
    // size: {
    //   type: String,
    //   required: true,
    //   enum: ['Personal', 'Small', 'Medium', 'Large', 'Extra Large'],
    //   default: 'Large'
    // },
    // toppings: [],
    reactions: [
      ReactionSchema
    ]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

// Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
