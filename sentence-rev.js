function reverseSentence() {
    var phrase = document.getElementById("phrase").value;
    var filter = document.getElementById("filter").value;
    var count = 0;
    var splitWords = phrase.split(" "); 
    var result = "";

    for (var i = splitWords.length - 1; i >= 0; i--) {
        var word = splitWords[i];

        if (filter === "") {
            if (word !== "") {
                result += "<span class='word'>" + word + "</span> ";
            }
        } else {
            if (word.toUpperCase().includes(filter.toUpperCase())) {
                count++;
            } else {
                if (word !== "") {
                    result += "<span class='word'>" + word + "</span> ";
                }
            }
        }
    }
    document.getElementById("words").innerHTML = result.trim(); 
    document.getElementById("count").innerHTML = count + " word(s) filtered out";
    document.getElementById("phrase").value = "";
    document.getElementById("filter").value = "";
}
