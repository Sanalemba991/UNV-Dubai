import { c as createComponent, r as renderTemplate, e as renderHead, d as createAstro, m as maybeRenderHead, b as addAttribute, a as renderComponent, u as unescapeHTML } from '../chunks/astro/server.bW6CkNMv.js';
import 'kleur/colors';
import 'clsx';
/* empty css                                */
import { a as $$Image, $ as $$Layout } from '../chunks/Layout.CcPZnjuo.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import { g as getCollection } from '../chunks/_astro_content.n6qxTNle.js';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { $ as $$Sections } from '../chunks/Sections.B9sG1_13.js';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import '@astrojs/internal-helpers/path';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-bbe6dxrz> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>UNV Security Camera Carousel</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">${renderHead()}</head> <body class="bg-gray-100" data-astro-cid-bbe6dxrz> <div class="carousel-wrapper mb-10" data-astro-cid-bbe6dxrz> <div id="default-carousel" class="relative w-full" data-carousel="static" data-astro-cid-bbe6dxrz> <!-- Carousel wrapper --> <div class="relative h-full overflow-hidden rounded-none" data-astro-cid-bbe6dxrz> <!-- Item 1 --> <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full opacity-0" data-carousel-item data-astro-cid-bbe6dxrz> <div class="carousel-item-container" onclick="window.location.href='/products'" data-astro-cid-bbe6dxrz> <!-- Desktop Image --> <img src="/images/categories/products/hero/Products.png" class="carousel-image absolute block w-full h-full object-cover transition-all duration-500 hidden sm:block" alt="UNV Security Products" data-astro-cid-bbe6dxrz> <!-- Mobile Image --> <img src="/images/categories/products/hero/mobile2.png" class="carousel-image absolute block w-full h-full object-cover transition-all duration-500 sm:hidden" alt="UNV Security Products Mobile" data-astro-cid-bbe6dxrz> <div class="carousel-caption" data-astro-cid-bbe6dxrz> <h3 class="text-xl sm:text-2xl md:text-3xl font-bold heading-font" data-astro-cid-bbe6dxrz>OUR PRODUCTS</h3> <p class="text-sm sm:text-base md:text-lg mb-3 sm:mb-4 opacity-90" data-astro-cid-bbe6dxrz>Cutting-edge surveillance solutions designed for superior performance.</p> <span class="shop-now-btn" data-astro-cid-bbe6dxrz>Explore Our Products</span> </div> </div> </div> <!-- Item 2 --> <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full opacity-0" data-carousel-item data-astro-cid-bbe6dxrz> <div class="carousel-item-container" onclick="window.location.href='/blog'" data-astro-cid-bbe6dxrz> <!-- Desktop Image --> <img src="/images/categories/products/hero/Blog.png" class="carousel-image absolute block w-full h-full object-cover transition-all duration-500 hidden sm:block" alt="UNV Security Blog" data-astro-cid-bbe6dxrz> <!-- Mobile Image --> <img src="/images/categories/products/hero/mobile.png" class="carousel-image absolute block w-full h-full object-cover transition-all duration-500 sm:hidden" alt="UNV Security Blog Mobile" data-astro-cid-bbe6dxrz> <div class="carousel-caption" data-astro-cid-bbe6dxrz> <h3 class="text-xl sm:text-2xl md:text-3xl font-bold heading-font" data-astro-cid-bbe6dxrz>LATEST BLOGS</h3> <p class="text-sm sm:text-base md:text-lg mb-3 sm:mb-4 opacity-90" data-astro-cid-bbe6dxrz>Enhance your home's security with state-of-the-art monitoring solutions.</p> <span class="shop-now-btn" data-astro-cid-bbe6dxrz>Discover More</span> </div> </div> </div> <!-- Item 3 --> <div class="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full opacity-0" data-carousel-item data-astro-cid-bbe6dxrz> <div class="carousel-item-container" onclick="window.location.href='/insights'" data-astro-cid-bbe6dxrz> <!-- Desktop Image --> <img src="/images/categories/products/hero/Insights.png" class="carousel-image absolute block w-full h-full object-cover transition-all duration-500 hidden sm:block" alt="UNV Security Insights" data-astro-cid-bbe6dxrz> <!-- Mobile Image --> <img src="/images/categories/products/hero/mobile1.png" class="carousel-image absolute block w-full h-full object-cover transition-all duration-500 sm:hidden" alt="UNV Security Insights Mobile" data-astro-cid-bbe6dxrz> <div class="carousel-caption" data-astro-cid-bbe6dxrz> <h3 class="text-xl sm:text-2xl md:text-3xl font-bold heading-font" data-astro-cid-bbe6dxrz>INSIGHTS</h3> <p class="text-sm sm:text-base md:text-lg mb-3 sm:mb-4 opacity-90" data-astro-cid-bbe6dxrz>Top-tier surveillance solutions tailored for businesses and institutions.</p> <span class="shop-now-btn" data-astro-cid-bbe6dxrz>Explore Insights</span> </div> </div> </div> </div> <!-- Slider indicators --> <div class="absolute z-30 flex -translate-x-1/2 bottom-3 sm:bottom-4 md:bottom-5 left-1/2 space-x-2 sm:space-x-3 rtl:space-x-reverse" data-astro-cid-bbe6dxrz> <button type="button" class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/50 hover:bg-white transition-colors" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0" data-astro-cid-bbe6dxrz></button> <button type="button" class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/50 hover:bg-white transition-colors" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1" data-astro-cid-bbe6dxrz></button> <button type="button" class="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white/50 hover:bg-white transition-colors" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2" data-astro-cid-bbe6dxrz></button> </div> <!-- Slider controls --> <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-2 sm:px-3 md:px-4 cursor-pointer group focus:outline-none" data-carousel-prev data-astro-cid-bbe6dxrz> <span class="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-transparent hover:bg-blue-500/50 transition-all duration-200 focus:ring-2 focus:ring-white" data-astro-cid-bbe6dxrz> <svg class="w-3 h-3 sm:w-4 sm:h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10" data-astro-cid-bbe6dxrz> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" data-astro-cid-bbe6dxrz></path> </svg> <span class="sr-only" data-astro-cid-bbe6dxrz>Previous</span> </span> </button> <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-2 sm:px-3 md:px-4 cursor-pointer group focus:outline-none" data-carousel-next data-astro-cid-bbe6dxrz> <span class="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-transparent hover:bg-blue-500/50 transition-all duration-200 focus:ring-2 focus:ring-white" data-astro-cid-bbe6dxrz> <svg class="w-3 h-3 sm:w-4 sm:h-4 text-white rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10" data-astro-cid-bbe6dxrz> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" data-astro-cid-bbe6dxrz></path> </svg> <span class="sr-only" data-astro-cid-bbe6dxrz>Next</span> </span> </button> </div> </div>  </body> </html>`;
}, "C:/Users/sanalemba/UNV-Dubai/src/components/Hero.astro", undefined);

const Slider = () => {
  const [sliders, setSliders] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderRef = useRef(null);
  const animationRef = useRef();
  useEffect(() => {
    const fetchSliders = async () => {
      const sliderEntries = await getCollection("slider");
      setSliders(sliderEntries);
    };
    fetchSliders();
  }, []);
  useEffect(() => {
    if (!isHovered) {
      const startTime = performance.now();
      const startPosition = scrollPosition;
      const duration = 2e4;
      const distance = sliders.length * 288;
      const animate = (time) => {
        const elapsed = (time - startTime) % duration;
        const progress = elapsed / duration;
        const newPosition = (startPosition + progress * distance) % distance;
        if (sliderRef.current) {
          sliderRef.current.style.transform = `translateX(-${newPosition}px)`;
        }
        animationRef.current = requestAnimationFrame(animate);
      };
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, scrollPosition, sliders.length]);
  const handleMouseEnter = () => {
    if (sliderRef.current) {
      const style = window.getComputedStyle(sliderRef.current);
      const matrix = new DOMMatrix(style.transform);
      setScrollPosition(Math.abs(matrix.m41));
    }
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "relative w-full overflow-hidden",
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          ref: sliderRef,
          className: "flex",
          style: {
            width: `${sliders.length * 2 * 288}px`,
            // Adjust based on item width and count
            transform: isHovered ? `translateX(-${scrollPosition}px)` : "translateX(0)"
          },
          children: [
            sliders.map((slider, index) => /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "m-8 w-52 h-52 md:w-64 md:h-64 flex items-center justify-center p-12 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:z-10 hover:bg-white/10 rounded-lg", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: slider.data.slider,
                alt: slider.data.sliderAlt,
                className: "max-w-full max-h-full object-contain transition-all duration-500 hover:brightness-110"
              }
            ) }) }, index)),
            sliders.map((slider, index) => /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "m-8 w-52 h-52 md:w-64 md:h-64 flex items-center justify-center p-12 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:z-10 hover:bg-white/10 rounded-lg", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: slider.data.slider,
                alt: slider.data.sliderAlt,
                className: "max-w-full max-h-full object-contain transition-all duration-500 hover:brightness-110"
              }
            ) }) }, `duplicate-${index}`))
          ]
        }
      )
    }
  );
};

const $$Astro$3 = createAstro("https://unvdubai.com");
const $$AvatarTestimonial = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AvatarTestimonial;
  const { src, alt } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex-shrink-0"> <img class="size-8 rounded-full sm:h-[2.875rem] sm:w-[2.875rem]"${addAttribute(src, "src")}${addAttribute(alt, "alt")} loading="lazy"> </div>`;
}, "C:/Users/sanalemba/UNV-Dubai/src/components/ui/AvatarTestimonial.astro", undefined);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$2 = createAstro("https://unvdubai.com");
const $$TestimonialsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$TestimonialsSection;
  const { title, testimonials } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", '<section id="testimonials" class="mx-auto w-full px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:max-w-[85rem] lg:py-14 xl:px-0 2xl:max-w-full opacity-0" data-astro-cid-zzqkys7x> <div class="mb-4 w-full text-center sm:mb-6 md:mb-8" data-astro-cid-zzqkys7x> <h2 class="text-balance text-2xl font-medium text-neutral-800 dark:text-neutral-200 sm:text-3xl md:text-4xl lg:text-[2.5rem]" data-astro-cid-zzqkys7x> ', ' </h2> </div> <div class="grid gap-4 sm:gap-5 md:gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:gap-8" data-astro-cid-zzqkys7x> ', ` </div> </section>  <script>
  if (typeof window !== "undefined") {
    document.addEventListener('DOMContentLoaded', () => {
      const section = document.querySelector("#testimonials");
      if (section) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              section.classList.add("fade-in-up");
              observer.unobserve(entry.target);
            }
          });
        }, { 
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px"
        });

        observer.observe(section);
      }
    });
  }
<\/script>`])), maybeRenderHead(), title, testimonials.map((testimonial) => renderTemplate`<div class="flex h-auto" data-astro-cid-zzqkys7x> <div class="flex w-full flex-col rounded-xl bg-neutral-50 shadow-sm transition-all hover:shadow-md dark:bg-neutral-700 dark:hover:shadow-neutral-600/30" data-astro-cid-zzqkys7x> <div class="flex-auto p-4 sm:p-5 md:p-6" data-astro-cid-zzqkys7x> <p class="text-pretty text-sm italic text-neutral-600 dark:text-neutral-300 sm:text-base md:text-lg" data-astro-cid-zzqkys7x> ${testimonial.data.content} </p> </div> <div class="rounded-b-xl bg-neutral-300/30 p-4 dark:bg-neutral-900/30 sm:p-5 md:px-6" data-astro-cid-zzqkys7x> <div class="flex items-center" data-astro-cid-zzqkys7x> ${renderComponent($$result, "AvatarTestimonial", $$AvatarTestimonial, { "src": testimonial.data.avatarSrc.src, "alt": testimonial.data.avatarAlt, "class": "h-10 w-10 sm:h-12 sm:w-12", "data-astro-cid-zzqkys7x": true })} <div class="ms-3 grow" data-astro-cid-zzqkys7x> <p class="text-sm font-medium text-neutral-800 dark:text-neutral-200 sm:text-base" data-astro-cid-zzqkys7x> ${testimonial.data.author} </p> <p class="text-xs text-neutral-600 dark:text-neutral-400 sm:text-sm" data-astro-cid-zzqkys7x> ${testimonial.data.role} </p> </div> </div> </div> </div> </div>`));
}, "C:/Users/sanalemba/UNV-Dubai/src/components/TestimonialsSection.astro", undefined);

const $$Astro$1 = createAstro("https://unvdubai.com");
const $$TitleComponents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TitleComponents;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-8 w-full sm:mb-10 md:mb-16 text-center"> <h2 class="text-balance text-xl  text-neutral-800 dark:text-neutral-200 sm:text-3xl lg:text-4xl font-family: Verdana, sans-serif"> ${title} </h2> </div>`;
}, "C:/Users/sanalemba/UNV-Dubai/src/components/TitleComponents.astro", undefined);

const Feature = ({ title, body, icon, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: `flex flex-col relative cursor-pointer text-white 
      mt-6 sm:mt-8 md:mt-10 lg:mt-0 ${className}`, children: [
    /* @__PURE__ */ jsx(
      motion.div,
      {
        animate: { margin: isHovered ? "0px" : "12px" },
        transition: { duration: 0.3 },
        className: "bg-black shadow-2xl w-full h-full absolute rounded-lg"
      }
    ),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
        whileHover: {
          opacity: 0.9,
          y: -4
          // slight lift effect
        },
        transition: {
          duration: 0.3,
          ease: "easeOut"
        },
        className: "border-2 border-gray-400/50 w-full h-full bg-slate-700/90 \r\n        rounded-lg p-5 sm:p-6 relative flex flex-col sm:flex-row justify-between \r\n        gap-4 hover:border-gray-300/70 transition-all",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            title && /* @__PURE__ */ jsx("h3", { className: "text-lg sm:text-xl font-medium mb-2 sm:mb-3", children: title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm sm:text-base text-gray-100/90", children: body })
          ] }),
          icon && /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 self-center sm:self-start", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: icon,
              width: 62,
              height: 62,
              className: "white-icon filter brightness-0 invert(90%)",
              alt: title || "Feature icon"
            }
          ) })
        ]
      }
    )
  ] });
};

const $$FeatureComponents = createComponent(async ($$result, $$props, $$slots) => {
  const feature = (await getCollection("feature")).sort(
    (a, b) => a.data.id - b.data.id
  );
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3"> ${feature.map((e) => renderTemplate`${renderComponent($$result, "Feature", Feature, { "client:load": true, "title": e.data.title, "body": e.data.body, "icon": e.data.icon, "client:component-hydration": "load", "client:component-path": "~/components/Feature", "client:component-export": "default" })}`)} </div>`;
}, "C:/Users/sanalemba/UNV-Dubai/src/components/FeatureComponents.astro", undefined);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Unvdigi = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="hidden sm:flex absolute inset-0 -z-50"> <div id="icons" class="relative [&>svg]:p-16 [&>svg]:w-21 [&>svg]:h-21 [&>svg]:fill-current [&>svg]:opacity-0 [&>svg]:absolute w-half h-full"> <svg width="500" height="500" viewBox="0 0 100 100"> <image href="../float/dahua.svg" x="50" y="50" width="50" height="50"></image> </svg> <svg width="500" height="500" viewBox="0 0 100 100"> <image href="../float/dahua.svg" x="50" y="50" width="50" height="50"></image> </svg> <svg width="500" height="500" viewBox="0 0 100 100"> <image href="../float/unv.svg" x="50" y="50" width="50" height="50"></image> </svg> <svg width="500" height="500" viewBox="0 0 100 100"> <image href="../float/grand.svg" x="50" y="50" width="50" height="50"></image> </svg> <svg width="500" height="500" viewBox="0 0 100 100"> <image href="../float/western.svg" x="50" y="50" width="50" height="50"></image> </svg> <svg width="500" height="500" viewBox="0 0 100 100"> <!-- <circle cx="50" cy="50" r="50" fill="white"></circle> --> <image href="../float/megvi.svg" x="50" y="50" width="50" height="50"></image> </svg> <svg width="500" height="500" viewBox="0 0 100 100"> <!-- <circle cx="50" cy="50" r="50" fill="white"></circle> --> <image href="../float/unv.svg" x="50" y="50" width="50" height="50"></image> </svg> <svg width="500" height="500" viewBox="0 0 100 100"> <!-- <circle cx="50" cy="50" r="50" fill="white"></circle> --> <image href="../float/unv.svg" x="50" y="50" width="50" height="50"></image> </svg> <svg width="500" height="500" viewBox="0 0 100 100"> <!-- <circle cx="100" cy="100" r="100" fill="white"></circle> --> <image href="../float/hik.svg" x="50" y="50" width="50" height="50"></image> </svg> <svg width="500" height="500" viewBox="0 0 100 100"> <!-- <circle cx="100" cy="100" r="100" fill="white"></circle> --> <image href="../float/hik.svg" x="50" y="50" width="50" height="50"></image> </svg> <svg width="500" height="500" viewBox="0 0 100 100"> <!-- <circle cx="100" cy="100" r="100" fill="white"></circle> --> <image href="../float/hik.svg" x="50" y="50" width="50" height="50"></image> </svg> </div> </div> <script type="module">\n  const hero = document.getElementById("icons");\n  const svgs = Array.from(hero.querySelectorAll("svg"));\n  var w = window.innerWidth ;\n  var h = window.innerHeight;\n  function handleResize() {\n    // Get window width and height\n    w = window.innerWidth;\n    h = window.innerHeight;\n\n    // Do something with the width and height\n    // console.log("Window width:", w);\n    // console.log("Window height:", h);\n  }\n  window.addEventListener("resize", handleResize);\n  function animateBackgroundIcons() {\n    const availableSvgs = svgs.filter((svg) => !svg.isAnimating);\n    const svgToAnimate =\n      availableSvgs[Math.floor(Math.random() * availableSvgs.length)];\n    if (!svgToAnimate) return;\n    const svgWidth = svgToAnimate.getBoundingClientRect().width;\n    const svgHeight = svgToAnimate.getBoundingClientRect().height;\n    const maxLeft = w - svgWidth;\n    const maxTop = h - svgHeight;\n    const randomLeft = Math.floor(Math.random() * maxLeft);\n    const randomTop = Math.floor(Math.random() * maxTop);\n    svgToAnimate.addEventListener(\n      "animationend",\n      () => {\n        svgToAnimate.classList.remove("animate-moving-background");\n        svgToAnimate.removeAttribute("style");\n        svgToAnimate.isAnimating = false;\n      },\n      { once: true }\n    );\n    svgToAnimate.setAttribute(\n      "style",\n      // `top: ${Math.floor(Math.random() * h)}px;\n      // 	left: ${Math.floor(Math.random() * w)}px;`\n      `top: ${randomTop}px;\n            left: ${randomLeft}px;`\n    );\n    svgToAnimate.classList.add("animate-moving-background");\n    svgToAnimate.isAnimating = true;\n  }\n  setInterval(animateBackgroundIcons, 1000);\n  animateBackgroundIcons();\n<\/script>'], ["", '<div class="hidden sm:flex absolute inset-0 -z-50"> <div id="icons" class="relative [&>svg]:p-16 [&>svg]:w-21 [&>svg]:h-21 [&>svg]:fill-current [&>svg]:opacity-0 [&>svg]:absolute w-half h-full"> <svg width="500" height="500" viewBox="0 0 100 100"> <image href="../float/dahua.svg" x="50" y="50" width="50" height="50"></image> </svg> <svg width="500" height="500" viewBox="0 0 100 100"> <image href="../float/dahua.svg" x="50" y="50" width="50" height="50"></image> </svg> <svg width="500" height="500" viewBox="0 0 100 100"> <image href="../float/unv.svg" x="50" y="50" width="50" height="50"></image> </svg> <svg width="500" height="500" viewBox="0 0 100 100"> <image href="../float/grand.svg" x="50" y="50" width="50" height="50"></image> </svg> <svg width="500" height="500" viewBox="0 0 100 100"> <image href="../float/western.svg" x="50" y="50" width="50" height="50"></image> </svg> <svg width="500" height="500" viewBox="0 0 100 100"> <!-- <circle cx="50" cy="50" r="50" fill="white"></circle> --> <image href="../float/megvi.svg" x="50" y="50" width="50" height="50"></image> </svg> <svg width="500" height="500" viewBox="0 0 100 100"> <!-- <circle cx="50" cy="50" r="50" fill="white"></circle> --> <image href="../float/unv.svg" x="50" y="50" width="50" height="50"></image> </svg> <svg width="500" height="500" viewBox="0 0 100 100"> <!-- <circle cx="50" cy="50" r="50" fill="white"></circle> --> <image href="../float/unv.svg" x="50" y="50" width="50" height="50"></image> </svg> <svg width="500" height="500" viewBox="0 0 100 100"> <!-- <circle cx="100" cy="100" r="100" fill="white"></circle> --> <image href="../float/hik.svg" x="50" y="50" width="50" height="50"></image> </svg> <svg width="500" height="500" viewBox="0 0 100 100"> <!-- <circle cx="100" cy="100" r="100" fill="white"></circle> --> <image href="../float/hik.svg" x="50" y="50" width="50" height="50"></image> </svg> <svg width="500" height="500" viewBox="0 0 100 100"> <!-- <circle cx="100" cy="100" r="100" fill="white"></circle> --> <image href="../float/hik.svg" x="50" y="50" width="50" height="50"></image> </svg> </div> </div> <script type="module">\n  const hero = document.getElementById("icons");\n  const svgs = Array.from(hero.querySelectorAll("svg"));\n  var w = window.innerWidth ;\n  var h = window.innerHeight;\n  function handleResize() {\n    // Get window width and height\n    w = window.innerWidth;\n    h = window.innerHeight;\n\n    // Do something with the width and height\n    // console.log("Window width:", w);\n    // console.log("Window height:", h);\n  }\n  window.addEventListener("resize", handleResize);\n  function animateBackgroundIcons() {\n    const availableSvgs = svgs.filter((svg) => !svg.isAnimating);\n    const svgToAnimate =\n      availableSvgs[Math.floor(Math.random() * availableSvgs.length)];\n    if (!svgToAnimate) return;\n    const svgWidth = svgToAnimate.getBoundingClientRect().width;\n    const svgHeight = svgToAnimate.getBoundingClientRect().height;\n    const maxLeft = w - svgWidth;\n    const maxTop = h - svgHeight;\n    const randomLeft = Math.floor(Math.random() * maxLeft);\n    const randomTop = Math.floor(Math.random() * maxTop);\n    svgToAnimate.addEventListener(\n      "animationend",\n      () => {\n        svgToAnimate.classList.remove("animate-moving-background");\n        svgToAnimate.removeAttribute("style");\n        svgToAnimate.isAnimating = false;\n      },\n      { once: true }\n    );\n    svgToAnimate.setAttribute(\n      "style",\n      // \\`top: \\${Math.floor(Math.random() * h)}px;\n      // 	left: \\${Math.floor(Math.random() * w)}px;\\`\n      \\`top: \\${randomTop}px;\n            left: \\${randomLeft}px;\\`\n    );\n    svgToAnimate.classList.add("animate-moving-background");\n    svgToAnimate.isAnimating = true;\n  }\n  setInterval(animateBackgroundIcons, 1000);\n  animateBackgroundIcons();\n<\/script>'])), maybeRenderHead());
}, "C:/Users/sanalemba/UNV-Dubai/src/components/Unvdigi.astro", undefined);

const logo = new Proxy({"src":"/_astro/dg.CJe2uTy4.png","width":187,"height":70,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sanalemba/UNV-Dubai/src/assets/images/dg.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/sanalemba/UNV-Dubai/src/assets/images/dg.png");
							return target[name];
						}
					});

const Whatsapp = () => {
  const logoUrl = logo.src;
  return /* @__PURE__ */ jsx(
    FloatingWhatsApp,
    {
      accountName: "Digital Link Technology Dubai",
      phoneNumber: "+917012749976",
      avatar: logoUrl,
      statusMessage: "Live chat now",
      chatMessage: "Welcome to Digital Link Technology 🤝. How can we help?"
    }
  );
};

const construction = new Proxy({"src":"/_astro/digi2.BSOAQSF2.jpg","width":1800,"height":1800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sanalemba/UNV-Dubai/src/assets/images/digi2.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/sanalemba/UNV-Dubai/src/assets/images/digi2.jpg");
							return target[name];
						}
					});

const digiimpact = new Proxy({"src":"/_astro/digi7.koSy2d03.jpg","width":1800,"height":1800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sanalemba/UNV-Dubai/src/assets/images/digit.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/sanalemba/UNV-Dubai/src/assets/images/digit.jpg");
							return target[name];
						}
					});

const dashboard = new Proxy({"src":"/_astro/dahua.B44oatrF.jpg","width":1800,"height":1800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/sanalemba/UNV-Dubai/src/assets/images/dahua.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("C:/Users/sanalemba/UNV-Dubai/src/assets/images/dahua.jpg");
							return target[name];
						}
					});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Feature = createComponent(($$result, $$props, $$slots) => {
  const title = `Welcome to<span class="text-blue-500 ml-2 dark:text-yellow-400">Digital Link Technology</span>`;
  return renderTemplate(_a || (_a = __template(["", '<section class="mx-auto w-full px-4 py-3 sm:px-6 lg:px-8 lg:py-4"> <div class="relative p-0 md:p-2"> <div class="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-8"> <!-- Section heading and tabs --> <div class="mb-12 lg:order-2 lg:col-span-6 lg:col-start-7 lg:mb-0"> <h2 class="text-3xl text-neutral-800 dark:text-neutral-200 sm:text-4xl"> <span>', '</span> </h2> <!-- Tab navigation --> <nav class="mt-6 grid gap-5 md:mt-12"> <!-- Tab 1 --> <div id="tab-1" class="tab-nav active cursor-pointer rounded-lg border-2 border-blue-500 bg-blue-50 p-5 transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-100 dark:bg-blue-900/20 dark:hover:bg-neutral-800" data-tab="1" onclick="switchTab(1)"> <div class="flex items-start"> <svg class="mt-1 h-8 w-8 flex-shrink-0 fill-blue-500 dark:fill-blue-400" viewBox="0 -960 960 960"> <path d="M764-80q-6 0-11-2t-10-7L501-331q-5-5-7-10t-2-11q0-6 2-11t7-10l85-85q5-5 10-7t11-2q6 0 11 2t10 7l242 242q5 5 7 10t2 11q0 6-2 11t-7 10l-85 85q-5 5-10 7t-11 2Zm0-72 43-43-200-200-43 43 200 200ZM195-80q-6 0-11.5-2T173-89l-84-84q-5-5-7-10.5T80-195q0-6 2-11t7-10l225-225h85l38-38-175-175h-57L80-779l99-99 125 125v57l175 175 130-130-67-67 56-56H485l-18-18 128-128 18 18v113l56-56 169 169q15 15 23.5 34.5T870-600q0 20-6.5 38.5T845-528l-85-85-56 56-52-52-211 211v84L216-89q-5 5-10 7t-11 2Zm0-72 200-200v-43h-43L152-195l43 43Zm0 0-43-43 22 21 21 22Zm569 0 43-43-43 43Z"></path> </svg> <div class="ml-5"> <h3 class="text-xl md:text-xl">Discover Our Range of UNV Cameras</h3> <p class="text-base md:text-base text-neutral-600 dark:text-neutral-400">At Digital Link Technology, we offer a diverse selection of UNV cameras designed to meet the demands of any surveillance environment.</p> </div> </div> </div> <!-- Tab 2 --> <div id="tab-2" class="tab-nav cursor-pointer rounded-lg p-5 transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-100 dark:hover:bg-neutral-800" data-tab="2" onclick="switchTab(2)"> <div class="flex items-start"> <svg class="mt-1 h-8 w-8 flex-shrink-0 fill-neutral-700 dark:fill-neutral-300" viewBox="0 -960 960 960"> <path d="M510-570v-270h330v270H510ZM120-450v-390h330v390H120Zm390 330v-390h330v390H510Zm-390 0v-270h330v270H120Zm60-390h210v-270H180v270Zm390 330h210v-270H570v270Zm0-450h210v-150H570v150ZM180-180h210v-150H180v150Zm210-330Zm180-120Zm0 180ZM390-330Z"></path> </svg> <div class="ml-5"> <h3 class="text-xl md:text-xl">Comprehensive UNV Camera Solutions</h3> <p class="text-base md:text-base text-neutral-600 dark:text-neutral-400">Digital Link Technology provides a comprehensive suite of services to ensure your surveillance system operates at peak performance.</p> </div> </div> </div> <!-- Tab 3 --> <div id="tab-3" class="tab-nav cursor-pointer rounded-lg p-5 transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-100 dark:hover:bg-neutral-800" data-tab="3" onclick="switchTab(3)"> <div class="flex items-start"> <svg class="h-8 w-8 flex-shrink-0 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"></path> </svg> <div class="ml-5"> <h3 class="text-xl md:text-xl">Stay Informed with the Latest in Surveillance Technology</h3> <p class="text-base md:text-base text-neutral-600 dark:text-neutral-400">Welcome to the Digital Link Technology blog, your source for informative articles, tips, and insights on UNV cameras and surveillance technology.</p> </div> </div> </div> </nav> </div> <!-- Tab content area --> <!-- Tab content area --> <div class="lg:col-span-6 lg:order-1"> <div class="relative h-[400px] w-full sm:h-[500px] lg:h-[600px]"> <!-- Tab 1 Content --> <div id="content-1" class="absolute inset-0 h-full w-full opacity-100 transition-opacity duration-500 ease-in-out"> ', ' </div> <!-- Tab 2 Content --> <div id="content-2" class="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500 ease-in-out"> ', ' </div> <!-- Tab 3 Content --> <div id="content-3" class="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500 ease-in-out"> ', " </div> </div> </div> </div> </div> </section> <script>\n  // Smooth tab switching function\n  function switchTab(tabNumber) {\n    // Update tab styling\n    document.querySelectorAll('.tab-nav').forEach(tab => {\n      tab.classList.remove(\n        'active', \n        'border-blue-500', \n        'bg-blue-50', \n        'dark:bg-blue-900/20',\n        'border-2'\n      );\n      tab.querySelector('svg').classList.remove('fill-blue-500', 'dark:fill-blue-400');\n      tab.querySelector('svg').classList.add('fill-neutral-700', 'dark:fill-neutral-300');\n    });\n    \n    // Activate clicked tab\n    const activeTab = document.getElementById(`tab-${tabNumber}`);\n    activeTab.classList.add(\n      'active', \n      'border-blue-500', \n      'bg-blue-50', \n      'dark:bg-blue-900/20',\n      'border-2'\n    );\n    activeTab.querySelector('svg').classList.add('fill-blue-500', 'dark:fill-blue-400');\n    activeTab.querySelector('svg').classList.remove('fill-neutral-700', 'dark:fill-neutral-300');\n    \n    // Update content visibility\n    document.querySelectorAll('[id^=\"content-\"]').forEach(content => {\n      content.classList.remove('opacity-100');\n      content.classList.add('opacity-0');\n    });\n    \n    // Show selected content\n    setTimeout(() => {\n      document.getElementById(`content-${tabNumber}`).classList.remove('opacity-0');\n      document.getElementById(`content-${tabNumber}`).classList.add('opacity-100');\n    }, 10);\n  }\n<\/script>"], ["", '<section class="mx-auto w-full px-4 py-3 sm:px-6 lg:px-8 lg:py-4"> <div class="relative p-0 md:p-2"> <div class="relative z-10 lg:grid lg:grid-cols-12 lg:items-center lg:gap-8"> <!-- Section heading and tabs --> <div class="mb-12 lg:order-2 lg:col-span-6 lg:col-start-7 lg:mb-0"> <h2 class="text-3xl text-neutral-800 dark:text-neutral-200 sm:text-4xl"> <span>', '</span> </h2> <!-- Tab navigation --> <nav class="mt-6 grid gap-5 md:mt-12"> <!-- Tab 1 --> <div id="tab-1" class="tab-nav active cursor-pointer rounded-lg border-2 border-blue-500 bg-blue-50 p-5 transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-100 dark:bg-blue-900/20 dark:hover:bg-neutral-800" data-tab="1" onclick="switchTab(1)"> <div class="flex items-start"> <svg class="mt-1 h-8 w-8 flex-shrink-0 fill-blue-500 dark:fill-blue-400" viewBox="0 -960 960 960"> <path d="M764-80q-6 0-11-2t-10-7L501-331q-5-5-7-10t-2-11q0-6 2-11t7-10l85-85q5-5 10-7t11-2q6 0 11 2t10 7l242 242q5 5 7 10t2 11q0 6-2 11t-7 10l-85 85q-5 5-10 7t-11 2Zm0-72 43-43-200-200-43 43 200 200ZM195-80q-6 0-11.5-2T173-89l-84-84q-5-5-7-10.5T80-195q0-6 2-11t7-10l225-225h85l38-38-175-175h-57L80-779l99-99 125 125v57l175 175 130-130-67-67 56-56H485l-18-18 128-128 18 18v113l56-56 169 169q15 15 23.5 34.5T870-600q0 20-6.5 38.5T845-528l-85-85-56 56-52-52-211 211v84L216-89q-5 5-10 7t-11 2Zm0-72 200-200v-43h-43L152-195l43 43Zm0 0-43-43 22 21 21 22Zm569 0 43-43-43 43Z"></path> </svg> <div class="ml-5"> <h3 class="text-xl md:text-xl">Discover Our Range of UNV Cameras</h3> <p class="text-base md:text-base text-neutral-600 dark:text-neutral-400">At Digital Link Technology, we offer a diverse selection of UNV cameras designed to meet the demands of any surveillance environment.</p> </div> </div> </div> <!-- Tab 2 --> <div id="tab-2" class="tab-nav cursor-pointer rounded-lg p-5 transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-100 dark:hover:bg-neutral-800" data-tab="2" onclick="switchTab(2)"> <div class="flex items-start"> <svg class="mt-1 h-8 w-8 flex-shrink-0 fill-neutral-700 dark:fill-neutral-300" viewBox="0 -960 960 960"> <path d="M510-570v-270h330v270H510ZM120-450v-390h330v390H120Zm390 330v-390h330v390H510Zm-390 0v-270h330v270H120Zm60-390h210v-270H180v270Zm390 330h210v-270H570v270Zm0-450h210v-150H570v150ZM180-180h210v-150H180v150Zm210-330Zm180-120Zm0 180ZM390-330Z"></path> </svg> <div class="ml-5"> <h3 class="text-xl md:text-xl">Comprehensive UNV Camera Solutions</h3> <p class="text-base md:text-base text-neutral-600 dark:text-neutral-400">Digital Link Technology provides a comprehensive suite of services to ensure your surveillance system operates at peak performance.</p> </div> </div> </div> <!-- Tab 3 --> <div id="tab-3" class="tab-nav cursor-pointer rounded-lg p-5 transition-all duration-300 hover:scale-[1.02] hover:bg-neutral-100 dark:hover:bg-neutral-800" data-tab="3" onclick="switchTab(3)"> <div class="flex items-start"> <svg class="h-8 w-8 flex-shrink-0 text-neutral-700 dark:text-neutral-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819"></path> </svg> <div class="ml-5"> <h3 class="text-xl md:text-xl">Stay Informed with the Latest in Surveillance Technology</h3> <p class="text-base md:text-base text-neutral-600 dark:text-neutral-400">Welcome to the Digital Link Technology blog, your source for informative articles, tips, and insights on UNV cameras and surveillance technology.</p> </div> </div> </div> </nav> </div> <!-- Tab content area --> <!-- Tab content area --> <div class="lg:col-span-6 lg:order-1"> <div class="relative h-[400px] w-full sm:h-[500px] lg:h-[600px]"> <!-- Tab 1 Content --> <div id="content-1" class="absolute inset-0 h-full w-full opacity-100 transition-opacity duration-500 ease-in-out"> ', ' </div> <!-- Tab 2 Content --> <div id="content-2" class="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500 ease-in-out"> ', ' </div> <!-- Tab 3 Content --> <div id="content-3" class="absolute inset-0 h-full w-full opacity-0 transition-opacity duration-500 ease-in-out"> ', " </div> </div> </div> </div> </div> </section> <script>\n  // Smooth tab switching function\n  function switchTab(tabNumber) {\n    // Update tab styling\n    document.querySelectorAll('.tab-nav').forEach(tab => {\n      tab.classList.remove(\n        'active', \n        'border-blue-500', \n        'bg-blue-50', \n        'dark:bg-blue-900/20',\n        'border-2'\n      );\n      tab.querySelector('svg').classList.remove('fill-blue-500', 'dark:fill-blue-400');\n      tab.querySelector('svg').classList.add('fill-neutral-700', 'dark:fill-neutral-300');\n    });\n    \n    // Activate clicked tab\n    const activeTab = document.getElementById(\\`tab-\\${tabNumber}\\`);\n    activeTab.classList.add(\n      'active', \n      'border-blue-500', \n      'bg-blue-50', \n      'dark:bg-blue-900/20',\n      'border-2'\n    );\n    activeTab.querySelector('svg').classList.add('fill-blue-500', 'dark:fill-blue-400');\n    activeTab.querySelector('svg').classList.remove('fill-neutral-700', 'dark:fill-neutral-300');\n    \n    // Update content visibility\n    document.querySelectorAll('[id^=\"content-\"]').forEach(content => {\n      content.classList.remove('opacity-100');\n      content.classList.add('opacity-0');\n    });\n    \n    // Show selected content\n    setTimeout(() => {\n      document.getElementById(\\`content-\\${tabNumber}\\`).classList.remove('opacity-0');\n      document.getElementById(\\`content-\\${tabNumber}\\`).classList.add('opacity-100');\n    }, 10);\n  }\n<\/script>"])), maybeRenderHead(), unescapeHTML(title), renderComponent($$result, "Image", $$Image, { "src": construction, "alt": "UNV Camera products", "class": "h-full w-full rounded-[4px] object-contain object-center", "loading": "eager" }), renderComponent($$result, "Image", $$Image, { "src": dashboard, "alt": "Camera solutions dashboard", "class": "h-full w-full rounded-[4px] object-contain object-center" }), renderComponent($$result, "Image", $$Image, { "src": digiimpact, "alt": "Surveillance technology blog", "class": "h-full w-full rounded-[4px] object-contain object-center" }));
}, "C:/Users/sanalemba/UNV-Dubai/src/components/features/Feature.astro", undefined);

const $$Astro = createAstro("https://unvdubai.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = "UNV Authorized distributor in Dubai,U.A.E";
  const description = "Premier Hikvision Distributor in Dubai, UAE. Explore our range of genuine products and benefit from expert support. Contact us for inquiries";
  const testimonials = (await getCollection("testimonials")).sort(
    (a, b) => a.data.id - b.data.id
  );
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://unvdubai.com/#organization",
        "name": "Digital Link Technology LLC",
        "url": "https://unvdubai.com",
        "logo": {
          "@type": "ImageObject",
          "@id": `${Astro2.url.origin}/unvdubai.png`,
          "url": `${Astro2.url.origin}/unvdubai.png`,
          "contentUrl": "https://digitallink.ae/wp-content/uploads/2023/04/imageedit_3_7633242330.png",
          "caption": "unvdubai",
          "inLanguage": "en-US",
          "width": 1e3,
          "height": 375
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://unvdubai.com/#website",
        "url": "https://unvdubai.com",
        "name": "unvdubai.com",
        "publisher": {
          "@id": "https://unvdubai.com/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "ImageObject",
        "@id": `${Astro2.url.origin}/unvdubai.png`,
        "url": `${Astro2.url.origin}/unvdubai.png`,
        "width": 200,
        "height": 200,
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://unvdubai.com/#webpage",
        "url": "https://unvdubai.com/",
        "name": "Digital Link Technology LLC - UNV National Distributor in Dubai, UAE, 25th St - Naif - Dubai - United Arab Emirates - Digital Link Technology LLC",
        "description": "UNV Dubai Authorized Distributor in the UAE offering premium surveillance solutions including IP cameras, NVRs, and video management systems. Providing cutting-edge security technology with local support and tailored solutions for businesses and homes in the UAE.",
        "datePublished": "2023-05-05T12:19:39+01:00",
        "dateModified": "2024-11-25T11:05:33+00:00",
        "about": {
          "@id": "https://unvdubai.com/#organization"
        },
        "isPartOf": {
          "@id": "https://unvdubai.com/#website"
        },
        "primaryImageOfPage": {
          "@id": `${Astro2.url.origin}/unvdubai.png`
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "Article",
        "headline": "Digital Link Technology LLC - UNV National Distributor in Dubai, UAE, 25th St - Naif - Dubai - United Arab Emirates - Digital Link Technology LLC",
        "datePublished": "2023-05-05T12:19:39+01:00",
        "dateModified": "2024-11-25T11:05:33+00:00",
        "publisher": {
          "@id": "https://unvdubai.com/#organization"
        },
        "description": "UNV Dubai Authorized Distributor in the UAE offering premium surveillance solutions including IP cameras, NVRs, and video management systems. Providing cutting-edge security technology with local support and tailored solutions for businesses and homes in the UAE.",
        "name": "Digital Link Technology LLC - UNV National Distributor in Dubai, UAE, 25th St - Naif - Dubai - United Arab Emirates - Digital Link Technology LLC",
        "@id": "https://unvdubai.com/#richSnippet",
        "isPartOf": {
          "@id": "https://unvdubai.com/#webpage"
        },
        "inLanguage": "en-US",
        "mainEntityOfPage": {
          "@id": "https://unvdubai.com/#webpage"
        },
        "author": {
          "@type": "Organization",
          "name": "Digital Link Technology LLC"
        },
        "image": {
          "@type": "ImageObject",
          "url": `${Astro2.url.origin}/unvdubai.png`,
          "width": 1200,
          "height": 630,
          "caption": "UNV Dubai Authorized Distributor"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": []
        }
      }
    ]
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title, "description": description, "structuredData": structuredData }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Unvdigi", $$Unvdigi, {})} ${renderComponent($$result2, "Sections", $$Sections, {}, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Hero", $$Hero, {})} ${renderComponent($$result3, "Feature", $$Feature, {})} ${renderComponent($$result3, "TitleComponents", $$TitleComponents, { "title": "Why Digital Link Technology?" })} ${renderComponent($$result3, "FeatureComponents", $$FeatureComponents, {})} ${renderComponent($$result3, "TestimonialsSection", $$TestimonialsSection, { "title": "What Our Customers Say?", "testimonials": testimonials })} ${renderComponent($$result3, "TitleComponents", $$TitleComponents, { "title": "Award and Recognitions" })} ${renderComponent($$result3, "Slider", Slider, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "~/components/Slider", "client:component-export": "default" })} ${renderComponent($$result3, "Whatsapp", Whatsapp, { "client:load": true, "client:component-hydration": "load", "client:component-path": "~/components/Whatsapp", "client:component-export": "default" })} ` })} ` })}`;
}, "C:/Users/sanalemba/UNV-Dubai/src/pages/index.astro", undefined);

const $$file = "C:/Users/sanalemba/UNV-Dubai/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
