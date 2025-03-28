// Destructuring

const course = {
  courseName: "JavaScript",
  courseDurationInMonths: 3,
  courseInstructor: "Vinay Kumar Dubey",
};

// course.courseInstructor --> this was not very suitable for writing purposes evertime.

// New way of writing
//Way:1
// const {courseInstructor} = course;
// console.log(courseInstructor);
// way:2
// const {courseInstructor : Instructor} = course;
// console.log(Instructor);

// How Exactly this is used in

// if you have to use company in navbar then

// const navbar = (props.conglomerate) => {

// }
// navbar(conglomerate = "Unieshv");

// // this is how we use it in react
// React Concept of Destructuring
// const navbar = ({conglomerate}) => {
//     console.log(conglomerate);
// }
// navbar({conglomerate: "Unieshv"});

// APIs are nothing but JSON objects
// JSON is nothing but a string --> key is a string as well as value is a string
const api = {
  "link": "https://api.github.com/users/vinay22573",
  "login": "vinay22573",
  "id": 119327266,
  "type": "User",
  "user_view_type": "public",
  "name": "Vinay Kumar Dubey",
  "bio": "BTech Computer Science, IIITD'26",
  "public_repos": 21,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
};
