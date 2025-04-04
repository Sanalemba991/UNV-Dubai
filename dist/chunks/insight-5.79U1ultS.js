import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.bW6CkNMv.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"id":5,"pubDate":"2024-05-19T00:00:00.000Z","title":"5MP ColourHunter Fixed Turret Analog Camera","description":"Experience a new standard in clarity with the 5MP ColorHunter Fixed Turret Analog Camera from UNV.","cardImage":"../../assets/images/digi7.jpg","cardImageAlt":"Top view mechanical tools arrangement","contents":[" 5MP high quality image","TVI/AHD/CVI/CVBS","Supports white light illumination, 24/7 color images","Supports 180° horizontal flip, 180° vertical flip","OSD configuration menu, easy to operate","IP67 waterproof and dustproof design, high reliability","OSD configuration menu in 11 languages","Built-in microphone for high quality audio transmission via coaxial cables"]};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/insights/insight-5.md";
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
