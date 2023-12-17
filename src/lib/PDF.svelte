<script lang="ts">
	import { FileDropzone } from '@skeletonlabs/skeleton';
	import { readAsArrayBuffer } from './utils';
	let files: FileList;


	async function readPdf(file: File) {
		const buffer = await readAsArrayBuffer(file);
		// @ts-ignore
		const pdfjs = await import('pdfjs-dist/build/pdf.mjs');
		// @ts-ignore
		const pdfjsWorker = await import('pdfjs-dist/build/pdf.worker.mjs');

		pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;

		const loadingTask = pdfjs.getDocument(buffer);
		const pdf = await loadingTask.promise;

		const maxPages = pdf.numPages;
		let pdfText = '';

		for (let i = 1; i <= maxPages; i++) {
			const page = await pdf.getPage(i);
			const textContent = await page.getTextContent();
			const pageText = textContent.items.map((textItem: { str: any }) => textItem.str).join(' ');
			pdfText += pageText + '\n';
		}

		return pdfText;
	}

	async function readFiles() {
		if (files.length < 1) return;
		data = await readPdf(files[0]);
	}

	let data = '';
</script>

<div class="flex flex-col gap-4 min-w-[30vw] mb-4">
	<FileDropzone name="image" bind:files>
		<svelte:fragment slot="message">Оберіть файл</svelte:fragment>
	</FileDropzone>
	<button
		type="button"
		class="btn variant-filled-error"
		on:click={readFiles}
		disabled={files == undefined || files.length < 1}
	>
		Прочитати PDF
	</button>
	{#if data}
		<p class="max-h-96 overflow-y-auto">
			{data.toString()}
		</p>
	{/if}
</div>
