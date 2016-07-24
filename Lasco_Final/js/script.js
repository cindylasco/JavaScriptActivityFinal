//document.getElementById('title_heading').innerHTML = "My JavaScript Title Heading";
	//document.getElementById('subtitle').innerHTML= "My JavaScript Subtitle";
	//document.getElementById('tablemk').innerHTML= "<tr><th>Name</th><th>Gender</th></tr>" +
	//												"<tr><td>Reymar</td><td>Male</td></tr>" +
	//													"<tr><td>Cindy</td><td>Female</td></tr>" +
	//														"<tr><td>Kevin</td><td>Male</td></tr>";

	var title_heading = document.getElementById('title_heading');
	title_heading.innerHTML = "MIT - Web Design and Development";

	var subtitle = document.getElementById('subtitle');
	subtitle.innerHTML = "Student Profile";

	var subtitle1 = document.getElementById('subtitle1');
	subtitle1.innerHTML = "JavaScript Second Table";

	var tablemk = document.getElementById('tablemk');
	

	var row = 3;
	var col = 2;
	var arrNames = ['Reymar', 'Cindy', 'Kevin'];
	var arrGender = ['Male', 'Female', 'Male'];
	var index = 0;
	var html = "<thead><tr><th>Name</th><th>Gender</th></tr></thead>";
	html += "<tbody>";
	for(x=0;x<row;x++){
	  html+="<tr>";
//	  for(y=0;y<col;y++){
	  html+="<td>"+arrNames[index]+"</td>";
	  html+="<td>"+arrGender[index]+"</td>";
	//  }
	  html+="</tr>";
	  index++;
	}
	html += "</tbody>";
	tablemk.innerHTML = html;