import Controller, { RequestType } from 'bacjs/lib/src/server/controller'
import FoodModel from '../models/food';

export default class Food extends Controller {
    public init(): void {
        this.assign('', [RequestType.GET], async (req, h) => {
            
            let q = req.query as any;

            let skip: number = q.skip && !isNaN(Number(q.skip)) ? Number(q.skip) : 0;
            let limit: number = q.limit && !isNaN(Number(q.limit)) ? Number(q.limit) : 10;

            return await FoodModel.find().sort('_id').skip(skip).limit(limit)
        })

        this.assign('', [RequestType.POST], async (req, h) => {
            let food = new FoodModel(req.payload)
            return await food.save()
        })

        this.assign('/{id}', [RequestType.PUT], async (req, h) => {
            let food = await FoodModel.updateOne({_id: req.params.id}, req.payload)
            return food
        })

        this.assign('/{id}', [RequestType.DELETE], async (req, h) => {
            return await FoodModel.deleteOne({_id: req.params.id})
        })
    }
}
