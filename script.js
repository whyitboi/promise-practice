"use-strict";

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

const img = document.querySelector("img");
const btn = document.querySelector("button");
const search = document.getElementById("cats");

btn.addEventListener("click", () => {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=Us5GpUmeXpRsAjGlNW7xDR2tsZx18Ycu&s=" +
      search.value,
  )
    .then((respone) => {
      return respone.json();
    })
    .then((response) => {
      img.src = response.data.images.original.url;
      //   console.log(response.data.images);
    })
    .then((response) => {
      //checks HTTP valid code 200-299. If it is not any of these
      //an error is thrown
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

//https://api.giphy.com/v1/gifs/translate?api_key=Us5GpUmeXpRsAjGlNW7xDR2tsZx18Ycu&s=cats&rating=g
//"https://api.giphy.com/v1/gifs/translate?api_key=Us5GpUmeXpRsAjGlNW7xDR2tsZx18Ycu&s=cat", { mode: "cors" }
