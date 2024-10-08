import {Schema, model} from 'mongoose'

const usersSchema = new Schema({
  first_name: {
      type: String,
      required: true
  },
  last_name: {
      type: String,
  },
  email: {
      type: String,
      required: true,
      unique: true
  },
  age: {
      type: Number,
  },
  password: { 
      type: String,
  },
  role: {
      type: String,
      default: 'user'
  },
  image: {
    type: String
  },
  isGithub: {
      type: Boolean,
      default: false
  },
  isGoogle: {
    type: Boolean,
    required: true,
    default: false,
  },
  cart: {
    type: Schema.Types.ObjectId,
    ref: "carts",
    default: []
  }
});

export const UserModel = model('users',usersSchema)
