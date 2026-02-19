import { writable } from 'svelte/store';

/**
 * @typedef {object} Product
 * @property {number} id
 * @property {string} name
 * @property {number} price
 * @property {string} category
 * @property {string} gender
 * @property {string} imageUrl
 * @property {string} description
 */

// Central cart state for mock checkout interactions.
/** @type {import('svelte/store').Writable<Product[]>} */
export const cart = writable([]);

/** @param {Product} product */
export function addToCart(product) {
	cart.update((items) => [...items, product]);
}

/** @param {number} id */
export function removeFromCart(id) {
	cart.update((items) => {
		const index = items.findIndex((item) => item.id === id);

		if (index === -1) return items;

		return [...items.slice(0, index), ...items.slice(index + 1)];
	});
}
