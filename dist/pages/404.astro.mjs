import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server.bW6CkNMv.js';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout.CcPZnjuo.js';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Error Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="bg-gray-100 h-screen flex flex-col justify-center items-center"> <div class="max-w-sm w-full text-center"> <h1 class="text-6xl font-bold text-gray-800">404</h1> <p class="text-2xl text-gray-600 mb-4">Oops! Page not found.</p> <p class="text-lg text-gray-500 mb-8">The page you are looking for might have been removed or its name changed or
                is temporarily unavailable.</p> <a href="/" class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-md transition-colors duration-300">Go
                Home</a> </div> </main> ` })}`;
}, "C:/Users/sanalemba/UNV-Dubai/src/pages/404.astro", undefined);

const $$file = "C:/Users/sanalemba/UNV-Dubai/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$404,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
