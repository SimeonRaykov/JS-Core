function templateFormat(questionsAndAnswers) {

    let text = `<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n`;

    function getQandA() {

        let currentQuestion = questionsAndAnswers[0];
        let currentAnswer = questionsAndAnswers[1];

        text += `<question>\n${currentQuestion}\n</question>\n`;
        text += `<answer>\n${currentAnswer}\n</answer>\n`;
        questionsAndAnswers.splice(0, 2);
        return text;
    }

    //  console.log(questionsAndAnswers.length);

    while (questionsAndAnswers.length > 0) {

        getQandA();

    }

    text += `</quiz>`;
    return text;
}

console.log(templateFormat(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]));