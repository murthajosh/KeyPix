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
});