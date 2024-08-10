const socialScienceQuestions = {
    "What is the capital of France?": "Paris",
    "Who wrote 'The Wealth of Nations'?": "Adam Smith",
    "Who is known as the 'Father of Sociology'?": "Auguste Comte",
    "Who wrote the book 'Das Kapital'?": "Karl Marx",
    "What is the study of human societies and social behavior called?": "Sociology",
    "Who founded psychoanalysis, a clinical method for treating psychopathology through dialogue between a patient and a psychoanalyst?": "Sigmund Freud",
    "Which civilization is credited with the invention of writing using cuneiform script?": "Sumerians",
    "Who is considered the founder of modern psychology and established the first psychology research laboratory?": "Wilhelm Wundt",
    "Who proposed the theory of evolution by natural selection?": "Charles Darwin",
    "Who wrote 'The Communist Manifesto' with Karl Marx?": "Friedrich Engels",
    "What is the political theory advocating class war and leading to a society in which all property is publicly owned and each person works and is paid according to their abilities and needs?": "Communism",
    "Who is known for his theory of cognitive development in children?": "Jean Piaget",
    "What is the study of the production, distribution, and consumption of goods and services called?": "Economics",
    "Who wrote 'The Republic', a Socratic dialogue discussing justice and the ideal state?": "Plato",
    "Which city is considered the birthplace of democracy?": "Athens",
    "Who was the first woman to win a Nobel Prize and is known for her research on radioactivity?": "Marie Curie",
    "What is the theory that human development is influenced by factors such as genetics, parenting, experiences, and culture?": "Developmental psychology",
    "Who is known for his concept of the 'invisible hand' in economics?": "Adam Smith",
    "Who was the first African-American to become president of the United States?": "Barack Obama",
    "Who wrote 'The Communist Manifesto'?": "Karl Marx",
    "Which political ideology advocates for individual freedom and a limited government?": "Libertarianism",
    "Who is considered the 'Father of Modern Economics' and wrote 'The Wealth of Nations'?": "Adam Smith",
    "Which country was ruled by the fascist dictataor Benito Mussolini?": "Italy",
    "Who is known for his theory of psychosexual development in children?": "Sigmund Freud",
    "What is the economic system where the means of production are owned and controlled by private individuals or corporations?": "Capitalism",
    "Who was the first woman to fly solo across the Atlantic Ocean?": "Amelia Earhart",
    "Who is known for his theory of moral development in children?": "Lawrence Kohlberg",
    "What is the study of the past, particularly human history, called?": "History",
    "Who was the first woman to serve as Prime Minister of the United Kingdom?": "Margaret Thatcher",
    "Who was the leader of the Indian independence movement against British rule?": "Mahatma Gandhi",
    "Who was the first person to orbit the Earth?": "Yuri Gagarin",
    "What is the system of government in which power is held by the people, typically through elected representatives?": "Democracy",
    "Who is known for his theory of classical conditioning in psychology?": "Ivan Pavlov",
    "Which ancient civilization is credited with the invention of democracy?": "Ancient Greece",
    "Who was the first emperor of unified China and known for his Great Wall?": "Qin Shi Huang",
    "Who is known as the 'Father of the Constitution' for his role in drafting the United States Constitution?": "James Madison",
    "What is the economic theory that advocates for government intervention in the economy to promote social welfare?": "Keynesian economics",
    "Who was the first woman to win a Nobel Prize in Literature?": "Selma Lagerlöf",
    "Who was the first female Prime Minister of India?": "Indira Gandhi",
    "Who is known for his theory of operant conditioning in psychology?": "B.F. Skinner",
    "What is the economic system where the means of production are owned and controlled by the state?": "Socialism",
    "Who was the first woman to win a Nobel Prize in Chemistry?": "Marie Curie",
    "Who is known for his theory of relativity?": "Albert Einstein",
    "Who was the first President of the United States?": "George Washington",
    "Who is known as the 'Father of Modern Sociology'?": "Émile Durkheim",
    "What is the term for a government ruled by a king or queen?": "Monarchy",
    "Who was the leader of the Soviet Union during World War II?": "Joseph Stalin",
    "Who is known for his theory of cognitive development in children, which includes the concepts of assimilation and accommodation?": "Jean Piaget",
    "What is the economic theory that argues for minimal government intervention in the economy and emphasizes the importance of free markets?": "Laissez-faire economics",
    "Who was the first woman to win a Nobel Peace Prize?": "Bertha von Suttner",
    "Who is known for his theory of psychoanalysis and the concept of the Oedipus complex?": "Sigmund Freud",
};

function main() {
    const questionList = Object.entries(socialScienceQuestions);
    const numQuestions = questionList.length;
    let score = 0;

    // Shuffle the questions
    questionList.sort(() => Math.random() - 0.5);

    const quizContainer = document.getElementById('quiz');

    for (const [question, answer] of questionList) {
        const userAnswer = prompt(question);
        if (userAnswer !== null) {
            if (userAnswer.trim().toLowerCase() === answer.toLowerCase()) {
                score++;
                quizContainer.innerHTML += `<p><strong>${question}</strong><br>Correct!</p>`;
            } else {
                quizContainer.innerHTML += `<p><strong>${question}</strong><br>Incorrect! The correct answer is ${answer}.</p>`;
            }
        } else {
            // Handle user cancellation
            break;
        }
    }

    quizContainer.innerHTML += `<p>Quiz complete! You got ${score}/${numQuestions} questions correct.</p>`;
}

main();
