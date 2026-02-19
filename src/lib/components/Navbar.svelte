<script>
	import ShoppingBag from 'lucide-svelte/icons/shopping-bag';
	import { cart } from '$lib/cart';

	// Top-level shop navigation.
	const navLinks = [
		{ label: 'Start', href: '/' },
		{ label: 'Herren', href: '/herren' },
		{ label: 'Damen', href: '/damen' }
	];
</script>

<header class="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
		<!-- Brand using provided perfume logo -->
		<a href="/" class="flex items-center gap-3.5">
			<img
				src="/parfum/logo-main.jpeg"
				alt="Parfuem Boutique Logo"
				class="h-11 w-11 rounded-full object-cover"
			/>
			<div>
				<p class="text-xs uppercase tracking-[0.25em] text-slate-500">Parfuem Boutique</p>
				<p class="text-base font-semibold text-slate-900">Luxury Fragrance Shop</p>
			</div>
		</a>

		<nav class="hidden items-center gap-8 md:flex">
			{#each navLinks as link}
				<a href={link.href} class="text-sm font-medium text-slate-700 transition-colors hover:text-[#003366]">
					{link.label}
				</a>
			{/each}
		</nav>

		<!-- Live cart summary -->
		<a
			href="/checkout"
			aria-label="Zum Checkout"
			class="relative rounded-full border border-slate-300 p-2.5 text-slate-700 transition-all duration-300 hover:border-[#003366] hover:text-[#003366]"
		>
			<ShoppingBag size={20} strokeWidth={1.75} />
			<span
				class="absolute -right-1 -top-1 grid h-5 min-w-5 place-content-center rounded-full bg-[#003366] px-1 text-[10px] font-semibold text-white"
				>{$cart.length}</span
			>
		</a>
	</div>
</header>
