const fs = require("fs");

const firstnames = [
  "Modson","Kofi","Aminata","Jean","Grace","Elom","Samuel","Rita","Aisha","Kevin",
  "Mireille","Thomas","Yao","Serge","Linda","Fabrice","Emmanuel","Sarah","Daniel","Cynthia"
];

const lastnames = [
  "Tande","Mensah","Doe","Kouassi","Johnson","Smith","Ameko","Adom","Brown","Agbeko",
  "Lawson","Kuma","Bello","Garba","Adele","King","Togbe","Koffi","Amuzu","Morgan"
];

const groupes = ["groupe1","groupe2","groupe3","groupe4","groupe5","groupe6"];

const programs = [
  "Artificial Intelligence",
  "Cyber Security",
  "Web Design",
  "Cloud Engineering",
  "Networking",
  "Data Science",
  "Software Development"
];

const genders = ["Male", "Female"];

function generateEmail(first, last, id) {
  return `${first.toLowerCase()}.${last.toLowerCase()}${id}@ipnetinstitute.com`;
}

let students = [];

for (let i = 1; i <= 500; i++) {
  const fname = firstnames[Math.floor(Math.random() * firstnames.length)];
  const lname = lastnames[Math.floor(Math.random() * lastnames.length)];

  students.push({
    id: i,
    firstname: fname,
    lastname: lname,
    groupe: groupes[Math.floor(Math.random() * groupes.length)],
    email: generateEmail(fname, lname, i),
    program: programs[Math.floor(Math.random() * programs.length)],
    year: 2025,
    gender: genders[Math.floor(Math.random() * genders.length)]
  });
}

fs.writeFileSync("students.json", JSON.stringify(students, null, 2));
console.log("Generated 500 students → students.json");
