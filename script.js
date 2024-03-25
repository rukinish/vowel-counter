function countVowels() {

    var text = document.getElementById('input-text').value;
    var vowelCount = 0;

    text = text.toLowerCase(); // convert to lowercase for easier comparison

    for (var i = 0; i < text.length; i++) {
        var char = text.charAt(i);
        if (isVowel(char)) {
            vowelCount++;
        }
    }

    var result = document.getElementById('result');
    result.textContent = 'Number of Vowels: ' + vowelCount;
    
}

function isVowel(char) {
    
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char);

}