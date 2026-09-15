"use strict";
//PROMISES

// const isTrue = false;
// const pr = new Promise((resolve, reject) => {
//   if (isTrue) {
//     resolve("Is True");
//   } else {
//     reject("Is False");
//   }
// });

// pr.then((message) => {
//   console.log("Resolved as: " + message);
// }).catch((message) => {
//   console.log("Rejected as: " + message);
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Done", 60000);
//   });
// })
//   .then((result) => {
//     console.log(result);
//   })
//   .finally(() => {
//     console.log("This is the End");
//   });

//WEB APIs
// const img = document.querySelector("img");
// const btn = document.querySelector("button");
// const search = document.getElementById("cats");

// btn.addEventListener("click", () => {
//   fetch(
//     "https://api.giphy.com/v1/gifs/translate?api_key=Us5GpUmeXpRsAjGlNW7xDR2tsZx18Ycu&s=" +
//       encodeURIComponent(search.value),
//   )
//     .then((response) => {
//       //checks HTTP valid code 200-299. If it is not any of these
//       //an error is thrown
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then((response) => {
//       img.src = response.data.images.original.url;
//       //   console.log(response.data.images);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

//ASYNC & AWAIT
const img = document.querySelector("img");
const btn = document.querySelector("button");
const search = document.getElementById("cats");
const server = {
  people: [
    {
      name: "Odin",
      age: 20,
    },
    {
      name: "Thor",
      age: 35,
    },
    {
      name: "Freyja",
      age: 29,
    },
  ],

  getPeople() {
    return new Promise((resolve, reject) => {
      // Simulating a delayed network call to the server
      setTimeout(() => {
        resolve(this.people);
      }, 2000);
    });
  },
};

btn.addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=Us5GpUmeXpRsAjGlNW7xDR2tsZx18Ycu&s=" +
        encodeURIComponent(search.value),
    );
    const gifData = await response.json();
    img.src = gifData.data.images.original.url;
  } catch (error) {
    console.error(error);
  }
});

async function doubleAfter2Seconds(x) {
  const response = setTimeout(x * 2, 2000);
  return response;
}

// async function getGifs() {
//   try {
//     const response = await fetch(
//       "https://api.giphy.com/v1/gifs/translate?api_key=Us5GpUmeXpRsAjGlNW7xDR2tsZx18Ycu&s=" +
//         encodeURIComponent(search.value),
//     );
//     const gifData = await response.json()
//     img.src = gifData.data.images.original.url
//   } catch (error) {
//     console.error(error);
//   }
// }
