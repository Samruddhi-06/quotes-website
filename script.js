const quotes = [
    {text:'To live is the rarest thing in the world. Most people exist, that is all.', author: 'Oscar Wilde'},
    {text:'That it will never come again is what makes life so sweet.', author: 'Emily Dickinson'},
    {text:'It is never too late to be what you might have been.', author: 'George Eliot'},
    {text:'Pain is inevitable. Suffering is optional.', author:'Haruki Murakami'},
    {text:'All the world is a stage, and all the men and women merely players.', author: 'William Shakespeare'},
    {text:'Be kind, for everyone you meet is fighting a hard battle.', author: 'Plato'},
    {text:'Unable are the loved to die for love is immortality.', author: 'Emily Dickinson,'},
    {text:'Let me live, love, and say it well in good sentences.' , author: 'Sylvia Plath'},
    {text:'Do not let your happiness depend on something you may lose.', author: 'C.S. Lewis'},
    {text:'Appreciation is a wonderful thing. It makes what is excellent in others belong to us as well.', author: 'Voltaire'},
    {text:'Get it down. Take chances. It may be bad, but it is the only way you can do anything really good.', author: 'William Faulkner'},
    {text:'Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen.', author: 'John Steinbeck'},
];   

const quoteE1 = document.getElementById('quote');
const authorE1 = document.getElementById('author');

function newQuote(){
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    quoteE1.textContent = `"${random.text}"`;
    authorE1.textContent = `-${random.author}`;
    console.log("New quote is updated");
}

function copyQuote() {
    const quote = quoteE1.textContent;
    const author = authorE1.textContent;
    const fullText = `${quote} ${author}`;

    navigator.clipboard.writeText(fullText)
        .then(() => {
            alert('Quote copied to clipboard!');
            console.log("Quote is copied");
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            alert('Failed to copy the quote.');
        });
}

let likeCount = 0;

function likeQuote(){
  likeCount++;
  document.getElementById("like-count").textContent = likeCount;
  console.log(`Quote is liked ${likeCount} times`);
}

/* 
  javascript has inbuilt speech synthesis API that allows you to convert text to speech.
  The SpeechSynthesisUtterance object represents a speech request.
  The speak() method of the SpeechSynthesis interface starts speaking the utterance.
  When speakQuote() is called:
  It grabs the current quote and author.
  It prepares the text for speech.
  The browser speaks it out loud.

  speechSynthesis is an built-in browser API to speak text
*/


function speakQuote(){
  const quote = `${quoteE1.textContent} ${authorE1.textContent}`;
  const speech = new SpeechSynthesisUtterance(quote);
  speechSynthesis.speak(speech);
  console.log("Quote is spoken");
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
}


function loadTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
  }
}

window.onload = () => {
    loadTheme();
    newQuote();
};