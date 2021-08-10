import faker from 'faker';

//JS libraries can be imported to TS; TS wants to know all the types, if it doesnt have this info it doesn't figure out what values
//Definitely typed - use npm install --save @types/faker - search on npm
//click on import for type definitions
//To fix this, TS has the concept of a type definition file
//Convention for TS - do not use export default 
export class User {
    name: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }

    }
}

//Need to help TS understand Google's def files