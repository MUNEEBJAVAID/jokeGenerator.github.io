// GET https://icanhazdadjoke.com/

const jokes = document.querySelector("#Joke");
const JokesBtn = document.querySelector("#jokeBtn");

// const generateJokes = () => {
//   const setHeader = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch("https://icanhazdadjoke.com", setHeader)
//     .then((fulfilled) =>  fulfilled.json())
//       .then((data) =>
//        jokes.innerHTML = data.joke )
//        .catch((reject) => {
//       console.log(reject);
//     })
// }

const generateJokes = async () => {
    try {
     
        const setHeader = {
            headers: {
                Accept : "application/json"
            }
        }
  
      const promise = await fetch("https://icanhazdadjoke.com", setHeader)
      const data = await promise.json();
  
      jokes.innerHTML = data.joke;
  
    } catch (error) {
      console.log(`The Error is ${error}`);
    }
  };
  
JokesBtn.addEventListener("click", generateJokes);
