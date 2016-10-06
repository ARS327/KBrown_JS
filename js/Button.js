function tryAgain() {
    document.getElementById("question").innerHTML = "Try Again!";
}

   var randomStrings = [
        "Do You Like Yellow?",
        "Do You Like Hillary?",
        "Is This Game Fun?", 
        "Is This Website Stupid?",
        "Do You Like Cats?",
        "Build The Wall?",
        "Do You Like Hillary?",
        "Do You Like Trump?", 
        "Do You Hate Children?",
        "Are You A Human?",
        "Can You MEME Well?",
        "Do You Love Art?",
        "Can We Keep Playing?", 
        "Do You Like Yourself?",
        "Is Pink Hot?",
    ];



    var randomDiv = document.getElementById("question");

    document.getElementById("myButton").addEventListener("click", function() {
          randomIndex = Math.ceil((Math.random()*randomStrings.length-1));
          newText = randomStrings[randomIndex];
          randomDiv.innerHTML = newText;
    });