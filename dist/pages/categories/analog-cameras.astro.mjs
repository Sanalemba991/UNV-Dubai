import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, F as Fragment, u as unescapeHTML, b as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server.bW6CkNMv.js';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout.CcPZnjuo.js';
import { g as getCollection } from '../../chunks/_astro_content.n6qxTNle.js';
/* empty css                                            */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://unvdubai.com");
const $$AnalogCameras = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AnalogCameras;
  const title = "Analog Cameras - UNV Dubai";
  const description = "High-quality analog surveillance cameras with reliable performance and cost-effective solutions";
  const canonicalURL = new URL("/categories/analog-cameras", Astro2.site);
  const products = await getCollection("analog-cameras");
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": title,
    "description": description,
    "url": canonicalURL,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": products.map((camera, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Product",
          "name": camera.data.title,
          "description": camera.data.description,
          "image": camera.data.image,
          "url": new URL(`/categories/analog-cameras/${camera.slug}`, Astro2.site)
        }
      }))
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "data-astro-cid-sq37ldgw": true }, { "default": ($$result2) => renderTemplate`   ${maybeRenderHead()}<section class="relative py-20 sm:py-32 overflow-hidden" data-astro-cid-sq37ldgw>  <div class="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10 animate-pulse" data-astro-cid-sq37ldgw></div> <div class="absolute inset-0" data-astro-cid-sq37ldgw> <div class="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-blue-500/30 blur-2xl animate-blob" data-astro-cid-sq37ldgw></div> <div class="absolute top-3/4 left-1/2 h-32 w-32 rounded-full bg-purple-500/20 blur-2xl animate-blob animation-delay-2000" data-astro-cid-sq37ldgw></div> <div class="absolute top-1/3 right-1/4 h-32 w-32 rounded-full bg-pink-500/20 blur-2xl animate-blob animation-delay-4000" data-astro-cid-sq37ldgw></div> <div class="absolute bottom-1/4 right-1/3 h-32 w-32 rounded-full bg-yellow-500/20 blur-2xl animate-blob animation-delay-6000" data-astro-cid-sq37ldgw></div> </div> <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-astro-cid-sq37ldgw>  <div class="flex flex-col gap-8 text-center mb-24" data-astro-cid-sq37ldgw> <div class="space-y-6" data-astro-cid-sq37ldgw> <div class="inline-flex justify-center" data-astro-cid-sq37ldgw> <span class="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary dark:bg-primary/20 backdrop-blur-sm hover:bg-primary/20 dark:hover:bg-primary/30 transition-all duration-300 cursor-pointer" data-astro-cid-sq37ldgw> <span class="relative flex h-3 w-3" data-astro-cid-sq37ldgw> <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" data-astro-cid-sq37ldgw></span> <span class="relative inline-flex rounded-full h-3 w-3 bg-primary" data-astro-cid-sq37ldgw></span> </span>
Reliable Surveillance Solutions
</span> </div> <h1 class="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl" data-astro-cid-sq37ldgw> <span class="relative inline-block" data-astro-cid-sq37ldgw> <span class="absolute -inset-1 block -skew-y-3 bg-primary/20 dark:bg-primary/30 animate-pulse" data-astro-cid-sq37ldgw></span> <span class="relative text-black dark:text-white" data-astro-cid-sq37ldgw>Analog Cameras</span> </span> </h1> <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" data-astro-cid-sq37ldgw> ${description} </p> </div> </div>  <div id="products" class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3" data-astro-cid-sq37ldgw> ${products.map((camera, index) => renderTemplate`<a${addAttribute(`/categories/analog-cameras/${camera.slug}`, "href")} class="product-card transform hover:-translate-y-2 transition-all duration-300"${addAttribute({ animationDelay: `${index * 150}ms` }, "style")} data-astro-cid-sq37ldgw> <div class="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out border border-gray-100 dark:border-gray-700/50" data-astro-cid-sq37ldgw> <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" data-astro-cid-sq37ldgw></div> <div class="aspect-h-3 aspect-w-4 overflow-hidden" data-astro-cid-sq37ldgw> <img${addAttribute(camera.data.image, "src")}${addAttribute(camera.data.title, "alt")} class="h-full w-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out" data-astro-cid-sq37ldgw> <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-sq37ldgw></div> </div> <div class="relative p-6" data-astro-cid-sq37ldgw> <div class="flex items-center justify-between mb-3" data-astro-cid-sq37ldgw> <h3 class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300" data-astro-cid-sq37ldgw> ${camera.data.title} </h3> <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/30 dark:group-hover:bg-primary/40 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" data-astro-cid-sq37ldgw> <svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sq37ldgw> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" data-astro-cid-sq37ldgw></path> </svg> </span> </div>  <div class="mt-6" data-astro-cid-sq37ldgw> <span class="inline-flex w-full justify-center items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform" data-astro-cid-sq37ldgw>
View Details
<svg class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-sq37ldgw> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-sq37ldgw></path> </svg> </span> </div> </div> </div> </a>`)} </div> </div> </section> `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <link rel="canonical"', '> <meta property="og:title"', '> <meta property="og:description"', '> <meta property="og:type" content="website"> <meta property="og:url"', '> <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"', '> <meta name="twitter:description"', '> <meta name="keywords" content="analog cameras, surveillance cameras, CCTV, security cameras, UNV Dubai, surveillance solutions">  <script type="application/ld+json">', "<\/script> "])), addAttribute(canonicalURL, "href"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), unescapeHTML(JSON.stringify(schemaMarkup))) })}` })} `;
}, "C:/Users/sanalemba/UNV-Dubai/src/pages/categories/analog-cameras.astro", undefined);

const $$file = "C:/Users/sanalemba/UNV-Dubai/src/pages/categories/analog-cameras.astro";
const $$url = "/categories/analog-cameras";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AnalogCameras,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
