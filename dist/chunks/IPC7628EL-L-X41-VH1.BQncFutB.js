import { a as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.DZ-nUPBV.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"IPC7628EL-L-X41-VH1","description":"8MP 41X Lighthunter Laser Network Positioning system with advanced features including triple streams, smart intrusion prevention, and up to 1000m IR distance","images":[{"url":"/images/categories/products/ptz-cameras/IPC7628EL-L-X41-VH1/IPC7628EL-L-X41-VH1.png","caption":"Front view"},{"url":"/images/categories/products/ptz-cameras/IPC7628EL-L-X41-VH1/IPC7628EL-L-X41-VH.png","caption":"Side view"},{"url":"/images/categories/products/ptz-cameras/IPC7628EL-L-X41-VH1/IPC7628EL-L-X41-VH12.png","caption":"Back view"}],"image":"/images/categories/products/ptz-cameras/IPC7628EL-L-X41-VH1/IPC7628EL-L-X41-VH12.png","features":["3840*2160@30fps in the main stream","Triple streams","41X Optical Zoom","Smart intrusion prevention with false alarm filtering","People Counting and crowd density monitoring","Optical defog with self-adaptive capability","LightHunter technology for ultra-high image quality in low light","Smart IR with up to 1000m (3281ft) range","Rain-sensing auto wiper","Multiple power supply options","7 alarm inputs and 2 outputs","Audio input and output support"],"specifications":{"sensor":"1/1.8\" CMOS","resolution":"8 MP (3840*2160@30fps)","focalLength":"6~246mm","irRange":"1000m","powerSupply":"DC ±48V±25%, DC 24V±15% (DC20V~DC60V), AC 24V±25%","protection":"IP66","storage":"NAS, Local SD Card up to 256GB","dimensions":"366 x 283 x 509mm (14.4\" x 11.1\" x 20.0\")"},"price":"Contact for pricing"};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/ptz-cameras/IPC7628EL-L-X41-VH1.md";
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
