let student={
    name:'jahid hasan',
    districk:'netrokuna',
    roll:3,
     institute:
     {
     scname:'jhtp',
     position:'top top most top',
    }
}
// console.log(student);
// console.log(student.institute.position);

student.institute.scname='Jahangirpur';
delete student.institute.position;
console.log(student);
