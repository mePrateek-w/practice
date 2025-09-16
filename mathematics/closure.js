// function closureTest() {
//   for (let i = 0; i < 3; i++) {
//     const log = () => {
//       console.log(i);
//     };

//     setTimeout(log, 100);
//   }
// }

// closureTest();

let teacher = "abc";

var myTeacher = function () {
  console.log(teacher);
};

teacher = "xyz";

myTeacher();
