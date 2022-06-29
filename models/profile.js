import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema({
  name: String,
  avatar: String,
  gamerTag: String,
}, {
  timestamps: true
})

const Profile = mongoose.model("Profile", profileSchema)

export {
  Profile
}
