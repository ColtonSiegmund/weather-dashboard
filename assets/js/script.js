
$('.inputBtn').on('click', function() {

var inputValue = $('.inputTxt').val();
localStorage.setItem("inputtext", inputValue);
console.log(inputValue);
});

