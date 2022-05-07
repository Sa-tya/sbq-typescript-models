import { IGeoPoint } from './geo_point';
import { IOrientation } from './orientation';

export interface IPlatform {
    unique_id: string;
    orientation: IOrientation;
    position_geo: IGeoPoint;
}
