import { renderPastPoll } from './renderPastPoll.js';

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

const pastPollsEl = document.querySelector('.past-polls');

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

    displayCurrentPoll();
    form.reset();
});

closePollBtn.addEventListener('click', () => {
    
    //save a copy of state(now the "past" poll) in a variable called poll
    //refactored
    const poll = makePoll();

    // push that past poll to the pastPollsArr
    pastPollsArr.push(poll);

    //reset the state (to make a new empty current poll) 
    //refactored
    resetState();

    //displays the reset DOM from above 
    //refactored
    displayCurrentPoll();

    //display the past poll in the past poll section 
    //first reset the text content so no previous poll array shows
    //then loop through each poll in the pastPollArr and display the list
    //refactored
    pastPollsEl.textContent = '';
    for (let pastPoll of pastPollsArr) {
        const pastPollEl = renderPastPoll(pastPoll);
        pastPollsEl.append(pastPollEl);
    }
});

function displayCurrentPoll() {
    questionEl.textContent = question;
    optionAEl.textContent = optionATitle;
    optionBEl.textContent = optionBTitle;
    optionAVotesEl.textContent = optionAVotes;
    optionBVotesEl.textContent = optionBVotes;
}

function makePoll() {
    const poll = {
        question,
        optionATitle,
        optionAVotes,
        optionBTitle,
        optionBVotes
    };
    return poll;
}

function resetState() {
    question = '';
    optionATitle = '';
    optionAVotes = 0;
    optionBTitle = '';
    optionBVotes = 0;
}


