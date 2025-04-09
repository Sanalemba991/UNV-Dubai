import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server.DWt4ZQvO.js';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"id":6,"pubDate":"2024-06-19T00:00:00.000Z","title":"The Impact of Sustainable Practices","description":"Discover how ScrewFast is revolutionizing the construction industry by championing sustainability through innovative foundation solutions, reducing environmental impact, and setting new standards for eco-conscious engineering practices.","cardImage":"../../assets/images/dahua.jpg","cardImageAlt":"Top view mechanical tools arrangement","contents":["With growing concerns about climate change and environmental sustainability, the construction industry is facing increasing pressure to adopt more eco-friendly practices. At ScrewFast, we're committed to doing our part to minimize our environmental footprint and promote sustainability in everything we do.","One way we're addressing this is through our selection of materials and manufacturing processes. We prioritize sustainable materials and practices whenever possible, ensuring that our products are not only durable and reliable but also environmentally friendly.","Additionally, we're exploring innovative solutions for reducing waste and conserving resources on construction sites. From modular construction techniques to recycling and repurposing materials, we're constantly seeking ways to minimize our impact on the planet.","But perhaps most importantly, we're committed to raising awareness about the importance of sustainability in the construction industry. Through education and advocacy, we're working to inspire change and encourage others to join us in building a more sustainable future.","By embracing sustainable practices, we're not only protecting the planet for future generations but also creating healthier, more resilient communities for everyone."]};
				const file = "C:/Users/sanalemba/UNV-Dubai/src/content/insights/insight-6.md";
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
