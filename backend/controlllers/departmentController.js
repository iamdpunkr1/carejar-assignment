const { faker } = require("@faker-js/faker")

const departmentNames = [
    "Cardiology",
    "Orthopedics",
    "Neurology",
    "Dermatology",
    "Pediatrics",
    "Oncology",
    "Gastroenterology",
    // "Obstetrics and Gynecology",
    // "Emergency Medicine",
    // "Psychiatry",
    // "Urology",
    // "Radiology",
    // "Internal Medicine",
    // "Endocrinology",
    // "Rheumatology",
    // "Pulmonology",
    // "Ophthalmology",
    // "Hematology",
    // "Allergy and Immunology",
    // "Nephrology",
  ];
  
const departmentDetails = departmentNames.map((department) => {
    return {
        id: faker.string.uuid(),
        name: department,
        image: faker.image.urlLoremFlickr({ category: 'doctors'  })
    }
})

const generateDepartments = (req, res) => {  

    try{

        res.status(200).json(departmentDetails)

    }catch(error){
        res.status(500).json({message: error.message})
    }
}

module.exports = {generateDepartments}