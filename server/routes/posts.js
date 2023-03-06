import express from "express";

import { createPost, getPosts } from "../controllers/posts.js";

const router = express.Router();


router.get('/', getPosts );
router.post('/', createPost);
// router.get('/create', createPost );
// router.get('/home',(req, res)=>{
//     res.send('this is home!');
// });

export default router;