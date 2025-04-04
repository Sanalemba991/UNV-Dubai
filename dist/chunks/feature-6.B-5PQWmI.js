import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.bW6CkNMv.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"id":6,"title":"UNV camera service center","body":"Elevate your security posture with Dahua CCTV cameras, renowned for their precision and innovation. From high-resolution imaging to intelligent analytics, Dahua cameras offer comprehensive surveillance solutions for any environment. Stay one step ahead of potential threats with Dahua's advanced technology..","icon":"../icons/grand.svg"};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/feature/feature-6.md";
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
