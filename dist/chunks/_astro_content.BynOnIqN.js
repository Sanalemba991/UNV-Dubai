import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { removeBase, isRemotePath, prependForwardSlash } from '@astrojs/internal-helpers/path';
import { V as VALID_INPUT_FORMATS, A as AstroError, U as UnknownContentCollectionError } from './astro/assets-service.f-hBXl1N.js';
import { c as createComponent, e as renderUniqueStylesheet, f as renderScriptElement, g as createHeadAndContent, r as renderTemplate, a as renderComponent, u as unescapeHTML } from './astro/server.DWt4ZQvO.js';
import 'kleur/colors';
import * as devalue from 'devalue';

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1);
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class DataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content.BcEe_9wP.js');
      if (data.default instanceof Map) {
        return DataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return DataStore.fromMap(map);
    } catch {
    }
    return new DataStore();
  }
  static async fromMap(data) {
    const store = new DataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = undefined;
  return {
    get: async () => {
      if (!instance) {
        instance = DataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://unvdubai.com", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./_astro_asset-imports.D9aVaOQr.js');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        const entry = {
          ...rawEntry,
          data,
          collection
        };
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/accessories/BAT-LA5800.md": () => import('./BAT-LA5800.BQFXVWsL.js'),"/src/content/accessories/EP-CS201.md": () => import('./EP-CS201.BuWHWY6M.js'),"/src/content/accessories/SLR-B320P60.md": () => import('./SLR-B320P60.BRxpA9pH.js'),"/src/content/analog-cameras/UAC-B115-AF28(40)-W.md": () => import('./UAC-B115-AF28(40)-W.DQcClill.js'),"/src/content/analog-cameras/UAC-B115-AF28(40).md": () => import('./UAC-B115-AF28(40).Bufbs3Br.js'),"/src/content/analog-cameras/UAC-B142-AF28(40)LM-DL.md": () => import('./UAC-B142-AF28(40)LM-DL.C_03SQem.js'),"/src/content/analog-cameras/UAC-D112-F28(40).md": () => import('./UAC-D112-F28(40).1bQTSOR1.js'),"/src/content/analog-cameras/UAC-T112-F28-W-X.md": () => import('./UAC-T112-F28-W-X.DZhX8i8w.js'),"/src/content/analog-cameras/UAC-T142-AF28(40)LM-DL.md": () => import('./UAC-T142-AF28(40)LM-DL.DdS9MNq5.js'),"/src/content/blog/post-1.md": () => import('./post-1.Ce4Wo7x1.js'),"/src/content/blog/post-2.md": () => import('./post-2.Bcs34Iyn.js'),"/src/content/blog/post-3.md": () => import('./post-3.DdXjY2v9.js'),"/src/content/dvr/XVR301-04U3-P4.md": () => import('./XVR301-04U3-P4.D9bFHjss.js'),"/src/content/dvr/XVR301-08U3.md": () => import('./XVR301-08U3.C_vYkHC5.js'),"/src/content/dvr/XVR301-F Series.md": () => import('./XVR301-F Series.BK0_wqLK.js'),"/src/content/feature/feature-1.md": () => import('./feature-1.CdtAUfoR.js'),"/src/content/feature/feature-2.md": () => import('./feature-2.DZDhueXK.js'),"/src/content/feature/feature-3.md": () => import('./feature-3.s3bXlqrN.js'),"/src/content/feature/feature-4.md": () => import('./feature-4.BH6umrlj.js'),"/src/content/feature/feature-5.md": () => import('./feature-5.DBIJ0KOF.js'),"/src/content/feature/feature-6.md": () => import('./feature-6.DZeu5Xyd.js'),"/src/content/feature/feature-7.md": () => import('./feature-7.BGT6GKsl.js'),"/src/content/feature/feature-8.md": () => import('./feature-8.YDN2OLWu.js'),"/src/content/feature/feature-9.md": () => import('./feature-9.CRg680Tj.js'),"/src/content/insights/insight-1.md": () => import('./insight-1.Ck-fI0gS.js'),"/src/content/insights/insight-2.md": () => import('./insight-2.B5k3_VjO.js'),"/src/content/insights/insight-3.md": () => import('./insight-3.AKW_7nz4.js'),"/src/content/insights/insight-4.md": () => import('./insight-4.C_CTrgi5.js'),"/src/content/insights/insight-5.md": () => import('./insight-5.Cq1j78py.js'),"/src/content/insights/insight-6.md": () => import('./insight-6.RUrGU7km.js'),"/src/content/ip-cameras/IPC2122LB-AF28(40)-A2.md": () => import('./IPC2122LB-AF28(40)-A2.svwM5lE4.js'),"/src/content/ip-cameras/IPC3222SS-ADF40K-I1.md": () => import('./IPC3222SS-ADF40K-I1.CDzRpUGS.js'),"/src/content/ip-cameras/IPC3238SA-ADZK-WP-PI-I2A.md": () => import('./IPC3238SA-ADZK-WP-PI-I2A.DKemBlv0.js'),"/src/content/ip-cameras/IPC324LB-AF28-A2.md": () => import('./IPC324LB-AF28-A2.BukJ1SDs.js'),"/src/content/ip-cameras/IPC8544EA-KM-I1.md": () => import('./IPC8544EA-KM-I1.DoL1GUy0.js'),"/src/content/ip-cameras/IPC8645EA-ADZKM-I1.md": () => import('./IPC8645EA-ADZKM-I1.hb4C_PEX.js'),"/src/content/nvr/NVR301-B-IQ series.md": () => import('./NVR301-B-IQ series.BJPnEVlx.js'),"/src/content/nvr/NVR301-S3-P series.md": () => import('./NVR301-S3-P series.DYf7TVS1.js'),"/src/content/nvr/NVR501-04B-P4-A.md": () => import('./NVR501-04B-P4-A.CslFsy7j.js'),"/src/content/nvr/NVR501-B-P Series.md": () => import('./NVR501-B-P Series.DD9m6xup.js'),"/src/content/nvr/NVR501-B-P-IQ series.md": () => import('./NVR501-B-P-IQ series.C0hkKejD.js'),"/src/content/nvr/NVR516-64.md": () => import('./NVR516-64.BV5BsbeY.js'),"/src/content/ptz-cameras/IPC6325LFW-AX5C-VG.md": () => import('./IPC6325LFW-AX5C-VG.CGWLlXm-.js'),"/src/content/ptz-cameras/IPC6424SR-X25-VF-B.md": () => import('./IPC6424SR-X25-VF-B.C3OhsE9z.js'),"/src/content/ptz-cameras/IPC6432LR-X16-VG1.md": () => import('./IPC6432LR-X16-VG1.BNdFcW1d.js'),"/src/content/ptz-cameras/IPC6622SR-X25-VF.md": () => import('./IPC6622SR-X25-VF.BOPTdgqC.js'),"/src/content/ptz-cameras/IPC7628EL-L-X41-VH1.md": () => import('./IPC7628EL-L-X41-VH1.B3-dj-10.js'),"/src/content/ptz-cameras/IPC94144SR-X25-F40C.md": () => import('./IPC94144SR-X25-F40C.yFl1vqhw.js'),"/src/content/slider/slider-1.md": () => import('./slider-1.gEGjok6J.js'),"/src/content/slider/slider-2.md": () => import('./slider-2.C6Ef_GHr.js'),"/src/content/slider/slider-3.md": () => import('./slider-3.-cQHykuH.js'),"/src/content/slider/slider-4.md": () => import('./slider-4.C9YcxUAn.js'),"/src/content/slider/slider-5.md": () => import('./slider-5.CXp01b33.js'),"/src/content/slider/slider-6.md": () => import('./slider-6.C9sGoZ_e.js'),"/src/content/storage/DE1848-V2.md": () => import('./DE1848-V2.PP1F2BaU.js'),"/src/content/storage/SSD-256G-P3-M2.md": () => import('./SSD-256G-P3-M2.DchIkf_2.js'),"/src/content/storage/VX3048-V2.md": () => import('./VX3048-V2.CbI_p24j.js'),"/src/content/teams/digi.md": () => import('./digi.u63NzAnu.js'),"/src/content/teams/digi2.md": () => import('./digi2.CbE4_zPi.js'),"/src/content/teams/digi3.md": () => import('./digi3.CFc7pjh7.js'),"/src/content/teams/digi4.md": () => import('./digi4.5fQwnugl.js'),"/src/content/teams/gafoor.md": () => import('./gafoor.Csnu5SIM.js'),"/src/content/teams/shajid.md": () => import('./shajid.D5S_gsqI.js'),"/src/content/testimonials/testimon-2.md": () => import('./testimon-2.QhT3A1-I.js'),"/src/content/testimonials/testimon-3.md": () => import('./testimon-3.JFSNvn_p.js'),"/src/content/testimonials/testimonal-1.md": () => import('./testimonal-1.B_xAzk9a.js'),"/src/content/thermal-cameras/TIC2621SR-F3-4F4AC-VD.md": () => import('./TIC2621SR-F3-4F4AC-VD.bKNbq1Hy.js'),"/src/content/thermal-cameras/TIC2A32SA-F10-4F8AC-I1.md": () => import('./TIC2A32SA-F10-4F8AC-I1.C6JQOIwD.js'),"/src/content/thermal-cameras/TIC2A32SA-F7-4F6AC-I1.md": () => import('./TIC2A32SA-F7-4F6AC-I1.DmZKgurE.js'),"/src/content/thermal-cameras/TIC3612SA-F2-4F3AC-I1.md": () => import('./TIC3612SA-F2-4F3AC-I1.B4JFLyf_.js'),"/src/content/thermal-cameras/TIC3612SA-F7-4F6AC-I1.md": () => import('./TIC3612SA-F7-4F6AC-I1.BTU3ilJA.js'),"/src/content/thermal-cameras/TIC7626EL-GAF75-4X56-VH1.md": () => import('./TIC7626EL-GAF75-4X56-VH1.XK-1ljFJ.js')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"accessories":{"type":"content","entries":{"bat-la5800":"/src/content/accessories/BAT-LA5800.md","ep-cs201":"/src/content/accessories/EP-CS201.md","slr-b320p60":"/src/content/accessories/SLR-B320P60.md"}},"analog-cameras":{"type":"content","entries":{"uac-b115-af2840-w":"/src/content/analog-cameras/UAC-B115-AF28(40)-W.md","uac-b115-af2840":"/src/content/analog-cameras/UAC-B115-AF28(40).md","uac-b142-af2840lm-dl":"/src/content/analog-cameras/UAC-B142-AF28(40)LM-DL.md","uac-d112-f2840":"/src/content/analog-cameras/UAC-D112-F28(40).md","uac-t112-f28-w-x":"/src/content/analog-cameras/UAC-T112-F28-W-X.md","uac-t142-af2840lm-dl":"/src/content/analog-cameras/UAC-T142-AF28(40)LM-DL.md"}},"blog":{"type":"content","entries":{"post-1":"/src/content/blog/post-1.md","post-2":"/src/content/blog/post-2.md","post-3":"/src/content/blog/post-3.md"}},"dvr":{"type":"content","entries":{"xvr301-04u3-p4":"/src/content/dvr/XVR301-04U3-P4.md","xvr301-08u3":"/src/content/dvr/XVR301-08U3.md","xvr301-f-series":"/src/content/dvr/XVR301-F Series.md"}},"feature":{"type":"content","entries":{"feature-1":"/src/content/feature/feature-1.md","feature-2":"/src/content/feature/feature-2.md","feature-3":"/src/content/feature/feature-3.md","feature-4":"/src/content/feature/feature-4.md","feature-5":"/src/content/feature/feature-5.md","feature-7":"/src/content/feature/feature-7.md","feature-6":"/src/content/feature/feature-6.md","feature-8":"/src/content/feature/feature-8.md","feature-9":"/src/content/feature/feature-9.md"}},"insights":{"type":"content","entries":{"insight-1":"/src/content/insights/insight-1.md","insight-2":"/src/content/insights/insight-2.md","insight-3":"/src/content/insights/insight-3.md","insight-4":"/src/content/insights/insight-4.md","insight-5":"/src/content/insights/insight-5.md","insight-6":"/src/content/insights/insight-6.md"}},"ip-cameras":{"type":"content","entries":{"ipc2122lb-af2840-a2":"/src/content/ip-cameras/IPC2122LB-AF28(40)-A2.md","ipc3222ss-adf40k-i1":"/src/content/ip-cameras/IPC3222SS-ADF40K-I1.md","ipc3238sa-adzk-wp-pi-i2a":"/src/content/ip-cameras/IPC3238SA-ADZK-WP-PI-I2A.md","ipc324lb-af28-a2":"/src/content/ip-cameras/IPC324LB-AF28-A2.md","ipc8544ea-km-i1":"/src/content/ip-cameras/IPC8544EA-KM-I1.md","ipc8645ea-adzkm-i1":"/src/content/ip-cameras/IPC8645EA-ADZKM-I1.md"}},"nvr":{"type":"content","entries":{"nvr301-b-iq-series":"/src/content/nvr/NVR301-B-IQ series.md","nvr301-s3-p-series":"/src/content/nvr/NVR301-S3-P series.md","nvr501-04b-p4-a":"/src/content/nvr/NVR501-04B-P4-A.md","nvr501-b-p-series":"/src/content/nvr/NVR501-B-P Series.md","nvr516-64":"/src/content/nvr/NVR516-64.md","nvr501-b-p-iq-series":"/src/content/nvr/NVR501-B-P-IQ series.md"}},"ptz-cameras":{"type":"content","entries":{"ipc6325lfw-ax5c-vg":"/src/content/ptz-cameras/IPC6325LFW-AX5C-VG.md","ipc6432lr-x16-vg1":"/src/content/ptz-cameras/IPC6432LR-X16-VG1.md","ipc6424sr-x25-vf-b":"/src/content/ptz-cameras/IPC6424SR-X25-VF-B.md","ipc6622sr-x25-vf":"/src/content/ptz-cameras/IPC6622SR-X25-VF.md","ipc7628el-l-x41-vh1":"/src/content/ptz-cameras/IPC7628EL-L-X41-VH1.md","ipc94144sr-x25-f40c":"/src/content/ptz-cameras/IPC94144SR-X25-F40C.md"}},"slider":{"type":"content","entries":{"slider-1":"/src/content/slider/slider-1.md","slider-2":"/src/content/slider/slider-2.md","slider-3":"/src/content/slider/slider-3.md","slider-4":"/src/content/slider/slider-4.md","slider-5":"/src/content/slider/slider-5.md","slider-6":"/src/content/slider/slider-6.md"}},"storage":{"type":"content","entries":{"de1848-v2":"/src/content/storage/DE1848-V2.md","ssd-256g-p3-m2":"/src/content/storage/SSD-256G-P3-M2.md","vx3048-v2":"/src/content/storage/VX3048-V2.md"}},"teams":{"type":"content","entries":{"digi2":"/src/content/teams/digi2.md","digi":"/src/content/teams/digi.md","digi3":"/src/content/teams/digi3.md","digi4":"/src/content/teams/digi4.md","gafoor":"/src/content/teams/gafoor.md","shajid":"/src/content/teams/shajid.md"}},"testimonials":{"type":"content","entries":{"testimon-2":"/src/content/testimonials/testimon-2.md","testimon-3":"/src/content/testimonials/testimon-3.md","testimonal-1":"/src/content/testimonials/testimonal-1.md"}},"thermal-cameras":{"type":"content","entries":{"tic2621sr-f3-4f4ac-vd":"/src/content/thermal-cameras/TIC2621SR-F3-4F4AC-VD.md","tic2a32sa-f10-4f8ac-i1":"/src/content/thermal-cameras/TIC2A32SA-F10-4F8AC-I1.md","tic2a32sa-f7-4f6ac-i1":"/src/content/thermal-cameras/TIC2A32SA-F7-4F6AC-I1.md","tic3612sa-f2-4f3ac-i1":"/src/content/thermal-cameras/TIC3612SA-F2-4F3AC-I1.md","tic3612sa-f7-4f6ac-i1":"/src/content/thermal-cameras/TIC3612SA-F7-4F6AC-I1.md","tic7626el-gaf75-4x56-vh1":"/src/content/thermal-cameras/TIC7626EL-GAF75-4X56-VH1.md"}}};

new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/accessories/BAT-LA5800.md": () => import('./BAT-LA5800.D2ecvD0q.js'),"/src/content/accessories/EP-CS201.md": () => import('./EP-CS201.B4niw8qL.js'),"/src/content/accessories/SLR-B320P60.md": () => import('./SLR-B320P60.BnIW2SdA.js'),"/src/content/analog-cameras/UAC-B115-AF28(40)-W.md": () => import('./UAC-B115-AF28(40)-W.VIOTVVY1.js'),"/src/content/analog-cameras/UAC-B115-AF28(40).md": () => import('./UAC-B115-AF28(40).BRkDC7Cq.js'),"/src/content/analog-cameras/UAC-B142-AF28(40)LM-DL.md": () => import('./UAC-B142-AF28(40)LM-DL.D5UqlHdE.js'),"/src/content/analog-cameras/UAC-D112-F28(40).md": () => import('./UAC-D112-F28(40).zZ9jvLuP.js'),"/src/content/analog-cameras/UAC-T112-F28-W-X.md": () => import('./UAC-T112-F28-W-X.8bKjaFlY.js'),"/src/content/analog-cameras/UAC-T142-AF28(40)LM-DL.md": () => import('./UAC-T142-AF28(40)LM-DL.Dhoca11y.js'),"/src/content/blog/post-1.md": () => import('./post-1.Lb9nZTuF.js'),"/src/content/blog/post-2.md": () => import('./post-2.QAD_xS8J.js'),"/src/content/blog/post-3.md": () => import('./post-3.P7uL9r_6.js'),"/src/content/dvr/XVR301-04U3-P4.md": () => import('./XVR301-04U3-P4.5m1VpFcN.js'),"/src/content/dvr/XVR301-08U3.md": () => import('./XVR301-08U3.QGPIupTI.js'),"/src/content/dvr/XVR301-F Series.md": () => import('./XVR301-F Series.ByIszmVQ.js'),"/src/content/feature/feature-1.md": () => import('./feature-1.CPf1u9Y5.js'),"/src/content/feature/feature-2.md": () => import('./feature-2.KnSOQtv5.js'),"/src/content/feature/feature-3.md": () => import('./feature-3.R16d-Ayr.js'),"/src/content/feature/feature-4.md": () => import('./feature-4.BgefDfAz.js'),"/src/content/feature/feature-5.md": () => import('./feature-5.CgeatVuP.js'),"/src/content/feature/feature-6.md": () => import('./feature-6.j2E8WQgk.js'),"/src/content/feature/feature-7.md": () => import('./feature-7.C3bGiz68.js'),"/src/content/feature/feature-8.md": () => import('./feature-8.CvggtDiE.js'),"/src/content/feature/feature-9.md": () => import('./feature-9.CqHg8Zs8.js'),"/src/content/insights/insight-1.md": () => import('./insight-1.sx7YB-dc.js'),"/src/content/insights/insight-2.md": () => import('./insight-2.bRNgikIa.js'),"/src/content/insights/insight-3.md": () => import('./insight-3.B9tkoz-h.js'),"/src/content/insights/insight-4.md": () => import('./insight-4.CswNKIo-.js'),"/src/content/insights/insight-5.md": () => import('./insight-5.Bz4Hq7N2.js'),"/src/content/insights/insight-6.md": () => import('./insight-6.qUqdkvDg.js'),"/src/content/ip-cameras/IPC2122LB-AF28(40)-A2.md": () => import('./IPC2122LB-AF28(40)-A2.BXU5i04q.js'),"/src/content/ip-cameras/IPC3222SS-ADF40K-I1.md": () => import('./IPC3222SS-ADF40K-I1.DbhBWX8G.js'),"/src/content/ip-cameras/IPC3238SA-ADZK-WP-PI-I2A.md": () => import('./IPC3238SA-ADZK-WP-PI-I2A.yRXEB363.js'),"/src/content/ip-cameras/IPC324LB-AF28-A2.md": () => import('./IPC324LB-AF28-A2.Dd9D3Hqg.js'),"/src/content/ip-cameras/IPC8544EA-KM-I1.md": () => import('./IPC8544EA-KM-I1.ThZ0RkCy.js'),"/src/content/ip-cameras/IPC8645EA-ADZKM-I1.md": () => import('./IPC8645EA-ADZKM-I1.JolGqQv8.js'),"/src/content/nvr/NVR301-B-IQ series.md": () => import('./NVR301-B-IQ series.Bq5SdP4x.js'),"/src/content/nvr/NVR301-S3-P series.md": () => import('./NVR301-S3-P series.DEGIagC4.js'),"/src/content/nvr/NVR501-04B-P4-A.md": () => import('./NVR501-04B-P4-A.CPTLnRKf.js'),"/src/content/nvr/NVR501-B-P Series.md": () => import('./NVR501-B-P Series.BabkvDVv.js'),"/src/content/nvr/NVR501-B-P-IQ series.md": () => import('./NVR501-B-P-IQ series.B9nxeX9D.js'),"/src/content/nvr/NVR516-64.md": () => import('./NVR516-64.CwhJsoTd.js'),"/src/content/ptz-cameras/IPC6325LFW-AX5C-VG.md": () => import('./IPC6325LFW-AX5C-VG.CJ2Pi4-M.js'),"/src/content/ptz-cameras/IPC6424SR-X25-VF-B.md": () => import('./IPC6424SR-X25-VF-B.eiF5BQwW.js'),"/src/content/ptz-cameras/IPC6432LR-X16-VG1.md": () => import('./IPC6432LR-X16-VG1.DWM-4WmQ.js'),"/src/content/ptz-cameras/IPC6622SR-X25-VF.md": () => import('./IPC6622SR-X25-VF.CYmK1tez.js'),"/src/content/ptz-cameras/IPC7628EL-L-X41-VH1.md": () => import('./IPC7628EL-L-X41-VH1.A1ueozoh.js'),"/src/content/ptz-cameras/IPC94144SR-X25-F40C.md": () => import('./IPC94144SR-X25-F40C.BlwCWsnj.js'),"/src/content/slider/slider-1.md": () => import('./slider-1.CdmzNvF_.js'),"/src/content/slider/slider-2.md": () => import('./slider-2.BAGSVdWb.js'),"/src/content/slider/slider-3.md": () => import('./slider-3.CKMfpaYG.js'),"/src/content/slider/slider-4.md": () => import('./slider-4.4Yp-n3y0.js'),"/src/content/slider/slider-5.md": () => import('./slider-5.10No5BkX.js'),"/src/content/slider/slider-6.md": () => import('./slider-6.7qxLCg5u.js'),"/src/content/storage/DE1848-V2.md": () => import('./DE1848-V2.DVx8dnNX.js'),"/src/content/storage/SSD-256G-P3-M2.md": () => import('./SSD-256G-P3-M2.DFb-teWf.js'),"/src/content/storage/VX3048-V2.md": () => import('./VX3048-V2.CLaYnBbR.js'),"/src/content/teams/digi.md": () => import('./digi._d7DZwB4.js'),"/src/content/teams/digi2.md": () => import('./digi2._mOSn9Wo.js'),"/src/content/teams/digi3.md": () => import('./digi3.lRhWxhyQ.js'),"/src/content/teams/digi4.md": () => import('./digi4.CJWx1SQ-.js'),"/src/content/teams/gafoor.md": () => import('./gafoor.B1iFptiY.js'),"/src/content/teams/shajid.md": () => import('./shajid.Ctz3AdIC.js'),"/src/content/testimonials/testimon-2.md": () => import('./testimon-2.PDOWuM3k.js'),"/src/content/testimonials/testimon-3.md": () => import('./testimon-3.DCyWD5h_.js'),"/src/content/testimonials/testimonal-1.md": () => import('./testimonal-1.CR_0GEqf.js'),"/src/content/thermal-cameras/TIC2621SR-F3-4F4AC-VD.md": () => import('./TIC2621SR-F3-4F4AC-VD.R_Ti5PI2.js'),"/src/content/thermal-cameras/TIC2A32SA-F10-4F8AC-I1.md": () => import('./TIC2A32SA-F10-4F8AC-I1.Dym4lh7W.js'),"/src/content/thermal-cameras/TIC2A32SA-F7-4F6AC-I1.md": () => import('./TIC2A32SA-F7-4F6AC-I1.CjBV5VWF.js'),"/src/content/thermal-cameras/TIC3612SA-F2-4F3AC-I1.md": () => import('./TIC3612SA-F2-4F3AC-I1.4jkRIp_Q.js'),"/src/content/thermal-cameras/TIC3612SA-F7-4F6AC-I1.md": () => import('./TIC3612SA-F7-4F6AC-I1.DAF5L2FS.js'),"/src/content/thermal-cameras/TIC7626EL-GAF75-4X56-VH1.md": () => import('./TIC7626EL-GAF75-4X56-VH1.Cnmy7tLl.js')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

export { getCollection as g };
