// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Dafaoui",
  middleName: "",
  lastName: "Mohammed Nabil",
  message: " Passionate about changing the world with technology.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/NabilDafaoui",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/nabil.daafaoui.1?locale=fr_FR",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/daf_nabil/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/nabil-dafaoui-111147273/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
// resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/monlogo.png"),
  imageSize: 375,
  message:
    "👨‍💻 Étudiant en Génie Logiciel, détenteur d'une Licence en Informatique. À la recherche de stages ou alternance pour appliquer mes compétences en développement logiciel dans des projets innovants.🚀Prêt à relever de nouveaux défis et à apporter une valeur ajoutée à toute équipe de développement logiciel axée sur l'excellence technique et l'innovation.",
 resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "nabildafaoui", 
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/monlogo.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/monlogo.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Architecture M.E.A.N", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 80 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 90 },
    { name: "JAVA", value: 80 },
    { name: "PHP SYMFONY" , value: 70},
    { name: "Programmation mobile" , value: 85 },
  ],
  softSkills: [
    { name: "Orientation vers les objectifs", value: 85 },
    { name: "Collaboration", value: 80 },
    { name: "Positivité", value: 75 },
    { name: "Adaptabilité", value: 90 },
    { name: "Résolution de problèmes", value: 85 },
    { name: "Autonomie", value: 75 },
    { name: "Organisation", value: 85 },
    { name: "Créativité technologique", value: 80 },
    { name: "Esprit critique", value: 85 },
    { name: "Curiosité intellectuelle", value: 90 },
    { name: "Communication efficace", value: 85 },
    { name: "Esprit d'équipe", value: 80 },
    { name: "Gestion du temps", value: 80 },
    { name: "Leadership", value: 75 },
    { name: "Résilience", value: 85 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Je suis actuellement à la recherche d'une alternance en génie logiciel à temps plein ! Si vous connaissez des postes disponibles, si vous avez des questions, ou si vous voulez simplement dire bonjour, n'hésitez pas à m'envoyer un email à",
  email: "daafaouinabil4@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Génie logiciel',
      companylogo: require('../assets/img/logoUM.png'),
      date: '2023 – Present',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
