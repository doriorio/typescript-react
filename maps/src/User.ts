import faker from 'faker';
import { Mappable } from './CustomMap';

//JS libraries can be imported to TS; TS wants to know all the types, if it doesnt have this info it doesn't figure out what values
//Definitely typed - use npm install --save @types/faker - search on npm
//click on import for type definitions
//To fix this, TS has the concept of a type definition file
//Convention for TS - do not use export default 
export class User implements Mappable {
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'red';

    constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }

    }
    markerContent(): string {
        return `Name: ${this.name}`
    }
}

//Need to help TS understand Google's def files