// import functions and grab DOM elements

const form = document.querySelector('form');
const addABtn = document.querySelector('#option-a-add');
const addBBtn = document.querySelector('#option-b-add');
const undoABtn = document.querySelector('#option-a-undo');
const undoBBtn = document.querySelector('#option-b-undo');
const closePollBtn = document.querySelector('#close-poll-btn');
const questionEl = document.querySelector('#poll-question');
const optionAEl = document.querySelector('#option-a-title');
const optionBEl = document.querySelector('#option-b-title');
const optionAVotesEl = document.querySelector('#option-a-votes');
const optionBVotesEl = document.querySelector('#option-b-votes');

const pastPollsEl = document.querySelector('#past-polls');

let question = '';
let optionATitle = '';
let optionAVotes = 0;
let optionBTitle = '';
let optionBVotes = 0;

const pastPollsArr = [];

addABtn.addEventListener('click', () => {
    optionAVotes++;
    optionAVotesEl.textContent = optionAVotes;
});

undoABtn.addEventListener('click', () => {
    optionAVotes--;
    optionAVotesEl.textContent = optionAVotes;
});

addBBtn.addEventListener('click', () => {
    optionBVotes++;
    optionBVotesEl.textContent = optionBVotes;
});

undoBBtn.addEventListener('click', () => {
    optionBVotes--;
    optionBVotesEl.textContent = optionBVotes;
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const pollData = new FormData(form);
    question = pollData.get('poll-question');
    optionATitle = pollData.get('option-a');
    optionBTitle = pollData.get('option-b');

    questionEl.textContent = question;
    optionAEl.textContent = optionATitle;
    optionBEl.textContent = optionBTitle;
    
    form.reset();
});