const express= require('express');
const router = express.Router();


let posts=[
    { 'id': 1, 'title':'post 1'},
    { 'id': 2, 'title':'post 2'},
    { 'id': 3, 'title':'post 3'},
];

// get all posts
router.get('/', (req,res)=>{

   const limit= parseInt( req.query.limit);
   if(!isNaN(limit) && limit > 0 )
    return res.status(200).json(posts.slice(0,limit));
   else
    return res.status(200).json(posts);
});

// get single post
router.get('/:id', (req,res)=>{

    const id= parseInt( req.params.id)
    let post= posts.find(x=> x.id === id);
    if(!post)
    {
       return res.status(404).json({msg:" A post is not found"});
    }
    else{
        return res.status(200).json(post);
    }
});

module.exports = router;