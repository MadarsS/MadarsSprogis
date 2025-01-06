<script lang="ts">
	import Gallery from '$lib/components/Gallery.svelte';

	const photoModules = import.meta.glob('/src/static/photos/*.webp', {
		eager: true,
		query: {
			enhanced: true
		}
	});

	const graphicsModules = import.meta.glob('/src/static/graphicdesign/*.webp', {
		eager: true,
		query: {
			enhanced: true
		}
	});

	const sortedImages = Object.entries(photoModules).sort((a, b) =>
		a[0].localeCompare(b[0], undefined, { numeric: true })
	);

    const sortedGraphics = Object.entries(graphicsModules).sort((a, b) =>
		a[0].localeCompare(b[0], undefined, { numeric: true })
	);



	const finalImages = sortedImages.map(([_path, module]: any) => module.default);
    const finalGraphics = sortedGraphics.map(([_path, module]: any) => module.default)

    const images = [...finalImages, ...finalGraphics]
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
