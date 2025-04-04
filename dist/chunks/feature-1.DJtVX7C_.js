import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.bW6CkNMv.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"id":1,"title":"Digital Link Technology","body":"Welcome to Digital Link Technology, Dubai's premier distributor of UNV and Dahua CCTV cameras. Our mission is to provide you with unparalleled security solutions, from state-of-the-art surveillance systems to comprehensive security packages. Trust in our expertise to safeguard your premises and ensure peace of mind.","icon":"../icons/unvicon.svg"};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/feature/feature-1.md";
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
