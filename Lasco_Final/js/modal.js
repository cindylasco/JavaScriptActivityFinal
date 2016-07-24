var students = { "studResume" : [
{ "name" : "Reymar", "image" : "male.png", "fullname" : "Reymar Taleon", "address" : "Mati City",  "gender" : "Male" , "emailAdd" : "ramyer.kaleidoscope@gmail.com" , "contactNo" : "09123456789"},
{ "name" : "Cindy", "image" : "female.png", "fullname" : "Cindy Lasco", "address" : "Mati City",  "gender" : "Female" , "emailAdd" : "cindylasco27@gmail.com" , "contactNo" : "09268885218"},
{ "name" : "Kevin", "image" : "male.png", "fullname" : "Kevin John Rivera", "address" : "Davao City",  "gender" : "Male" , "emailAdd" : "krivera@gmail.com" , "contactNo" : "09123456789"},
{ "name" : "Danver", "image" : "male.png", "fullname" : "Danver Palmiano", "address" : "Mati City",  "gender" : "Male" , "emailAdd" : "dan.palmiano@gmail.com" , "contactNo" : "09123456789"},
{ "name" : "Ed", "image" : "male.png", "fullname" : "Eduardo Santiago", "address" : "Tagum City",  "gender" : "Male" , "emailAdd" : "edsantiago@gmail.com" , "contactNo" : "09123456789"},
{ "name" : "Glester", "image" : "male.png", "fullname" : "Glester Dionaldo", "address" : "Bukidnon City",  "gender" : "Male" , "emailAdd" : "gdionaldop@gmail.com" , "contactNo" : "09123456789"},
{ "name" : "Jeffrey", "image" : "male.png", "fullname" : "Jeffrey Mocoy", "address" : "Davao City",  "gender" : "Male" , "emailAdd" : "jmocoy@gmail.com" , "contactNo" : "09123456789"}
]
} 

var resume = ""; 

for(i=0;i<students.studResume.length;i++)
{

 resume += "<div class='modal fade' id='"+students.studResume[i].name+"' role='dialog'>";
 resume += "<div class='modal-dialog'>";

 resume +=    	"<div class='modal-content'>";
 resume +=     			"<div class='modal-header'>";
 resume +=       			"<button type='button' class='close' data-dismiss='modal'>&times;</button>";
 resume +=       				"<h4 class='modal-title'>RESUME</h4>";
 resume +=    	 		"</div>";
 
 resume +=     				"<div class='modal-body'>";
 
 resume +=       					"<div class='panel panel-primary'>";
 resume +=									"<div class='panel-heading'>";
 resume +=										"<h3 class='panel-title'>PERSONAL INFORMATION</h3>"
 resume +=									"</div>";
 
 resume +=								"<div class='panel-body'>";
 resume +=									"<div class='col-xs-6 col-md-offset-3'>";
 resume +=										"<div class='text-xs-center'>";
 resume +=											"<img src='" + students.studResume[i].image + "' display= 'block' margin='auto' width='100%' class='img-thumbnail center-block'></img>";
 resume +=													"<br></br>";
 resume +=										"</div>";
 resume +=									"</div>";
 
 resume +=									"<div class='col-md-9'>";
 resume +=										"<tr>";
 resume +=											"<td><b>Name:   </b></td>";
 resume +=											"<td colspan='5'>" + students.studResume[i].fullname + "</td>";
 resume +=										"</tr></br>"; 
 
 resume +=										"<tr>";
 resume +=											"<td><b>Address:   </b></td>";
 resume +=											"<td colspan='5'>" + students.studResume[i].address + "</td>";
 resume +=										"</tr></br>";
 
 resume +=										"<tr>";
 resume +=											"<td><b>Gender:   </b></td>"
 resume +=											"<td colspan='5'>" + students.studResume[i].gender + "</td>";
 resume +=										"</tr></br>";
 
 resume +=										"<tr>";
 resume +=											"<td><b>Email Address:  </b></td>"
 resume +=											"<td colspan='5'>" + students.studResume[i].emailAdd + "</td>";
 resume +=										"</tr></br>";
 
 resume +=										"<tr>";
 resume +=											"<td><b>Contact Number:  </b></td>"
 resume +=											"<td colspan='5'>" + students.studResume[i].contactNo + "</td>";
 resume +=										"</tr></br>";
 
 resume +=									"</div>";
 resume +=								"</div>";
 resume +=						"</div>";
 
 resume +=     			"</div>";
 
 resume +=     		"<div class='modal-footer'>";
 resume +=       		"<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>";
 resume +=     		"</div>";
 
 resume +=   	"</div>";

 resume += "</div>";
 resume += "</div>";

}

var viewRes = document.getElementById('view_resume');
viewRes.innerHTML = resume;