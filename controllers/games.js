import { Game } from "../models/game.js"

function newGame(req, res) {
  console.log(req.user)
  Game.find({})
  .then(games => {
    res.render('games/new', {
      title: "Add Game",
      games,
    })
  })
}

function create(req, res) {
  Game.create(req.body)
  .then(game => {
    res.redirect('/games/new')
  })
}

export {
  newGame as new,
  create,
}