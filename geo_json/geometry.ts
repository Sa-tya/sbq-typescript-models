export type GeojsonCordinateType = number [] | number [][];

export type GeoJSONGeometryType = 'Point' | 'MultiPoint' | 'LineString' | 'MultiLineString' | 'Polygon' | 'MultiPolygon' | 'GeometryCollection';

export interface IGeometry<P extends GeojsonCordinateType> {
    type: GeoJSONGeometryType;
    coordinates: P;
}
