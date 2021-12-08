## HTML SET UP
💥 = add event listeners here

* create poll form
  - 3 inputs (question, option1, option2)
  - one create poll button >> **wrap these elements in a form tag**
    -Why? Allows user to create the question for their poll and the two option responses
    -How? 💥💥💥  add a 'submit' event listener on a FORM. updates the current poll question/options, reflect this in the DOM

  -  one close poll button
    - Why? Allows user to end the poll
    - How? 💥💥💥
      - Append the current poll to the past poll states []
      - "update the list" 
        * clear the DOM of the list
        * use a for loop to loop through all past polls and display each past poll in the list
      - clear out or reset the current poll state and DOM 

* current poll section
  - 3 empty divs that we will inject state into (question, options, and vote totals)
    - Why? Shows the current poll question, options, and vote buttons

  - two add buttons
   - option A add/vote
   - option B add/vote
      - Why? Allows user to increment their poll choice
      - How? 💥💥💥 add event listener 
        * increment++

  - two subtract buttons
   - option A undo/remove
   - option B undo/remove
    - Why? Allows users to decrement their poll choice
    - How? 💥💥💥 add event listener
      * decrement--

* closed poll section 
  - empty div for closed polls history/list (for appending to)
    - Why? a place to store the closed polls