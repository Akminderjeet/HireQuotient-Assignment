import express from 'express';
import { codeToken, decodeToken } from '../jwt.js'
import Auth from '../models/auth.js'
const router = express.Router();

router.get('/', (req, res) => {
    res.send("ABCD")
});
router.post('/', (req, res) => {
    var obj = req.body.obj;
    var details = {};
    details.email = obj.email;
    details.password = obj.password;
    Auth.findOne({ email: details.email }).then((result) => {
        console.log(result);
        if (result) {
            if (details.email == result.email && details.password == result.password) {
                var token = codeToken(details);
                res.send(token);
            } else {
                res.status(400);
            }
        } else {
            res.status(400)
        }
    }).catch((err) => {
        res.status(400)
    })
});
// router.get('/:id', getPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);

export default router;