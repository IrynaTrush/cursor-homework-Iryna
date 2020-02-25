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
  const getSubjects = (student) => {
    const {subjects} = student;
    const casedUp = Object.keys(subjects).map(subject => subject[0].toUpperCase() + subject.slice(1).toLowerCase());
    return casedUp.map(subject => subject.split('_').join(' '));
  }
  console.log(`Result of the getSubjects function is: ${getSubjects(students[0])}`);
 
  // task 2
  
  const getAverageMark = (student) => {
    const {subjects} = student;
  const values = Object.values(student.subjects).flatMap(el => el);
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
  return students.reduce((curr, prev) => getAverageMark(curr) > getAverageMark(prev) ? curr : prev ).name;
}
console.log(`Result of the getBestStudent function is: ${getBestStudent(students)}`);


// task 6
const calculateWordLetters = (str) => {
 const result = {};
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

