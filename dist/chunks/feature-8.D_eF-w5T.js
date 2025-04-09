import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.DWt4ZQvO.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"id":8,"title":"Trusted dealer for UNV cameras","body":"Dahua CCTV cameras are the cornerstone of modern security systems, providing unparalleled clarity and reliability. Whether you're monitoring a small business or a large-scale enterprise, Dahua cameras deliver exceptional performance and peace of mind. Protect what matters most with Dahua's cutting-edge technology.","icon":"../icons/unvicon.svg"};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/feature/feature-8.md";
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
