<script>
	import '../styles/style.css';
</script>

<header class="header">
	<h1><a href="/" class="header__title-link">MADARS SPROGIS</a></h1>
	<h3 class="header__subtitle">a dude who likes taking pictures</h3>
</header>

<nav class="nav">
	<ul class="nav__list">
		<li class="nav__item"><a href="/photos" class="nav__link">PHOTOS</a></li>
		<li class="nav__item"><a href="/videos" class="nav__link">VIDEOS</a></li>
		<li class="nav__item"><a href="/graphic-design" class="nav__link">GRAPHIC DESIGN</a></li>
	</ul>
</nav>

<slot />

<style>
	/* Header styles */
	.header {
		background: #000000;
		color: #ffffff;
		padding: 10px 10px 5px;
		text-align: center;
		border-bottom: 5px solid #ffffff;
	}

	.header__title-link {
		color: inherit;
		text-decoration: none;
	}

	.header__title-link:hover {
		color: #aaa;
	}

	/* Navigation styles */
	.nav {
		background-color: #ffffff;
		padding: 10px;
		text-align: center;
	}

	.nav__list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		justify-content: center;
		gap: 2em;
	}

	.nav__item {
		position: relative;
	}

	.nav__link {
		color: #000000;
		text-decoration: none;
		font-weight: bold;
		font-size: 1.2em;
		padding: 0.5em 1em;
		transition:
			color 0.3s,
			background-color 0.3s;
	}

	.nav__link:hover {
		background-color: #000000;
		color: #ffffff;
		border-radius: 4px;
	}
</style>
