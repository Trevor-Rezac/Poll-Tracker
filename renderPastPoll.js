export function renderPastPoll(pastPoll) {
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
    pastVotesAEl.textContent = pastPoll.optionAVotes;
    pastTitleBEl.textContent = pastPoll.optionBTitle;
    pastVotesBEl.textContent = pastPoll.optionBVotes;

    pastPollEl.append(pastQuestionEl, pastTitleAEl, pastTitleBEl, pastVotesAEl, pastVotesBEl);

    return pastPollEl;
}