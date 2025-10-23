<script>
	import Face from '$lib/components/face/Face.svelte';
	import Text from '$lib/components/text/Text.svelte';
	import Projects from '$lib/components/projects/Projects.svelte';
	import Contact from '$lib/components/contact/Contact.svelte';
	import About from '$lib/content/about.md';

	import { onMount } from 'svelte';

	let face = false;
	let about = false;
	let projects = false;
	let contact = false;

	onMount(() => {
		setTimeout(() => {
			face = true;
		}, 500);

		setTimeout(() => {
			pW.$x = 300;
		}, 1000);

		setTimeout(() => {
			about = true;
		}, 3500);
		setTimeout(() => {
			projects = true;
		}, 3500);
		setTimeout(() => {
			contact = true;
		}, 3500);
	});
</script>

<div class="container">
	{#if face}
		<Face height={375} />
	{/if}
	{#if about}
		<Text title="about me" x={250} width={500} height={400}>
			<About />
		</Text>
	{/if}
	{#if projects}
		<Projects title="projects" x={75} y={350} width={300} height={300} />
	{/if}
	{#if contact}
		<Contact title="contact" x={400} y={300} width={300} />
	{/if}
</div>

<style>
	.container {
		margin: 0 auto;
		overflow: auto;
		height: 100%;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	.container::-webkit-scrollbar {
		display: none;
	}
</style>
