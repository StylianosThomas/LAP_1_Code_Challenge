const foogleSearch = document.getElementById('foogleSearch');
const goToResult = document.getElementById('goToResult');
const searchBox = document.getElementById('searchBox');
const url = "http://localhost:3000/";

let userInput, resultlabel, resultUrl;

foogleSearch.addEventListener('click', e => {
    e.preventDefault();
    userInput = searchBox.value;
    fetch(`${url}${userInput}`)
        .then(resp => resp.json())
        .then(extractData)
        .then(displayData) 
        .catch(err => console.warn('Something went wrong: ', err))
});

function extractData (jsonData) {
    console.log(jsonData);
    console.log(userInput);
    resultlabel = jsonData[userInput].Label;
    resultUrl = jsonData[userInput].Url;
};

function displayData() {
    const displayScreen = document.getElementById('displayResults');
    displayScreen.innerText = `blah ${resultlabel} blah ${resultUrl} blah`;
};

goToResult.addEventListener('click', e => {
    e.preventDefault();
    userInput = 'random';
    console.log(`${url}${userInput}`)
    fetch(`${url}${userInput}`)
        .then()
        .catch(err => console.warn('Something went wrong: ', err))
});