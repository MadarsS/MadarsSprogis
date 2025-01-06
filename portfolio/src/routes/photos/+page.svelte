<script>
  import Gallery from '$lib/components/Gallery.svelte';
  
  const photos = Array.from({ length: 19 }, (_, i) => `./photos/photo${i + 1}.webp`);
</script>

<!-- <Gallery images={photos} />  -->
