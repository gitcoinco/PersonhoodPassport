import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const address: Writable<string> = writable(null);
export const space: Writable<any> = writable(null);
export const data: Writable<string> = writable('');

export const SPACE_NAME = 'gitcoin';
export const VAR_NAME = 'popp';
