const url = '';

// REQ:
// {
// 	"id": 1,
// 	"sendImg": []
// }
// RES:
// {
// 	"feedback": "You are the best, or not"
// }

export async function hwFeedback(): Promise<string> {
	const resp = await fetch(url);
	const data = await resp.json();
	return data.feedback;
}
