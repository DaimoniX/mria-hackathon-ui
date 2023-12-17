<script lang="ts">
	import { ProgressBar } from '@skeletonlabs/skeleton';

	const studentData = [
		{
			label: 'Історія',
			value: 93,
			info: ''
		},
		{
			label: 'Математика',
			value: 57,
			info: ''
		},
		{
			label: 'Фізика',
			value: 66,
			info: ''
		},
		{
			label: 'Хімія',
			value: 86,
			info: ''
		}
	].toSorted((a, b) => b.value - a.value);
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<div class="card p-4 bg-white flex flex-col gap-4 min-w-[60vw]">
			<h2 class="h3">Сторінка батьків</h2>
			<div class="grid grid-cols-2 gap-4">
				<div class="card p-8 flex flex-col gap-8">
					<h3 class="h3">Успішність учня</h3>
					<div class="grid grid-cols-2 gap-4 px-7">
						{#each studentData as data}
							<h4 class="h4">
								{data.label}
							</h4>
							<ProgressBar label="Progress Bar" value={data.value} max={100} />
						{/each}
					</div>
				</div>
				<div class="card p-16">
					<h3 class="h3 mb-4">Рекомендації</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra, massa non ultrices maximus, felis mi sagittis urna, sed mattis ipsum metus malesuada ex. Nunc condimentum mattis vestibulum. Phasellus auctor, orci sit amet posuere iaculis, leo diam tincidunt est, ac elementum purus nunc nec urna. Etiam leo dolor, sollicitudin eu aliquet eget, ullamcorper vel risus.
					</p>
				</div>
			</div>
			<a href="/" type="button" class="btn variant-filled-surface bg-blue-500">На головну</a>
		</div>
	</div>
</div>
