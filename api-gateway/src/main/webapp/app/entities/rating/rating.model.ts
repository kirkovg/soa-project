import { BaseEntity } from './../../shared';

export class Rating implements BaseEntity {
    constructor(
        public id?: number,
        public score?: number,
        public bookName?: string,
        public userId?: number,
    ) {
    }
}
