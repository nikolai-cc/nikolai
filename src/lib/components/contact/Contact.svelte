<script>
	import Window from '$lib/components/window/Window.svelte';
</script>

<Window {...$$props}>
	<div class="content">
		<p>
			For inquiries, project ideas or collaborations, you can contact me by sending an email to <a
				href="mailto://hi@nikolai.cc">hi@nikolai.cc</a
			>.
		</p>
		<p>
			See also my open souce work <a href="https://github.com/nikolai-cc">on github</a>.
		</p>
	</div>
</Window>

<style>
	.content {
		padding: 1rem;
	}
</style>
