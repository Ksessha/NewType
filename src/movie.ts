export class Movie {
    constructor(
        public id: number,
        public title: string,
        public genres: string[],
        public duration: number,
        public price: number,
        public rating: number
    ) {}
}