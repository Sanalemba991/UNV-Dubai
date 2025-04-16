import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.DZ-nUPBV.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"UAC-D112-F28(40)","description":"2MP Fixed IR Dome Analog Camera.","images":[{"url":"/images/categories/products/analog-cameras/UAC-D112-F28 (40)/UAC-D112-F28 (40).png","caption":"Front view"},{"url":"/images/categories/products/analog-cameras/UAC-D112-F28 (40)/UAC-D112-F28 (40)1.png","caption":"Side view"},{"url":"/images/categories/products/analog-cameras/UAC-D112-F28 (40)/UAC-D112-F28 (40)2.png","caption":"Back view"}],"image":"/images/categories/products/analog-cameras/UAC-D112-F28 (40)/UAC-D112-F28 (40)2.png","features":["2MP high quality image","TVI/AHD/CVI/CVBS","IR-cut filter with auto switch (ICR)","Supports 180° horizontal flip, 180° vertical flip","OSD configuration menu, easy to operate","IP67 waterproof and dustproof design, high reliability","OSD configuration menu in 11 languages"],"price":"Contact Sales","specifications":{"sensor":"1/3.0\" CMOS","resolution":"1080P=1920(H)×1080(V) 720P= 1280(H) ×720(V)","focalLength":"N/A","irRange":"N/A","powerSupply":"DC 12 V ± 25%","protection":"IP67","storage":"N/A","dimensions":"142mm*63mm*65mm (L*W*H)"}};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/analog-cameras/UAC-D112-F28(40).md";
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
