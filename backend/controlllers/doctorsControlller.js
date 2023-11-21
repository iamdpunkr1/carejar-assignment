const { faker } = require("@faker-js/faker")


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

const generateDoctors = (req, res) => {
    const {category} = req.params;
    const doctorData = [];

    try{
        for (let i = 0; i < 5; i++) {
          doctorData.push(generateDoctor(category));
        }

         res.status(200).json(doctorData)
    }catch(error){
        res.status(500).json({message: error.message})
    }

  }
  

  module.exports = {generateDoctors}