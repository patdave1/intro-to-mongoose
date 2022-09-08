const getUsers= (req,res)=>{
    res.status(200).send(`Get All users filtered by "${req.query.title}"`);

}
const getUser= (req,res)=>{
    res.status(200).send(`user with Id "${req. params.userId}" has been retrieved`)

}
const createUsers= (req,res)=>{
    res.status(200).send(" user created")

}
const updateUsers= (req,res)=>{
    res.status(200).send(`user with ID "${req.params.userId}" has been updated successully`)

}
const deleteUsers= (req,res)=>{
    res.status(200).send("user deleted")

};

module.exports={
getUsers,
getUser,
createUsers,
updateUsers,
deleteUsers,
}

