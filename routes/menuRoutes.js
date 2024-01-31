import { getAllMenuItems,youAreInSave } from '../controllers/menuController.js';
import express from 'express';
const router = express.Router();

router.get('/getAllMenuItems',getAllMenuItems );
router.get('/save',youAreInSave);
router.get('/menu', (req,res)=>{
    res.sendFile('index.html', {root:'public'}) 
});


export default router;
