<script lang="ts">
	const cats = [
		{
			title: 'Математика',
			link: '/math'
		},
		{
			title: 'Фізика',
			link: ''
		},
		{
			title: 'Історія',
			link: ''
		},
		{
			title: 'Хімія',
			link: ''
		}
	];
</script>

<div class="space-y-10 text-center flex flex-col items-center">
	<div class="card p-4 bg-white">
		<h2 class="h3 mb-4">Демо версія</h2>
		<div class="grid grid-cols-2 gap-4">
			<div>
				<h2 class="h2 mb-4 mt-2">Предмети</h2>
				<div class="flex flex-col gap-4">
					{#each cats as cat}
						<a
							href={'/subject' + cat.link}
							type="button"
							class="btn variant-filled-surface bg-blue-500"
						>
							{cat.title}
						</a>
					{/each}
				</div>
			</div>
			<div class="card p-24 flex flex-col gap-4">
				<a href="/teacher" type="button" class="btn variant-filled-surface bg-blue-500">
					Сторінка вчителя
				</a>
				<a href="/parent" type="button" class="btn variant-filled-surface bg-blue-500">
					Сторінка батьків
				</a>
			</div>
		</div>
	</div>
</div>
