import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, b as addAttribute, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server.bW6CkNMv.js';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout.CcPZnjuo.js';
import { g as getCollection } from '../../chunks/_astro_content.n6qxTNle.js';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://unvdubai.com");
const $$Storage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Storage;
  const title = "Storage Solutions - UNV Dubai";
  const description = "Professional storage solutions for surveillance systems including hard drives and storage arrays";
  const canonicalURL = new URL("/categories/storage", Astro2.site);
  const metadata = {
    title,
    description,
    openGraph: {
      basic: {
        title,
        type: "website",
        image: "/og-storage.jpg",
        // Add your OG image
        url: canonicalURL
      },
      optional: {
        description,
        locale: "en_US",
        siteName: "UNV Dubai"
      }
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      image: "/og-storage.jpg"
      // Add your Twitter card image
    }
  };
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: canonicalURL,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: (await getCollection("storage")).map(
        (product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "Product",
            name: product.data.title,
            description: product.data.description,
            image: product.data.image,
            url: new URL(
              `/categories/storage/${product.slug}`,
              Astro2.site
            )
          }
        })
      )
    }
  };
  const products = await getCollection("storage");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "metadata": metadata, "data-astro-cid-3e5ms6gl": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template(['<script type="application/ld+json">', "<\/script>", `<section class="relative py-20 sm:py-32 overflow-hidden" data-astro-cid-3e5ms6gl><!-- Enhanced Animated Background --><div class="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 dark:opacity-10 animate-pulse" data-astro-cid-3e5ms6gl></div><div class="absolute inset-0" data-astro-cid-3e5ms6gl><div class="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-blue-500/30 blur-2xl animate-blob" data-astro-cid-3e5ms6gl></div><div class="absolute top-3/4 left-1/2 h-32 w-32 rounded-full bg-purple-500/20 blur-2xl animate-blob animation-delay-2000" data-astro-cid-3e5ms6gl></div><div class="absolute top-1/3 right-1/4 h-32 w-32 rounded-full bg-pink-500/20 blur-2xl animate-blob animation-delay-4000" data-astro-cid-3e5ms6gl></div><div class="absolute bottom-1/4 right-1/3 h-32 w-32 rounded-full bg-yellow-500/20 blur-2xl animate-blob animation-delay-6000" data-astro-cid-3e5ms6gl></div></div><div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-astro-cid-3e5ms6gl><!-- Hero Section with Enhanced Animation --><div class="flex flex-col gap-8 text-center mb-24" data-astro-cid-3e5ms6gl><div class="space-y-6" data-astro-cid-3e5ms6gl><div class="inline-flex justify-center" data-astro-cid-3e5ms6gl><span class="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary dark:bg-primary/20 backdrop-blur-sm hover:bg-primary/20 dark:hover:bg-primary/30 transition-all duration-300 cursor-pointer" data-astro-cid-3e5ms6gl><span class="relative flex h-3 w-3" data-astro-cid-3e5ms6gl><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" data-astro-cid-3e5ms6gl></span><span class="relative inline-flex rounded-full h-3 w-3 bg-primary" data-astro-cid-3e5ms6gl></span></span>
Storage Solutions
</span></div><h1 class="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl" data-astro-cid-3e5ms6gl><span class="relative inline-block" data-astro-cid-3e5ms6gl><span class="absolute -inset-1 block -skew-y-3 bg-primary/20 dark:bg-primary/30 animate-pulse" data-astro-cid-3e5ms6gl></span><span class="relative text-black dark:text-white" data-astro-cid-3e5ms6gl>Storage Devices</span></span></h1><p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" data-astro-cid-3e5ms6gl>`, '</p></div></div><!-- Products Grid with Enhanced Animations --><div id="products" class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3" data-astro-cid-3e5ms6gl>', "</div></div></section>"])), unescapeHTML(JSON.stringify(schemaMarkup)), maybeRenderHead(), description, products.map((product, index) => renderTemplate`<a${addAttribute(`/categories/storage/${product.slug}`, "href")} class="product-card transform hover:-translate-y-2 transition-all duration-300"${addAttribute({ animationDelay: `${index * 150}ms` }, "style")} data-astro-cid-3e5ms6gl><div class="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out border border-gray-100 dark:border-gray-700/50" data-astro-cid-3e5ms6gl><div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" data-astro-cid-3e5ms6gl></div><!-- Product Image --><div class="aspect-h-3 aspect-w-4 overflow-hidden" data-astro-cid-3e5ms6gl><img${addAttribute(product.data.image, "src")}${addAttribute(product.data.title, "alt")} class="h-48 w-full object-cover object-center transform group-hover:scale-110 transition-transform duration-700 ease-out" data-astro-cid-3e5ms6gl><div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" data-astro-cid-3e5ms6gl></div></div><!-- Product Content --><div class="relative p-6 flex flex-col h-full" data-astro-cid-3e5ms6gl><div class="flex items-center justify-between mb-3" data-astro-cid-3e5ms6gl><h3 class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300" data-astro-cid-3e5ms6gl>${product.data.title}</h3><span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/30 dark:group-hover:bg-primary/40 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" data-astro-cid-3e5ms6gl><svg class="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3e5ms6gl><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" data-astro-cid-3e5ms6gl></path></svg></span></div><!-- Product Details Button --><div class="mt-6" data-astro-cid-3e5ms6gl><span class="inline-flex w-full justify-center items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 transition-colors duration-300 group-hover:translate-x-1 transform transition-transform" data-astro-cid-3e5ms6gl>
View Details
<svg class="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-3e5ms6gl><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-3e5ms6gl></path></svg></span></div></div></div></a>`)) })}`;
}, "C:/Users/sanalemba/UNV-Dubai/src/pages/categories/storage.astro", undefined);

const $$file = "C:/Users/sanalemba/UNV-Dubai/src/pages/categories/storage.astro";
const $$url = "/categories/storage";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Storage,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
