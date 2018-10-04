function captureTheNumbers(text) {

   let finalText=text.join();
    let pattern = /[0-9]+/g;
    let numbersArr=finalText.match(pattern);
    console.log(numbersArr.join(" "));

}
captureTheNumbers(['The300',
    'What is that?',
    'I think it’s the 3rd movie.',
    'Lets watch it at 22:45']
);

captureTheNumbers(['123a456',
    '789b987',
    '654c321',
    '0']);
