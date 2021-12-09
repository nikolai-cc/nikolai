<script>
	import Window from '$lib/components/window/Window.svelte';
	import Project from './Project.svelte';
	import projects from '$lib/content/projects.json';
	import { slide } from 'svelte/transition';

	let current = true;
</script>

<Window {...$$props}>
	<nav>
		<button on:click={() => (current = true)} class:active={current}>current</button>
		<button on:click={() => (current = false)} class:active={!current}>previous</button>
	</nav>
	{#if current}
		<div
			class="current content"
			in:slide={{ delay: 300, duration: 300 }}
			out:slide={{ delay: 0, duration: 300 }}
		>
			<p>I am currently involved in the following projects:</p>
			<div class="projects">
				{#each projects as project}
					{#if project.current}
						<Project {...project} />
					{/if}
				{/each}
			</div>
		</div>
	{:else}
		<div
			class="previous content"
			in:slide={{ delay: 300, duration: 300 }}
			out:slide={{ delay: 0, duration: 300 }}
		>
			<p>Previous projects include:</p>
			<div class="projects">
				{#each projects as project}
					{#if !project.current}
						<Project {...project} />
					{/if}
				{/each}
			</div>
		</div>
	{/if}
</Window>

<style>
	.content {
		padding: 1em;
	}

	.projects {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-around;
	}

	nav {
		display: flex;
		justify-content: space-around;
	}

	button {
		flex: 1;
		text-align: center;
		background-color: black;
		border-radius: var(--radius-inner);
		padding-bottom: 4px;
		margin: 4px;
		color: var(--color-green-dark);
	}

	button.active {
		border-top: none;
		background-color: transparent;
		color: var(--color-yellow-dark);
	}
</style>
