import { Measurement } from '../physical_quantities/measurement';

export interface IAcquisition {
    mag_study_id: string;
    platform_id: string;
    measurements: Measurement<any>[];
}