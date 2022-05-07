import { IFeature } from './feature';

export interface IFeatureMap<F extends IFeature<any, any>> {
    features: F[];
    time_stamp?: number;
    feature_map_id?: string;
}