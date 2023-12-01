import express from 'express';
import { codeToken, decodeToken } from '../jwt.js'
import Auth from '../models/auth.js'
import Profile from '../models/profile.js'
const router = express.Router();


const updateOrCreateProfile = async (profileData) => {
    const { email, ...updateData } = profileData;

    try {
        // Find the document with the given email
        const existingProfile = await Profile.findOneAndUpdate(
            { email: email },
            updateData,
            { new: true, upsert: true, setDefaultsOnInsert: true }
        );

        console.log('Profile:', existingProfile);

        return existingProfile;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};


router.get('/', (req, res) => {
    res.send("ABCD")
});

// Example usage:
// const profileData = {
//     name: 'John Doe',
//     email: 'john@example.com',
//     mobile: 1234567890,
//     city: 'Some City',
//     gender: 'Male',
// };





router.post('/', async (req, res) => {
    var obj = req.body.obj;
    const token = req.header('Authorization').replace('Bearer ', '');
    const authData = await decodeToken(token);
    console.log(authData);
    if (authData) {
        var details = {};
        details.email = authData.email;
        details.name = obj.name;
        details.mobile = obj.mobile;
        details.city = details.city;
        details.gender = details.gender;
        updateOrCreateProfile(details)
            .then(updatedProfile => {
                console.log('Updated or created profile:', updatedProfile);
                res.send(updatedProfile);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } else {
        res.status(400)
    }



});
// router.get('/:id', getPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

export default router;