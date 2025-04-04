import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, F as Fragment, u as unescapeHTML, b as addAttribute } from '../../chunks/astro/server.bW6CkNMv.js';
import 'kleur/colors';
import { $ as $$Layout, a as $$Image } from '../../chunks/Layout.CcPZnjuo.js';
import '@astrojs/internal-helpers/path';
import { g as getCollection } from '../../chunks/_astro_content.n6qxTNle.js';
/* empty css                                    */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://unvdubai.com");
async function getStaticPaths() {
  const insightPosts = await getCollection("insights");
  return insightPosts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const formattedDate = new Date(post.data.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  const allInsights = await getCollection("insights");
  const relatedInsights = allInsights.filter((insight) => insight.slug !== post.slug).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${post.data.title} | UNV Camera Dubai | Digital Link Technology`, "data-astro-cid-e3mixdtl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen" data-astro-cid-e3mixdtl> <article class="py-8 sm:py-12 md:py-16" data-astro-cid-e3mixdtl> <div class="mx-auto max-w-6xl px-4 sm:px-6" data-astro-cid-e3mixdtl> <!-- Header section with animation --> <header class="mb-8 sm:mb-10 md:mb-12 opacity-0 translate-y-8" data-animation="fade-in-down" data-astro-cid-e3mixdtl> <h1 class="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4" data-astro-cid-e3mixdtl> ${post.data.title} </h1> <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6" data-astro-cid-e3mixdtl> ${post.data.description} </p> <div class="flex items-center text-sm sm:text-base text-gray-500 dark:text-gray-400" data-astro-cid-e3mixdtl> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-e3mixdtl> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-e3mixdtl></path> </svg> <span data-astro-cid-e3mixdtl>${formattedDate}</span> </div> </header> <!-- Main content with image on left and info on right --> <div class="flex flex-col lg:flex-row gap-6 sm:gap-8 mb-8 sm:mb-12" data-astro-cid-e3mixdtl> <!-- Left column with main image --> <div class="lg:w-2/3 opacity-0 scale-95" data-animation="fade-in-scale" data-astro-cid-e3mixdtl> <div class="rounded-lg sm:rounded-xl overflow-hidden shadow-lg sm:shadow-xl transition-all duration-300 hover:shadow-xl sm:hover:shadow-2xl" data-astro-cid-e3mixdtl> ${renderComponent($$result2, "Image", $$Image, { "src": post.data.cardImage, "alt": post.data.cardImageAlt, "width": 1200, "height": 800, "format": "webp", "quality": 90, "class": "w-full h-auto object-cover", "data-astro-cid-e3mixdtl": true })} </div> <!-- Main content section --> <div class="mt-6 sm:mt-8 prose prose-sm xs:prose-base sm:prose-lg dark:prose-invert max-w-none opacity-0 translate-y-4" data-animation="fade-in-up" data-astro-cid-e3mixdtl> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(post.data.content)}` })} </div> </div> <!-- Right column with product info and related posts --> <div class="lg:w-1/3 space-y-6 sm:space-y-8" data-astro-cid-e3mixdtl> <!-- Product specifications card --> ${post.data.specifications && renderTemplate`<div class="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 opacity-0 translate-x-8" data-animation="fade-in-right" data-astro-cid-e3mixdtl> <h3 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4" data-astro-cid-e3mixdtl>Product Specifications</h3> <ul class="space-y-2 sm:space-y-3" data-astro-cid-e3mixdtl> ${post.data.specifications.map((spec) => renderTemplate`<li class="flex items-start" data-astro-cid-e3mixdtl> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-e3mixdtl> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-e3mixdtl></path> </svg> <span class="text-sm sm:text-base text-gray-700 dark:text-gray-300" data-astro-cid-e3mixdtl>${spec}</span> </li>`)} </ul> </div>`} <!-- Contact card --> <div class="bg-blue-600 dark:bg-blue-800 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 text-white opacity-0 translate-x-8" data-animation="fade-in-right" data-delay="200" data-astro-cid-e3mixdtl> <h3 class="text-lg sm:text-xl font-bold mb-3 sm:mb-4" data-astro-cid-e3mixdtl>Interested in this product?</h3> <p class="text-sm sm:text-base mb-3 sm:mb-4" data-astro-cid-e3mixdtl>Our team is ready to help you find the perfect solution for your surveillance needs.</p> <a href="/contact" class="inline-block bg-white text-blue-600 font-medium px-4 py-1.5 sm:px-5 sm:py-2 rounded-md sm:rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base" data-astro-cid-e3mixdtl>
Contact Sales
</a> </div> <!-- Related insights --> ${relatedInsights.length > 0 && renderTemplate`<div class="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 opacity-0 translate-x-8" data-animation="fade-in-right" data-delay="400" data-astro-cid-e3mixdtl> <h3 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4" data-astro-cid-e3mixdtl>Related Insights</h3> <div class="space-y-3 sm:space-y-4" data-astro-cid-e3mixdtl> ${relatedInsights.map((insight) => renderTemplate`<a${addAttribute(`/insights/${insight.slug}`, "href")} class="block group" data-astro-cid-e3mixdtl> <div class="flex items-start" data-astro-cid-e3mixdtl> <div class="w-12 h-12 sm:w-16 sm:h-16 rounded overflow-hidden flex-shrink-0 mr-3 sm:mr-4" data-astro-cid-e3mixdtl> ${renderComponent($$result2, "Image", $$Image, { "src": insight.data.cardImage, "alt": insight.data.title, "width": 200, "height": 200, "format": "webp", "class": "w-full h-full object-cover transition-transform duration-300 group-hover:scale-110", "data-astro-cid-e3mixdtl": true })} </div> <div data-astro-cid-e3mixdtl> <h4 class="text-sm sm:text-base font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" data-astro-cid-e3mixdtl> ${insight.data.title} </h4> <p class="text-xs sm:text-sm text-gray-500 dark:text-gray-400" data-astro-cid-e3mixdtl> ${new Date(insight.data.pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </p> </div> </div> </a>`)} </div> </div>`} <!-- Technical features from metadata if available --> ${post.data.features && renderTemplate`<div class="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-md sm:shadow-lg p-4 sm:p-6 opacity-0 translate-x-8" data-animation="fade-in-right" data-delay="600" data-astro-cid-e3mixdtl> <h3 class="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4" data-astro-cid-e3mixdtl>Key Features</h3> <ul class="space-y-2 sm:space-y-3" data-astro-cid-e3mixdtl> ${post.data.features.map((feature) => renderTemplate`<li class="flex items-start" data-astro-cid-e3mixdtl> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-e3mixdtl> <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" data-astro-cid-e3mixdtl></path> </svg> <span class="text-sm sm:text-base text-gray-700 dark:text-gray-300" data-astro-cid-e3mixdtl>${feature}</span> </li>`)} </ul> </div>`} </div> </div> </div> </article> </div> ` })}  `;
}, "C:/Users/sanalemba/UNV-Dubai/src/pages/insights/[...slug].astro", undefined);

const $$file = "C:/Users/sanalemba/UNV-Dubai/src/pages/insights/[...slug].astro";
const $$url = "/insights/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
