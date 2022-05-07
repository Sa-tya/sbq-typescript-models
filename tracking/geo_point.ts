import {Schema, model} from 'mongoose';

export interface IGeoPoint {
    latitude_deg: number;
    longitute_deg: number;
    altitude_deg: number;
}

const geoPointSchema:Schema = new Schema({
    latitude_deg:{
        type:Number
    },
    longitude_deg:{
        type: Number
    },
    altitude_deg:{
        type:Number
    }
})

export const geoPointModel = model<IGeoPoint>('geoPoint',geoPointSchema);