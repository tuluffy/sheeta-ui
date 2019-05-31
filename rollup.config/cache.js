import {rollup} from 'rollup';

let cache;
export async function buildWithCache() {
    const bundle = await rollup({
        cache,
    });
    cache = bundle.cache;
    return bundle;
}