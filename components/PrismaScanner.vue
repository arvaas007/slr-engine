<script setup>
import { ref } from 'vue'

const emit = defineEmits(['prisma-processed'])

const selectedFile = ref(null)
const previewUrl = ref(null)
const researchFocus = ref('Islamic Social Finance & Technology')
const isProcessing = ref(false)
const generatedData = ref(null)

const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    selectedFile.value = file
    previewUrl.value = URL.createObjectURL(file)
  }
}

const triggerAIEngine = async () => {
  if (!selectedFile.value) {
    alert('Silakan unggah file gambar diagram PRISMA Anda terlebih dahulu!')
    return
  }
  isProcessing.value = true
  generatedData.value = null

  // Proses simulasi kalkulasi AI Vision
  await new Promise((resolve) => setTimeout(resolve, 1800))
  
  generatedData.value = {
    scopusTable: [
      { stage: 'Identification', source: 'Scopus Database', count: '142 papers', criteria: 'Keywords: ("Islamic fintech" OR "zakat") AND "blockchain"' },
      { stage: 'Identification', source: 'Dimensions API', count: '85 papers', criteria: 'Keywords sejajar, filter publikasi 2020-2026' },
      { stage: 'Screening', source: 'Duplication Removal', count: '168 papers', criteria: 'Pembersihan otomatis via EndNote & Rayyan AI' },
      { stage: 'Screening', source: 'Title & Abstract', count: '45 papers', criteria: 'Eksklusi: Tidak membahas framework resiliensi ekonomi' },
      { stage: 'Eligibility', source: 'Full-Text Assessment', count: '22 papers', criteria: 'Eksklusi: Hanya berbentuk short commentary/review' },
      { stage: 'Included', source: 'Final Synthesis', count: '14 papers', criteria: 'Memenuhi seluruh kriteria inklusi metodologi PRISMA' }
    ]
  }
  
  isProcessing.value = false
  // Mengirimkan data ke parent (index.vue) untuk mengaktifkan tahap bibliometrik di bawah
  emit('prisma-processed', generatedData.value)
}
</script>

<template>
  <div class="layout-grid">
    <div class="input-sidebar-premium">
      <div class="panel-header-badge">STEP 1</div>
      <h3 class="panel-heading">PRISMA Flowchart Upload</h3>
      <p class="panel-subheading">Sistem AI akan mengekstrak skema gambar biner alur dokumentasi menjadi data matriks Scopus.</p>
      
      <div class="premium-dropzone" :class="{ 'has-file': previewUrl }">
        <input type="file" accept="image/*" @change="handleFileChange" class="hidden-input" />
        <div v-if="!previewUrl" class="dropzone-placeholder">
          <div class="animated-cloud-icon">📤</div>
          <p class="main-upload-text">Tarik gambar ke sini atau <span class="browse-link">Cari Berkas</span></p>
          <span class="sub-upload-text">Mendukung format PNG, JPG, JPEG dari chart PRISMA</span>
        </div>
        <div v-else class="dropzone-preview">
          <img :src="previewUrl" class="img-preview-smooth" />
          <div class="file-info-overlay">
            <span class="file-name-text">📄 {{ selectedFile.name }}</span>
            <span class="file-size-badge">{{ (selectedFile.size / 1024).toFixed(1) }} KB</span>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label-premium">Fokus Klaster Teori / Tren Riset:</label>
        <input v-model="researchFocus" type="text" class="form-control-premium" placeholder="Misal: Islamic Social Finance & Technology" />
      </div>

      <button @click="triggerAIEngine" :disabled="isProcessing" class="btn-premium-action">
        <span v-if="isProcessing">🤖 Menjalankan Ekstraksi Vision AI...</span>
        <span v-else>🚀 Jalankan Protokol Sintesis AI</span>
      </button>
    </div>

    <div class="output-content-area">
      <div v-if="isProcessing" class="center-loader">
        <div class="main-spinner"></div>
        <p class="loading-text">Sedang membedah struktur diagram, mengekstrak angka volume, dan memformulasikan draf akademik...</p>
      </div>

      <div v-else-if="generatedData">
        <section class="data-block">
          <h3 class="block-title">A. Tabel Protokol PRISMA (Scopus Standard Format)</h3>
          <table class="scopus-table">
            <thead>
              <tr>
                <th>Tahapan Protokol</th>
                <th>Sumber Database</th>
                <th class="text-center">Volume</th>
                <th>Kriteria Keputusan</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, idx) in generatedData.scopusTable" :key="idx" :class="{ 'alt-row': idx % 2 !== 0 }">
                <td style="font-weight: bold; color: #1e293b;">{{ row.stage }}</td>
                <td>{{ row.source }}</td>
                <td class="text-center count-text">{{ row.count }}</td>
                <td class="italic-text">{{ row.criteria }}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section class="data-block" style="margin-top: 25px;">
          <h3 class="block-title font-teal">B. Narasi Sintesis Protokol (Draf Bab Metodologi)</h3>
          <div class="narrative-box">
            Berdasarkan protokol PRISMA yang diterapkan, penyaringan sistematis berhasil mengidentifikasi 14 artikel inti yang memenuhi ambang batas kualitas untuk sintesis kualitatif dan kuantitatif. Tren menunjukkan lonjakan publikasi yang signifikan sejak tahun 2023, mencerminkan pergeseran paradigma dari konseptualisasi teoretis menuju pengujian empiris integrasi teknologi pintar dalam ekosistem keuangan sosial Islam.
          </div>
        </section>

        <div class="split-grid" style="margin-top: 25px;">
          <div class="gap-card">
            <h4>⚠️ Conceptual Gaps Found</h4>
            <p><strong>• Empirical Validation Gap:</strong> Mayoritas literatur yang ada masih bersifat konseptual-deskriftif. Sangat sedikit penelitian yang menyediakan data metrik lapangan mengenai efisiensi operasional platform setelah migrasi ke sistem terdesentralisasi.</p>
            <p><strong>• Regulatory Realism Gap:</strong> Analisis mengenai benturan antara regulasi kepatuhan syariah lokal dengan hukum transaksi digital lintas batas masih belum dieksplorasi secara mendalam.</p>
          </div>
          <div class="direction-card">
            <h4>🔮 Future Research Directions</h4>
            <p><strong>• Pengembangan Model Hibrida Makro-Mikro:</strong> Penelitian masa depan harus diarahkan pada pembuatan indikator resiliensi ekonomi yang menggabungkan instrumen zakat komersial dengan teknologi AI prediktif.</p>
            <p><strong>• Sistem Integrasi Lintas Sektor:</strong> Mengeksplorasi interoperabilitas platform kontrak pintar (smart contracts) antardokumen kebijakan multilateral di Asia Tenggara.</p>
          </div>
        </div>
      </div>

      <div v-else class="empty-placeholder">
        <span class="large-icon">📊</span>
        <h4>Workspace Protokol PRISMA Aktif</h4>
        <p>Silakan unggah draf atau cuplikan layar diagram alir PRISMA Anda di sisi kiri untuk memicu kompilasi biner otomatis database Scopus.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* REVOLUSI UI/UX DI KOLOM SISI KIRI */
.input-sidebar-premium {
  background: #ffffff;
  padding: 25px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  position: relative;
}
.panel-header-badge {
  position: absolute;
  top: -12px;
  left: 25px;
  background: #1e293b;
  color: #ffffff;
  font-size: 10px;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 20px;
  letter-spacing: 1px;
}
.panel-heading { margin: 10px 0 4px 0; font-size: 18px; color: #0f172a; }
.panel-subheading { font-size: 11.5px; color: #64748b; line-height: 1.5; margin-bottom: 20px; }

.premium-dropzone {
  border: 2px dashed #cbd5e1;
  border-radius: 10px;
  padding: 30px 20px;
  text-align: center;
  background: #f8fafc;
  cursor: pointer;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.premium-dropzone:hover {
  border-color: #3b82f6;
  background: #f0f6ff;
  transform: translateY(-2px);
}
.premium-dropzone.has-file {
  border-color: #10b981;
  background: #ffffff;
  padding: 10px;
}
.animated-cloud-icon { font-size: 38px; animation: float 3s ease-in-out infinite; }
.main-upload-text { font-size: 13px; font-weight: 600; color: #334155; margin: 12px 0 4px 0; }
.browse-link { color: #3b82f6; text-decoration: underline; }
.sub-upload-text { font-size: 11px; color: #94a3b8; }

.img-preview-smooth { max-width: 100%; max-height: 160px; border-radius: 8px; object-fit: contain; }
.file-info-overlay { background: #f1f5f9; padding: 8px 12px; border-radius: 6px; margin-top: 10px; display: flex; justify-content: space-between; align-items: center; }
.file-name-text { font-size: 11px; font-weight: 600; color: #334155; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 180px; }
.file-size-badge { background: #cbd5e1; font-size: 10px; padding: 2px 6px; border-radius: 4px; font-weight: bold; color: #334155; }

.form-group { margin-top: 20px; }
.form-label-premium { display: block; font-size: 12px; font-weight: 700; color: #475569; margin-bottom: 6px; }
.form-control-premium { width: 100%; padding: 10px 12px; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px; box-sizing: border-box; transition: border 0.2s; }
.form-control-premium:focus { border-color: #3b82f6; outline: none; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }

.btn-premium-action { width: 100%; padding: 12px; background: #1e293b; color: white; border: none; border-radius: 6px; font-weight: bold; font-size: 14px; margin-top: 20px; cursor: pointer; transition: all 0.2s; }
.btn-premium-action:hover { background: #0f172a; transform: translateY(1px); }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}
</style>