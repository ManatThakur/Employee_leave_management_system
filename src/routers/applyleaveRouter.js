const applyleaveRouter=require('express').Router();
const applyleaveController=require('../controllers/applyleaveController');
applyleaveRouter.get('/',applyleaveController.getApplyForm);
applyleaveRouter.post('/',applyleaveController.postApplyForm);
module.exports=applyleaveRouter;