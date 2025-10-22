<script>
	import Window from '$lib/components/window/Window.svelte';
	import { face } from '$lib/content/face.js';
	import { typewriter } from '$lib/transitions/typewriter';

	let containerWidth = 400;
	$: fontSize = containerWidth / 48;
	$: circleSize = fontSize * 10;

	let x = -1000;
	let y = -1000;

	let pointermove = (e) => {
		let bounds = e.target.getBoundingClientRect();
		x = e.clientX - bounds.left;
		y = e.clientY - bounds.top;
	};

	let pointerout = (e) => {
		x = -1000;
		y = -1000;
	};
</script>

<Window title="nikolai.cc" {...$$props}>
	<div class="face" bind:clientWidth={containerWidth}>
		<pre
			style="--fs: {fontSize}px; --x: {x}px; --y: {y}px; --cs: {circleSize}px;"
			on:pointermove={pointermove}
			on:pointerout={pointerout}
			in:typewriter={{ speed: 1 }}>
            {face}
        </pre>
	</div>
</Window>

<style>
	.face {
		width: 100%;
		position: relative;
	}

	pre {
		font-size: var(--fs);
		letter-spacing: -0.5px;
		margin: 8px auto;
		width: fit-content;
		position: relative;
	}

	pre::after {
		content: ' ';
		display: block;
		position: absolute;
		inset: 0;
		z-index: -1;
		background-image: url('/nikolai.jpg');
		background-size: cover;
		background-position: center top;
		-webkit-mask-image: radial-gradient(
			circle var(--cs) at var(--x) var(--y),
			rgba(33, 33, 33, 1) 0%,
			rgba(33, 33, 33, 0.8) 90%,
			rgba(33, 33, 33, 0) 100%
		);

		mask-image: radial-gradient(
			circle var(--cs) at var(--x) var(--y),
			rgba(33, 33, 33, 1) 0%,
			rgba(33, 33, 33, 0.8) 90%,
			rgba(33, 33, 33, 0) 100%
		);
	}
</style>
