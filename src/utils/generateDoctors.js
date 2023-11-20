import { faker } from "@faker-js/faker";


const generateDoctor = (dept) => {

    const doctor = {
        id: faker.string.uuid(),
        name: faker.person.fullName(),
        category: dept,
        fees:faker.number.int({ min: 100, max: 700 }),
        experience: faker.number.int({ min: 2, max: 10 }), 
        ratings:faker.number.int({ min: 0, max: 100 }),
        patients: faker.number.int({ min: 0, max: 200 }),
        specialization: faker.person.jobTitle(),
        address: faker.location.streetAddress(),
        image: faker.image.avatar(),
      }

  return doctor;
}

export const generateDoctors = (n, dept) => {
    const doctorData = [];

    for (let i = 0; i < n; i++) {
      doctorData.push(generateDoctor(dept));
    }

    return doctorData;

  };
  