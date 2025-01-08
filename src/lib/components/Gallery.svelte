<script lang="ts">
	import { fade } from 'svelte/transition';

	export let images: any[] = [];

	let selectedImage: string | null = null;

	function openLightbox(src: any) {
		selectedImage = src;
	}

	function closeLightbox() {
		selectedImage = null;
	}

	// Close on escape key
	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && selectedImage) {
			closeLightbox();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<section id="gallery">
	<div class="gallery-grid">
		{#each images as image, index}
			<button
				class="gallery-item"
				on:click={() => openLightbox(image)}
				on:keydown={(e) => e.key === 'Enter' && openLightbox(image)}
				aria-label="Open image in lightbox"
			>
				<picture>
					<img
						src={image}
						srcset={`
							${image.replace('/upload/', '/upload/w_446,q_100/')} 446w,
							${image.replace('/upload/', '/upload/w_508,q_100/')} 508w,
							${image.replace('/upload/', '/upload/w_640,q_100/')} 640w,
							${image.replace('/upload/', '/upload/w_691,q_100/')} 691w
						`}
						sizes="(max-width: 691px) 100vw,
							(max-width: 1015px) 50vw,
							(max-width: 1339px) 33.33vw,
							25vw"
						alt=""
						class="gallery-item-img"
						loading={index < 3 ? 'eager' : 'lazy'}
					/>
				</picture>
			</button>
		{/each}
	</div>
</section>

{#if selectedImage}
	<div
		role="dialog"
		aria-modal="true"
		aria-label="Image lightbox"
		class="lightbox-overlay"
		transition:fade={{ duration: 100 }}
	>
		<button class="overlay-button" on:click={closeLightbox} aria-label="Close lightbox overlay">
		</button>
		<div class="lightbox-content">
			<button class="close-button" on:click={closeLightbox} aria-label="Close"> &times; </button>
			<img
				src={selectedImage}
				alt="Enlarged view"
				class="lightbox-img"
			/>
		</div>
	</div>
{/if}

<style>
	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 1.5rem;
		padding: 1.5rem;
	}

	.gallery-item {
		position: relative;
		aspect-ratio: 1;
		border-radius: 8px;
		overflow: hidden;
		cursor: pointer;
		border: none;
		padding: 0;
		background: none;
		transition: transform 0.3s ease;
	}

	.gallery-item-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease;
	}

	.gallery-item::before {
		content: '';
		position: absolute;
		inset: 0;
		background-color: rgba(0, 0, 0, 0);
		transition: background-color 0.3s ease;
		z-index: 1;
	}

	.gallery-item:hover::before {
		background-color: rgba(0, 0, 0, 0.3);
	}

	.gallery-item:hover .gallery-item-img {
		transform: scale(1.05);
	}

	.lightbox-overlay {
		position: fixed;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.9);
		z-index: 1000;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.lightbox-content {
		position: relative;
		max-width: 90vw;
		max-height: 90vh;
	}

	.lightbox-img {
		max-width: 100%;
		max-height: 90vh;
		object-fit: contain;
		border-radius: 4px;
	}

	.close-button {
		position: absolute;
		top: -40px;
		right: -40px;
		font-size: 30px;
		color: white;
		background: none;
		border: none;
		cursor: pointer;
		padding: 10px;
		transition: color 0.3s ease;
	}

	.close-button:hover {
		color: #ddd;
	}
</style>
