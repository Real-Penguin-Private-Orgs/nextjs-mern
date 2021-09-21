import Food from "./Food";

export async function getAll(req: any, res: any, next: any) {
    await Food.find({}).exec((err, docs) => {
        if(err) return next(err);
        res.json(docs);
    })
}

export async function addOne(req: any, res: any, next: any) {
    
}