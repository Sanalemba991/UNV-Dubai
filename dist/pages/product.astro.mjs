import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server.bW6CkNMv.js';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout.CcPZnjuo.js';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const image1 = new Proxy({"src":"/_astro/camip.C3UbV2Z9.jpg","width":510,"height":348,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sanalemba/UNV-Dubai/src/assets/images/camip.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/sanalemba/UNV-Dubai/src/assets/images/camip.jpg");
							return target[name];
						}
					});

const $$Product = createComponent(($$result, $$props, $$slots) => {
  const products = [
    {
      id: 1,
      title: "Laptop Model 1",
      description: "Laptop Model 1 is a lightweight, powerful computer designed for professionals on the go. Featuring the latest technology and impressive battery life.",
      image: image1,
      link: "/laptop",
      category: "laptop"
    },
    {
      id: 2,
      title: "Digital Link Technology",
      description: "Welcome to Digital Link Technology - our advanced networking solution that provides seamless connectivity and enhanced security for your business.",
      image: image1,
      link: "/network",
      category: "network"
    }
  ];
  const laptops = products.filter((product) => product.category === "laptop");
  const networkSolutions = products.filter(
    (product) => product.category === "network"
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-7wxsvid2": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-6xl mx-auto px-4 py-8" data-astro-cid-7wxsvid2> <h1 class="text-3xl md:text-4xl lg:text-5xl text-center my-8 relative overflow-hidden" data-astro-cid-7wxsvid2> <span class="inline-block transform transition-transform duration-700 animate-slideIn" data-astro-cid-7wxsvid2>Our Products</span> </h1> <!-- Sections Container - Row Layout --> <div class="flex flex-col lg:flex-row gap-8" data-astro-cid-7wxsvid2> <!-- Laptops Section --> <section class="w-full lg:w-1/2" data-astro-cid-7wxsvid2> <h2 class="text-2xl md:text-3xl lg:text-4xl text-center mb-10 relative" data-astro-cid-7wxsvid2> <span class="inline-block relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/4 after:right-1/4 after:h-1 after:bg-blue-600 after:rounded-full" data-astro-cid-7wxsvid2>Laptops</span> </h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6" data-astro-cid-7wxsvid2> ${laptops.map((product, index) => renderTemplate`<div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 product-card"${addAttribute(`animation-delay: ${index * 150}ms`, "style")} data-astro-cid-7wxsvid2> <div class="overflow-hidden" data-astro-cid-7wxsvid2> <img${addAttribute(product.image.src, "src")}${addAttribute(product.title, "alt")} class="w-full h-48 sm:h-56 object-cover transform transition-transform duration-700 hover:scale-110" data-astro-cid-7wxsvid2> </div> <div class="p-6" data-astro-cid-7wxsvid2> <h3 class="text-xl font-semibold text-gray-800 mb-3" data-astro-cid-7wxsvid2> ${product.title} </h3> <p class="text-gray-600 mb-6 leading-relaxed" data-astro-cid-7wxsvid2> ${product.description} </p> <div class="flex justify-center" data-astro-cid-7wxsvid2> <a${addAttribute(product.link, "href")} class="inline-block py-2 px-6 bg-blue-600 text-white rounded-lg text-center font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105" data-astro-cid-7wxsvid2>
More
</a> </div> </div> </div>`)} </div> </section> <!-- Network Solutions Section --> <section class="w-full lg:w-1/2" data-astro-cid-7wxsvid2> <h2 class="text-2xl md:text-3xl lg:text-4xl text-center mb-10 relative" data-astro-cid-7wxsvid2> <span class="inline-block relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/4 after:right-1/4 after:h-1 after:bg-blue-600 after:rounded-full" data-astro-cid-7wxsvid2>Network Solutions</span> </h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6" data-astro-cid-7wxsvid2> ${networkSolutions.map((product, index) => renderTemplate`<div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 product-card"${addAttribute(`animation-delay: ${index * 150}ms`, "style")} data-astro-cid-7wxsvid2> <div class="overflow-hidden" data-astro-cid-7wxsvid2> <img${addAttribute(product.image.src, "src")}${addAttribute(product.title, "alt")} class="w-full h-48 sm:h-56 object-cover transform transition-transform duration-700 hover:scale-110" data-astro-cid-7wxsvid2> </div> <div class="p-6" data-astro-cid-7wxsvid2> <h3 class="text-xl font-semibold text-gray-800 mb-3" data-astro-cid-7wxsvid2> ${product.title} </h3> <p class="text-gray-600 mb-6 leading-relaxed" data-astro-cid-7wxsvid2> ${product.description} </p> <div class="flex justify-center" data-astro-cid-7wxsvid2> <a${addAttribute(product.link, "href")} class="inline-block py-2 px-6 bg-blue-600 text-white rounded-lg text-center font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105" data-astro-cid-7wxsvid2>
More
</a> </div> </div> </div>`)} </div> </section> </div> </main> ` })} `;
}, "C:/Users/sanalemba/UNV-Dubai/src/pages/product.astro", undefined);

const $$file = "C:/Users/sanalemba/UNV-Dubai/src/pages/product.astro";
const $$url = "/product";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Product,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
