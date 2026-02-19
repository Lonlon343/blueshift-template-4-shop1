<script>
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { products } from '$lib/products';

	const menProducts = $derived(products.filter((product) => product.gender === 'men'));
</script>

<section class="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
	<div class="mb-10 flex flex-wrap items-center justify-between gap-4">
		<div class="flex items-center gap-4">
			<img
				src="/parfum/logo-main.jpeg"
				alt="Herren Kategorie Logo"
				class="h-16 w-16 rounded-full border border-slate-300 bg-slate-100 object-cover"
			/>
			<div>
				<p class="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">Parfum Boutique</p>
				<h1 class="mt-1 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Herren-Düfte</h1>
			</div>
		</div>
		<a
			href="/parfum/parfumkatalog.pdf"
			class="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-[#003366] hover:text-[#003366]"
		>
			Katalog ansehen
		</a>
	</div>

	<p class="mb-8 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
		Dunkle, holzige und markante Signaturen fuer Alltag, Business und Abend. Jede Karte fuehrt zur Detailseite mit weiteren Informationen.
	</p>

	<div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
		{#each menProducts as product (product.id)}
			<ProductCard {product} />
		{/each}
	</div>
</section>
