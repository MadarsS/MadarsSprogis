<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';
	import { photos, graphicdesign } from '$lib/images';

	const images = [...photos, ...graphicdesign];
</script>

<Gallery {images} />

<section id="about">
	<h2>Contact Me</h2>
	<h2>
		<a href="https://www.instagram.com/k0nc3ptc/" target="_blank" rel="noopener noreferrer"
			>k0nc3ptc</a
		>
	</h2>
</section>
