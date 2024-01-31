
import {MenuItem, MenuDrink} from '../models/menuModel.js';


const getAllMenuItems = (req, res)=>{
    const menuItems = [
        new MenuItem('Burger','safty'),
        new MenuItem('Cola','bubbling')
     ];
     res.json(menuItems);
};

const youAreInSave = (req, res)=> {
    
    const menuDrink = [
        new MenuDrink('Fanta')
    ];
    res.json(menuDrink);
    
   
};
export { getAllMenuItems, youAreInSave };
