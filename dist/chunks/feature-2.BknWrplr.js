import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.DZ-nUPBV.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"id":2,"title":"UNV camera in Dubai","body":"Step into the future of surveillance with Dahua CCTV cameras. Renowned for their innovation and performance, Dahua cameras deliver crystal-clear images and robust security features. Whether for home or business, trust Dahua to provide comprehensive monitoring solutions tailored to your needs.","icon":"../icons/dahua.svg"};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/feature/feature-2.md";
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
