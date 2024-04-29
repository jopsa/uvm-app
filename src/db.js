let categories = [
  {
    id: 2,
    name: 'Administración y Evaluación de Proyectos',
    icon: 'star',
    courses: [
      {
        id: 3,
        name: 'Basic english',
        language: 'english',
        chapters: [
          {
            id: 1,
            title: 'English test',
            theory: `Test your english level by answer the questions from the quiz`,
          },
        ],
        questions: [
          {
            question: 'He goes to his guitar lessons....',
            answers: [
              {
                answer: 'by underground',
                correct: true,
              },
              {
                answer: 'on underground',
                correct: false,
              },
              {
                answer: 'with underground',
                correct: false,
              },
              {
                answer: 'in underground',
                correct: false,
              },
            ],
          },
          {
            question: 'She .... Supper with us last Friday',
            answers: [
              {
                answer: 'hadn’t',
                correct: false,
              },
              {
                answer: 'no had',
                correct: false,
              },
              {
                answer: 'didn’t have got',
                correct: false,
              },
              {
                answer: 'didn’t have',
                correct: true,
              },
            ],
          },
          {
            question: 'We have to go to the supermarket ..... some bread and milk.',
            answers: [
              {
                answer: 'for getting',
                correct: false,
              },
              {
                answer: 'to get',
                correct: true,
              },
              {
                answer: 'to getting',
                correct: false,
              },
              {
                answer: 'for to get',
                correct: false,
              },
            ],
          },
          {
            question: 'Have you...?',
            answers: [
              {
                answer: 'got any friends in Barcelona',
                correct: true,
              },
              {
                answer: 'not got no friends in Barcelona',
                correct: false,
              },
              {
                answer: 'in Barcelona any friends',
                correct: false,
              },
              {
                answer: 'friends in Barcelona got',
                correct: false,
              },
            ],
          },
          {
            question: 'Every year,he goes to the coast for his holidays ....',
            answers: [
              {
                answer: 'in train',
                correct: false,
              },
              {
                answer: 'on train',
                correct: false,
              },
              {
                answer: 'by train',
                correct: true,
              },
              {
                answer: 'with train',
                correct: false,
              },
            ],
          },
          {
            question: 'Michael.........Paris in the morning',
            answers: [
              {
                answer: 'to leaving',
                correct: false,
              },
              {
                answer: 'leaves for',
                correct: false,
              },
              {
                answer: 'is leaving for',
                correct: true,
              },
              {
                answer: 'leave to',
                correct: false,
              },
            ],
          },
          {
            question: 'She has her German classes .. Tuesday mornings',
            answers: [
              {
                answer: 'in',
                correct: false,
              },
              {
                answer: 'at',
                correct: false,
              },
              {
                answer: 'by',
                correct: false,
              },
              {
                answer: 'on',
                correct: true,
              },
            ],
          },
          {
            question: 'That file belongs to Patricia, give it to ....',
            answers: [
              {
                answer: 'it',
                correct: false,
              },
              {
                answer: 'him',
                correct: false,
              },
              {
                answer: 'her',
                correct: true,
              },
              {
                answer: 'them',
                correct: false,
              },
            ],
          },
          {
            question: 'Pass ....',
            answers: [
              {
                answer: 'the salt to Tom',
                correct: true,
              },
              {
                answer: 'the Tom a salt',
                correct: false,
              },
              {
                answer: 'the salt at Tom',
                correct: false,
              },
              {
                answer: 'to Tom the salt',
                correct: false,
              },
            ],
          },
          {
            question: "He says he's been robbed. He can't find his wallet ....",
            answers: [
              {
                answer: 'not anywhere',
                correct: false,
              },
              {
                answer: 'nowhere',
                correct: false,
              },
              {
                answer: 'anywhere',
                correct: true,
              },
              {
                answer: 'somewhere',
                correct: false,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Redes IV',
    icon: 'md-add-circle',
    courses: [
      {
        id: 1,
        name: 'Trivia animals',
        language: 'english',
        chapters: [
          {
            id: 1,
            title: 'About',
            theory: `If you love big cats as much as Carole Baskin, know your amphibians from your reptiles and are clued up on mammals both big and small, then this animal quiz is for you.
            `,
          },
        ],
        questions: [
          {
            question: "Which is the only big cat that can't roar?",
            answers: [
              {
                answer: 'Cheetahs',
                correct: true,
              },
              {
                answer: 'Lions',
                correct: false,
              },
              {
                answer: 'Wild cats',
                correct: false,
              },
            ],
          },
          {
            question: 'What is the largest lang animal in the world?',
            answers: [
              {
                answer: 'Horses',
                correct: false,
              },
              {
                answer: 'Elephants',
                correct: true,
              },
            ],
          },
          {
            question: 'What is the wingspan of a bald eagle?',
            answers: [
              {
                answer: '5 feet',
                correct: false,
              },
              {
                answer: '8 feet',
                correct: true,
              },
            ],
          },
          {
            question: "What counts for 99 percent of a panda's diet?",
            answers: [
              {
                answer: 'Bamboo',
                correct: true,
              },
              {
                answer: 'Fish',
                correct: false,
              },
            ],
          },
        ],
      },
    ],
  },
];
export default categories;
