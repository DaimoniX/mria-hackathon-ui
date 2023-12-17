<script lang="ts">
	import type { Question } from './question';

    let selected = 0;
    let answer = '';
    let disabled = false;
	export let question: Question;

    function check() {
        if(selected != question.validVariantId) {
            answer = 'Неправильно, спробуй ще раз!';
            return;
        }
        answer = 'Правильно!';
        disabled = true;
    }
</script>

<div class="card variant-ghost p-4 space-y-2">
	<p>
		{question.text}
	</p>

	<select class="select" bind:value={selected} disabled={disabled}>
        <option selected disabled>Оберіть варіант</option>
		{#each question.variants as variant, i}
			<option value={i + 1}>{variant}</option>
		{/each}
	</select>

	<button on:click={check} type="button" class="btn variant-filled-surface bg-blue-500" disabled={!selected || disabled}> Перевірити </button>

    {#if answer}
        <p>
            {answer}
        </p>
    {/if}
</div>
