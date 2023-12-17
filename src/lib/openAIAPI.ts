import { PUBLIC_OPEN_AI_KEY } from "$env/static/public";

export const headers = new Headers({
	'Content-Type': 'application/json',
	Authorization: `Bearer ${PUBLIC_OPEN_AI_KEY}`
});

function buildBody(content: string) {
	return `{
                "model": "gpt-3.5-turbo",
                "messages": [{"role": "user", "content": "${content}"}],
                "temperature": 0.7
            }`;
}

export async function fetchAI(content: string) {
	const resp = await fetch('https://api.openai.com/v1/chat/completions', {
		headers,
		method: 'POST',
		body: buildBody(content)
	});
    return await resp.json();
}
