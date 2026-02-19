<script>
	import CreditCard from 'lucide-svelte/icons/credit-card';
	import ShieldCheck from 'lucide-svelte/icons/shield-check';
	import Wallet from 'lucide-svelte/icons/wallet';
	import { cart, removeFromCart } from '$lib/cart';

	let orderPlaced = $state(false);
	const total = $derived($cart.reduce((sum, item) => sum + item.price, 0));

	function simulateOrder() {
		orderPlaced = true;
	}
</script>

<section class="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
	<div class="mb-10">
		<div class="mb-3 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2">
			<img src="/parfum/logo-main.jpeg" alt="Parfuem Boutique Logo" class="h-8 w-8 rounded-full object-cover" />
			<p class="text-xs font-medium uppercase tracking-[0.2em] text-slate-600">Parfuem Boutique Checkout</p>
		</div>
		<h1 class="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Sichere Bestellung deiner Duefte</h1>
	</div>

	<div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
		<!-- Cart items -->
		<div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
			<div class="mb-6 flex items-center justify-between">
				<h2 class="text-xl font-semibold text-slate-900">Warenkorb</h2>
				<p class="text-sm text-slate-500">{$cart.length} Artikel</p>
			</div>

			{#if $cart.length === 0}
				<p class="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-sm text-slate-600">
					Dein Warenkorb ist leer. Fuege Duefte in den Herren- oder Damenkategorien hinzu.
				</p>
			{:else}
				<ul class="space-y-4">
					{#each $cart as item, index (`${item.id}-${index}`)}
						<li class="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 p-4">
							<div>
								<p class="text-sm uppercase tracking-[0.14em] text-slate-500">{item.category}</p>
								<p class="mt-1 font-medium text-slate-900">{item.name}</p>
							</div>

							<div class="flex items-center gap-4">
								<p class="font-semibold text-[#003366]">${item.price.toFixed(2)}</p>
								<button
									type="button"
									onclick={() => removeFromCart(item.id)}
									class="rounded-full border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 transition-all duration-300 hover:border-red-300 hover:text-red-600"
								>
									Entfernen
								</button>
							</div>
						</li>
					{/each}
				</ul>
			{/if}
		</div>

		<!-- Mock payment form -->
		<div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
			<h2 class="text-xl font-semibold text-slate-900">Zahlungsdetails</h2>
			<p class="mt-2 text-sm text-slate-600">Mockup fuer die spaetere PSP/Shopify-Integration.</p>

			<div class="mt-6 space-y-4">
				<label class="block">
					<span class="mb-2 block text-sm font-medium text-slate-700">Karteninhaber</span>
					<input
						type="text"
						placeholder="Max Mustermann"
						class="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/15"
					/>
				</label>

				<label class="block">
					<span class="mb-2 block text-sm font-medium text-slate-700">Kartennummer</span>
					<div class="relative">
						<CreditCard size={18} class="pointer-events-none absolute left-3 top-3.5 text-slate-400" />
						<input
							type="text"
							placeholder="4242 4242 4242 4242"
							class="w-full rounded-xl border border-slate-300 py-3 pl-10 pr-4 text-sm outline-none transition-all duration-300 focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/15"
						/>
					</div>
				</label>

				<div class="grid grid-cols-2 gap-3">
					<label class="block">
						<span class="mb-2 block text-sm font-medium text-slate-700">Gueltig bis</span>
						<input
							type="text"
							placeholder="MM/YY"
							class="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/15"
						/>
					</label>
					<label class="block">
						<span class="mb-2 block text-sm font-medium text-slate-700">CVC</span>
						<input
							type="text"
							placeholder="123"
							class="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-[#003366] focus:ring-2 focus:ring-[#003366]/15"
						/>
					</label>
				</div>
			</div>

			<div class="mt-6 space-y-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
				<p class="text-sm font-medium text-slate-700">Zahlungsart</p>
				<label class="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm">
					<span class="inline-flex items-center gap-2 text-slate-800">
						<CreditCard size={16} />
						Kreditkarte
					</span>
					<input type="radio" name="payment" checked />
				</label>
				<label class="flex cursor-pointer items-center justify-between rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm">
					<span class="inline-flex items-center gap-2 text-slate-800">
						<Wallet size={16} />
						PayPal
					</span>
					<input type="radio" name="payment" />
				</label>
			</div>

			<div class="mt-6 space-y-4 border-t border-slate-200 pt-6">
				<div class="flex items-center justify-between text-sm text-slate-600">
					<span>Zwischensumme</span>
					<span>${total.toFixed(2)}</span>
				</div>
				<div class="flex items-center justify-between text-lg font-semibold text-[#003366]">
					<span>Gesamtsumme</span>
					<span>${total.toFixed(2)}</span>
				</div>

				<button
					type="button"
					onclick={simulateOrder}
					disabled={$cart.length === 0}
					class="w-full rounded-xl bg-[#003366] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#00284f] disabled:cursor-not-allowed disabled:bg-slate-300"
				>
					Jetzt kaufen
				</button>

				<p class="inline-flex items-center gap-2 text-xs text-slate-500">
					<ShieldCheck size={14} />
					Dieses Formular ist ein visuelles Mockup ohne echte Zahlung.
				</p>

				{#if orderPlaced}
					<p class="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
						Bestellung simuliert!
					</p>
				{/if}
			</div>
		</div>
	</div>
</section>
