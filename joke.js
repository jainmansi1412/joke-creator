const jokes = document.querySelector('#joke');
const jokebtn = document.querySelector('.btns');


const generatejoke = () => {
    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }

    fetch('https://icanhazdadjoke.com', setHeader)
        .then((res) => res.json())
        .then((data) => {
            joke.innerHTML = data.joke;
        })
        .catch((error) => {
            console.log(error);
        })
}
jokebtn.addEventListener('mouseover', generatejoke);
generatejoke();

// not workin properly //

// const generatejokes = async () => {

//     try{

//          const setHeader = {
//           headers: { 
//             Accept : "application/json"
//          }
//     }

//     const res = await fetch('https://icanhazdadjoke.com' , setHeader);
//     const data = await res.json();
//     joke.innerHtml = data.joke;
// }
// catch(err){
//   console.log('the error is ${err}');
// }

// }  
// jokebtn.addEventListener('click', generatejokes);
// generatejokes();