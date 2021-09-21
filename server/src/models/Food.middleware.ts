import Food from "./Food";
import Company from "./Company"
import { schema } from "./Food.schema";

export async function getAll(req: any, res: any, next: any) {
    await Food.find({}).exec((err, docs) => {
        if(err) return next(err);
        res.json(docs);
    })
}

export async function addOne(req: any, res: any, next: any) {
    let { company_id } = req.params;
    if(!company_id) return next();

    let { brand, flavour,  logo } = req.body;

    if(!brand || !flavour || !logo) {
        return schema.validate({
            flavour,
            brand,
            logo
        })
    }

    const newData = new Food({
        brand: brand,
        flavour: flavour,
        company: company_id,
        logo: logo
    })

    await newData.save()
     .then((docs) => {
         res.json(docs)
     })
     .catch((err) => {
         next(err)
     })
}