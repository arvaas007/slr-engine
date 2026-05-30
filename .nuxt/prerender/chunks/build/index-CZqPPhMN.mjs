import { ref, mergeProps, watch, useSSRContext } from 'file://C:/Users/ARSY/slr-engine/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList } from 'file://C:/Users/ARSY/slr-engine/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://C:/Users/ARSY/slr-engine/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://C:/Users/ARSY/slr-engine/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://C:/Users/ARSY/slr-engine/node_modules/h3/dist/index.mjs';
import 'file://C:/Users/ARSY/slr-engine/node_modules/ufo/dist/index.mjs';
import '../_/nitro.mjs';
import 'file://C:/Users/ARSY/slr-engine/node_modules/destr/dist/index.mjs';
import 'file://C:/Users/ARSY/slr-engine/node_modules/nitropack/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/ARSY/slr-engine/node_modules/node-mock-http/dist/index.mjs';
import 'file://C:/Users/ARSY/slr-engine/node_modules/unstorage/dist/index.mjs';
import 'file://C:/Users/ARSY/slr-engine/node_modules/unstorage/drivers/fs.mjs';
import 'file:///C:/Users/ARSY/slr-engine/node_modules/@nuxt/nitro-server/dist/runtime/utils/cache-driver.js';
import 'file://C:/Users/ARSY/slr-engine/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://C:/Users/ARSY/slr-engine/node_modules/ohash/dist/index.mjs';
import 'file://C:/Users/ARSY/slr-engine/node_modules/klona/dist/index.mjs';
import 'file://C:/Users/ARSY/slr-engine/node_modules/defu/dist/defu.mjs';
import 'file://C:/Users/ARSY/slr-engine/node_modules/scule/dist/index.mjs';
import 'file://C:/Users/ARSY/slr-engine/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://C:/Users/ARSY/slr-engine/node_modules/pathe/dist/index.mjs';
import 'file://C:/Users/ARSY/slr-engine/node_modules/unhead/dist/server.mjs';
import 'node:async_hooks';
import 'file://C:/Users/ARSY/slr-engine/node_modules/devalue/index.js';
import 'file://C:/Users/ARSY/slr-engine/node_modules/unhead/dist/utils.mjs';
import 'file://C:/Users/ARSY/slr-engine/node_modules/unhead/dist/plugins.mjs';
import 'file://C:/Users/ARSY/slr-engine/node_modules/nuxt/node_modules/hookable/dist/index.mjs';
import 'file://C:/Users/ARSY/slr-engine/node_modules/unctx/dist/index.mjs';
import 'file://C:/Users/ARSY/slr-engine/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main$3 = {
  __name: "PrismaScanner",
  __ssrInlineRender: true,
  emits: ["prisma-processed"],
  setup(__props, { emit: __emit }) {
    const selectedFile = ref(null);
    const previewUrl = ref(null);
    const researchFocus = ref("Islamic Social Finance & Technology");
    const isProcessing = ref(false);
    const generatedData = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-grid" }, _attrs))} data-v-ff6baf2f><div class="input-sidebar-premium" data-v-ff6baf2f><div class="panel-header-badge" data-v-ff6baf2f>STEP 1</div><h3 class="panel-heading" data-v-ff6baf2f>PRISMA Flowchart Upload</h3><p class="panel-subheading" data-v-ff6baf2f>Sistem AI akan mengekstrak skema gambar biner alur dokumentasi menjadi data matriks Scopus.</p><div class="${ssrRenderClass([{ "has-file": previewUrl.value }, "premium-dropzone"])}" data-v-ff6baf2f><input type="file" accept="image/*" class="hidden-input" data-v-ff6baf2f>`);
      if (!previewUrl.value) {
        _push(`<div class="dropzone-placeholder" data-v-ff6baf2f><div class="animated-cloud-icon" data-v-ff6baf2f>\u{1F4E4}</div><p class="main-upload-text" data-v-ff6baf2f>Tarik gambar ke sini atau <span class="browse-link" data-v-ff6baf2f>Cari Berkas</span></p><span class="sub-upload-text" data-v-ff6baf2f>Mendukung format PNG, JPG, JPEG dari chart PRISMA</span></div>`);
      } else {
        _push(`<div class="dropzone-preview" data-v-ff6baf2f><img${ssrRenderAttr("src", previewUrl.value)} class="img-preview-smooth" data-v-ff6baf2f><div class="file-info-overlay" data-v-ff6baf2f><span class="file-name-text" data-v-ff6baf2f>\u{1F4C4} ${ssrInterpolate(selectedFile.value.name)}</span><span class="file-size-badge" data-v-ff6baf2f>${ssrInterpolate((selectedFile.value.size / 1024).toFixed(1))} KB</span></div></div>`);
      }
      _push(`</div><div class="form-group" data-v-ff6baf2f><label class="form-label-premium" data-v-ff6baf2f>Fokus Klaster Teori / Tren Riset:</label><input${ssrRenderAttr("value", researchFocus.value)} type="text" class="form-control-premium" placeholder="Misal: Islamic Social Finance &amp; Technology" data-v-ff6baf2f></div><button${ssrIncludeBooleanAttr(isProcessing.value) ? " disabled" : ""} class="btn-premium-action" data-v-ff6baf2f>`);
      if (isProcessing.value) {
        _push(`<span data-v-ff6baf2f>\u{1F916} Menjalankan Ekstraksi Vision AI...</span>`);
      } else {
        _push(`<span data-v-ff6baf2f>\u{1F680} Jalankan Protokol Sintesis AI</span>`);
      }
      _push(`</button></div><div class="output-content-area" data-v-ff6baf2f>`);
      if (isProcessing.value) {
        _push(`<div class="center-loader" data-v-ff6baf2f><div class="main-spinner" data-v-ff6baf2f></div><p class="loading-text" data-v-ff6baf2f>Sedang membedah struktur diagram, mengekstrak angka volume, dan memformulasikan draf akademik...</p></div>`);
      } else if (generatedData.value) {
        _push(`<div data-v-ff6baf2f><section class="data-block" data-v-ff6baf2f><h3 class="block-title" data-v-ff6baf2f>A. Tabel Protokol PRISMA (Scopus Standard Format)</h3><table class="scopus-table" data-v-ff6baf2f><thead data-v-ff6baf2f><tr data-v-ff6baf2f><th data-v-ff6baf2f>Tahapan Protokol</th><th data-v-ff6baf2f>Sumber Database</th><th class="text-center" data-v-ff6baf2f>Volume</th><th data-v-ff6baf2f>Kriteria Keputusan</th></tr></thead><tbody data-v-ff6baf2f><!--[-->`);
        ssrRenderList(generatedData.value.scopusTable, (row, idx) => {
          _push(`<tr class="${ssrRenderClass({ "alt-row": idx % 2 !== 0 })}" data-v-ff6baf2f><td style="${ssrRenderStyle({ "font-weight": "bold", "color": "#1e293b" })}" data-v-ff6baf2f>${ssrInterpolate(row.stage)}</td><td data-v-ff6baf2f>${ssrInterpolate(row.source)}</td><td class="text-center count-text" data-v-ff6baf2f>${ssrInterpolate(row.count)}</td><td class="italic-text" data-v-ff6baf2f>${ssrInterpolate(row.criteria)}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></section><section class="data-block" style="${ssrRenderStyle({ "margin-top": "25px" })}" data-v-ff6baf2f><h3 class="block-title font-teal" data-v-ff6baf2f>B. Narasi Sintesis Protokol (Draf Bab Metodologi)</h3><div class="narrative-box" data-v-ff6baf2f> Berdasarkan protokol PRISMA yang diterapkan, penyaringan sistematis berhasil mengidentifikasi 14 artikel inti yang memenuhi ambang batas kualitas untuk sintesis kualitatif dan kuantitatif. Tren menunjukkan lonjakan publikasi yang signifikan sejak tahun 2023, mencerminkan pergeseran paradigma dari konseptualisasi teoretis menuju pengujian empiris integrasi teknologi pintar dalam ekosistem keuangan sosial Islam. </div></section><div class="split-grid" style="${ssrRenderStyle({ "margin-top": "25px" })}" data-v-ff6baf2f><div class="gap-card" data-v-ff6baf2f><h4 data-v-ff6baf2f>\u26A0\uFE0F Conceptual Gaps Found</h4><p data-v-ff6baf2f><strong data-v-ff6baf2f>\u2022 Empirical Validation Gap:</strong> Mayoritas literatur yang ada masih bersifat konseptual-deskriftif. Sangat sedikit penelitian yang menyediakan data metrik lapangan mengenai efisiensi operasional platform setelah migrasi ke sistem terdesentralisasi.</p><p data-v-ff6baf2f><strong data-v-ff6baf2f>\u2022 Regulatory Realism Gap:</strong> Analisis mengenai benturan antara regulasi kepatuhan syariah lokal dengan hukum transaksi digital lintas batas masih belum dieksplorasi secara mendalam.</p></div><div class="direction-card" data-v-ff6baf2f><h4 data-v-ff6baf2f>\u{1F52E} Future Research Directions</h4><p data-v-ff6baf2f><strong data-v-ff6baf2f>\u2022 Pengembangan Model Hibrida Makro-Mikro:</strong> Penelitian masa depan harus diarahkan pada pembuatan indikator resiliensi ekonomi yang menggabungkan instrumen zakat komersial dengan teknologi AI prediktif.</p><p data-v-ff6baf2f><strong data-v-ff6baf2f>\u2022 Sistem Integrasi Lintas Sektor:</strong> Mengeksplorasi interoperabilitas platform kontrak pintar (smart contracts) antardokumen kebijakan multilateral di Asia Tenggara.</p></div></div></div>`);
      } else {
        _push(`<div class="empty-placeholder" data-v-ff6baf2f><span class="large-icon" data-v-ff6baf2f>\u{1F4CA}</span><h4 data-v-ff6baf2f>Workspace Protokol PRISMA Aktif</h4><p data-v-ff6baf2f>Silakan unggah draf atau cuplikan layar diagram alir PRISMA Anda di sisi kiri untuk memicu kompilasi biner otomatis database Scopus.</p></div>`);
      }
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PrismaScanner.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const PrismaScanner = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ff6baf2f"]]);
const _sfc_main$2 = {
  __name: "BibliometricProcessor",
  __ssrInlineRender: true,
  emits: ["papers-parsed-event"],
  setup(__props, { emit: __emit }) {
    const uploadedFiles = ref([]);
    const isProcessingFiles = ref(false);
    const activeEngineFeature = ref("connected_network");
    const networkPapers = ref([]);
    const microfishFramework = ref(null);
    const thematicClusters = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "biblio-container" }, _attrs))} data-v-e9255cb5><div class="panel-header-badge-blue" data-v-e9255cb5>STEP 2</div><h3 class="section-title" data-v-e9255cb5>\u{1F4CA} Advanced Literature Synthesis &amp; Aggregator Workspace</h3><p class="section-desc" data-v-e9255cb5>Pilih arsitektur analisis di bawah ini untuk memetakan keterhubungan dokumen riset, ekstraksi parameter mikro, atau penentuan peta tematis strategis jurnal.</p><div class="logic-tabs" data-v-e9255cb5><button class="${ssrRenderClass([{ active: activeEngineFeature.value === "connected_network" }, "tab-btn vos"])}" data-v-e9255cb5>\u{1F310} Connected Networks Feature</button><button class="${ssrRenderClass([{ active: activeEngineFeature.value === "microfish" }, "tab-btn rstudio"])}" data-v-e9255cb5>\u{1F420} Microfish Architecture Pipeline</button><button class="${ssrRenderClass([{ active: activeEngineFeature.value === "thematic_map" }, "tab-btn nvivo"])}" data-v-e9255cb5>\u{1F5FA}\uFE0F Thematic Strategic Map</button></div><div class="upload-box-premium" style="${ssrRenderStyle({ borderColor: activeEngineFeature.value === "connected_network" ? "#2980b9" : activeEngineFeature.value === "microfish" ? "#27ae60" : "#9c27b0" })}" data-v-e9255cb5><input type="file" multiple accept=".ris" class="file-input-hidden" data-v-e9255cb5><div class="upload-content" data-v-e9255cb5><span class="upload-icon" data-v-e9255cb5>\u{1F4E5}</span><p class="upload-text" data-v-e9255cb5>Unggah kumpulan berkas hasil saringan PRISMA (Wajib format <strong data-v-e9255cb5>.RIS</strong> dari Scopus/Mendeley) </p><span class="upload-subtext" data-v-e9255cb5>Mesin akan mengekstrak data string asli pengetikan jurnal secara real-time.</span></div></div>`);
      if (uploadedFiles.value.length > 0) {
        _push(`<div class="file-list-box" data-v-e9255cb5><h4 data-v-e9255cb5>\u{1F4C2} Dokumen Terdeteksi di Workspace (${ssrInterpolate(uploadedFiles.value.length)} Files): </h4><div class="file-badges" data-v-e9255cb5><!--[-->`);
        ssrRenderList(uploadedFiles.value, (file, idx) => {
          _push(`<span class="badge-item" data-v-e9255cb5>\u{1F4C4} ${ssrInterpolate(file.name)}</span>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isProcessingFiles.value) {
        _push(`<div class="loader-container" data-v-e9255cb5><div class="spinner-mini" data-v-e9255cb5></div><p data-v-e9255cb5>Sedang membedah struktur sitasi biner file .RIS Anda...</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeEngineFeature.value === "connected_network" && networkPapers.value.length > 0 && !isProcessingFiles.value) {
        _push(`<div class="visualizer-card" data-v-e9255cb5><h4 class="card-title text-vos" data-v-e9255cb5>Origin-Derivative Connected Network Visualization</h4><p class="card-subtitle" data-v-e9255cb5>Menampilkan peta interkoneksi sitasi terdeteksi. Dilengkapi dengan sistem tautan DOI eksternal aktif setara *Scopus Reference Tools*.</p><div class="word-cloud-canvas" style="${ssrRenderStyle({ "flex-direction": "column", "align-items": "stretch", "gap": "12px", "padding": "20px" })}" data-v-e9255cb5><!--[-->`);
        ssrRenderList(networkPapers.value, (paper, pIdx) => {
          _push(`<div class="cloud-tag" style="${ssrRenderStyle({ "display": "flex", "justify-content": "space-between", "align-items": "center", "border-radius": "8px", "padding": "15px", "background": "white", "border-left": "5px solid #2980b9", "margin": "0" })}" data-v-e9255cb5><div style="${ssrRenderStyle({ "text-align": "left", "max-width": "75%" })}" data-v-e9255cb5><span style="${ssrRenderStyle({ "font-size": "10px", "font-weight": "bold", "color": "#2980b9", "display": "block", "text-transform": "uppercase", "letter-spacing": "0.5px" })}" data-v-e9255cb5>${ssrInterpolate(paper.group)} \u2022 Map Affinity: ${ssrInterpolate(paper.connectivity)}</span><strong style="${ssrRenderStyle({ "font-size": "13.5px", "color": "#0f172a", "display": "block", "margin-top": "3px", "line-height": "1.4" })}" data-v-e9255cb5>${ssrInterpolate(paper.title)}</strong><span style="${ssrRenderStyle({ "font-size": "12px", "color": "#475569", "font-weight": "600", "display": "block", "margin-top": "2px" })}" data-v-e9255cb5>\u{1F464} ${ssrInterpolate(paper.author)}</span><div style="${ssrRenderStyle({ "margin-top": "8px", "display": "flex", "align-items": "center", "gap": "6px" })}" data-v-e9255cb5><span style="${ssrRenderStyle({ "font-size": "11px", "background": "#f1f5f9", "color": "#334155", "padding": "2px 6px", "border-radius": "4px", "font-family": "monospace" })}" data-v-e9255cb5>DOI: ${ssrInterpolate(paper.rawDoi)}</span>`);
          if (paper.doiUrl) {
            _push(`<a${ssrRenderAttr("href", paper.doiUrl)} target="_blank" style="${ssrRenderStyle({ "font-size": "11px", "color": "#2563eb", "font-weight": "bold", "text-decoration": "none", "display": "inline-flex", "align-items": "center", "gap": "2px" })}" data-v-e9255cb5> \u{1F310} CrossRef / Scopus Index Link \u2197 </a>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div></div><div style="${ssrRenderStyle({ "background": "#e0f2fe", "color": "#0369a1", "font-size": "11px", "font-weight": "bold", "padding": "8px 14px", "border-radius": "6px", "white-space": "nowrap", "box-shadow": "0 1px 2px rgba(0,0,0,0.05)" })}" data-v-e9255cb5> \u{1F517} ${ssrInterpolate(paper.links)} Shared References </div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeEngineFeature.value === "microfish" && microfishFramework.value && !isProcessingFiles.value) {
        _push(`<div class="visualizer-card" data-v-e9255cb5><h4 class="card-title text-rstudio" data-v-e9255cb5>Microfish Architecture Extraction Metric</h4><p class="card-subtitle" data-v-e9255cb5>Pembedahan granular parameter data, distribusi metodologi, serta integrasi skor validitas instrumen internal dokumen riset.</p><div style="${ssrRenderStyle({ "display": "grid", "grid-template-columns": "1fr 1fr", "gap": "20px", "margin-top": "15px" })}" data-v-e9255cb5><div style="${ssrRenderStyle({ "background": "#f0fdf4", "padding": "15px", "border-radius": "8px", "border": "1px solid #bbf7d0", "text-align": "left" })}" data-v-e9255cb5><div style="${ssrRenderStyle({ "font-size": "11px", "color": "#166534", "font-weight": "bold" })}" data-v-e9255cb5>\u{1F52C} EXTRACTED DATA VARIABLES (REAL STRING CAPTURE)</div><div style="${ssrRenderStyle({ "display": "flex", "flex-wrap": "wrap", "gap": "6px", "margin-top": "10px" })}" data-v-e9255cb5><!--[-->`);
        ssrRenderList(microfishFramework.value.extractedVariables, (v, vIdx) => {
          _push(`<span style="${ssrRenderStyle({ "background": "white", "border": "1px solid #bbf7d0", "padding": "4px 8px", "border-radius": "4px", "font-size": "10.5px", "font-weight": "bold", "color": "#14532d" })}" data-v-e9255cb5> \u2714 ${ssrInterpolate(v)}</span>`);
        });
        _push(`<!--]--></div><div style="${ssrRenderStyle({ "font-size": "11px", "color": "#166534", "margin-top": "15px" })}" data-v-e9255cb5>Total Valid Documents: <strong data-v-e9255cb5>${ssrInterpolate(microfishFramework.value.parsedDocuments)} articles</strong></div></div><div style="${ssrRenderStyle({ "background": "#ffffff", "padding": "15px", "border-radius": "8px", "border": "1px solid #e2e8f0", "text-align": "left" })}" data-v-e9255cb5><div style="${ssrRenderStyle({ "font-size": "11px", "color": "#475569", "font-weight": "bold" })}" data-v-e9255cb5>\u{1F4D0} METHODOLOGY MATRIX COMPILATION</div><!--[-->`);
        ssrRenderList(microfishFramework.value.methodologyDistribution, (m, mIdx) => {
          _push(`<div style="${ssrRenderStyle({ "margin-top": "10px", "font-size": "12px", "color": "#334155" })}" data-v-e9255cb5><div style="${ssrRenderStyle({ "display": "flex", "justify-content": "space-between", "font-weight": "600" })}" data-v-e9255cb5><span data-v-e9255cb5>\u2022 ${ssrInterpolate(m.method)}</span><span style="${ssrRenderStyle({ "color": "#27ae60" })}" data-v-e9255cb5>${ssrInterpolate(m.weight)}</span></div></div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeEngineFeature.value === "thematic_map" && thematicClusters.value && !isProcessingFiles.value) {
        _push(`<div class="visualizer-card" data-v-e9255cb5><h4 class="card-title text-nvivo" data-v-e9255cb5>Thematic Strategic Mapping Quadrant</h4><p class="card-subtitle" data-v-e9255cb5>Otomatisasi pengelompokan kata kunci ke dalam kuadran peta jalan strategis untuk menentukan kebaruan riset (*Novelty Analysis*).</p><div style="${ssrRenderStyle({ "display": "grid", "grid-template-columns": "1fr 1fr", "gap": "15px", "margin-top": "15px", "text-align": "left" })}" data-v-e9255cb5><div style="${ssrRenderStyle({ "background": "#f5f3ff", "border": "1px solid #ddd6fe", "border-top": "4px solid #7c3aed", "padding": "15px", "border-radius": "6px" })}" data-v-e9255cb5><h5 style="${ssrRenderStyle({ "margin": "0 0 10px 0", "color": "#6d28d9", "font-size": "13px" })}" data-v-e9255cb5>\u{1F680} Kuadran I: Motor Themes (Mapan &amp; Inti)</h5><div style="${ssrRenderStyle({ "display": "flex", "flex-wrap": "wrap", "gap": "6px" })}" data-v-e9255cb5><!--[-->`);
        ssrRenderList(thematicClusters.value.motorThemes, (t) => {
          _push(`<span style="${ssrRenderStyle({ "background": "white", "font-size": "10px", "font-weight": "bold", "padding": "4px 8px", "border-radius": "4px", "color": "#6d28d9", "border": "1px solid #ddd6fe" })}" data-v-e9255cb5>${ssrInterpolate(t)}</span>`);
        });
        _push(`<!--]--></div></div><div style="${ssrRenderStyle({ "background": "#fff7ed", "border": "1px solid #ffedd5", "border-top": "4px solid #ea580c", "padding": "15px", "border-radius": "6px" })}" data-v-e9255cb5><h5 style="${ssrRenderStyle({ "margin": "0 0 10px 0", "color": "#c2410c", "font-size": "13px" })}" data-v-e9255cb5>\u{1F3AF} Kuadran II: Niche Themes</h5><div style="${ssrRenderStyle({ "display": "flex", "flex-wrap": "wrap", "gap": "6px" })}" data-v-e9255cb5><!--[-->`);
        ssrRenderList(thematicClusters.value.nicheThemes, (t) => {
          _push(`<span style="${ssrRenderStyle({ "background": "white", "font-size": "10px", "font-weight": "bold", "padding": "4px 8px", "border-radius": "4px", "color": "#c2410c", "border": "1px solid #ffedd5" })}" data-v-e9255cb5>${ssrInterpolate(t)}</span>`);
        });
        _push(`<!--]--></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BibliometricProcessor.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BibliometricProcessor = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e9255cb5"]]);
const _sfc_main$1 = {
  __name: "CrossReferenceVisualizer",
  __ssrInlineRender: true,
  props: {
    parsedPapers: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    const activeSubTab = ref("prior_works");
    const generatedDraftText = ref("");
    const isGeneratingDraft = ref(false);
    const generateLiteratureReviewDraft = () => {
      if (!props.parsedPapers || props.parsedPapers.length === 0) return;
      isGeneratingDraft.value = true;
      generatedDraftText.value = "";
      const corePapers = props.parsedPapers.filter((p) => p.group === "Core Cluster");
      const derivativePapers = props.parsedPapers.filter((p) => p.group === "Derivative Node");
      let coreSection = "";
      if (corePapers.length > 0) {
        coreSection = `Pada klaster inti penelitian (Core Cluster), fokus utama diskursus akademik berpusat pada nomenklatur penting seperti "${corePapers[0].title}". Penelitian tersebut menjadi jangkar bibliografi utama karena memiliki tingkat keterhubungan sitasi (Affinity Score) mencapai ${corePapers[0].connectivity}. `;
        if (corePapers[1]) {
          coreSection += `Hal ini diperkuat oleh temuan dari ${corePapers[1].author} melalui studi bertajuk "${corePapers[1].title}" yang menyatukan variabel penting riset.`;
        }
      } else {
        coreSection = "Pada klaster inti penelitian, literatur terdeteksi berpusat pada integrasi arsitektur terdesentralisasi dan efisiensi sistem sosial keuangan makro.";
      }
      let derivativeSection = "";
      if (derivativePapers.length > 0) {
        derivativeSection = `Selanjutnya, sebagai bentuk pengembangan (Derivative Works), penelitian transisional mulai bergeser ke arah implementasi praktis. Dokumen seperti "${derivativePapers[0].title}" mencoba mengurai gap metodologi terdahulu.`;
      }
      setTimeout(() => {
        generatedDraftText.value = `### REVIEW SINTESIS LITERATUR OTOMATIS (SCOPUS Q1 STANDARD)

${coreSection}

${derivativeSection}

Analisis visual cross-reference menunjukkan bahwa interkoneksi antar-referensi ini membentuk mata rantai konseptual yang solid, memotong kompas fragmentasi software tradisional dan mempermudah pemetaan kebaruan riset (novelty roadmapping).`;
        isGeneratingDraft.value = false;
      }, 800);
    };
    watch(() => props.parsedPapers, (newPapers) => {
      if (newPapers && newPapers.length > 0) {
        generateLiteratureReviewDraft();
      }
    }, { immediate: true, deep: true });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "cross-ref-container" }, _attrs))} data-v-668997fe><div class="panel-header-badge-orange" data-v-668997fe>STEP 3</div><h3 class="section-title" data-v-668997fe>\u{1F310} Connected Networks Evolution: Multi-Layer Visualizer</h3><p class="section-desc" data-v-668997fe>Menutup kelemahan Connected Papers. Modul ini tidak hanya memetakan prior &amp; derivative works dari file \`.RIS\` lokal Anda, tetapi juga **men-generate otomatis draf teks ulasan literatur** siap pakai.</p><div class="sub-tabs-container" data-v-668997fe><button class="${ssrRenderClass([{ active: activeSubTab.value === "prior_works" }, "sub-tab-btn"])}" data-v-668997fe>\u{1F33F} Prior &amp; Derivative Chronology</button><button class="${ssrRenderClass([{ active: activeSubTab.value === "synthesis_draft" }, "sub-tab-btn excel-color"])}" data-v-668997fe>\u270D\uFE0F AI Literature Review Synthesis Draft</button></div>`);
      if (activeSubTab.value === "prior_works") {
        _push(`<div class="tab-body" data-v-668997fe>`);
        if (!__props.parsedPapers || __props.parsedPapers.length === 0) {
          _push(`<div class="mini-placeholder" data-v-668997fe> Silakan unggah file .RIS pada Step 2 terlebih dahulu untuk mengaktifkan kronologi keterhubungan bibliografi. </div>`);
        } else {
          _push(`<div class="chronology-grid" data-v-668997fe><div class="chrono-card gray-edge" data-v-668997fe><h5 class="chrono-title" data-v-668997fe>\u{1F474} Prior Works Foundation (Fondasi Awal Riset)</h5><p class="chrono-desc" data-v-668997fe>Paper-paper yang paling banyak disitasi oleh koleksi Anda, bertindak sebagai basis teoretis utama.</p><!--[-->`);
          ssrRenderList(__props.parsedPapers.filter((p) => p.group === "Core Cluster").slice(0, 2), (paper, idx) => {
            _push(`<div class="paper-node-item" data-v-668997fe><strong data-v-668997fe>${ssrInterpolate(paper.title)}</strong><span data-v-668997fe>\u{1F464} Author: ${ssrInterpolate(paper.author)} | Link: <a${ssrRenderAttr("href", paper.doiUrl)} target="_blank" class="doi-link" data-v-668997fe>CrossRef \u2197</a></span></div>`);
          });
          _push(`<!--]--></div><div class="chrono-card blue-edge" data-v-668997fe><h5 class="chrono-title" data-v-668997fe>\u{1F680} Derivative Works (Akselerasi &amp; Kebaruan)</h5><p class="chrono-desc" data-v-668997fe>Paper turunan terbaru yang mencoba memperluas kerangka berpikir dari paper fondasi di sebelah kiri.</p><!--[-->`);
          ssrRenderList(__props.parsedPapers.filter((p) => p.group !== "Core Cluster").slice(0, 2), (paper, idx) => {
            _push(`<div class="paper-node-item-derivative" data-v-668997fe><strong data-v-668997fe>${ssrInterpolate(paper.title)}</strong><span data-v-668997fe>\u{1F464} Author: ${ssrInterpolate(paper.author)} | Affinity: <span class="badge-blue" data-v-668997fe>${ssrInterpolate(paper.connectivity)}</span></span></div>`);
          });
          _push(`<!--]--></div></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (activeSubTab.value === "synthesis_draft") {
        _push(`<div class="tab-body" data-v-668997fe>`);
        if (!__props.parsedPapers || __props.parsedPapers.length === 0) {
          _push(`<div class="mini-placeholder" data-v-668997fe> Belum ada data file .RIS yang diolah untuk dijadikan draf teks ulasan jurnal. </div>`);
        } else {
          _push(`<div class="draft-output-wrapper" data-v-668997fe>`);
          if (isGeneratingDraft.value) {
            _push(`<div class="loader-box" data-v-668997fe><div class="spin" data-v-668997fe></div><p data-v-668997fe>AI sedang merajut relasi dokumen menjadi draf ulasan bab 2...</p></div>`);
          } else {
            _push(`<div class="animate-fade-in" data-v-668997fe><div class="action-bar" data-v-668997fe><span data-v-668997fe>\u{1F525} Draf Paragraf Hasil Sintesis Jurnal (Scopus-Ready Format)</span><button class="btn-refresh-draft" data-v-668997fe>\u{1F504} Regenerate Draft</button></div><textarea readonly class="draft-textarea" data-v-668997fe>${ssrInterpolate(generatedDraftText.value)}</textarea><div class="copy-alert" data-v-668997fe>\u{1F4A1} <strong data-v-668997fe>Tips Sukses:</strong> Blok teks di atas, tekan <code data-v-668997fe>Ctrl + C</code>, lalu tempelkan langsung ke bab 2 (Literature Review) draf paper Scopus Anda!</div></div>`);
          }
          _push(`</div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CrossReferenceVisualizer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CrossReferenceVisualizer = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-668997fe"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const globalParsedPapers = ref([]);
    const handlePrismaCompletion = (data) => {
    };
    const handleBibliometricPapersUpdate = (papersArray) => {
      globalParsedPapers.value = papersArray;
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "main-dashboard" }, _attrs))}><header class="main-header"><h1 class="main-title">\u{1F52C} SLR &amp; Bibliometric Disruptive Engine</h1><p class="main-subtitle">Memotong Kompas Kompleksitas Riset: Solusi Instan untuk Automasi PRISMA &amp; Visualisasi Matriks Tanpa Fragmentasi Software.</p></header><section class="value-prop-box"><strong>\u{1F4A1} Menjawab Keresahan Dunia Penelitian Akademik Saat Ini:</strong> Melakukan analisis bibliometrik dan SLR selama ini sangat melelahkan karena peneliti dipaksa menguasai banyak software yang terfragmentasi. Platform ini hadir untuk mendisrupsi tantangan tersebut! Cukup unggah berkas diagram PRISMA atau seret puluhan file .RIS/.BIB/CSV Anda ke sistem, AI akan langsung merumuskan analisis konseptual komprehensif Scopus-Ready di satu halaman terpadu. </section>`);
      _push(ssrRenderComponent(PrismaScanner, { onPrismaProcessed: handlePrismaCompletion }, null, _parent));
      _push(`<div class="component-wrapper" style="${ssrRenderStyle({ "margin-top": "40px" })}">`);
      _push(ssrRenderComponent(BibliometricProcessor, { onPapersParsedEvent: handleBibliometricPapersUpdate }, null, _parent));
      _push(`</div><div class="component-wrapper" style="${ssrRenderStyle({ "margin-top": "40px" })}">`);
      _push(ssrRenderComponent(CrossReferenceVisualizer, { parsedPapers: globalParsedPapers.value }, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CZqPPhMN.mjs.map
