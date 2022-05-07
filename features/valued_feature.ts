import { GeojsonCordinateType } from '../geo_json/geometry';
import { IFeature } from './feature';

export interface IValuedFeature<P extends GeojsonCordinateType> extends IFeature<P, number> {

}
