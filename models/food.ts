import DBModel from 'bacjs/lib/src/MongoDB/Model'
import { SchemaDefinition, Schema, Document } from 'mongoose';

class FoodModel extends DBModel {
    static get collectionName(): string { return "Food"; }

    static $schema(): SchemaDefinition {
        return {
            name: {type: String, required: true},
            rate: {type: Number, required: true, default: 0},
            image: {type: String, required: true}
        }
    }
}

export interface IFood extends Document {
    name: String;
    rate: Number;
    image: String;
}

export default FoodModel.$model<IFood>();