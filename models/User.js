const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');


const UserSchema = new Schema(
    {
        userName: {
            type: String, 
            required: true,
            unique: true,
            trim: true
        }, 
        email: {
            type: String, 
            required: true,
            unique: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,"please enter correct format"]

        }, 
        // Array of _id values referencing the Thought model
        thoughts: [
            { 
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ]
        ,
        friends: 
         // Array of _id values referencing the User model (self-reference)
        [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]

    }
    ,
    {
        toJSON: {
          virtuals: true,
          getters: true
        },
        // prevents virtuals from creating duplicate of _id as `id`
        id: false
      }
);

UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
})

const User = model('User', UserSchema);

module.exports = User;