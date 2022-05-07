import { ICalibrationParameters } from '../calibration_parameters/calibration_parameters';

export interface SensorUniqueId {
    device_id: string
    sensor_id: string
}

export interface Sensor {
    sensor_id: string,
    measurement_class: string,
    position_offset: [number, number, number],
    orientation_offset: [number, number, number],
    calibration_parameters: ICalibrationParameters
}