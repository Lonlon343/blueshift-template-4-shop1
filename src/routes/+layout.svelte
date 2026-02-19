<script lang="ts">
	import '../app.css';
	import { navigating } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';
	import Footer from '$lib/components/Footer.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased">
	<Navbar />

	<!-- Shared page container for all routes -->
	<main
		class={`flex-1 transition-all duration-300 ease-out ${navigating.to ? 'opacity-70 blur-[1px]' : 'opacity-100 blur-0'}`}
	>
		{@render children()}
	</main>

	<Footer />
</div>
