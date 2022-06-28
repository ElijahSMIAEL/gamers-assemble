import { Lfg } from "../models/lfg.js"
import { Game } from "../models/game.js"

function index(req, res) {
  Lfg.find({})
  .then(lfgs => {
    res.render('lfgs/index', {
      lfgs,
      title: "All LFGs",
      user: req.user ? req. user : null,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function newLfg(req, res) {
  Game.find({})
  .then(games => {
    res.render('lfgs/new', {
      title: "Create LFG",
      games,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req, res) {
  Lfg.create(req.body) 
  .then(lfg => {
    res.redirect('/')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Lfg.findById(req.params.id)
  .populate('game')
  .then(lfg => {
    Game.find({_id: {$nin: lfg.game}})
    .then(game => {
      res.render('lfgs/show', {
        title: `${lfg.name}`,
        lfg,
        game,
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}



export {
  index,
  newLfg as new,
  create,
  show,
}