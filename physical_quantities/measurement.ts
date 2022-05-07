import { SensorUniqueId } from '../studies/sensor';
import { IPhysicalQuantity } from './physical_quantity';

export interface Measurement<T extends IPhysicalQuantity> {
    sensor_unique_id: SensorUniqueId
    time_stamp: number
    physical_quantity: T
}
