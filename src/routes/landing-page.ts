import { Router } from "express";


export const landingPage = Router();


landingPage.get('/', (req, res) => {
    console.log('here')
    res.send('lp');
})

