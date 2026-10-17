
const DETAILS_MODEL=require('../model/detailss');

function getApplyForm(req,res){
    if(req.method==='GET'){
res.render('applyForm');
    
}
}
async function postApplyForm(req,res){
    if(req.method==='POST'){
        const name=req.body.name;
         const id=req.body.id;
          const department=req.body.department;
           const leave_type=req.body.leave_type;
            const from_date=req.body.from_date;
             const to_date=req.body.to_date;
              const reason=req.body.reason;
        try{
         const response= await DETAILS_MODEL.create({name,id,department,leave_type,from_date,to_date,reason});
                      const data=res.json(response);
                      
                       res.render('allleave',{data});
                      res.status(201);

        }
        catch(err){
console.log(err);
        }

    }
}
module.exports={getApplyForm,postApplyForm};