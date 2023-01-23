const express = require('express');
const router = express.Router()
const {UserLists} = require('../UserLists')

router.get('/', (req,res)=>{
    res.json(UserLists)
})

//@post
router.post('/', (req,res)=>{
    const newUserList = [...UserLists, req.body]
    res.json(newUserList)
})

//@delete
//delete a user
router.delete('/:id',(req,res)=>{
    const FilteredUserLists = UserLists.filter(user=> user.id !== +req.params.id)
    res.json(FilteredUserLists)
})

//@put
//update a data user
router.put('/:id', (req,res)=>{
    const updatedUserLists = UserLists.map(user=> (user.id === +req.params.id)? {...user,...req.body} : user)
    res.json(updatedUserLists)
})

module.exports = router
