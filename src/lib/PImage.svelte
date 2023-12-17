<script lang="ts">
	import { FileDropzone } from '@skeletonlabs/skeleton';
	import { readAsArrayBuffer } from './utils';
	let files: FileList;

	async function imageToText() {
		if(files.length < 1) return;
		const idata = await readAsArrayBuffer(files[0]);
		console.log(idata);
		data = idata.toString();
	}

    let data = '';
</script>

<div class="flex flex-col gap-4 min-w-[30vw]">
	<FileDropzone name="image" bind:files accept="image/jpeg">
		<svelte:fragment slot="message">Оберіть зображення</svelte:fragment>
	</FileDropzone>
	<button
		type="button"
		class="btn variant-filled-surface bg-blue-500"
		on:click={imageToText}
		disabled={!files || files.length < 1}
	>
		Перевірити
	</button>
	{#if data}
		<p>
			{ data }
		</p>
	{/if}
</div>
