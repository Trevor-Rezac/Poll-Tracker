export function renderPastPoll(pastPoll) {
    const pastPollEl = document.createElement('div');
    const pastQuestionEl = document.createElement('p');
    const pastAEl = document.createElement('div');
    const pastTitleAEl = document.createElement('p');
    const pastVotesAEl = document.createElement('p');
    const pastBEl = document.createElement('div');
    const pastTitleBEl = document.createElement('p');
    const pastVotesBEl = document.createElement('p');

    pastPollEl.classList.add('past-poll-container');
    pastQuestionEl.classList.add('past-poll-question');
    pastAEl.classList.add('past-a-container');
    pastTitleAEl.classList.add('past-poll-title-a');
    pastVotesAEl.classList.add('past-poll-votes-a');
    pastBEl.classList.add('past-b-container');
    pastTitleBEl.classList.add('past-poll-title-b');
    pastVotesBEl.classList.add('past-poll-votes-b');

    pastQuestionEl.textContent = pastPoll.question;
    pastTitleAEl.textContent = pastPoll.optionATitle;
    pastVotesAEl.textContent = pastPoll.optionAVotes;
    pastTitleBEl.textContent = pastPoll.optionBTitle;
    pastVotesBEl.textContent = pastPoll.optionBVotes;

    pastAEl.append(pastTitleAEl, pastVotesAEl,);
    pastBEl.append(pastTitleBEl, pastVotesBEl,);
    pastPollEl.append(pastQuestionEl, pastAEl, pastBEl);

    return pastPollEl;
}