import { ICalibrationParameters } from './calibration_parameters';

export interface IUniaxialCalibrationParameters extends ICalibrationParameters {
    offset: number[],
    scale: number[]
}
