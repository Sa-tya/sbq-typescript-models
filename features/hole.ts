import { ICategorizedFeature } from './categorized_feature';

export enum EHoleType {
    BAD_WELD = 'BAD_WELD',
    TEAR = 'TEAR',
    ROCK = 'ROCK',
    CUT = 'CUT',
    UNKNOWN = 'UNKNOWN'
}

export interface IHole extends ICategorizedFeature<number[], EHoleType> {
}
