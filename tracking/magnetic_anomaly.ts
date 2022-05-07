import { IOrientation } from './orientation';

export interface IMagneticAnomaly {
    moment_am2: [number,number,number];
    orientation: IOrientation;
    position_m: [number, number, number];
    volume_m3: number;
}
