$( document ).ready(function() {
    
    $(".whiteKey").click(function() {
        var classes = ['natural-orange','natural-blue','whiteKey'];
        $(this).each(function(){
          this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
        });
    });

    // because the black keys are technically spans within white keys, this stops the click event from bubbling up to that white key parent
    
    $("span.blackKey").click(function(e) {
        e.stopPropagation();
        var classes = ['accidental-orange','accidental-blue','blackKey'];
        $(this).each(function(){
          this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
        });
    });

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

    $("#treble-extend").click(function() {
      $(".keyBoard").append(ceChunk);
    });

    $("#treble-trim").click(function() {
      $(".keyBoard").children().last().remove();
    });

    jQuery(document).on('click', '.whiteKey,.natural-orange, .natural-blue', function (event) {
      var classes = ['natural-orange','natural-blue','whiteKey'];
      $(this).each(function(){
        this.className = classes[($.inArray(this.className, classes)+1)%classes.length];
      });
  });

});