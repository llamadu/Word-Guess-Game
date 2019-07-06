$(document).ready(function() {

	// Pick a category and secret word
    var categories = [
        ["confidence", "highlight", "world", "dream","practice", "shadow", "heart", "knife","happy", "splashes", "indication", "walking", "woods", "trees", "rabbits", "washing","brush", "brown", "umber", "green", "trunks", "friend", "canvas", "angles", "vision", "cotton", "rascals", "creator", "gray", "clouds", "sneaking","painting", "happiness", "leaves", "perfectly", "straight", "limb", "perfect", "whisper", "floating", "mountain", "waterfall", "happening", "bashful", "touch", "little", "gentle", "accidents", "learning", "experience", "excitement", "leaves"],
        ["magic", "unplanned", "fantastic", "equipment", "interesting", "enjoy", "gifts", "time", "paints", "feathering", "gloss", "marbling", "neutral", "picture", "pigment", "landscape", "thinner", "whitewash", "varnish", "turpentine", "coat", "stain", "blending", "strokes", "easel", "lake", "river", "bush", "shrub", "grass", "cabin", "wilderness", "birds", "yellow", "orange", "blue", "technique", "palette", "rocks", "highlight", "surface", "meadow", "gallery ", "glaze", "wash", "prime", "retouch", "floral", "wildlife", "beautiful", "everybody", "needs"],
        ["interesting", "wonderful", "exciting", "fantastic", "sunshine", "sunset", "peaceful", "tranquil", "quiet", "float", "creatures", "stories", "stream", "enjoy", "nature", "numbers", "campfire", "almighty", "freedom", "seasons", "winter", "alaska", "voice", "soft", "bucket", "reflection ", "talent", "rewardin", "express", "imagination", "experimenting", "believing", "secret", "instruction", "mistakes", "unlimited", "dark", "light", "rabbit", "absolutely", "crimson", "cadmium", "sienna", "black", "phthalo", "titanium", "ochre","pink", "mellow"]
    ];
    var randomCategoryArray = categories[Math.floor((Math.random() * categories.length))];
    var randomWord = (randomCategoryArray[Math.floor((Math.random() * randomCategoryArray.length))]).toUpperCase();
    console.log(randomWord);
    var randomWordArray = randomWord.split("");

    // Print category name
    if ($.inArray("confidence", randomCategoryArray) > -1) {
        $(".category").text("There's nothing wrong with having a tree as a friend.");
    } else if ($.inArray("magic", randomCategoryArray) > -1) {
        $(".category").text("Let's get crazy.");
    } else {
        $(".category").text("Believe that you can do it, 'cause you can do it.");
    }


	// Draw squares for secret word & hide letters
	for(var i = 0; i < randomWord.length; i++) {
        $('#container').append('<div class="letter ' + i + '"></div>');
        $('#container').find(":nth-child(" + (i + 1) + ")").text(randomWordArray[i]);
        $(".letter").css("color", "#4ABDAC");
    }

	// Button click function
    var wrongGuesses = 0;
    $("button").on("click", function(){
        $(this).addClass("used");
        $(this).prop("disabled", "true");
        var matchFound = false;

        // Check if clicked letter is in secret word
        var userGuess = $(this).text();
        for (var i = 0; i < randomWord.length; i++) {
            if (userGuess === randomWord.charAt(i)) {
                $('#container').find(":nth-child(" + (i + 1) + ")").css("color", "#EFEFEF").addClass("winner");
                matchFound = true;
            }
		}

        //Check for winner
        var goodGuesses = [];
        $(".letter").each(function( index ) {
            if ( $(this).hasClass("winner") ) {
                goodGuesses.push(index);
                if (goodGuesses.length === randomWordArray.length) {
                    $("#container").hide();
                    $("button").prop("disabled", "true");
                    $(".category").text("You guessed it! There's nothing in the world that breeds success like success.");
                    $(".category").append("<br><button enabled class='play-again'>Play again?</button>");
                }
            }
		});

        // If no match, increase count and add appropriate image
        if (matchFound === false) {
            wrongGuesses += 1;
            $("#painting").attr("src", "assets/images/" + wrongGuesses + ".png");
        }

        // If wrong guesses gets to 9 exit the game
        if (wrongGuesses === 9) {
            $("#container").hide();
            $("button").prop("disabled", "true");
            $(".category").text("There are no mistakes, just happy little accidents! The secret word was " + randomWord);
            $(".category").append("<br><button enabled class='play-again'>Play again?</button>");
        }

        // Play again button
        $(".play-again").on("click", function(){
            location.reload();
        });

    }); // End button click

}); // End document.ready
