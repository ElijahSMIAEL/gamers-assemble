import { Lfg } from "../models/lfg.js"

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



export {
  index,
}