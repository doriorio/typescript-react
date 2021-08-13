/// <reference types="google.maps" />
import { CustomMap } from './CustomMap';
import { Company } from './Company';
import { User } from './User';

const customMap = new CustomMap('map');
const company = new Company();
customMap.addMarker(company);
const user = new User();
customMap.addMarker(user);
