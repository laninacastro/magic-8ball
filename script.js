
const affirmationsArray = ['You\'re hella worthy.', 'Share your light with someone new today', 'You are in your own lane. Don\'t compare yourself to others', 'I\'m so proud of you', 'Your skin is glistening.', 'Your ability to conquer challenges is limitless.', 'Overcome your fears and follow your dreams.', 'Feed your spirit. Train your body. Focus your mind. It\'s your time.', 'You will learn Javascript!', 'No one belongs here more than you.']

const myAffirmations = document.getElementById('affirmations');  
     myAffirmations.innerHTML = `
        <div>
            <p>    

            </p>
        </div>
    `
    //Generate random #
function randomOneOf(){
   var numberLimit=affirmationsArray.length 
    var randomNumber=Math.random() * 100
    var randomIndex=Math.floor(randomNumber)%numberLimit
    return affirmationsArray[randomIndex]
}

    
    function ask() {
        myAffirmations.innerHTML = `
        <div>
            <p>    
            ${randomOneOf()}
            </p>
        </div>
        `
    }

    document.getElementById('flowerBtn').onclick = ask;


