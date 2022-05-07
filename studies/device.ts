import { Sensor } from './sensor';


export interface IDevice {
    device_id: string,
    device_class: string,
    sensors: Sensor[]
}