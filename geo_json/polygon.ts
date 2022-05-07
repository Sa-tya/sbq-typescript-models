import { IGeometry } from './geometry';

export interface IPolygon extends IGeometry<number[][]> {
    readonly type: 'Polygon';
}
