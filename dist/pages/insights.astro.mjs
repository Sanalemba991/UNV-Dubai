import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server.bW6CkNMv.js';
import 'kleur/colors';
import { $ as $$Layout, a as $$Image } from '../chunks/Layout.CcPZnjuo.js';
import { g as getCollection } from '../chunks/_astro_content.n6qxTNle.js';
import '@astrojs/internal-helpers/path';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const AllInsights = await getCollection("insights");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-er3pmupq": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="insights-container relative" data-astro-cid-er3pmupq> <div class="container mx-auto px-6 py-16 relative z-10" data-astro-cid-er3pmupq> <!-- Page header with decorative elements --> <div class="mb-16 text-center" data-astro-cid-er3pmupq> <h1 class="text-5xl font-bold text-gray-800 mb-6 opacity-0 animate-fade-in" data-astro-cid-er3pmupq>Insights</h1> <p class="text-xl text-gray-600 max-w-2xl mx-auto opacity-0 animate-fade-in animation-delay-300" data-astro-cid-er3pmupq>Discover the latest trends and innovations in surveillance technology</p> </div> <!-- Insights card grid --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-er3pmupq> ${AllInsights.map((insight, index) => renderTemplate`<div class="insight-card group bg-white p-0 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 opacity-0 animate-slide-up overflow-hidden"${addAttribute(`animation-delay: ${index * 150}ms`, "style")} data-astro-cid-er3pmupq> <div class="relative overflow-hidden" data-astro-cid-er3pmupq> <!-- Image with overlay gradient --> <div class="h-70 overflow-hidden" data-astro-cid-er3pmupq> ${renderComponent($$result2, "Image", $$Image, { "src": insight.data.cardImage, "alt": insight.data.cardImageAlt, "class": "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110", "data-astro-cid-er3pmupq": true })} <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" data-astro-cid-er3pmupq></div> </div> </div> <div class="p-6" data-astro-cid-er3pmupq> <h2 class="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300" data-astro-cid-er3pmupq>${insight.data.title}</h2> <!-- Meta information --> <p class="text-gray-600 mb-6 line-clamp-3" data-astro-cid-er3pmupq>${insight.data.description}</p> <div class="flex justify-between items-center" data-astro-cid-er3pmupq> <a${addAttribute(`/insights/${insight.slug}`, "href")} class="relative inline-flex items-center px-6 py-3 overflow-hidden text-blue-600 border border-blue-500 rounded group hover:bg-blue-500 hover:text-white transition-all duration-300" data-astro-cid-er3pmupq> <span class="relative" data-astro-cid-er3pmupq>Read more</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-er3pmupq> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" data-astro-cid-er3pmupq></path> </svg> </a> <button class="w-10 h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300" data-astro-cid-er3pmupq> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-er3pmupq> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" data-astro-cid-er3pmupq></path> </svg> </button> </div> </div> </div>`)} </div> <!-- Pagination --> </div> </div> ` })} `;
}, "C:/Users/sanalemba/UNV-Dubai/src/pages/insights/index.astro", undefined);

const $$file = "C:/Users/sanalemba/UNV-Dubai/src/pages/insights/index.astro";
const $$url = "/insights";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
