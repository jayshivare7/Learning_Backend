const express = require('express');
const router=express.Router();
const { Posts, createPost } = require('../controllers/posts');
const { findComments, commenti } = require('../controllers/comments');
const { likePost, unlikePost } = require('../controllers/likes');


router.post('/posts/create',createPost);
router.get('/posts',Posts);
router.post('/comments/create',commenti);
router.get('/comments',findComments);
router.post('/likes/like', likePost);
router.post('/likes/unlike',unlikePost);
module.exports = router;