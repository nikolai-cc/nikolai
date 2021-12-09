<script>
	import Window from '$lib/components/window/Window.svelte';
	import Command from './Command.svelte';

	export let commands = [];
	let command;

	let input = (e) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			commands = [...commands, command.textContent];
			command.textContent = '';
			console.log(commands);
		}
	};
</script>

<Window title="terminal">
	<div id="content">
		<section id="commands">
			{#each commands as cmd}
				<Command>{cmd}</Command>
			{/each}
		</section>
		<section id="commandBox" on:click={() => command.focus()}>
			<Command>
				<span
					contenteditable
					spellcheck="false"
					id="command"
					bind:this={command}
					on:keydown={input}
				/>
			</Command>
		</section>
	</div>
</Window>

<style>
	#content {
		display: flex;
		flex-direction: column;
		height: 100%;
	}

	#commands {
		flex: 1;
		overflow-y: auto;
		padding: 8px;
	}

	#commandBox {
		flex: 0;
		display: flex;
		border-top: 1px dotted var(--color-green-dark);
		padding: 4px 8px 8px 8px;
		caret-color: var(--color-red);
	}

	#command {
		word-wrap: break-word;
		/* white-space: pre-wrap; */
		word-break: break-all;
		min-width: 4px;
	}

	#command:not(:focus-within)::after {
		content: '░';
		color: var(--color-red-dark);
		animation: blink 2s infinite;
		display: inline;
	}

	@keyframes blink {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
</style>
