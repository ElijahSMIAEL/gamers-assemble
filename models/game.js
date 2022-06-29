import mongoose from "mongoose"

const Schema = mongoose.Schema

const gameSchema = new Schema({
  name: {type: String, required: true},
})

const Game = mongoose.model("Game", gameSchema)

export {
  Game
}