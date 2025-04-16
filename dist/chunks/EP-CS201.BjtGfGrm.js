import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.DZ-nUPBV.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"EP-CS201","description":"A durable sheet metal wall-mounted waterproof cover designed for outdoor use, compatible with OEU-201B-HMK-W, OEU-201B-HMK-W-NB, OEU-201S-HMK-W, and OEU-201S-HMK-W-NB villa door stations.","image":"/images/categories/products/accessories/EP-CS201.png","features":["Compatible with multiple villa door station models","Durable sheet metal construction","Outdoor-rated waterproof design","Easy wall mount installation","Compact and lightweight design"],"specifications":{"material":"Sheet metal","dimensions":"179mm × 83mm × 50mm","mountType":"Wall mount","weight":"303.9g (with package), 213.8g (without package)","environment":"Outdoor","compatibility":"OEU-201B-HMK-W, OEU-201B-HMK-W-NB, OEU-201S-HMK-W, OEU-201S-HMK-W-NB"}};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/accessories/EP-CS201.md";
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
