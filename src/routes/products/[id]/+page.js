import { error } from '@sveltejs/kit';
import { products } from '$lib/products';

export function load({ params }) {
	const id = Number(params.id);
	const product = products.find((item) => item.id === id);

	if (!product || Number.isNaN(id)) {
		throw error(404, 'Produkt nicht gefunden');
	}

	const related = products
		.filter((item) => item.gender === product.gender && item.id !== product.id)
		.slice(0, 3);

	return {
		product,
		related
	};
}
