// your code here!
function getAverageWordsPerSentence(text) {
    //looking for ending puncuation with .match. use g to search for all matches not just the first one
    var numSentences = text.match(/[.!?]+/g) ? text.match(/[.!?]+/g).length : 1;

    //tokenize means to break up the string into words
    var wordCount = tokenizeText(text).length;

    //.toFixed() converts a number into a string keeping a specified amount of decimals
    return (wordCount / numSentence).toFixed(2);
}

function getAverageWordLength(tokens) {

    //takes all of the tokens and combines them. then divides by the number of sentences
    var totalLength = tokens.join("").length;
    return (totalLength / numSentences);

}

function countDistinctWords(tokens) {
    //creates an array
    var distinctWords = [];

    //cycles through all the words and if the word is not there than add it to the array
    for (var i = 0; i < tokens.length; i++) {
        if (distinctWords.indexOf(tokens[i]) === -1) {
            distinctWords.push(tokens[i]);
        }
    }
    //returns the length of the array
    return distinctWords.length;
}

//breaks up the string 
function tokenizeText(text) {
    return text.toLowerCase().match(/\b[^\s]+\b/g).sort();
}

function reportOnText(text) {
    // tokenize our text then compute our data points

    var tokens = tokenizeText(text);
    var numDistinctWords = countDistinctWords(tokens);
    var numTotalWords = tokens.length;
    var averageWordLength = getAverageWordLength(tokens);
    var averageWordsPerSentence = getAverageWordsPerSentence(text);

    // take our data and display it in the dom
    var textReport = $('.js-text-report');
    textReport.find('.js-word-count').text(numTotalWords);
    textReport.find('.js-unique-word-count').text(numDistinctWords);
    textReport.find('.js-average-word-length').text(
        averageWordLength + " characters");
    textReport.find('.js-average-sentence-length').text(
        averageWordsPerSentence + " words");
    textReport.removeClass('hidden');
}

// Watch for and handle form submissions
function watchFormSubmission() {
    $('.js-text-form').submit(function(event) {
        event.preventDefault();
        // get the text the user submitted
        var userText = $(this).find('#user-text').val();
        reportOnText(removeReturns(userText));
    });
}

// equivalent to `$(document).ready(function() {...})`
$(function() {
    watchFormSubmission();
});
