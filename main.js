//* variabels List of variables

let heading = document.createElement("h1");
const laughButton = document.getElementById("laugh_button");
const inspireButton = document.getElementById("inspire_button");
let display = document.getElementById("display_text");
let author = document.createElement("p");

//* array
const inspireObject = {
  quotes: [
    "We cannot solve problems with the kind of thinking we employed when we came up with them.",
    "Learn as if you will live forever, live like you will die tomorrow.",
    "Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.",
    "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.",
  ],
  authors: [
    "Aloka Anthoney",
    "Aloka Anthoney",
    "Mark Twain",
    "Eleanor Roosevelt",
  ],
};

const laughObject = {
  quotes: [
    "I’m sick of following my dreams, man. I’m just going to ask where they’re going and hook up with ’em later.",
    "Gentlemen, you can’t fight in here. This is the war room",
    "My mother always used to say: The older you get, the better you get, unless you’re a banana",
    "Halloween is the beginning of the holiday shopping season. That’s for women. The beginning of the holiday shopping season for men is Christmas Eve",
  ],
  authors: [
    "Mitch Hedberg",
    "President Merkin Muffley (Peter Sellers), Dr. Strangelove",
    "Rose (Betty White), The Golden Girls",
    "David Letterman",
  ],
};

//* create heading content,author  and add styles  //

let headingStyles = {
  color: "green",
  "font-size": "3rem",
};
let authorStyles = {
  color: "rgb(37, 193, 37)",
  "font-size": "1rem",
  padding: "5px",
};
heading.innerHTML = "Find Your Motivation";
Object.assign(heading.style, headingStyles);
document.getElementsByClassName("header")[0].appendChild(heading);

Object.assign(author.style, authorStyles);
document.getElementsByClassName("message")[0].appendChild(author);

const getNumber = (obj) => {
  const randomNumber = Math.floor(Math.random() * obj["quotes"].length); //* get the array length inside the Object
  display.innerHTML = `${obj.quotes[randomNumber]}`;
  author.innerHTML = `${obj.authors[randomNumber]}`;
};

//* Add Event Listeners

// laughButton.addEventListener("click", () => {
//   console.log("click");
// });

laughButton.onclick = function () {
  getNumber(laughObject);
};

inspireButton.addEventListener("click", () => {
  getNumber(inspireObject);
});
