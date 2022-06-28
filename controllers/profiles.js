import { Profile } from "../models/profile.js"

function index(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    res.render('profiles/index', {
      profile,
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