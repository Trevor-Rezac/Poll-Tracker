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

const pastPollsEl = document.querySelector('.past-polls');
// console.log(pastPollsEl);

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
    const poll = {
        question,
        optionATitle,
        optionAVotes,
        optionBTitle,
        optionBVotes
    };
// console.log(poll);

    // push that past poll to the pastPollsArr
    pastPollsArr.push(poll);
// console.log(pastPollsArr);

    //reset the state (to make a new empty current poll) 
    question = '';
    optionATitle = '';
    optionAVotes = 0;
    optionBTitle = '';
    optionBVotes = 0;

    //displays the reset DOM from above 
    questionEl.textContent = question;
    optionAEl.textContent = optionATitle;
    optionBEl.textContent = optionBTitle;
    optionAVotesEl.textContent = optionAVotes;
    optionBVotesEl.textContent = optionBVotes;

    //display the past poll in the past poll section 
    //first resetting the text content so no previous poll array shows
    pastPollsEl.textContent = '';

    //then loop through each poll in the pastPollArr and display the list
    for (let pastPoll of pastPollsArr) {
        const pastPollEl = document.createElement('div');
        const pastQuestionEl = document.createElement('p');
        const pastTitleAEl = document.createElement('p');
        const pastTitleBEl = document.createElement('p');
        const pastVotesAEl = document.createElement('p');
        const pastVotesBEl = document.createElement('p');

        pastPollEl.classList.add('past-poll-container');
        pastQuestionEl.classList.add('past-poll-question');
        pastTitleAEl.classList.add('past-poll-title-a');
        pastTitleBEl.classList.add('past-poll-title-b');
        pastVotesAEl.classList.add('past-poll-votes-a');
        pastVotesBEl.classList.add('past-poll-votes-b');

        pastQuestionEl.textContent = pastPoll.question;
        pastTitleAEl.textContent = pastPoll.optionATitle;
        pastTitleBEl.textContent = pastPoll.optionBTitle;
        pastVotesAEl.textContent = pastPoll.optionAVotes;
        pastVotesBEl.textContent = pastPoll.optionBVotes;

        pastPollsEl.append(pastPollEl, pastQuestionEl, pastTitleAEl, pastTitleBEl, pastVotesAEl, pastVotesBEl);
        console.log(pastPollEl);
    }
});

function displayCurrentPoll() {
    questionEl.textContent = question;
    optionAEl.textContent = optionATitle;
    optionBEl.textContent = optionBTitle;
    optionAVotesEl.textContent = optionAVotes;
    optionBVotesEl.textContent = optionBVotes;
}