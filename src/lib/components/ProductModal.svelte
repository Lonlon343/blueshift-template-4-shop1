<script>
	import { onDestroy } from 'svelte';
	import ShoppingBag from 'lucide-svelte/icons/shopping-bag';
	import X from 'lucide-svelte/icons/x';
	import { addToCart } from '$lib/cart';

	/** @type {(event?: MouseEvent | KeyboardEvent) => void} */
	const defaultClose = () => {};
	let { product, onClose = defaultClose } = $props();
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

	/** @param {KeyboardEvent} event */
	function handleWindowKeydown(event) {
		if (event.key === 'Escape') onClose();
	}

	function handleClose() {
		onClose();
	}

	onDestroy(() => {
		clearTimeout(confirmationTimeout);
	});
</script>

<svelte:window onkeydown={handleWindowKeydown} />

<div class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
	<button
		type="button"
		aria-label="Popup schliessen"
		onclick={handleClose}
		class="absolute inset-0 bg-slate-900/50 backdrop-blur-[1px]"
	></button>

	<div
		class="relative z-10 max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-slate-200 bg-white shadow-2xl"
	>
		<div class="grid gap-0 lg:grid-cols-2">
			<div class="bg-slate-100">
				<img src={product.imageUrl} alt={product.name} class="h-full min-h-80 w-full object-cover" />
			</div>

			<div class="p-6 sm:p-8">
				<div class="mb-6 flex items-start justify-between gap-4">
					<div>
						<p class="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">{product.category}</p>
						<h2 class="mt-2 text-2xl font-semibold text-slate-900">{product.name}</h2>
					</div>
					<button
						type="button"
						onclick={handleClose}
						aria-label="Schliessen"
						class="rounded-full border border-slate-300 p-2 text-slate-600 transition-all duration-300 hover:border-[#003366] hover:text-[#003366]"
					>
						<X size={16} />
					</button>
				</div>

				<p class="text-sm leading-relaxed text-slate-600">{product.description}</p>

				<div class="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
					<p class="text-sm text-slate-500">Preis</p>
					<p class="mt-1 text-3xl font-semibold text-[#003366]">${product.price.toFixed(2)}</p>
				</div>

				<div class="mt-6 flex flex-wrap items-center gap-3">
					<button
						type="button"
						onclick={handleAddToCart}
						class="inline-flex items-center gap-2 rounded-xl bg-[#003366] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#00284f]"
					>
						<ShoppingBag size={16} />
						{isAdded ? 'Hinzugefuegt!' : 'In den Warenkorb'}
					</button>
					<button
						type="button"
						onclick={handleClose}
						class="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-slate-900 hover:text-slate-900"
					>
						Weiter shoppen
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
