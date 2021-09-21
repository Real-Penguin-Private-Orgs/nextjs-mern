import Food from "./Food";
import * as yup from 'yup'

export async function getAll(req: any, res: any, next: any) {
    await Food.find({}).exec((err, docs) => {
        if(err) return next(err);
        res.json(docs);
    })
}

export async function addOne(req: any, res: any, next: any) {
    
}