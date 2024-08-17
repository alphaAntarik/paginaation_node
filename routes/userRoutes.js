const express = require('express');
const {postData,getData}=require('../controller/userController')
const router = express.Router();

router.post('/post_joke', postData)
router.post('/get_joke', getData)

module.exports=router