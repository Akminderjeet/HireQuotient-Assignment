import mongoose from 'mongoose';

const profileSchema = mongoose.Schema({
    name: String,
    email: String,
    mobile: Number,
    city: String,
    gender: String
})

var ProfileMessage = mongoose.model('ProfileMessage', profileSchema);

export default ProfileMessage;