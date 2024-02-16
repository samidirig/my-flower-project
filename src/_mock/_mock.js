import {
    _emails,
    _fullNames,
    _courseTitle,
    _fullAddress,
    _id,
} from "./assets";


export const _mock = {
    id: (index) => _id[index],
    fullName: (index) => _fullNames[index],
    email: (index) => _emails[index],
    courseTitle: (index) => _courseTitle[index],
    fullAddress: (index) => _fullAddress[index],
}