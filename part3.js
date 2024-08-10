const questions = {
    "What is the capital of France?": "Paris",
    "Who painted the Mona Lisa?": "Leonardo da Vinci",
    "What is the largest planet in our solar system?": "Jupiter",
    "Who wrote 'Romeo and Juliet'?": "William Shakespeare",
    "What is the powerhouse of the cell?": "Mitochondria",
    "What is the chemical symbol for water?": "H2O",
    "What is the nearest star to Earth?": "Sun",
    "What is the Earth's primary source of energy?": "Sun",
    "What is the process by which plants make their own food?": "Photosynthesis",
    "What is the study of the Earth's atmosphere called?": "Meteorology",
    "What is the smallest unit of matter?": "Atom",
    "What is the force that pulls objects toward each other?": "Gravity",
    "What is the process of a liquid turning into a gas at the surface of the liquid?": "Evaporation",
    "What is the hardest natural substance on Earth?": "Diamond",
    "What is the basic unit of life?": "Cell",
    "What is the SI unit of force?": "Newton",
    "What type of energy is stored in a battery?": "Chemical energy",
    "Which planet is known as the Red Planet?": "Mars",
    "What is the study of living organisms called?": "Biology",
    "What is the name for the lines that run from the North Pole to the South Pole on maps of the Earth?": "Meridians",
    "What is the chemical symbol for gold?": "Au",
    "What gas do plants breathe in?": "Carbon dioxide",
    "What is the process by which plants lose water through small openings in their leaves?": "Transpiration",
    "What is the chemical symbol for oxygen?": "O2",
    "What is the speed of light in a vacuum? (in meters per second)": "299,792,458",
    "What is the largest organ in the human body?": "Skin",
    "What is the name of the galaxy containing the Earth?": "Milky Way",
    "What is the densest planet in our solar system?": "Earth",
    "What is the process by which rocks are broken down into smaller pieces by physical or chemical means?": "Weathering",
    "What is the chemical symbol for sodium?": "Na",
    "What is the chemical symbol for potassium?": "K",
    "What is the study of the composition, structure, and properties of matter and the changes it undergoes called?": "Chemistry",
    "What is the branch of physics that deals with the behavior of very small particles such as atoms and subatomic particles?": "Quantum mechanics",
    "What is the study of earthquakes called?": "Seismology",
    "What is the process by which plants take in carbon dioxide and release oxygen?": "Photosynthesis",
    "What is the study of the Earth's physical structure and substance called?": "Geology",
    "What is the chemical symbol for iron?": "Fe",
    "What is the chemical symbol for silver?": "Ag",
    "What is the unit of electrical resistance?": "Ohm",
    "What is the process by which an animal's body changes over time called?": "Metamorphosis",
    "What is the term for the layer of gases surrounding the Earth?": "Atmosphere",
    "What is the chemical symbol for carbon?": "C",
    "What is the branch of science that deals with the study of the universe beyond Earth's atmosphere?": "Astronomy",
    "What is the force that causes objects to float in water?": "Buoyancy",
    "What is the largest organ inside the human body?": "Liver",
    "What is the process by which plants release water vapor into the air through pores in their leaves?": "Transpiration",
    "What is the chemical symbol for helium?": "He",
    "What is the chemical symbol for hydrogen?": "H",
    "What is the study of the behavior and properties of light called?": "Optics",
    "What is the study of fossils called?": "Paleontology",
    "What is the process by which plants and other organisms convert light energy into chemical energy?": "Photosynthesis",
    "What is the process by which rocks are worn away by the action of water, wind, or ice?": "Erosion",
    "What is the chemical symbol for calcium?": "Ca",
    "What is the chemical symbol for nitrogen?": "N",
};

function main() {
    const questionList = Object.entries(questions);
    const numQuestions = questionList.length;
    let score = 0;

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
            break;
        }
    }

    quizContainer.innerHTML += `<p>Quiz complete! You got ${score}/${numQuestions} questions correct.</p>`;
}

main();
