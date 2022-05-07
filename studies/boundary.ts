import { IPolygon } from '../geo_json/polygon';


export interface IBoundary extends IPolygon {
    id?: string;
    type: 'Polygon';
    is_complete: boolean;
}
