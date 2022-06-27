import { Game } from "../models/game.js"

function newGame(req, res) {
  Game.find({})
  .then(games => {
    res.render('games/new', {
      title: "Add Game",
      games,
    })
  })
}

export {
  newGame as new,
}