$(document).ready(() => {
    let phrase = $(".block").html();
    let comment = '';
    let comment_index = 1;

    // get selected text function
    getText = () => {
        if(document.getSelection){
            // If no Selection DO nothing
            if(document.getSelection().toString() != ""){

                // random hex color generator.
                // let randomColor = Math.floor(Math.random()*16777215).toString(16);

                let text = document.getSelection().toString(); //Selected text
                indexStart = phrase.search(text); // first index
                indexEnd = indexStart + text.length; // last index
                var txtRegex = new RegExp(text, "g"); // = /text/g but this doesnt work! it takes text as a string we need it as a variable.
                phrase = phrase.replace(txtRegex,"<span>" + phrase.slice(indexStart,indexEnd)+ " " + "<p>" + comment_index + "</p>" + "</span>");
                $("#cancel-btn").show(); // show Cancel Button that refreshs page. Everything will reset no database/backend involved
                $("#cancel-btn").click(() => {
                    location.reload();
                });

                $("#insert-comment").show(); // Show comment input area + Add btn

                // Click Add btn
                $("#add-btn").click(() => {
                    if($("#myComment").val() != ''){ // if no value DO nothing
                        var date = new Date(); // get Date
                        var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(); // Date formating
                        comment_index++; // index increment
                        comment = ($("#myComment").val());
                        $("#myComment").val(''); // Reset myComment value;
                        $("#no-comment").remove();
                        $(".ol-comment").append("<li>"+ comment+"- @"+ time +"</li>");
                        $(".block").html(phrase); // Pushing phrase that contains <span></span> to html page.
                    
                        // Giving a random color every time. Optional
                        // $('.index'+ comment_index).css( "background-color", "#"+randomColor);
                        $("span").css( "background-color", "#011936");
                        $("#insert-comment").hide(); // Hide comment input area + Add btn
                    }
                });
            } else {
                alert("Please Select Text.") // If no Text Selected!
            }
        }
    };
});