const Team= require("../Model/teams")
class OurTeamsController{
    getTeam=async (req,res)=>{
        const teamData= await Team.findAll();
        const finalData=teamData.map((ele)=>{
            return{
            "id":ele.id,
            "name":ele.name,
            "img":"http://localhost:4000/images/"+ele.img
            
            }
        })
        res.json({status:true,message:'success',data:finalData});
    }
}

module.exports=OurTeamsController;