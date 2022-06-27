import { Profile } from "../models/profile"

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: "Profile Page"
    })
  })
}