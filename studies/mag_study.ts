import { GPSPosition } from '../physical_quantities/gps_position';
import { Orientation } from '../physical_quantities/orientation';
import { IPlatform } from './platform';

export interface IMagStudy {
    mag_study_id: string,
    platforms: IPlatform[],
    reference_time_stamp: number,
    title?: string,
    description?: string,
    reference_gps_position?: GPSPosition,
    reference_orientation?: Orientation
}