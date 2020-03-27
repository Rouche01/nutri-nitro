const surveyQuestions = [
    {
        question: 'What is your ideal weight that you want to reach?',
        dataKey: 'Ideal weight',
        answerType: 'TextInput',
        answerOptions: [],
        answerUnit: 'kg',
        section: 'demography'
    },
    {
        question: 'What is your height?',
        dataKey: 'Present height',
        answerType: 'TextInput',
        answerOptions: [],
        answerUnit: 'cm',
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

]

export default surveyQuestions;