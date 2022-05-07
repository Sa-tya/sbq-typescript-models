import { ICalibrationParameters } from './calibration_parameters';

export interface ITriaxialSplitCalibrationParameters extends ICalibrationParameters {
    offset: number[][],
    scale: number[][],
    orthogonality: number[][],
    euler_angles: number[][]
}