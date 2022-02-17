// Create a div with an id of "affirmations" that you will insert the affirmations into using js

const myAffirmations = document.getElementById('affirmations');  {
    let innerHTML = `
        <div>
            <p>    

            </p>
        </div>
    `
}
debugger

// Create an "ask" function that when clicked, will choose a random string and insert it into your "affirmations" div

 
    function ask() {

        affirmationsArray= RandomOneOf(['You\'re hella worthy.', 'Share your light with someone new today', 'You are in your own lane. Don\'t compare yourself to others', 'I\'m so proud of you', 'Your skin is glistening.', 'Your ability to conquer challenges is limitless.', 'Overcome your fears and follow your dreams.', 'Feed your spirit. Train your body. Focus your mind. It\'s your time.', 'You will learn Javascript!', 'No one belongs here more than you.']);

        document.getElementById('askBtn').onclick = function ask();

        document.getElementById('affirmations'),innerHTML = 
            + affirmationsArray +
    }


