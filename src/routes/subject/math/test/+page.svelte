<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import type { Question } from "$lib/quiz/question";
	import QuizQuestion from "$lib/quiz/quizQuestion.svelte";
	import { reqTests } from "$lib/quiz/requestTests";
	import { onMount } from "svelte";

	function goBack() {
		goto($page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/')));
	}

	let questions = [] as Question[];

	onMount(async () => {
		questions = await reqTests();
	});
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<div class="card p-4 bg-white flex flex-col gap-4 min-w-[90vw]">
			<h1 class="h2">Тест</h1>
			<div class="max-h-96 overflow-y-auto flex flex-col gap-4">
				{#each questions as question}
					<QuizQuestion question={question}></QuizQuestion>
				{/each}
			</div>
			<button type="button" class="btn variant-filled-surface bg-blue-500" on:click={goBack}>Назад</button>
		</div>
	</div>
</div>
