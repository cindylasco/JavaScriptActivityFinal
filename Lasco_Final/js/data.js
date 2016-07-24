var students = { "MIT" : [
{ "name" : "Reymar", "gender" : "Male" },
{ "name" : "Cindy", "gender" : "Female" },
{ "name" : "Kevin", "gender" : "Male" }
]
} 

var htmlStudents = "<thead><tr><th>Name</th><th>Gender</th><th>Action</th></tr></thead>";
for(i=0;i<students.MIT.length;i++)
{
htmlStudents+="<tbody>";

htmlStudents+="<td>"+ students.MIT[i].name+"</td>";
htmlStudents+="<td>"+ students.MIT[i].gender +"</td>";

}
htmlStudents += "</tbody>";

var tablemk1= document.getElementById('tablemk1');
tablemk1.innerHTML = htmlStudents;