<script>
	import Face from '$lib/components/face/Face.svelte';
	import Text from '$lib/components/text/Text.svelte';
	import Projects from '$lib/components/projects/Projects.svelte';
	import Contact from '$lib/components/contact/Contact.svelte';
	import About from '$lib/content/about.md';

	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';

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
		<Face />
	{/if}
	{#if about}
		<Text title="about me" x={250} width={500} height={300}>
			<About />
		</Text>
	{/if}
	{#if projects}
		<Projects title="projects" y={300} />
	{/if}
	{#if contact}
		<Contact title="contact" x={300} y={300} />
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
