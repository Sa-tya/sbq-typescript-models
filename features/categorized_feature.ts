import { GeojsonCordinateType } from '../geo_json/geometry';
import { IFeature } from './feature';

export interface ICategorizedFeature<P extends GeojsonCordinateType, T> extends IFeature<P, T> {
    confidence?: number;
}