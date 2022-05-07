import { IMagneticAnomaly } from './magnetic_anomaly';
import { IPlatform } from './platform';

export interface ITrackingEvent {
    magnetic_anomaly: IMagneticAnomaly;
    platform: IPlatform;
    timestamp_s: number;
}
