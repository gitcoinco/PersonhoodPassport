import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const address: Writable<string> = writable(null);
export const data: Writable<string> = writable('');
export const ceramic: Writable<any> = writable(null);
