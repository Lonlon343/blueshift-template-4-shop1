<script>
	import { onDestroy } from 'svelte';
	import ShoppingBag from 'lucide-svelte/icons/shopping-bag';
	import Sparkles from 'lucide-svelte/icons/sparkles';
	import { addToCart } from '$lib/cart';

	let { data } = $props();
	const product = $derived(data.product);
	const related = $derived(data.related);
	const sectionAnchor = $derived(product.gender === 'women' ? '/#damen' : '/#herren');
	const genderLabel = $derived(product.gender === 'women' ? 'Damen-Duft' : 'Herren-Duft');
	const categoryLogo = $derived(product.gender === 'women' ? '/parfum/logo-women.jpeg' : '/parfum/logo-main.jpeg');

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

<section class="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
	<a
		href={sectionAnchor}
		class="mb-8 inline-flex items-center rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:border-[#003366] hover:text-[#003366]"
	>
		Zurueck zum Shop
	</a>

	<div class="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
		<div class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
			<img src={product.imageUrl} alt={product.name} class="h-full min-h-[420px] w-full object-cover" />
		</div>

		<div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
			<div class="mb-6 flex items-center gap-3">
				<img src={categoryLogo} alt={genderLabel} class="h-10 w-10 rounded-full border border-slate-300 object-cover" />
				<div>
					<p class="text-xs uppercase tracking-[0.18em] text-slate-500">{genderLabel}</p>
					<p class="text-sm font-medium text-slate-700">{product.category}</p>
				</div>
			</div>

			<h1 class="text-3xl font-semibold tracking-tight text-slate-900">{product.name}</h1>
			<p class="mt-4 text-base leading-relaxed text-slate-600">{product.description}</p>

			<div class="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
				<p class="text-sm text-slate-500">Preis</p>
				<p class="mt-1 text-3xl font-semibold text-[#003366]">${product.price.toFixed(2)}</p>
			</div>

			<div class="mt-6 flex flex-wrap gap-3">
				<button
					type="button"
					onclick={handleAddToCart}
					class="inline-flex items-center gap-2 rounded-xl bg-[#003366] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#00284f]"
				>
					<ShoppingBag size={16} />
					{isAdded ? 'Hinzugefügt!' : 'In den Warenkorb'}
				</button>
				<a
					href="/checkout"
					class="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 hover:border-[#003366] hover:text-[#003366]"
				>
					Zum Checkout
				</a>
			</div>

			<div class="mt-8 rounded-2xl border border-slate-200 bg-white p-4">
				<p class="mb-3 text-sm font-medium text-slate-700">Duftcharakter</p>
				<ul class="space-y-2 text-sm text-slate-600">
					<li class="inline-flex items-center gap-2">
						<Sparkles size={14} class="text-[#003366]" />
						Hoher Duftölanteil für lange Haltbarkeit
					</li>
					<li class="inline-flex items-center gap-2">
						<Sparkles size={14} class="text-[#003366]" />
						Entwickelt fuer klare Präsenz im Alltag und am Abend
					</li>
					<li class="inline-flex items-center gap-2">
						<Sparkles size={14} class="text-[#003366]" />
						Boutique Mockup mit späterer API-Anbindung vorbereitet
					</li>
				</ul>
			</div>
		</div>
	</div>

	{#if related.length > 0}
		<section class="mt-14">
			<h2 class="text-2xl font-semibold text-slate-900">Aehnliche Duefte</h2>
			<div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each related as item (item.id)}
					<a
						href={`/products/${item.id}`}
						class="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
					>
						<img src={item.imageUrl} alt={item.name} class="h-44 w-full object-cover transition duration-500 group-hover:scale-105" />
						<div class="space-y-2 p-5">
							<p class="text-xs uppercase tracking-[0.18em] text-slate-500">{item.category}</p>
							<p class="text-lg font-semibold text-slate-900">{item.name}</p>
							<p class="text-base font-semibold text-[#003366]">${item.price.toFixed(2)}</p>
						</div>
					</a>
				{/each}
			</div>
		</section>
	{/if}
</section>
