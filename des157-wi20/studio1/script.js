(function(){ 
    "use strict";

      // listen for the submission of the form
      document.getElementById("myform").addEventListener("submit", function(event){
        // prevent the default behavior
        event.preventDefault();

        // get all the text fields from the form
        const formData = document.querySelectorAll("input[type=text]");
        // create an array to hold values from the form
        const words = [];

        //loop through the fields and add the words to the array, one at a time.
        for( let i=0; i<formData.length; i++){
            words.push(formData[i].value);    
        }
        //You can see the array in the console, if you want...
        console.log(words);

        //run a function to put the words into the madlib... Function below...
        //Pass the array of words the user typed into the function
        makeMadLib(words);

    });

    //This function takes an array input, then constructs the madlib, peppering
        //in the user's words where necessary.
        function makeMadLib(theWords){
            const madlib = `I really like to eat hamburger, so I opened my own buger shop with my special cooking style. And I have special order list for customer to order burgers. Here are my order list for recommendation. I will ${theWords[0]} size for myself, and with ${theWords[1]} inside the burger. Next, I will have ${theWords[2]} with it,because it taste better. Also, I will chose the ${theWords[3]} to drink. Oh! The most important part is add the meat! Which is my favourite ${theWords[4]}.I done my own burger.However, it taste ${theWords[5]}!`;

            //Get the madlib container
            const mlContainer = document.getElementById('madlib');

            //Change the guts of the container to your madlib
            mlContainer.innerHTML = `<p>${madlib}</p>`;

            //change the class on the madlib container so you can see it.
            mlContainer.setAttribute("class", "visible");
        }



}());