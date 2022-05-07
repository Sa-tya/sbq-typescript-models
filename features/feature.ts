import { GeojsonCordinateType } from '../geo_json/geometry'
import { IGeoJSON } from '../geo_json/geo_json'

export interface IFeature<P extends GeojsonCordinateType, F> extends IGeoJSON<P> {
    readonly feature_class: string
    feature_id?: string
    value?: F
}