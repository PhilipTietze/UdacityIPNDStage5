

/*This is empty on purpose! Your code to build the resume will go here.
 */
//var name="Philip Tietze"
//var role="Front End Web Developer"
//var formattedName=HTMLheaderName.replace("%data%", name)
//var formattedRole=HTMLheaderRole.replace("%data%", role)
//$("#header").prepend(formattedName)
//$("#header").append(formattedRole)

	var bio={

				"name": "Philip Tietze",
				"role": "Front End Web Developer",
				"contacts": {
				"address": "6123 Dell Drive, Madison, Wisconsin 53718",
				"mobile" :"765-749-1973",
				"email": "Philip_Tietze@gmx.com",
				"location": "Madison"
				},	
				"skills": ["Front End Programming", "Python", "Javascript", "HTML", "CSS", "SQL"],
				"welcomeMessage": "Welcome to my interactive online resume!",
				"picture": "images/Philip.jpg"
					

};
var formattedName=HTMLheaderName.replace("%data%", bio.name);
var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
var formattedAddress=HTMLcontactGeneric.replace("%data%", bio.contacts.address);
var formattedMobilePhone=HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail=HTMLemail.replace("%data%", bio.contacts.email);
var formattedLocation=HTMLlocation.replace("%data%", bio.contacts.location);
var formattedPicture=HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMessage=HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedAddress);
$("#header").append(formattedMobilePhone);
$("#header").append(formattedEmail);
$("#header").append(formattedLocation);
$("#header").append(formattedPicture);
$("#header").append(formattedWelcomeMessage);

$("#header").append(HTMLskillsStart);
for (i=0; i<bio.skills.length; i++) {
	var formattedSkills=HTMLskills.replace("%data%", bio.skills[i]);
	$("#skills:last").append(formattedSkills);

}


var education={

	"schools": [
		
		{
			"name": "Indiana University",
			"location": "Bloomington, Indiana",
			"degree": "Bachelor of Music",
			"major": "Viola performance",
			"dates": "1975-1980, summer 1990",
			"website": "www.indiana.edu"
		},

		{
			"name": "University of Southern California",
			"location": "Los Angeles, California",
			"degree": "Master of Music, Pi Kappa Lambda",
			"major": "Viola performance",
			"dates": "1994-1996",
			"website": "www.usc.edu"
		}

	],

	"onlineCourses": [

		{
			"name": "Introduction to Programming Nanodegree",
			"school": "Udacity",
			"dates": "May 2015-present",
			"website": "www.udacity.com"
		}
	]
};

education.schools.display=function() {

	for (i=0; i<education.schools.length; i++) {

		$("#education").append(HTMLschoolStart);
		var formattedName=HTMLschoolName.replace("%data%", education.schools[i].name);
		var formattedDegree=HTMLschoolDegree.replace("%data%", education.schools[i].degree);
		var formattedDates=HTMLschoolDates.replace("%data%", education.schools[i].dates);
		var formattedLocation=HTMLschoolLocation.replace("%data%", education.schools[i].location);
		var formattedMajor=HTMLschoolMajor.replace("%data%", education.schools[i].major);
		var schoolAttributes=formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;
		$("#education").append(schoolAttributes);
	}

	
};

education.schools.display();

education.onlineCourses.display=function() {

for (i=0; i<education.onlineCourses.length; i++) {

		$("#education").append(HTMLonlineClasses);
		var formattedName=HTMLonlineTitle.replace("%data%", education.onlineCourses[i].name);
		var formattedSchool=HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
		var formattedDates=HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
		var formattedURL=HTMLonlineURL.replace("%data%", education.onlineCourses[i].website);
		var onlineCoursesAttributes=formattedName + formattedSchool + formattedDates + formattedURL;
		$("#education").append(onlineCoursesAttributes);

	}
};

education.onlineCourses.display();

var work={

	"jobs": [

		{
			"employer": "Badger Bus",
			"title": "Bus driver",
			"dates": "March 2016-present",
			"location": "Madison, Wisconsin",
			"description": "Transport special education students to and from school"
		},

		{
			"employer": "Madison area public schools",
			"title": "Substitute teacher",
			"dates": "October 2014-February 2016",
			"location": "Madison, Wisconsin",
			"description": "Teach various subjects as needed grades K-12 for Madison, Waunakee and Sun Prarie School districts"
		},

		{
			"employer": "Badger High School",
			"title": "Long term substitute orchestra director",
			"dates": "August 2014-October 2014",
			"location": "Lake Geneva, Wisconsin",
			"description": "Direct three string orchestras, teach class piano and advanced placement music theory"
		},

		{
			"employer": "School Distric of Beloit",
			"title": "Orchestra Director",
			"dates": "August 2013-June 2014",
			"location": "Beloit, Wisconsin",
			"description": "Direct two high school string orchestras and teach elementary school strings"
		},

		{
			"employer": "Zionsville Community High School",
			"title": "Orchestra director",
			"dates": "August 2012-June 2013",
			"location": "Zionsville, Indiana",
			"description": "Direct four string orchestras, conductor for school musical production"
		},

		{
			"employer": "Ball State University",
			"title": "Assistant Professor of Music Performance",
			"dates": "August 2003-May 2011",
			"location": "Muncie, Indiana",
			"description": "Teach studio viola, coach chamber music, teach music composition"
		},

		{
			"employer": "West Virginia University",
			"title": "Assistant Professor of Music Performance",
			"dates": "February 1997-May 2003",
			"location": "Morgantown, West Virginia",
			"description": "Teach studio violin and viola, string pedagogy and aural theory.  Director of chamber orchestra"
		}
	]
};

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer=HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle=HTMLworkTitle.replace("%data%", work.jobs[job].title);	
		var formattedDates=HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedLocation=HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDescription=HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var workAttributes=formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
		$("#workExperience").append(workAttributes);


	}
};	
displayWork();

var projects={

	"project": [

		{
			"title": "Movie website",
			"dates": "February 2016",
			"description": "Displays posters of favorite movies; clicking on poster plays movie trailer",
			"images": ["images/movieWebsite.jpg", "images/mediaPy.jpg", "images/myFavoriteMoviesPy.jpg"]
		},

		{
			"title": "Fill-in-the-blanks quiz", 
			"dates": "December 2015",
			"description": "Users are quizzed on programming terminology and prompted to fill in the blanks with the correct response",
			"images": ["images/fillInTheBlanksPy.jpg", "images/fillInTheBlanks2Py.jpg"]
		},

		{
			"title": "Building a website",
			"dates": "October 2015",
			"description": "Using HTML and CSS to create a simple website displaying material that was covered in Stage One of the IPND",
			"images": ["images/Website.jpg", "images/css.jpg", "images/HTML1.jpg", "images/HTML2.jpg", "images/HTML3.jpg", "images/HTML4.jpg", "images/HTML5.jpg", "images/HTML6.jpg"]
		},

		{
			"title": "Day of the year",
			"dates": "February 2016",
			"description": "Function takes as input month and day and returns the day of the year, i.e. February 1 yields 32" ,
			"images": ["images/dayOfTheYearPy.jpg"]
		}

	]

};

projects.display=function() {

		for (i=0; i<projects.project.length; i++) {

			$("#projects").append(HTMLprojectStart);
			var formattedTitle=HTMLprojectTitle.replace("%data%", projects.project[i].title);
			var formattedDates=HTMLprojectDates.replace("%data%", projects.project[i].dates);
			var formattedDescription=HTMLprojectDescription.replace("%data%", projects.project[i].description);
			if (projects.project[i].images.length>0) {
				for (image=0; image<projects.project[i].images.length; image++) {
				    if (image == 0) {
					var formattedImages=HTMLprojectImages.replace("%data%", projects.project[i].images[image]);
					} else{
					    var formattedImage=HTMLprojectImages.replace("%data%", projects.project[i].images[image]);
					    formattedImages += formattedImage;
					}
				}	
			}
        

		var projectAttributes=formattedTitle + formattedDates + formattedDescription + formattedImages;
		$(".project-entry:last").append(projectAttributes);

		
	}
};

projects.display();

$("#mapDiv").append(googleMap);






//var work={};

//work.position="Driver";
//work.company="Badger Bus";
//work.timeWorkedFor="1 month";
//work.city="Madison, Wisconsin";

//var education={};

//education["name"]="University of Southern California";
//education["dates"]="1994-1996";
//education["city"]="Los Angeles, California";

//var formattedPosition=HTMLworkTitle.replace("%data", work.position);
//var formattedSchoolName=HTMLschoolName.replace("%data", education.name);

//$("main").append(work.position);
//$("main").append(education["name"]);

