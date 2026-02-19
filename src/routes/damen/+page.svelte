<script>
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products } from '$lib/products';

	const womenProducts = $derived(products.filter((product) => product.gender === 'women'));
</script>

<section class="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
	<div class="mb-10 flex items-center gap-4">
		<img
			src="/parfum/logo-women.jpeg"
			alt="Damen Kategorie Logo"
			class="h-16 w-16 rounded-full border border-pink-200 bg-pink-50 object-cover"
		/>
		<div>
			<p class="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Parfuem Boutique</p>
			<h1 class="mt-1 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Damen-Duefte</h1>
		</div>
	</div>

	<p class="mb-8 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
		Florale, elegante und moderne Kompositionen fuer eine klare Signatur. Alle Produkte sind als Mockup strukturiert und spaeter API-ready.
	</p>

	<div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
		{#each womenProducts as product (product.id)}
			<ProductCard {product} />
		{/each}
	</div>
</section>
