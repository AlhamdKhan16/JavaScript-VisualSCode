// const tinderUser = new Object()        // singleton
// or
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Alhamd"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "khan2gmail.com",
    fullname: {
        userfullname:{
        firstname: "Alhamd",
        lastname: "Khan"
    }
}
}
// console.log(regularUser.fullname.userfullname.firstname);

  const obj1 = {1: "a", 2: "b"}
  const obj2 = {3: "a", 4: "b"}
  const obj4 = {5: "a", 6: "b"}
//   const obj3 = {obj1, obj2}
//   const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
//   console.log(obj3);

   const users = [
    {
        id: 1,
        email: "ak@gmail.com"
    },
    {
        id: 1,
        email: "ak@gmail.com"
    },
    {
        id: 1,
        email: "ak@gmail.com"
    },  
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "Javascript",
    price: "999",
    courseInstructor: "Alhamd"
}
// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);

