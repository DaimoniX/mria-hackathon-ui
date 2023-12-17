<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import PImage from '$lib/PImage.svelte';

	let files: FileList;

	function goBack() {
		goto($page.url.pathname.substring(0, $page.url.pathname.lastIndexOf('/')));
	}
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<div class="card p-4 bg-white flex flex-col gap-4 min-w-[60vw]">
			<h1 class="h2">Завдання</h1>
			<!-- <input class="input" type="file" bind:value={files} placeholder="Оберіть зображення" />
			<button type="button" class="btn variant-filled-surface bg-blue-500" disabled={!files || files.length < 1}>
				Перевірити завдання
			</button> -->
			<PImage></PImage>
			<button type="button" class="btn variant-filled-surface bg-blue-500" on:click={goBack}>
				Назад
			</button>
		</div>
	</div>
</div>
