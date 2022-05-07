import { ICalibrationParameters } from './calibration_parameters';

export interface ITriaxialUnifiedCalibrationParameters extends ICalibrationParameters {
        offset: number[][],
        m00: number[],
        m01: number[],
        m02: number[],
        m10: number[],
        m11: number[],
        m12: number[],
        m20: number[],
        m21: number[],
        m22: number[],
        euler_angles: number[][]
}
