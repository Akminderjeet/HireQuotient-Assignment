import mongoose from 'mongoose';

const authSchema = mongoose.Schema({
    email: String,
    password: String
})

var AuthMessage = mongoose.model('AuthMessage', authSchema);

export default AuthMessage;