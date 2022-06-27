import mongoose from "mongoose"

const Schema = mongoose.Schema

const lfgSchema = new Schema({
  content: String,
  author: {type: Schema.Types.ObjectId, ref: "Profile"},
  game: {type: Schema.Types.ObjectId, ref: "Game"},
  playerNo: {type: Number, required: true},
}, {
  timestamps: true
}) 

const Lfg = mongoose.model("Lfg", lfgSchema)

export {
  Lfg
}