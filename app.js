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
            <p class="blackNoteName">D<sup>b</sup></p>
        </span>
        <p class="whiteNoteName">D</p>
    </div>

    <div class="whiteKey E">
        <span class="blackKey Eb">
            <p class="blackNoteName">E<sup>b</sup></p>
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
                <p class="blackNoteName">G<sup>b</sup></p>
            </span>
            <p class="whiteNoteName">G</p>
        </div>

        <div class="whiteKey A">
            <span class="blackKey Ab">
                <p class="blackNoteName">A<sup>b</sup></p>
            </span>
            <p class="whiteNoteName">A</p>
        </div>

        <div class="whiteKey B">
            <span class="blackKey Bb">
                <p class="blackNoteName">B<sup>b</sup></p>
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

    $("#bass-trim").click(function() {
    $(".keyBoard").children().first().remove();
    $(".keyBoard").children().first().blackKey.remove();
    });

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

});