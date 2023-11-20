import { faker } from "@faker-js/faker";

export const departmentNames = [
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
  
export const generateDepartments = () => {  

    const departmentDetails = departmentNames.map((department) => {
        return {
            id: faker.string.uuid(),
            name: department,
            image: faker.image.urlLoremFlickr({ category: 'doctors'  })
        }
    });

    return departmentDetails;
}