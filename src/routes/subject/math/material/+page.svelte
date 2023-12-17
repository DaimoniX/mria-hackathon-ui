<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { fetchAI } from '$lib/openAIAPI';
	import { questionFromString } from '$lib/quiz/question';
	import QuizQuestion from '$lib/quiz/quizQuestion.svelte';
	import { ProgressRadial } from '@skeletonlabs/skeleton';

	async function generateConspect() {
		if (loading) return;
		loading = true;
		conspect = '';
		test = [];
		const data = await fetchAI('Створи короткий конспект по тригонометрії');
		if (!data.choices || !data.choices[0]) {
			console.log('Error: ' + data);
			loading = false;
			return;
		}
		conspect = data.choices[0].message.content.toString().replaceAll('\n', '<br>');
		loading = false;
	}

	async function generateTest() {
		if (loading) return;
		loading = true;
		test = [];
		const data = await fetchAI(
			`Створи декілька питань по тригонометрії у заданому форматі і не пиши нічого крім цього, надай як мінімум три варіанти відповіді, не став нову лінію після ПИТАННЯ, формат - ПИТАННЯ : ВАРІАНТ_ВІДПОВІДІ_1; ВАРІАНТ_ВІДПОВІДІ_2; ... : НОМЕР_ПРАВИЛЬНОГО_ВАРІАНТУ`
		);
		if (!data.choices || !data.choices[0]) {
			console.log('Error: ' + data);
			loading = false;
			return;
		}
		console.log(data);
		test = data.choices[0].message.content.split('\n');
		loading = false;
	}

	let loading = false;
	let conspect = '';
	let test = [] as string[];

	function goBack() {
		goto($page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/')));
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<div class="card p-4 bg-white flex flex-col gap-4 min-w-[80vw] sm:min-w-[40vw]">
			<h2 class="h3">Тригонометрія</h2>
			<button
				on:click={generateConspect}
				type="button"
				class="btn variant-filled-surface bg-blue-500"
				disabled={loading}
			>
				Створити конспект
			</button>
			{#if conspect}
				<div class="card p-4 max-h-52 overflow-y-auto flex flex-col gap-4">
					{@html conspect}
				</div>
				<button
					on:click={generateTest}
					type="button"
					class="btn variant-filled-surface bg-blue-500"
					disabled={loading}
				>
					Створити тест
				</button>
				{#if test && test.length > 0}
					<div class="card p-4 max-h-52 overflow-y-auto flex flex-col gap-4">
						{#each test as question}
							<QuizQuestion question={questionFromString(question)}></QuizQuestion>
						{/each}
					</div>
				{/if}
			{/if}
			{#if loading}
				<div class="flex justify-center">
					<ProgressRadial />
				</div>
			{/if}
			<button type="button" class="btn variant-filled-surface bg-blue-500" on:click={goBack}>Назад</button>
		</div>
	</div>
</div>
