<script lang="ts">

</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<div class="card p-4 bg-white flex flex-col gap-4 min-w-[60vw]">
			<h2 class="h3">
				Сторінка вчителя
			</h2>
			<div class="grid grid-cols-3 gap-4">
				<div class="card p-8">
					<h3 class="h3 mb-5">
						Учні
					</h3>
					<div class="flex flex-col gap-4 max-h-96 overflow-y-auto">
						{#each Array(32).fill(0).map((_, i) => i + 1) as el}
							<p>
								Учень {el}
							</p>
						{/each}
					</div>
				</div>
				<div class="col-span-2 card p-16">
					<h3>

					</h3>
				</div>
			</div>
			<a href="/" type="button" class="btn variant-filled-surface bg-blue-500">На головну</a>
		</div>
	</div>
</div>
