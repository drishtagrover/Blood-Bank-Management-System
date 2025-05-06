const Contact= require("../Model/contact")
class ContactController{
    add=async (req,res)=>{       
        const newContact = await Contact.create(req.body);
        res.json({"status":true,message:'success'})
    }
}

module.exports=ContactController;