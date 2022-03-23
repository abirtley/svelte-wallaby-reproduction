import adapter from '@sveltejs/adapter-auto';
// import preprocess from 'svelte-preprocess';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		// TODO: https://github.com/sveltejs/svelte-preprocess/blob/master/docs/preprocessing.md#typescript
	}),

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
	}
};

export default config;
