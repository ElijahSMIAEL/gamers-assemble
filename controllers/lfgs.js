import { Lfg } from "../models/lfg.js"
import { Game } from "../models/game.js"
import { Profile } from "../models/profile.js"

function index(req, res) {
  Lfg.find({})
  .populate('game')
  .populate('owner')
  .then(lfgs => {
    Game.find({_id: {$nin: lfgs.game}})
    Profile.find({_id: {$nin: lfgs.owner}})
    .then(() => {
      res.render('lfgs/index', {
        lfgs,
        title: "All LFGs",
        user: req.user ? req. user : null,
      })
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
  req.body.owner = req.user.profile._id
  Lfg.create(req.body) 
  .then(lfg => {
    res.redirect('/lfgs')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/lfgs/new')
  })
}

function show(req, res) {
  Lfg.findById(req.params.id)
  .populate('game')
  .populate('playerReplies')
  .populate('owner')
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

function edit(req, res) {
  Lfg.findById(req.params.id)
  .then(lfg => {
    res.render('lfgs/edit', {
      lfg,
      title: "Edit Post"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function update(req, res) {
  Lfg.findById(req.params.id)
  .then(lfg => {
    if (lfg.owner.equals(req.user.profile._id)) {
      lfg.updateOne(req.body, {new: true})
      .then(updatedLfg => {
        res.redirect(`/lfgs/${lfg._id}`)
      })
    } else {
      throw new Error ('MUST BE OWNER')
    }
  })
  .catch(err => {
    console.log(err)
    res.redirect('/lfgs')
  })
}

function deleteLfg(req, res) {
  Lfg.findByIdAndDelete(req.params.id)
  .then(() => {
    res.redirect('/lfgs')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/lfgs')
  })
}

function join(req, res) {
  Lfg.findById(req.params.id)
  .populate('owner')
  .then(lfg => {
    Profile.findById(req.user.profile._id)
      .then(profile => {
        console.log(profile)
        lfg.playerNo = lfg.playerNo - 1
        lfg.playerReplies.push(profile._id)
        lfg.save()
        .then(() => {
          res.redirect(`/lfgs/${lfg._id}`)
      })
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/lfgs')
  })
}

function leaveGroup(req, res) {
  console.log(req.params.id)
  Lfg.findById(req.params.id)
  .populate('playerReplies')
  .then(lfg => {
    console.log(lfg)
      lfg.playerNo = lfg.playerNo + 1
      lfg.playerReplies.remove(req.params.repliesId)
      lfg.save()
      .then(() => {
        res.redirect(`/lfgs/${lfg._id}`)
      })
    })
  .catch(err => {
    console.log(err)
    res.redirect('/lfgs')
  })
}


export {
  index,
  newLfg as new,
  create,
  show,
  edit,
  update,
  deleteLfg as delete,
  join,
  leaveGroup,
}