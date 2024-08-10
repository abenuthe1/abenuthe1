function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const question = `What is ${num1} ${operator} ${num2}? `;
    let answer;
    switch (operator) {
        case '+':
            answer = num1 + num2;
            break;
        case '-':
            answer = num1 - num2;
            break;
        case '*':
            answer = num1 * num2;
            break;
        case '/':
            answer = Math.floor(num1 / num2);
            break;
    }
    return { question, answer };
}

function main() {
    let score = 0;
    const numQuestions = 10;
    const timeLimit = 10;

    console.log("Welcome to the Math Game!");
    console.log("You'll be asked to solve some simple math problems.");

    let questionCount = 0;
    let intervalId;

    function displayQuestion() {
        if (questionCount < numQuestions) {
            const { question, answer } = generateQuestion();
            console.log(question);

            intervalId = setInterval(() => {
                clearInterval(intervalId);
                const userAnswer = prompt("Your answer:");
                const parsedAnswer = parseInt(userAnswer);
                if (!isNaN(parsedAnswer)) {
                    if (parsedAnswer === answer) {
                        console.log("Correct!");
                        score++;
                    } else {
                        console.log(`Incorrect! The correct answer is ${answer}.`);
                    }
                    questionCount++;
                    displayQuestion();
                } else {
                    console.log("Invalid input! Please enter an integer.");
                    displayQuestion();
                }
            }, timeLimit * 1000);
        } else {
            console.log(`Game over! Your final score is ${score}/${numQuestions}.`);
        }
    }

    displayQuestion();
}

main();
