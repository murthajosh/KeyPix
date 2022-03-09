$( document ).ready(function() {

    const noteC = `
    <div id="C" class="whiteKey C">
        <p class="whiteNoteName">C</p>
    </div>`;

    const noteD = `
    <div id="D" class="whiteKey D">
        <span class="blackKey Db">
            <p class="blackNoteName cD">D<sup>b</sup></p>
        </span>
        <p class="whiteNoteName">D</p>
    </div> `;

    const noteE = `
    <div id="E" class="whiteKey E">
        <span class="blackKey Eb">
            <p class="blackNoteName dE">E<sup>b</sup></p>
        </span>
        <p class="whiteNoteName">E</p>
    </div>`;

    const noteF = `
    <div id="F" class="whiteKey F">
        <p class="whiteNoteName">F</p>
    </div>`;

    const noteG = `
    <div id="G" class="whiteKey G">
        <span class="blackKey Gb">
            <p class="blackNoteName fG">G<sup>b</sup></p>
        </span>
        <p class="whiteNoteName">G</p>
    </div>`;

    const noteA = `
    <div id="A" class="whiteKey A">
        <span class="blackKey Ab">
            <p class="blackNoteName gA">A<sup>b</sup></p>
        </span>
        <p class="whiteNoteName">A</p>
    </div>`;

    const noteB = `
    <div id="B" class="whiteKey B">
        <span class="blackKey Bb">
            <p class="blackNoteName aB">B<sup>b</sup></p>
        </span>
        <p class="whiteNoteName">B</p>
    </div>
    `;

// Extend the range on the treble side
    $("#treble-extend").click(function() { 
        if ($(".keyBoard > div:last-child").is("#B")) {
            $(".keyBoard").append(noteC);
        } else if ($(".keyBoard > div:last-child").is("#C")) {
            $(".keyBoard").append(noteD);
        } else if ($(".keyBoard > div:last-child").is("#D")) {
            $(".keyBoard").append(noteE);
        } else if ($(".keyBoard > div:last-child").is("#E")) {
            $(".keyBoard").append(noteF);
        } else if ($(".keyBoard > div:last-child").is("#F")) {
            $(".keyBoard").append(noteG);
        } else if ($(".keyBoard > div:last-child").is("#G")) {
            $(".keyBoard").append(noteA);
        } else if ($(".keyBoard > div:last-child").is("#A")) {
            $(".keyBoard").append(noteB);
        } else {
            console.log('fuck you')
        }
    });

// Trim down the range ont he treble side by a step (to the nearest white key)
    $("#treble-trim").click(function() {
      $(".keyBoard").children().last().remove();
    });


// Extend the range on the bass side
    $("#bass-extend").click(function() {      
        if ($(".keyBoard > div:first-child").is("#C")) {
            $(".keyBoard").prepend(noteB);
        } else if ($(".keyBoard > div:first-child").is("#B")) {
            $(".keyBoard").prepend(noteA);
        } else if ($(".keyBoard > div:first-child").is("#A")) {
            $(".keyBoard").prepend(noteG);
        } else if ($(".keyBoard > div:first-child").is("#G")) {
            $(".keyBoard").prepend(noteF);
        } else if ($(".keyBoard > div:first-child").is("#F")) {
            $(".keyBoard").prepend(noteE);
        } else if ($(".keyBoard > div:first-child").is("#E")) {
            $(".keyBoard").prepend(noteD);
        } else if ($(".keyBoard > div:first-child").is("#D")) {
            $(".keyBoard").prepend(noteC);
        } else {
            console.log('fuck you')
        }
    });

// Trim down the range on the bass side
$("#bass-trim").click(function() {
    $(".keyBoard").children().first().remove();
    });


  // These functions change the key color. I had to attach the event to the document first then get more specific because otherwise user couldn't interact with any keys that had been appended *after the page load. This way makes it so even keys appended with 'extend range' can be interacted with.
    $(document).on('click', '.whiteKey,.natural-orange, .natural-blue', function (event) {
      var classes = ['natural-orange','natural-blue','whiteKey'];
      $(this).each(function(){
        this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
      });
    });


     // because the black keys are technically spans within white keys, this stops the click event from bubbling up to that white key parent  
    $(document).on('click', '.blackKey, .accidental-orange, .accidental-blue',function (e) {
      e.stopPropagation();
      var classes = ['accidental-orange','accidental-blue','blackKey'];
      $(this).each(function(){
        this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
      });
    });

// This changes the HTML within the blackNoteName <p> to allow the toggle between sharp keys and flat keys. 
    $("#accidental-toggle").change(function() {
        if(this.checked) {    
            $(".cD").html("C<sup>#</sup>");
            $(".dE").html("D<sup>#</sup>");
            $(".fG").html("F<sup>#</sup>");
            $(".gA").html("G<sup>#</sup>");
            $(".aB").html("A<sup>#</sup>");
          } else {
            $(".cD").html("D<sup>b</sup>");
            $(".dE").html("E<sup>b</sup>");
            $(".fG").html("G<sup>b</sup>");
            $(".gA").html("A<sup>b</sup>");
            $(".aB").html("B<sup>b</sup>");
        }
    });
  
});