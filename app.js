$( document ).ready(function() {
    
    // $(".whiteKey").click(function() {
    //     var classes = ['natural-orange','natural-blue','whiteKey'];
    //     $(this).each(function(){
    //       this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
    //     });
    // });

    // because the black keys are technically spans within white keys, this stops the click event from bubbling up to that white key parent
    
    // $("span.blackKey").click(function(e) {
    //     e.stopPropagation();
    //     var classes = ['accidental-orange','accidental-blue','blackKey'];
    //     $(this).each(function(){
    //       this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
    //     });
    // });

  
    var ceChunk = `
    <div class="whiteKey C">
        <p class="whiteNoteName">C</p>
    </div>

    <div class="whiteKey D">
        <span class="blackKey Db">
            <p class="blackNoteName cD">D<sup>b</sup></p>
        </span>
        <p class="whiteNoteName">D</p>
    </div>

    <div class="whiteKey E">
        <span class="blackKey Eb">
            <p class="blackNoteName dE">E<sup>b</sup></p>
        </span>
        <p class="whiteNoteName">E</p>
    </div>
    `;

    var fbChunk = `
    <div class="whiteKey F">
            <p class="whiteNoteName">F</p>
        </div>

        <div class="whiteKey G">
            <span class="blackKey Gb">
                <p class="blackNoteName fG">G<sup>b</sup></p>
            </span>
            <p class="whiteNoteName">G</p>
        </div>

        <div class="whiteKey A">
            <span class="blackKey Ab">
                <p class="blackNoteName gA">A<sup>b</sup></p>
            </span>
            <p class="whiteNoteName">A</p>
        </div>

        <div class="whiteKey B">
            <span class="blackKey Bb">
                <p class="blackNoteName aB">B<sup>b</sup></p>
            </span>
            <p class="whiteNoteName">B</p>
        </div>
    `;
// These change the range on the treble side
    $("#treble-extend").click(function() {      
         $(".keyBoard").append(ceChunk);
    });

    $("#treble-trim").click(function() {
      $(".keyBoard").children().last().remove();
    });


// These change the range on the bass side
    $("#bass-extend").click(function() {      
      $(".keyBoard").prepend(fbChunk);
    });

// Removing the trim bass function. It leaves the black key overhang. It's also unncessary.
    // $("#bass-trim").click(function() {
    // $(".keyBoard").children().first().remove();
    // });

  // These functions change the key color. I had to attach the event to the document first then get more specific because otherwise user couldn't interact with any keys that had been appended *after the page load. This way makes it so even keys appended with 'extend range' can be interacted with.
    jQuery(document).on('click', '.whiteKey,.natural-orange, .natural-blue', function (event) {
      var classes = ['natural-orange','natural-blue','whiteKey'];
      $(this).each(function(){
        this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
      });
    });


     // because the black keys are technically spans within white keys, this stops the click event from bubbling up to that white key parent  
    jQuery(document).on('click', '.blackKey, .accidental-orange, .accidental-blue',function (e) {
      e.stopPropagation();
      var classes = ['accidental-orange','accidental-blue','blackKey'];
      $(this).each(function(){
        this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
      });
    });


    $("#accidental-toggle").change(function() {
        if(this.checked) {

            
            $(".cD").html("C<sup>#</sup>");
            $(".dE").html("D<sup>#</sup>");
            $(".fG").html("F<sup>#</sup>");
            $(".gA").html("G<sup>#</sup>");
            $(".aB").html("A<sup>#</sup>");

            



        } else {
            // $("sup").text("b"); 
            $(".cD").html("D<sup>b</sup>");
            $(".dE").html("E<sup>b</sup>");
            $(".fG").html("G<sup>b</sup>");
            $(".gA").html("A<sup>b</sup>");
            $(".aB").html("B<sup>b</sup>");
        }
    });
  
});