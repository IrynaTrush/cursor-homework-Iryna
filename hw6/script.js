const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];

  // task 1 
  const getSubjects = (array, index) => {
    const allNames = students.map(el => Object.values(el.name));
    const properName = allNames[index].join('');
    const allSubjects = students.map(el => Object.keys(el.subjects));
    const properSubjects = allSubjects[index];
    const preformated = properSubjects.map(el => (el.charAt(0).toUpperCase()+el.slice(1)).replace('_', ' '));
   return `${properName} has these subjects: ${preformated[0]}, ${preformated[1]} and ${preformated[2]}`;
  }
  console.log(`Result of the getSubjects function is: ${getSubjects(students, 0)}`);
 
  // task 2
  let[firstStudent] = students;
  const getAverageMark = (student) => {
  let values = Object.values(firstStudent.subjects).flatMap(el => el);
  return (values.flatMap(el => el).reduce((a , b) => a + b ) / values.length).toFixed(2);
  }
  console.log(`Result of the getAverageMark function is ${getAverageMark(students[0])}`);

  // task 3
  const getStudentInfo = (student) => {
   const {course, name} = student;
   const result = {
     course, 
     name, 
     averageMark: getAverageMark(student),
   };
   return result;
  }
  console.log(getStudentInfo(students[0]));

  // task 4
  const getStudentsNames = (students) => {
  return students.map((el, i) => students[i].name).sort();
}
console.log(`Result of the getStudentNames function is: ${getStudentsNames(students)}`);

// task 5
const getBestStudent = (students) => {
  let result = 0;
 let theBestStudent = students.map(el => getStudentInfo(el)).reduce((ac, item) => {
    if(result < item.averageMark) {
     ac = item.name;
    }
    return ac;
 }, '');
return theBestStudent;
}
console.log(`Result of the getBestStudent function is: ${getBestStudent(students)}`);


// task 6
const calculateWordLetters = (str) => {
 let result = {};
  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    if (!result[item]) {
      result[item] = 0;
    }
      result[item]++;
    }
  return result;
}
 console.log(calculateWordLetters("тест"))

