<script lang="ts">
	import PImage from "$lib/PImage.svelte";
	import { questionFromString } from "$lib/quiz/question";
	import QuizQuestion from "$lib/quiz/quizQuestion.svelte";

	let qt = `Що таке синус? : функція, визначена для всіх дійсних чисел : 2\nЩо таке косинус? : функція, визначена для всіх дійсних чисел : 1\nЯк називається співвідношення між синусом та косинусом? : тригонометричний тотожність : 3\nЯк обчислити тангенс кута? : ділення синуса на косинус : 1\nЯк називається протилежний до синуса співвідношення? : косинус : 2`;
	const qs = qt.split('\n');
	// <QuizQuestion question={questionFromString("Яка є тангенс гострого кута прямокутного трикутника, якщо один з катетів дорівнює 4, а другий - 3? : 1, 0.75, 1.333 : 1")}></QuizQuestion>
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<div class="card p-4 bg-white">
			<PImage></PImage>
			<div class="max-w-2xl card p-4 max-h-52 overflow-y-auto flex flex-col gap-4">
				{#each qs as question}
					<QuizQuestion question={questionFromString(question)}></QuizQuestion>
				{/each}
			</div>
			<a href="/" type="button" class="btn variant-filled-surface bg-blue-500">На головну</a>
		</div>
	</div>
</div>
