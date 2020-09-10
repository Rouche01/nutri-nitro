export const surveyQuestions = {
    demography: [
        {
            question: 'What is your ideal weight that you want to reach?',
            dataKey: 'Ideal weight',
            answerType: 'TextInput',
            answerOptions: [],
            answerUnit: 'kg',
            extra: `<p><strong>Ideal Body Weight = (Height X Height) X 24.99</strong><br /> If it is too much work, you can <a href='/faq'>click here</a> for further clarity</p>`
        },
        {
            question: 'What is your height?',
            dataKey: 'Present height',
            answerType: 'TextInput',
            answerOptions: [],
            answerUnit: 'm',
        },
        {
            question: 'What is your weight?',
            dataKey: 'Present weight',
            answerType: 'TextInput',
            answerOptions: [],
            answerUnit: 'kg',
        },
        {
            question: 'What is your gender?',
            dataKey: 'Gender',
            answerType: 'SelectInput',
            answerOptions: ['Male', 'Female'],
            answerUnit: null,
        },
        {
            question: 'What is your age range?',
            dataKey: 'Age range',
            answerType: 'SelectInput',
            answerOptions: [
                '20s', '30s', '40s', '50s', '60s', '70+'
            ],
            answerUnit: null,
        },
        {
            question: 'What is your main reason for wanting to get fit?',
            dataKey: 'Motivational goal',
            answerType: 'SelectInput',
            answerOptions: [
                'Improve physical appearance', 'Engage more with family', 'Become healthier', 'Feel better day-to-day', 'Others'
            ],
            answerUnit: null,
        },
        {
            question: 'Which of the below best describes your current priorities?',
            dataKey: 'Plan priority',
            answerType: 'SelectInput',
            answerOptions: [
                'I am only focused on losing weight',
                "I want to stop looking skinny, so I want to gain some weight",
                "I'd like to gain some muscle while I lose fat",
                'Gaining muscle is more important to me than losing fat',
                'I want to gain enough weight to partcipate in some activities e.g games, sports',
                'I want to gain the right amount of weight that is healthy for me'
            ],
            answerUnit: null,
        },
        {
            question: 'Have you ever been diagnosed with or received treatment for diabetes?',
            dataKey: 'Diabetes patient',
            answerType: 'SelectInput',
            answerOptions: [ 'Yes', 'No'],
            answerUnit: null,
        },
        {
            question: 'Your environment plays a major role in your ability to lose weight. Which best describes the area you live in?',
            dataKey: 'Environment',
            answerType: 'SelectInput',
            answerOptions: [
                'Village', 'Town', 'Major City'
            ],
            answerUnit: null,
        }
    ],
    eatingHabits: [
        {
            question: 'Have any life events led to weight gain or weight loss in the last few years? Choose all that apply',
            dataKey: 'Life Event',
            answerType: 'CheckBox',
            answerOptions: [
                'Marriage or Relationship', 'Pregnancy', 'Sickness or Ailment', 'Busier Work', 'Stress or Mental Health', 'Medication or Hormonal Disorder', 'None of the above'
            ],
            answerUnit: null,
        },
        {
            question: 'How long has it been since you were at your ideal weight?',
            dataKey: 'Length of time from ideal weight',
            answerType: 'SelectInput',
            answerOptions: [
                '0 - 6 months', '6 - 12 months', '1 - 3 years', 'More than 3 years'
            ],
            answerUnit: null,
        },
        {
            question: 'Have you attempted any of the following in the past to help lose weight?',
            dataKey: 'Past Attempts',
            answerType: 'CheckBox',
            answerOptions: [
                'Paid meal plans', 'Restrictive dieting', 'Gym membership', 'Prescription medication or procedure', 'None of the above'
            ],
            answerUnit: null,
        },
        {
            question: 'Which of the following is most important for you to achieve?',
            dataKey: 'Priority Goal',
            answerType: 'SelectInput',
            answerOptions: [
                'I want to feel better', 'I want to feel more confident', 'I want to be more present and be a good role model for my family', 'I want to be physically and mentally healthy', 'I want to feel more in control of my choices and habits'
            ],
            answerUnit: null,
        },
        {
            question: 'Do you relate to the following statement? "I know what I should be doing to lose weight, but I need a way to do it that fits into MY life." ',
            dataKey: 'Knows what to do',
            answerType: 'SelectInput',
            answerOptions: [
                'Yes', 'No'
            ],
            answerUnit: null,
        },
        {
            question: 'Has your weight ever affected your ability to socialize or engage with friends and family?',
            dataKey: 'Weight Affects Socialize',
            answerType: 'SelectInput',
            answerOptions: [
                'Yes', 'Sometimes', 'No'
            ],
            answerUnit: null,
        },
        {
            question: 'Do you relate to the following statement? "I need some outside motivation. When I am feeling overwhelmed, it can be easy to give up."',
            dataKey: 'Need Motivation',
            answerType: 'SelectInput',
            answerOptions: [
                'Yes', 'No'
            ],
            answerUnit: null,
        },
        {
            question: 'Do you relate to the following statement? "I have been thinking about weight loss for a while, but life is so busy I find myself putting convenience first"',
            dataKey: 'Past Attempts',
            answerType: 'SelectInput',
            answerOptions: [
                'Yes', 'No'
            ],
            answerUnit: null,
        }
    ],
    
}

export const surveySection = [];

Object.keys(surveyQuestions).forEach((key, index) => {
    surveySection.push(key);
})


// export default surveyQuestions;