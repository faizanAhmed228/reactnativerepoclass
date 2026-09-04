let student=[{sid:101,Name:"zeeshan",cgpa:3.01},
             {sid:105,Name:"Faizan",cgpa:3.7},
             {sid:108,Name:"Haris",cgpa:3.98}];


let searchCGPA=3.01;
let res=student.filter(s=>
    s.cgpa<=searchCGPA ? true:false
);
console.log(student);
console.log(res);