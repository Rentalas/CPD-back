import { Router } from "express";

export const spa = Router();


spa.get('/', (req, res) => {
    console.log('here')
    res.send('spa');
})

