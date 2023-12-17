import type { Question } from './question';

// const url = '';

export async function reqTests(): Promise<Question[]> {
	// const resp = await fetch(url);
	// const data = await resp.json();
	const data = JSON.parse(`[
        {
            "questionText": "Що таке синус кута π/2?",
            "answers": ["1", "0", "2", "-2"],
            "trueAnswer": 1
        },
        {
            "questionText": "Які значення косинусу можливі для гострого кута?",
            "answers": ["0", "1", "2"],
            "trueAnswer": 1
        },
        {
            "questionText": "Які функції використовуються для обчислення протилежних сторін прямокутного трикутника?",
            "answers": ["синус", "тангенс", "косинус "],
            "trueAnswer": 2
        }
    ]
    
    `);
    console.log(data);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return data.map((d: any) => ({
		text: d.questionText,
		variants: d.answers,
		validVariantId: d.trueAnswer
	}));
}
