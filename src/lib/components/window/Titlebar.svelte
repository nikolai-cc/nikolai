<script>
	import { createEventDispatcher } from 'svelte';
	import Dot from './Dot.svelte';
	const dispatch = createEventDispatcher();
</script>

<header>
	<nav>
		<Dot
			color="var(--color-red)"
			highlight="var(--color-red-light)"
			lowlight="var(--color-red-dark)"
			size={12}
			action={() => dispatch('red')}
		/>
		<Dot
			color="var(--color-yellow)"
			highlight="var(--color-yellow-light)"
			lowlight="var(--color-yellow-dark)"
			size={12}
			action={() => dispatch('yellow')}
		/>
		<Dot
			color="var(--color-green)"
			highlight="var(--color-green-light)"
			lowlight="var(--color-green-dark)"
			size={12}
			action={() => dispatch('green')}
		/>
	</nav>
	<h3>
		<slot />
	</h3>
</header>

<style>
	header {
		display: flex;
		height: 16px;
		margin: 4px;
		align-items: center;
		user-select: none;
		-webkit-user-select: none;
	}

	nav {
		width: 60px;
		display: flex;
	}

	h3 {
		color: var(--color-foreground);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		flex: 1;
		margin-left: 4px;
		margin-right: 60px;
		text-align: center;
	}
</style>
