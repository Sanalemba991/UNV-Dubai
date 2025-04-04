import { d as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server.bW6CkNMv.js';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout.CcPZnjuo.js';
import { $ as $$CategoryCard } from '../chunks/CategoryCard.SYNfUbNs.js';
import { $ as $$Sections } from '../chunks/Sections.B9sG1_13.js';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://unvdubai.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "Product Categories | Surveillance Solutions";
  const description = "Explore our comprehensive range of surveillance solutions including IP cameras, analog cameras, PTZ cameras, thermal cameras, NVR, DVR, storage solutions, and accessories.";
  const canonicalURL = new URL("/categories", Astro2.site);
  const metadata = {
    title,
    description,
    canonical: canonicalURL.toString(),
    openGraph: {
      title,
      description,
      type: "website",
      image: "/images/og-image.png",
      url: canonicalURL.toString(),
      site_name: "Your Company Name"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      image: "/images/og-image.png"
    },
    alternates: {
      canonical: canonicalURL.toString()
    }
  };
  const categories = [
    {
      title: "Network Cameras",
      description: "Uniview provides affordable, high-quality IP cameras with smart analytics and performance",
      imageUrl: "images/categories/ip-camera.png",
      href: "/categories/ip-cameras",
      icon: "video"
    },
    {
      title: "Analog Camera",
      description: "Uniview's analog cameras offer high-definition video, easy maintenance, and affordability.",
      imageUrl: "images/categories/analog-camera.png",
      href: "/categories/analog-cameras",
      icon: "camera"
    },
    {
      title: "PTZ CAMERA",
      description: "Uniview's PTZ cameras offer wide coverage, zoom, and robust stability",
      imageUrl: "images/categories/ptz-camera.png",
      href: "/categories/ptz-cameras",
      icon: "rotate-cw"
    },
    {
      title: "DVR",
      description: "Uniview offers diverse XVR models for project and home use.",
      imageUrl: "images/categories/dvr.png",
      href: "/categories/dvr",
      icon: "server"
    }
  ];
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: canonicalURL.toString(),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: categories.map((category, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Product",
          name: category.title,
          description: category.description,
          url: new URL(category.href, Astro2.site).toString(),
          image: new URL(category.imageUrl, Astro2.site).toString()
        }
      }))
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": metadata.title, "description": metadata.description, "canonical": metadata.canonical, "openGraph": metadata.openGraph, "twitter": metadata.twitter, "schema": schemaOrg, "data-astro-cid-ttgomkr6": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="bg-gradient-to-b from-gray-50 to-white dark:from-neutral-950 dark:to-neutral-900" data-astro-cid-ttgomkr6>${renderComponent($$result2, "Sections", $$Sections, { "data-astro-cid-ttgomkr6": true }, { "default": ($$result3) => renderTemplate`<div class="py-16" data-astro-cid-ttgomkr6><!-- Center the title container --><div class="max-w-2xl mx-auto text-center" data-astro-cid-ttgomkr6><h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl" data-astro-cid-ttgomkr6>${title}</h1></div><div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4" data-astro-cid-ttgomkr6>${categories.map((category, index) => renderTemplate`<div class="category-item transition-transform duration-300 hover:scale-105 bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6" data-astro-cid-ttgomkr6>${renderComponent($$result3, "CategoryCard", $$CategoryCard, { "title": category.title, "imageUrl": category.imageUrl, "href": category.href, "description": category.description, "data-astro-cid-ttgomkr6": true })}</div>`)}</div><div class="mt-16 rounded-2xl bg-gray-50 dark:bg-neutral-800/50 p-8" data-astro-cid-ttgomkr6><h2 class="text-xl font-semibold text-gray-900 dark:text-white" data-astro-cid-ttgomkr6>
Need help choosing?
</h2><p class="mt-2 text-gray-600 dark:text-gray-300" data-astro-cid-ttgomkr6>
Our security experts are here to help you find the
                        perfect solution for your needs.
</p><div class="mt-6" data-astro-cid-ttgomkr6><a href="/contact" class="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400" data-astro-cid-ttgomkr6>
Contact Sales
<svg class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-astro-cid-ttgomkr6><path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ttgomkr6></path><path d="M19 12H4.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ttgomkr6></path></svg></a></div></div></div>` })}</div>` })}`;
}, "C:/Users/sanalemba/UNV-Dubai/src/pages/products/index.astro", undefined);

const $$file = "C:/Users/sanalemba/UNV-Dubai/src/pages/products/index.astro";
const $$url = "/products";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$Index,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
