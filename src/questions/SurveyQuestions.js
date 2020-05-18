const surveyQuestions = [
    {
        question: 'What is your ideal weight that you want to reach?',
        dataKey: 'Ideal weight',
        answerType: 'TextInput',
        answerOptions: [],
        answerUnit: 'kg',
        section: 'demography',
        extra: `<p><strong>Ideal Body Weight = (Height X Height) X 24.99</strong><br /> If it is too much work, you can <a href='/faq'>click here</a> for further clarity</p>`
    },
    {
        question: 'What is your height?',
        dataKey: 'Present height',
        answerType: 'TextInput',
        answerOptions: [],
        answerUnit: 'm',
        section: 'demography'
    },
    {
        question: 'What is your weight?',
        dataKey: 'Present weight',
        answerType: 'TextInput',
        answerOptions: [],
        answerUnit: 'kg',
        section: 'demography'
    },
    {
        question: 'What is your gender?',
        dataKey: 'Gender',
        answerType: 'SelectInput',
        answerOptions: ['Male', 'Female'],
        answerUnit: null,
        section: 'demography'
    },
    {
        question: 'What is your age range?',
        dataKey: 'Age range',
        answerType: 'SelectInput',
        answerOptions: [
            '20s', '30s', '40s', '50s', '60s', '70+'
        ],
        answerUnit: null,
        section: 'demography'
    },
    {
        question: 'What is your main reason for wanting to lose weight?',
        dataKey: 'Motivational goal',
        answerType: 'SelectInput',
        answerOptions: [
            'Improve physical appearance', 'Engage more with family', 'Become healthier', 'Feel better day-to-day', 'Other'
        ],
        answerUnit: null,
        section: 'demography'
    },
    {
        question: 'Which of the below best describes your current priorities?',
        dataKey: 'Plan priority',
        answerType: 'SelectInput',
        answerOptions: [
            'I am only focused on losing weight',
            "I'd like to gain some muscle while I lose fat",
            'Gaining muscle is more important to me than losing fat'
        ],
        answerUnit: null,
        section: 'demography'
    },
    {
        question: 'Have you ever been diagnosed with or received treatment for diabetes?',
        dataKey: 'Diabetes patient',
        answerType: 'SelectInput',
        answerOptions: [ 'Yes', 'No'],
        answerUnit: null,
        section: 'demography'
    },
    {
        question: 'Your environment plays a major role in your ability to lose weight. Which best describes the area you live in?',
        dataKey: 'Environment',
        answerType: 'SelectInput',
        answerOptions: [
            'Village', 'Town', 'Major City'
        ],
        answerUnit: null,
        section: 'demography'
    },
    {
        question: 'Your environment plays a major role in your ability to lose weight. Which best describes the area you live in?',
        dataKey: 'Environment',
        answerType: 'SelectInput',
        answerOptions: [
            'Village', 'Town', 'Major City'
        ],
        answerUnit: null,
        section: 'eating habits'
    }

]

export default surveyQuestions;