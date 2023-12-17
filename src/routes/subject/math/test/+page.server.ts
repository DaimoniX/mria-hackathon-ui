import { reqTests } from '$lib/quiz/requestTests';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return { questions: await reqTests() };
}) satisfies PageServerLoad;
