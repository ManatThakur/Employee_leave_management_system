const firstpageRouter=require('express').Router();
const firstpageController=require('../controllers/firstpageController');
firstpageRouter.get('/',firstpageController.getFirstPage);
module.exports=firstpageRouter;