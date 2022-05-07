export type PhysicalQuantityType =
    'MagneticField' |
    'Orientation' |
    'Acceleration' |
    'AngularVelocity' |
    'GPSPosition' |
    'Pressure' |
    'Quaternion' |
    'RelativePosition' |
    'Temperature' |
    'TMI' |
    'Velocity';

export interface IPhysicalQuantity {
    data: number[];
    uncertainty?: number[];
    readonly physical_quantity_class: PhysicalQuantityType;
}
