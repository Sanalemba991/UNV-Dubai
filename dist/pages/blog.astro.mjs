import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server.bW6CkNMv.js';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout.CcPZnjuo.js';
import { g as getCollection } from '../chunks/_astro_content.n6qxTNle.js';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog");
  const posts = allPosts.slice(0, 2);
  const formatDate = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }).format(date);
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-5tznm7mj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto px-4 py-12" data-astro-cid-5tznm7mj> <h1 class="text-4xl md:text-5xl font-bold text-center mb-12 animate-title" data-astro-cid-5tznm7mj>
Welcome to Digital Link Technology Blogs
</h1> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center" data-astro-cid-5tznm7mj> ${posts.map((post, index) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="block bg-white rounded-lg shadow-lg overflow-hidden relative group animate-card"${addAttribute(`animation-delay: ${index * 200}ms`, "style")} data-astro-cid-5tznm7mj> <div class="relative" data-astro-cid-5tznm7mj> ${post.data.cardImage && renderTemplate`<div class="relative overflow-hidden" data-astro-cid-5tznm7mj> <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70 z-10" data-astro-cid-5tznm7mj></div> <img${addAttribute(post.data.cardImage.src, "src")}${addAttribute(post.data.title, "alt")} class="w-full h-96 object-cover transform transition-all duration-500 group-hover:scale-110" data-astro-cid-5tznm7mj>  <div class="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-0" data-astro-cid-5tznm7mj></div>  <div class="absolute top-4 left-4 flex items-center space-x-4 z-20" data-astro-cid-5tznm7mj> ${post.data.authorImage && renderTemplate`<div class="overflow-hidden rounded-full border-2 border-white shadow-lg" data-astro-cid-5tznm7mj> <img${addAttribute(post.data.authorImage.src, "src")}${addAttribute(post.data.author, "alt")} class="w-12 h-12 rounded-full transform transition duration-300 group-hover:scale-110" data-astro-cid-5tznm7mj> </div>`} <div class="bg-white bg-opacity-90 rounded-lg px-3 py-1 backdrop-blur-sm transform transition duration-300 translate-y-0 group-hover:-translate-y-1" data-astro-cid-5tznm7mj> <p class="text-gray-800 font-bold" data-astro-cid-5tznm7mj>${post.data.author}</p> <p class="text-gray-500 text-sm" data-astro-cid-5tznm7mj>${formatDate(post.data.pubDate)}</p> </div> </div>  <div class="absolute bottom-0 left-0 right-0 p-6 z-20" data-astro-cid-5tznm7mj> <h2 class="text-2xl font-bold text-white mb-3 relative inline-block transition-transform duration-300 group-hover:translate-x-2" data-astro-cid-5tznm7mj> ${post.data.title} <span class="block h-1 w-0 bg-white group-hover:w-full transition-all duration-500 mt-1" data-astro-cid-5tznm7mj></span> </h2>  <div class="bg-white text-blue-600 py-2 px-4 rounded-lg inline-block opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 font-medium" data-astro-cid-5tznm7mj>
Read More
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 inline-block ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-5tznm7mj> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-astro-cid-5tznm7mj></path> </svg> </div> </div> </div>`} </div> </a>`)} </div> </div>  ` })}`;
}, "C:/Users/sanalemba/UNV-Dubai/src/pages/blog/index.astro", undefined);

const $$file = "C:/Users/sanalemba/UNV-Dubai/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
