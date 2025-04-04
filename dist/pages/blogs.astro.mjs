import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server.bW6CkNMv.js';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout.CcPZnjuo.js';
import { g as getCollection } from '../chunks/_astro_content.n6qxTNle.js';
/* empty css                                */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog");
  const posts = allPosts.slice(0, 3);
  return renderTemplate(_a || (_a = __template(["", ` <script type="module">
  import { onMount } from 'astro';

  onMount(() => {
    const headings = document.querySelectorAll('.translate-from-down');
    const products = document.querySelectorAll('.translate-from-left');

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('translate-from-animation');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5, // Trigger the animation when 50% of the section is visible
      }
    );

    headings.forEach(heading => {
      observer.observe(heading);
    });

    products.forEach(product => {
      observer.observe(product);
    });
  });
<\/script> `])), renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-cvbuhuel": true }, { "default": ($$result2) => renderTemplate` <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <title>Products Blog with Hero</title> <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"> <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"> ${maybeRenderHead()}<div class="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700" data-astro-cid-cvbuhuel> <div class="absolute inset-0" data-astro-cid-cvbuhuel> <div class="absolute inset-0 bg-blue-600 opacity-50" data-astro-cid-cvbuhuel></div> <div class="absolute inset-0 bg-[url('/images/dot-pattern.png')] opacity-10" data-astro-cid-cvbuhuel></div> </div> <div class="relative py-24 px-4 text-center text-white" data-astro-cid-cvbuhuel> <div class="max-w-2xl mx-auto" data-astro-cid-cvbuhuel> <h1 class="text-5xl font-bold mb-6 leading-tight" data-astro-cid-cvbuhuel>Insights & Inspiration</h1> <p class="text-xl" data-astro-cid-cvbuhuel>
Discover the latest trends, techniques, and stories from the world of design and creativity.
</p> <div class="mt-10" data-astro-cid-cvbuhuel> <a href="#blog" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-50 transition duration-300 shadow-lg hover:shadow-xl" data-astro-cid-cvbuhuel>
Browse Products
<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-cvbuhuel> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-cvbuhuel></path> </svg> </a> </div> </div> </div> </div>  <div id="blog" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" data-astro-cid-cvbuhuel> <div class="mb-12 text-center" data-astro-cid-cvbuhuel> <h2 class="text-3xl font-bold text-gray-900 mb-4 translate-from-down" data-astro-cid-cvbuhuel>
Latest Blog Posts
</h2> <div class="w-24 h-1 bg-blue-600 mx-auto" data-astro-cid-cvbuhuel></div> </div> <!-- Blog Posts Section --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" data-astro-cid-cvbuhuel> ${posts.map((post) => renderTemplate`<div class="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 translate-from-left" data-astro-cid-cvbuhuel> <div class="relative h-56 overflow-hidden" data-astro-cid-cvbuhuel> <img${addAttribute(post.data.cardImage?.src, "src")}${addAttribute(post.data.cardImageAlt || post.data.title || "Blog Image", "alt")} class="w-11/12 h-11/12 object-cover transition duration-300 mx-auto" data-astro-cid-cvbuhuel> </div> <div class="p-6" data-astro-cid-cvbuhuel> <h2 class="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300" data-astro-cid-cvbuhuel> <a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-cvbuhuel> ${post.data.title} </a> </h2> <div class="flex justify-between items-center mt-6" data-astro-cid-cvbuhuel> <a${addAttribute(`/blog/${post.slug}`, "href")} class="inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium text-sm hover:from-blue-600 hover:to-indigo-700 transition duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1" data-astro-cid-cvbuhuel>
Read More
<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-cvbuhuel> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" data-astro-cid-cvbuhuel></path> </svg> </a> <button class="p-2 rounded-full text-gray-400 hover:text-blue-600 hover:bg-blue-50 transition duration-300" data-astro-cid-cvbuhuel> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-cvbuhuel> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" data-astro-cid-cvbuhuel></path> </svg> </button> </div> </div> </div>`)} </div> </div> ` }));
}, "C:/Users/sanalemba/UNV-Dubai/src/pages/blogs/index.astro", undefined);

const $$file = "C:/Users/sanalemba/UNV-Dubai/src/pages/blogs/index.astro";
const $$url = "/blogs";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
