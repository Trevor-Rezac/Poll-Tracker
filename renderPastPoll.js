export function renderPastPoll(pastPoll) {
    const pastPollEl = document.createElement('div');
    const pastQuestionEl = document.createElement('p');
    const pastADiv = renderOption(pastPoll.optionATitle, pastPoll.optionAVotes);
    const pastBDiv = renderOption(pastPoll.optionBTitle, pastPoll.optionBVotes);

    pastPollEl.classList.add('past-poll-container');
    pastQuestionEl.classList.add('past-poll-question');
    
    pastQuestionEl.textContent = pastPoll.question;
    pastPollEl.append(pastQuestionEl, pastADiv, pastBDiv);
    
    return pastPollEl;
}

export function renderOption(title, votes) {
    
    const pastDiv = document.createElement('div');
    const pastTitleEl = document.createElement('p');
    const pastVotesEl = document.createElement('p');
    
    pastDiv.classList.add('past-container');
    pastTitleEl.classList.add('past-poll-title');
    pastVotesEl.classList.add('past-poll-votes');
    
    pastTitleEl.textContent = title;
    pastVotesEl.textContent = votes;

    pastDiv.append(pastTitleEl, pastVotesEl);
    
    return pastDiv;
}