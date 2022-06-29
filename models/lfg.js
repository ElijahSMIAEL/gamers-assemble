import mongoose from "mongoose"

const Schema = mongoose.Schema


const lfgSchema = new Schema({
  name: {type: String, required: true},
  content: String,
  owner: {type: Schema.Types.ObjectId, ref: "Profile"},
  game: {type: Schema.Types.ObjectId, ref: "Game"},
  playerNo: {type: Number, required: true},
  playerReplies: [String]
}, {
  timestamps: true
}) 

const Lfg = mongoose.model("Lfg", lfgSchema)

export {
  Lfg
}