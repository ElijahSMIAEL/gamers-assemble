import { Profile } from "../models/profile.js"

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: "Profile Page"
    })
  })
}

function update(req, res) {
  Profile.findByIdAndUpdate(req.params.id, req.body, {new: false})
  .then(profile => {
    res.redirect('/')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  update,
}