export class Client {
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public address: string,
        public zipCode: string,
        public city: string,
        public phoneNumber: number
    ) {}
}