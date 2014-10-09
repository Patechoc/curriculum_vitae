// TODO: convert experiences to images and hide text. When someone click on one,
// the page expands to show details
// -or-
// TODO: show small snippet of info at a glance in two columns for each entry
// onclick, expand details, give options for multimedia inclusion

var bio = {
  "name" : "Patrick Merlot",
  "role": "Developer",
  "contacts": {
    "mobile": "(+47) 48-35-16-53",
    "email": "patrick.merlot [at] gmail.com",
    "github": "Patechoc",
//    "twitter": "@johndoe",
    "location": "Oslo, Norway"
  },
  "welcomeMessage": "Keen on programming, science and innovative technologies!",
  "skills": [
    "Computational scientist", "Software developer", "IT engineer", "Data analysis", "Husband, father and Coffee powered"
  ],
  "bioPic": "images/picture_UiO.jpg"
}

var education = {
  "schools": [
    {
      "name": "University of Oslo",
      "location": "Oslo, Norway",
      "degree": "M.Sc. in Computational Physics",
      "majors": ["Physics & Computer Science"],
      "dates": 2009,
      "url": "http://comp-phys.net/"
    },
    {
      "name": "University of Aalborg",
      "location": "Aalborg, Denmark",
      "degree": "M.Sc. in Mobile Communication",
      "majors": ["Computer Engineering"],
      "dates": 2004,
      "url": "http://www.aau.dk/"
    },
    {
      "name": "ENSIETA (today ENSTA-Bretagne)",
      "location": "Brest, France",
      "degree": "Engineer/M.Sc. in Electronic Systems",
      "majors": ["Electrical Engineering & Computer Engineering"],
      "dates": 2004,
      "url": "http://www.ensta-bretagne.eu/"
    }
  ],
  "onlineCourses": [
    {
      "title": "JavaScript Crash Course",
      "school" : "Udacity",
      "dates": 2014,
      "url": "http://www.udacity.com/course/ud804"
    }
  ]
}

var work = {
  "jobs": [
    {
      "employer": "Centre for Theoretical and Computational Chemistry, University of Oslo",
      "title": "PhD Candidate in Computational Chemistry",
      "location": "Oslo, Norway",
      "dates": "Sept.2009 - July 2014",
      "description": "Development of theoretical methods for quantum mechanical systems. Implementation of numerical methods and software development. High-Performance Computing (HPC) calculations."
    },
    {
      "employer": "Alcatel-Lucent",
      "title": "Telecommunication Instructor",
      "location": "Lannion, France",
      "dates": "Jan.2005 - Aug.2007",
      "description": "Writing course material on the radio part of 3rd generation mobile phone systems (UMTS, HSDPA). Training employees and customers on the theory and the equipments of the 3G solution from Alcatel-Lucent (mixed solution between the former Alcatel, former Lucent and former Nortel 3G solutions)."
    },
    {
      "employer": "France Telecom R&D (today Orange Labs)",
      "title": "Research Engineer on 3G Mobile Networks",
      "location": "Paris, France",
      "dates": "Oct.-Dec. 2004",
      "description": "Development and evaluation of a Radio simulator to assess the efficiency of 4G technology (comparison HSDPA over UMTS vs OFDM), roaming, ..."
    },
    {
      "employer": "TNO Physics and Electronics Laboratory (TNO-FEL)",
      "title": "Trainee (2nd year internship at ENSIETA)",
      "location": "Den Haag, The Netherlands",
      "dates": "June-Sept. 2002",
      "description": "Optimization of a receiver for underwater acoustic communication using Direct Sequence Spread Spectrum Signals (aboard an awesome week trial in the Norwegian sea with 2 ships and a submarine)."
    }
  ]
}

var projects = {
  "projects": [
   {
      "title": "French Robotics competition E=M6",
      "dates": "Jan.-May 2002",
      "description": "Electronic project of 2nd year at ENSIETA: Designing, prototyping and testing of a robot competing against others following specific objectives and rules (2002 edition).",
      "images": [
        //"https://lh3.ggpht.com/23-sqOpOGqF06YX3BwIYPIXLX_Ma_clLXySKEHlphqlxr2l-PPbC80U8SjDi96KTWbNjKfY2Pdq_gyFK9A=s300#w=1757&h=1080",
        //"https://lh3.ggpht.com/23-sqOpOGqF06YX3BwIYPIXLX_Ma_clLXySKEHlphqlxr2l-PPbC80U8SjDi96KTWbNjKfY2Pdq_gyFK9A=s300#w=1757&h=1080"
      ]   
    },
    {
      "title": "Euromanager (The Global Management Challenge)",
      "dates": "Sept.2000 - April 2001",
      "description": "Extracurricular club during engineering school: An international competition of business strategy within the simulation model of a real economy. Operating a virtual company  on the virtual markets and making various decisions on marketing, production, HR and finance.",
      "images": [
        //"https://lh3.ggpht.com/23-sqOpOGqF06YX3BwIYPIXLX_Ma_clLXySKEHlphqlxr2l-PPbC80U8SjDi96KTWbNjKfY2Pdq_gyFK9A=s300#w=1757&h=1080",
        //"https://lh3.ggpht.com/23-sqOpOGqF06YX3BwIYPIXLX_Ma_clLXySKEHlphqlxr2l-PPbC80U8SjDi96KTWbNjKfY2Pdq_gyFK9A=s300#w=1757&h=1080"
      ]   
    }
  ]
}


// could create vars to save all of the complex object infos used in replace() methods
function displayHeader() {
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role)
  $("#header").prepend(formattedRole);

  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);

  // not sure why the spacing is off between contact info and contact category
  for (contact in bio.contacts) {
    var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
    formattedContact = formattedContact.replace("%contact%", contact);
    $("#topContacts").append(formattedContact);
  }

  var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
  $("#header").append(formattedPic);

  var formattedDescription = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedDescription);

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
  }

  // needs styling, currently flows outside of header on mobile resolution
  for (skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkill);
  }

}

function displayWork() {
  for (job in work.jobs) {
    // create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    // concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

function displayProjects() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

function displayEducation() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLworkEmployer.replace("%data%", education.schools[school].name);
    var formattedDegree = HTMLworkTitle.replace("%data%", education.schools[school].degree);
    var formattedSchoolHeader = formattedSchoolName + formattedDegree;
    $(".education-entry:last").append(formattedSchoolHeader);

    //deal with majors

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);

    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);

    // TODO: style better
    for (major in education.schools[school].majors) {
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
      $(".education-entry:last").append(formattedMajor);
    }
  }
  
  // $("#education").append(HTMLonlineClasses);

  // for (course in education.onlineCourses) {
  //   $("#education").append(HTMLschoolStart);

  //   var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
  //   var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
  //   var formattedOnlineHeader  = formattedTitle + formattedSchool;
  //   $(".education-entry:last").append(formattedOnlineHeader);
    
  //   var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
  //   $(".education-entry:last").append(formattedDates);

  //   // TODO: style better
  //   var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
  //   $(".education-entry:last").append(formattedURL);
  // }
}

function displayFooter() {
  for (contact in bio.contacts) {
    var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
    formattedContact = formattedContact.replace("%contact%", contact);
    $("#footerContacts").append(formattedContact);
  }
}

displayHeader();
displayWork();
displayProjects();
displayEducation();
displayFooter();

function inName(_name) {
  var name;
  if (_name) {
    name = _name;
  } else {
    name = bio.name;
  }
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);

// you want to see a map? here's a map.
$("#mapDiv").append(googleMap);
