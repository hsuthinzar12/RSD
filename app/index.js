function a() {
  return "function A";
}

// function b() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("function B");
//     }, 2000);
//   });
// }

function b(x) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (x) resolve("function B");
      else reject("Something went wrong");
    }, 2000);
  });
}

function c() {
  return "function C";
}

// a();
// b();
// c();

// console.log(a());

// b().then(output => {
//   console.log(output);
//   console.log(c());
// });

// async function app(){
//     console.log(a());
//     console.log(await b());
//     console.log(c());
// }

// app();

async function app() {
  console.log(a());
  try {
    console.log(await b(false));
    console.log(c());
  } catch (e) {
    console.log(e);
  }
  console.log(c());
}

app();
