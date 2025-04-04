import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.bW6CkNMv.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"id":9,"title":"uniview camera in dubai","body":"Experience the difference with [Your Company Name]. As a leading distributor of UNV and Dahua CCTV cameras, we offer comprehensive security solutions tailored to your needs. From consultation to installation and beyond, our team is committed to delivering top-quality products and unparalleled service. Trust us for all your security needs.","icon":"../icons/unvicon.svg"};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/feature/feature-9.md";
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
