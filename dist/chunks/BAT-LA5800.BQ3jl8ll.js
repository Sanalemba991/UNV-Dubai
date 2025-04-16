import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.DZ-nUPBV.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"BAT-LA5800","description":"Professional lead-acid battery module designed for backup power applications, offering reliable performance with 34W capacity at 15-minute rate","image":"/images/categories/products/accessories/BAT-LA5800.png","features":["Reliable lead-acid battery technology","Compact modular design","Stable power output","Temperature-controlled operation","Compatible with Uniview systems"],"specifications":{"battery_type":"Lead-acid","mod_capacity":"34W @ 15min-rate to 1.67V per cell @25℃","working_temperature":"5°C~35°C","compatibility":"Compatible with Uniview NVR systems","material":"ABS plastic housing with lead-acid cells","dimensions":"442mm × 310mm × 44mm","weight":"6.8kg"},"price":"Contact Sales"};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/accessories/BAT-LA5800.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
