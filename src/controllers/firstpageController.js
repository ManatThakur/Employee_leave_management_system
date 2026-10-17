function getFirstPage(req,res){
    if(req.method==='GET'){
        res.render('index');
    }
}
module.exports={getFirstPage};
