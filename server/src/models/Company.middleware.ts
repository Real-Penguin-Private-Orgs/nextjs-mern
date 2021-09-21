import Company from "./Company"
import { schema } from "./Company.schema";

export async function getAll(req: any, res: any, next: any) {
    await Company.find({})
    .exec((err, docs) => {
        if(err) return next(err);
        res.json(docs);
    })
}

export async function getOne(req: any, res: any, next: any) {
    let { id } = req.params;
    if(!id) return next();

   await Company.findById({ _id: id })
   .exec((err, docs) => {
        if(err) return next(err);
        res.json(docs);
   })
}

export async function createOne(req: any, res: any, next: any) {
     let { name, owner, website, logo } = req.body;

     if(!name || !owner || !logo) {
         return schema.validate({name, owner, website, logo})
         .catch((err) => {
             res.json(err)
         })
     }

     const newData = new Company({
         name: name,
         owner: owner,
         website: website,
         logo: logo
     })

     newData.save()
     .then((docs) => {
         res.json(docs)
     })
     .catch((err) => {
         next(err)
     })
}
/**
 * DATA STRUCTURE
 * {
	"name": "Nestlé",
	"owner": "Henri Nestlé",
	"website": "https://www.nestle.com",
	"logo": "https://cdn.1min30.com/wp-content/uploads/2018/01/Symbole-Nestl%C3%A9.jpg"
    }
*/

export async function deleteOne(req: any, res: any, next: any) {
    let { id } = req.params;
    if(!id) return next();

    await Company.findByIdAndDelete({ _id: id })
    .exec((err, docs) => {
        if(err) return next(err)
        res.json(docs);
    })
}

export async function updateOne(req: any, res: any, next: any) {
    let { id } = req.params;
    if(!id) return next();
    let { name, owner, website, logo } = req.body;
    if(!name || !owner || !logo) {
        return schema.validate({name, owner, website, logo})
        .catch((err) => {
            res.json(err)
        })
    }

    await Company.findByIdAndUpdate({ _id: id }, {
        name: name,
        owner: owner,
        website: website,
        logo: logo
    }, (err: any, docs: any) => {
        if(err) return next(err);
        res.json(docs);
    })
}