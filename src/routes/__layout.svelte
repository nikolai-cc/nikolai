<script>
	import '$lib/css/reset.css';
	import '$lib/css/base.css';
</script>

<svelte:head>
	<title>nikolai.cc</title>
</svelte:head>

<main>
	<slot />
</main>

<style>
	main {
		width: 100%;
		height: 100%;

		background-image: url('/plant.jpg');
		background-size: cover;
		background-position: bottom right;
	}
</style>
