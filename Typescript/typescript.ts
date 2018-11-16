interface Person1{
         name :String;
         Rollnumber:number;
         Marks:number;
    }
    
var students:Person1[]=[{name:'tanusha',Rollnumber:2,Marks:70},
{name:'alex',Rollnumber:5,Marks:80},
{name:'Karthi',Rollnumber:3,Marks:92},
{name:'Gayatri',Rollnumber:1,Marks:100},
{name:'medha',Rollnumber:4,Marks:67},
{name:'mosh',Rollnumber:6,Marks:76}];


console.log("Students Sorted based on Roll Number");
students.sort(function(a,b){ return a.Rollnumber-b.Rollnumber});
console.table(students);

console.log("Students Sorted based on Marks");
students.sort(function(a,b){ return a.Marks-b.Marks});
console.table(students);
