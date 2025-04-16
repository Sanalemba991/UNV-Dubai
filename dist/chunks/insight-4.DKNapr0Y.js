import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.DZ-nUPBV.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"id":4,"pubDate":"2024-04-19T00:00:00.000Z","title":"5MP Fixed IR Bullet Analog Camera","description":"Step into a world of enhanced security with the 5MP Fixed IR Bullet Analog Camera from UNV. Crafted with precision engineering and innovative features, this camera provides reliable surveillance coverage with crystal-clear imaging, day or night.","cardImage":"../../assets/images/digi2.jpg","cardImageAlt":"Top view mechanical tools arrangement","contents":["5MP high quality image","TVI/AHD/CVI/CVBS","Supports IR-cut filter with auto-switch (ICR)","Supports 180° horizontal flip, 180° vertical flip","OSD configuration menu, easy to operate","IP67 waterproof and dustproof design, high reliability","OSD configuration menu in 11 languages","Built-in microphone for high quality audio transmission via coaxial cables"]};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/insights/insight-4.md";
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
