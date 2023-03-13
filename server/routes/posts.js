import express from "express";

import { createPost, getPosts, updatePost,deletePost, likePost } from "../controllers/posts.js";

const router = express.Router();


router.get('/', getPosts );
router.post('/', createPost);
router.patch('/:id', updatePost  );
router.delete('/:id', deletePost);


// router.get('/create', createPost );
// router.get('/home',(req, res)=>{
//     res.send('this is home!');
// });

export default router;