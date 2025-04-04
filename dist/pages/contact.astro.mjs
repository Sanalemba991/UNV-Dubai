import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server.bW6CkNMv.js';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout.CcPZnjuo.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { LoadScriptNext, GoogleMap, InfoWindow } from '@react-google-maps/api';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const MapContainer = ({ APIKEY }) => {
  const mapStyles = {
    height: "100%",
    width: "100%"
  };
  const placeCoordinates = {
    lat: 25.2735015,
    lng: 55.3091897
  };
  return /* @__PURE__ */ jsx(
    LoadScriptNext,
    {
      googleMapsApiKey: APIKEY,
      onLoad: () => console.log("Google Maps API loaded"),
      loadingElement: /* @__PURE__ */ jsx("div", { children: "Loading..." }),
      children: /* @__PURE__ */ jsx(GoogleMap, { mapContainerStyle: mapStyles, zoom: 15, center: placeCoordinates, children: /* @__PURE__ */ jsx(InfoWindow, { position: placeCoordinates, children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { style: { color: "blue", fontWeight: "bold", fontSize: "18px" }, children: "Digital Link Technology" }),
        /* @__PURE__ */ jsx("p", { style: { color: "blue", fontWeight: "bold" }, children: "UNV National Distributor in DUBAI,U.A.E" }),
        /* @__PURE__ */ jsx("p", { style: { color: "blue" }, children: "Mobile: +971555529469 " })
      ] }) }) })
    }
  );
};

const $$ContactDigi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="mx-auto w-full max-w-[85rem] px-4 py-10 sm:px-6 lg:px-16 lg:pt-20 2xl:max-w-screen-2xl" data-astro-cid-htpxxnbo> <div class="container px-6 py-12 mx-auto" data-astro-cid-htpxxnbo> <div class="text-center animate-fade-in" data-astro-cid-htpxxnbo> <p class="font-large text-xl font-semiblod text-blue-500 dark:text-blue-400 animate-slide-up" data-astro-cid-htpxxnbo>Contact us</p> <h1 class="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white animate-slide-up" data-astro-cid-htpxxnbo>Get in touch</h1> <p class="mt-3 text-gray-500 dark:text-gray-400 animate-slide-up" data-astro-cid-htpxxnbo>Our friendly team would love to hear from you.</p> </div> <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3" data-astro-cid-htpxxnbo> <!-- Contact Info Cards --> <div class="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1 order-2 lg:order-1" data-astro-cid-htpxxnbo> <!-- Email Card --> <div class="p-8 border-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in" style="animation-delay: 0.1s" data-astro-cid-htpxxnbo> <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800 animate-pulse" data-astro-cid-htpxxnbo> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" data-astro-cid-htpxxnbo> <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" data-astro-cid-htpxxnbo></path> </svg> </span> <h2 class="mt-4 font-medium text-xl text-gray-800 dark:text-white" data-astro-cid-htpxxnbo>Email</h2> <p class="mt-2 text-sm text-gray-500 dark:text-gray-400" data-astro-cid-htpxxnbo>Our friendly team is here to help.</p> <a href="mailto:sales@digitallink.ae" class="mt-2 text-sm text-blue-500 dark:text-blue-400 hover:underline transition-all" data-astro-cid-htpxxnbo>sales@digitallink.ae</a> </div> <!-- Office Card --> <div class="p-8 border-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in" style="animation-delay: 0.2s" data-astro-cid-htpxxnbo> <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800 animate-pulse" data-astro-cid-htpxxnbo> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" data-astro-cid-htpxxnbo> <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-htpxxnbo></path> <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" data-astro-cid-htpxxnbo></path> </svg> </span> <h2 class="mt-4 text-xl font-medium text-gray-800 dark:text-white" data-astro-cid-htpxxnbo>Office</h2> <p class="mt-2 text-sm text-gray-500 dark:text-gray-400" data-astro-cid-htpxxnbo>Baghlaf Building Shop No.11 Satellite</p> <p class="mt-2 text-sm text-blue-500 dark:text-blue-400" data-astro-cid-htpxxnbo>Market, Naif, Deira - Dubai United Arab Emirates</p> <p class="mt-2 text-sm text-blue-500 dark:text-blue-400" data-astro-cid-htpxxnbo>P.O.Box: 123241</p> </div> <!-- Phone Card --> <div class="p-8 border-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fade-in" style="animation-delay: 0.3s" data-astro-cid-htpxxnbo> <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800 animate-pulse" data-astro-cid-htpxxnbo> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5" data-astro-cid-htpxxnbo> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" data-astro-cid-htpxxnbo></path> </svg> </span> <h2 class="mt-4 text-xl font-medium text-gray-800 dark:text-white" data-astro-cid-htpxxnbo>Phone</h2> <p class="mt-2 text-sm text-gray-500 dark:text-gray-400" data-astro-cid-htpxxnbo>Mon-Fri from 8am to 5pm.</p> <a href="tel:+97142241977" class="mt-2 text-sm text-blue-500 dark:text-blue-400 hover:underline transition-all" data-astro-cid-htpxxnbo>+971 4 224 1977</a> </div> </div> <!-- Map Container with Animation - Now appears first on mobile --> <div class="overflow-hidden rounded-lg lg:col-span-2 h-96 sm:h-[32rem] lg:h-full border-2 order-1 lg:order-2" data-astro-cid-htpxxnbo> ${renderComponent($$result, "MapContainer", MapContainer, { "APIKEY": "AIzaSyCieCaQ_bWMpJ46a6l-4Ck_NWVhNtNieAk", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/sanalemba/UNV-Dubai/src/components/GoogleMap", "client:component-export": "default", "data-astro-cid-htpxxnbo": true })} </div> </div> </div> </section> `;
}, "C:/Users/sanalemba/UNV-Dubai/src/components/ContactDigi.astro", undefined);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const title = "Authorized UNV Camera Supplier & Distributor in Dubai, Sharjah & UAE";
  const description = "Digital Link Technology: Your trusted supplier and distributor of UNV cameras across Dubai, Sharjah, and the UAE. Discover our range of products today!";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, ",": true, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "ContactDigi", $$ContactDigi, {})} </main> ` })}`;
}, "C:/Users/sanalemba/UNV-Dubai/src/pages/contact.astro", undefined);

const $$file = "C:/Users/sanalemba/UNV-Dubai/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
