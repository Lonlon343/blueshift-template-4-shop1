<script>
	import { onDestroy } from 'svelte';
	import ShoppingBag from 'lucide-svelte/icons/shopping-bag';
	import { addToCart } from '$lib/cart';

	// Product card with direct checkout action and detail route.
	let { product } = $props();
	let isAdded = $state(false);
	/** @type {ReturnType<typeof setTimeout> | undefined} */
	let confirmationTimeout;

	function handleAddToCart() {
		addToCart(product);
		isAdded = true;

		clearTimeout(confirmationTimeout);
		confirmationTimeout = setTimeout(() => {
			isAdded = false;
		}, 1200);
	}

	onDestroy(() => {
		clearTimeout(confirmationTimeout);
	});
</script>

<article
	class="group w-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
>
	<div class="aspect-[4/3] overflow-hidden bg-slate-100">
		<a href={`/products/${product.id}`} class="block h-full">
			<img
				src={product.imageUrl}
				alt={product.name}
				loading="lazy"
				class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
			/>
		</a>
	</div>

	<div class="space-y-4 p-6">
		<p class="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">{product.category}</p>

		<div class="space-y-2">
			<h3 class="text-lg font-semibold text-slate-900">
				<a href={`/products/${product.id}`} class="transition-colors hover:text-[#003366]">{product.name}</a>
			</h3>
			<p class="text-sm leading-relaxed text-slate-600">{product.description}</p>
		</div>

		<div class="flex flex-wrap items-center justify-between gap-2 pt-2">
			<p class="text-lg font-semibold text-[#003366]">${product.price.toFixed(2)}</p>
			<div class="flex items-center gap-2">
				<a
					href={`/products/${product.id}`}
					class="rounded-full border border-[#003366] px-4 py-2 text-sm font-medium text-[#003366] transition-all duration-300 hover:bg-[#003366] hover:text-white"
				>
					Details
				</a>
				<button
					type="button"
					onclick={handleAddToCart}
					class="inline-flex items-center gap-2 rounded-full bg-[#003366] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-[#00284f]"
				>
					<ShoppingBag size={14} />
					{isAdded ? 'Hinzugefuegt!' : 'In den Warenkorb'}
				</button>
			</div>
		</div>
	</div>
</article>
