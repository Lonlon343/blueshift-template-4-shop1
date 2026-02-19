<script>
	let scrollY = $state(0);
	const parallaxOffset = $derived(Math.min(scrollY * 0.52, 180));
</script>

<svelte:window bind:scrollY={scrollY} />

<!-- Full-width hero outside content container -->
<section
	class="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden bg-slate-950 bg-cover bg-center bg-no-repeat"
	style={`background-image: url('/parfum/banner-main.jpeg'); background-position: center calc(50% + ${parallaxOffset}px);`}
>
	<div class="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30"></div>
	<div class="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent"></div>

	<div class="relative mx-auto flex min-h-[560px] max-w-7xl items-center px-6 py-16 lg:px-10">
		<div class="max-w-2xl">

			<h1 class="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
				Luxus-Parfums für klare Präsenz
			</h1>
			<p class="mt-6 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
				30% Duftöl. 100% Präsenz. Entdecke kuratierte Duftlinien auf getrennten Seiten für Herren und Damen.
			</p>

			<div class="mt-8 flex flex-wrap gap-3">
				<a
					href="/herren"
					class="rounded-10px bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:bg-slate-200"
				>
					Herren Düfte entdecken
				</a>
				<a
					href="/damen"
					class="rounded-10px border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10"
				>
					Damen Düfte entdecken
				</a>
			</div>
		</div>
	</div>
</section>

<div class="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-20">
	<section class="grid gap-6 lg:grid-cols-2">
		<article class="overflow-hidden rounded-30px border border-slate-200 bg-white shadow-sm">
			<img src="/parfum/bottle-row.jpeg" alt="Parfuem Flakonreihe" class="h-56 w-full object-cover sm:h-64" />
			<div class="p-6">
				<h2 class="text-xl font-semibold text-slate-900">Atelier-Qualitaet</h2>
				<p class="mt-2 text-sm leading-relaxed text-slate-600">
					Mockup-Shop mit Fokus auf Premium-Anmutung, starker Typografie und klarer Produktfuehrung.
				</p>
			</div>
		</article>
		<article class="overflow-hidden rounded-30px border border-slate-200 bg-white shadow-sm">
			<img src="/parfum/atelier-woman.jpeg" alt="Parfuem Atelier Szene" class="h-56 w-full object-cover sm:h-64" />
			<div class="p-6">
				<h2 class="text-xl font-semibold text-slate-900">Auswahl aus vielen Premium Düften</h2>
				<p class="mt-2 text-sm leading-relaxed text-slate-600">
					Entdecken Sie unsere große Kollektion.
				</p>
			</div>
		</article>
	</section>

	<section class="mt-12 grid gap-6 md:grid-cols-2">
		<a
			href="/herren"
			class="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<div class="flex items-center gap-4 p-6">
				<img src="/parfum/logo-main.jpeg" alt="Herren Logo" class="h-14 w-14 rounded-full border border-slate-300 object-cover" />
				<div>
					<p class="text-xs uppercase tracking-[0.2em] text-slate-500">Kategorie</p>
					<h3 class="mt-1 text-2xl font-semibold text-slate-900">Herren-Düfte</h3>
				</div>
			</div>
			<img src="/parfum/men-spray.jpeg" alt="Herren Duftwelt" class="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
		</a>

		<a
			href="/damen"
			class="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
		>
			<div class="flex items-center gap-4 p-6">
				<img src="/parfum/logo-women.jpeg" alt="Damen Logo" class="h-14 w-14 rounded-full border border-pink-200 object-cover" />
				<div>
					<p class="text-xs uppercase tracking-[0.2em] text-slate-500">Kategorie</p>
					<h3 class="mt-1 text-2xl font-semibold text-slate-900">Damen-Düfte</h3>
				</div>
			</div>
			<img src="/parfum/lab-bottle.jpeg" alt="Damen Duftwelt" class="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
		</a>
	</section>

	<section class="font-garamond mt-20 mx-auto max-w-4xl text-slate-800">
		<h2 class="text-4xl font-semibold leading-tight sm:text-5xl">
			Willkommen bei der Parfum Boutique - Düfte mit Haltung.
		</h2>

		<div class="mt-8 space-y-6 text-2xl leading-relaxed">
			<p>
				Langweilige Parfums gibt es genug. Wir machen das Gegenteil. Unsere Boutique steht für charakterstarke Kompositionen, die nicht um Erlaubnis fragen - sie betreten den Raum und übernehmen ihn.
			</p>
			<p>
				Hier findest du keine gefälligen Mainstream-Noten, sondern sorgfältig kuratierte Essenzen: handverlesene Rohstoffe, präzise komponiert, mit genau der richtigen Portion Attitüde. Mal warm und verführerisch, mal kühl und distanziert, mal überraschend laut. Immer unverwechselbar.
			</p>
			<p class="text-3xl font-semibold text-slate-900">
				Für Menschen, die nicht „nett“ riechen wollen - sondern unvergesslich.
			</p>
			<p>
				Jeder Duft erzählt eine Geschichte: von nächtlichen Streifzügen durch leere Straßen, von sonnengewärmter Haut, von dunklem Holz, Leder, Gewürzen oder einem Hauch von etwas, das man nicht ganz benennen kann. Und genau das macht es spannend.
			</p>
			<p>
				Wir glauben: Ein Parfum ist kein Accessoire. Es ist ein Statement. Es flüstert nicht - es weiß genau, was es tut.
			</p>
		</div>

		<div class="mt-10">
			<h3 class="text-3xl font-semibold text-slate-900">Unsere Philosophie</h3>
			<ul class="mt-4 list-disc space-y-2 pl-6 text-2xl">
				<li>Kleine Chargen statt Massenware</li>
				<li>Charakter statt Kompromiss</li>
				<li>Qualität vor Quantität</li>
				<li>Stil mit einem Augenzwinkern</li>
			</ul>
		</div>

		<div class="mt-10 space-y-2">
			<p class="text-3xl font-semibold text-slate-900">Bereit für Komplimente?</p>
			<p class="text-2xl">Oder wenigstens für neugierige Blicke?</p>
			<p class="text-2xl">
				Entdecke unsere Kollektion und finde den Duft, der dich nicht begleitet - sondern definiert.
			</p>
		</div>
	</section>
</div>
