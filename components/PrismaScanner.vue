<script setup>
import { ref } from 'vue'

const emit = defineEmits(['prisma-processed'])

const selectedFile = ref(null)
const previewUrl = ref(null)
const researchFocus = ref('Islamic Social Finance & Technology')
const isProcessing = ref(false)
const generatedData = ref(null)
const fileInputRef = ref(null)

const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file && file.type.startsWith('image/')) {
    selectedFile.value = file
    const reader = new FileReader()
    reader.onload = (e) => {
      previewUrl.value = e.target.result
    }
    reader.readAsDataURL(file)
  } else {
    alert('Silakan pilih file gambar yang valid (PNG, JPG, JPEG)')
  }
}

const triggerFileInput = () => {
  if (fileInputRef.value) {
    fileInputRef.value.click()
  }
}

const handleDragOver = (e) => {
  e.preventDefault()
  e.stopPropagation()
}

const handleDrop = (e) => {
  e.preventDefault()
  e.stopPropagation()
  
  const files = e.dataTransfer.files
  if (files && files[0]) {
    const file = files[0]
    if (file.type.startsWith('image/')) {
      selectedFile.value = file
      const reader = new FileReader()
      reader.onload = (event) => {
        previewUrl.value = event.target.result
      }
      reader.readAsDataURL(file)
    } else {
      alert('Silakan pilih file gambar yang valid (PNG, JPG, JPEG)')
    }
  }
}

const triggerAIEngine = async () => {
  if (!selectedFile.value) {
    alert('Silakan unggah file gambar diagram PRISMA Anda terlebih dahulu!')
    return
  }
  
  isProcessing.value = true
  generatedData.value = null

  try {
    // Proses simulasi kalkulasi AI Vision dengan delay
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
    
    // Mengirimkan data ke parent (index.vue) untuk mengaktifkan tahap bibliometrik di bawah
    emit('prisma-processed', generatedData.value)
  } catch (error) {
    console.error('Error dalam AI Engine:', error)
    alert('Terjadi kesalahan saat memproses. Silakan coba lagi.')
  } finally {
    isProcessing.value = false
  }
}
</script>

<template>
  <div class="layout-grid">
    <div class="input-sidebar-premium">
      <div class="panel-header-badge">STEP 1</div>
      <h3 class="panel-heading">PRISMA Flowchart Upload</h3>
      <p class="panel-subheading">Sistem AI akan mengekstrak skema gambar biner alur dokumentasi menjadi data matriks Scopus.</p>
      
      <!-- Input File (Hidden) -->
      <input 
        ref="fileInputRef"
        type="file" 
        accept="image/*" 
        @change="handleFileChange" 
        style="display: none;" 
      />
      
      <!-- Dropzone -->
      <div 
        class="premium-dropzone" 
        :class="{ 'has-file': previewUrl }"
        @click="triggerFileInput"
        @dragover="handleDragOver"
        @drop="handleDrop"
      >
        <div v-if="!previewUrl" class="dropzone-placeholder">
          <div class="animated-cloud-icon">📤</div>
          <p class="main-upload-text">Tarik gambar ke sini atau <span class="browse-link">Cari Berkas</span></p>
          <span class="sub-upload-text">Mendukung format PNG, JPG, JPEG dari chart PRISMA</span>
        </div>
        <div v-else class="dropzone-preview">
          <img :src="previewUrl" class="img-preview-smooth" alt="PRISMA Diagram Preview" />
          <div class="file-info-overlay">
            <span class="file-name-text">📄 {{ selectedFile.name }}</span>
            <span class="file-size-badge">{{ (selectedFile.size / 1024).toFixed(1) }} KB</span>
          </div>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label-premium">Fokus Klaster Teori / Tren Riset:</label>
        <input 
          v-model="researchFocus" 
          type="text" 
          class="form-control-premium" 
          placeholder="Misal: Islamic Social Finance & Technology" 
        />
      </div>

      <button 
        @click="triggerAIEngine" 
        :disabled="isProcessing || !selectedFile" 
        class="btn-premium-action"
      >
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
/* LAYOUT GRID RESPONSIF */
.layout-grid {
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 30px;
  box-sizing: border-box;
  width: 100%;
}

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

.panel-heading {
  margin: 10px 0 4px 0;
  font-size: 18px;
  color: #0f172a;
}

.panel-subheading {
  font-size: 11.5px;
  color: #64748b;
  line-height: 1.5;
  margin-bottom: 20px;
}

.premium-dropzone {
  border: 2px dashed #cbd5e1;
  border-radius: 10px;
  padding: 30px 20px;
  text-align: center;
  background: #f8fafc;
  cursor: pointer;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;
}

.premium-dropzone:hover,
.premium-dropzone.drag-over {
  border-color: #3b82f6;
  background: #f0f6ff;
  transform: translateY(-2px);
}

.premium-dropzone.has-file {
  border-color: #10b981;
  background: #ffffff;
  padding: 10px;
}

.animated-cloud-icon {
  font-size: 38px;
  animation: float 3s ease-in-out infinite;
  display: block;
  margin-bottom: 8px;
}

.main-upload-text {
  font-size: 13px;
  font-weight: 600;
  color: #334155;
  margin: 12px 0 4px 0;
  word-break: break-word;
}

.browse-link {
  color: #3b82f6;
  text-decoration: underline;
  cursor: pointer;
}

.sub-upload-text {
  font-size: 11px;
  color: #94a3b8;
  word-break: break-word;
}

.dropzone-placeholder {
  width: 100%;
}

.dropzone-preview {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.img-preview-smooth {
  max-width: 100%;
  max-height: 160px;
  border-radius: 8px;
  object-fit: contain;
}

.file-info-overlay {
  background: #f1f5f9;
  padding: 8px 12px;
  border-radius: 6px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 8px;
}

.file-name-text {
  font-size: 11px;
  font-weight: 600;
  color: #334155;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
}

.file-size-badge {
  background: #cbd5e1;
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 4px;
  font-weight: bold;
  color: #334155;
  flex-shrink: 0;
}

.hidden-input {
  display: none;
}

.form-group {
  margin-top: 20px;
}

.form-label-premium {
  display: block;
  font-size: 12px;
  font-weight: 700;
  color: #475569;
  margin-bottom: 6px;
}

.form-control-premium {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  font-size: 13px;
  box-sizing: border-box;
  transition: border 0.2s;
}

.form-control-premium:focus {
  border-color: #3b82f6;
  outline: none;
  box-shadow: 0 0 0 3px rgba(59,130,246,0.1);
}

.btn-premium-action {
  width: 100%;
  padding: 12px;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: white;
  border: 2px solid #64748b;
  border-radius: 6px;
  font-weight: bold;
  font-size: 14px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  box-shadow: 0 2px 8px rgba(30, 41, 59, 0.2);
}

.btn-premium-action:hover:not(:disabled) {
  background: linear-gradient(135deg, #0f172a 0%, #000000 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(30, 41, 59, 0.4);
  border-color: #475569;
}

.btn-premium-action:active:not(:disabled) {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(30, 41, 59, 0.2);
}

.btn-premium-action:disabled {
  background: linear-gradient(135deg, #cbd5e1 0%, #a1a5b0 100%);
  color: #64748b;
  opacity: 0.6;
  cursor: not-allowed;
  border-color: #cbd5e1;
  box-shadow: none;
}

/* OUTPUT CONTENT AREA */
.output-content-area {
  background: #ffffff;
  padding: 25px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
}

.center-loader {
  text-align: center;
  padding: 80px 20px;
  font-size: 13px;
  color: #64748b;
}

.loading-text {
  color: #64748b;
  font-size: 13px;
  line-height: 1.6;
  margin-top: 12px;
}

.data-block {
  margin-bottom: 25px;
}

.block-title {
  font-size: 15px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 15px;
}

.block-title.font-teal {
  color: #0d9488;
}

.scopus-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  box-sizing: border-box;
}

.scopus-table th {
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: 600;
  word-break: break-word;
}

.scopus-table th.text-center {
  text-align: center;
}

.scopus-table td {
  padding: 12px;
  border-bottom: 1px solid #e2e8f0;
  color: #475569;
  word-break: break-word;
}

.scopus-table td.text-center {
  text-align: center;
}

.scopus-table tr:hover {
  background: #f8fafc;
}

.alt-row {
  background: #f0f4ff;
}

.count-text {
  font-weight: bold;
  color: #2563eb;
}

.italic-text {
  font-style: italic;
  color: #64748b;
  font-size: 11px;
}

.narrative-box {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
  border-left: 4px solid #22c55e;
  padding: 16px;
  border-radius: 8px;
  font-size: 13px;
  line-height: 1.6;
  text-align: justify;
  color: #166534;
  word-break: break-word;
}

.split-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  box-sizing: border-box;
}

.gap-card,
.direction-card {
  padding: 16px;
  border-radius: 8px;
  font-size: 12px;
  line-height: 1.6;
  word-break: break-word;
}

.gap-card {
  background: #fff5f5;
  border: 1px solid #fee2e2;
  border-left: 4px solid #ef4444;
}

.gap-card h4 {
  color: #991b1b;
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 700;
}

.gap-card p {
  margin: 6px 0;
  word-break: break-word;
}

.direction-card {
  background: #f0f8ff;
  border: 1px solid #dbeafe;
  border-left: 4px solid #3b82f6;
}

.direction-card h4 {
  color: #1e40af;
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 700;
}

.direction-card p {
  margin: 6px 0;
  word-break: break-word;
}

.empty-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 280px;
  color: #94a3b8;
  text-align: center;
  padding: 20px;
}

.large-icon {
  font-size: 45px;
  margin-bottom: 10px;
  display: block;
}

.empty-placeholder h4 {
  margin: 0;
  color: #475569;
  font-size: 16px;
}

.empty-placeholder p {
  font-size: 12px;
  max-width: 100%;
  margin-top: 6px;
  color: #94a3b8;
  word-break: break-word;
}

.main-spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #1e293b;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 16px auto;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* ==================== RESPONSIVE DESIGN ==================== */

/* Tablet (1024px and below) */
@media (max-width: 1024px) {
  .layout-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .input-sidebar-premium {
    padding: 20px;
  }

  .panel-header-badge {
    left: 20px;
  }

  .panel-heading {
    font-size: 16px;
  }

  .panel-subheading {
    font-size: 11px;
  }

  .output-content-area {
    padding: 20px;
  }
}

/* Tablet (768px and below) */
@media (max-width: 768px) {
  .layout-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .input-sidebar-premium {
    padding: 16px;
  }

  .panel-header-badge {
    left: 16px;
    font-size: 9px;
    padding: 3px 10px;
  }

  .panel-heading {
    margin: 6px 0 2px 0;
    font-size: 16px;
  }

  .panel-subheading {
    font-size: 11px;
    margin-bottom: 16px;
  }

  .premium-dropzone {
    padding: 24px 16px;
  }

  .animated-cloud-icon {
    font-size: 32px;
  }

  .main-upload-text {
    font-size: 12px;
  }

  .sub-upload-text {
    font-size: 10px;
  }

  .form-control-premium {
    font-size: 12px;
    padding: 8px 10px;
  }

  .form-label-premium {
    font-size: 11px;
  }

  .btn-premium-action {
    padding: 10px;
    font-size: 13px;
    margin-top: 16px;
  }

  .output-content-area {
    padding: 16px;
  }

  .center-loader {
    padding: 60px 16px;
  }

  .loading-text {
    font-size: 12px;
  }

  .block-title {
    font-size: 14px;
    margin-bottom: 12px;
  }

  .scopus-table {
    font-size: 11px;
  }

  .scopus-table th,
  .scopus-table td {
    padding: 8px;
  }

  .narrative-box {
    padding: 12px;
    font-size: 12px;
  }

  .split-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .gap-card,
  .direction-card {
    padding: 12px;
    font-size: 11px;
  }

  .gap-card h4,
  .direction-card h4 {
    font-size: 13px;
    margin-bottom: 6px;
  }

  .data-block {
    margin-bottom: 16px;
  }
}

/* Mobile (480px and below) */
@media (max-width: 480px) {
  .layout-grid {
    grid-template-columns: 1fr;
    gap: 12px;
  }

  .input-sidebar-premium {
    padding: 12px;
  }

  .panel-header-badge {
    left: 12px;
    top: -10px;
    font-size: 8px;
    padding: 2px 8px;
  }

  .panel-heading {
    margin: 4px 0 2px 0;
    font-size: 15px;
  }

  .panel-subheading {
    font-size: 10px;
    margin-bottom: 12px;
    line-height: 1.4;
  }

  .premium-dropzone {
    padding: 20px 12px;
    border-radius: 8px;
  }

  .animated-cloud-icon {
    font-size: 28px;
    margin-bottom: 6px;
  }

  .main-upload-text {
    font-size: 11px;
    margin: 10px 0 3px 0;
  }

  .browse-link {
    display: inline;
  }

  .sub-upload-text {
    font-size: 9px;
    display: block;
    margin-top: 4px;
  }

  .img-preview-smooth {
    max-height: 120px;
  }

  .file-info-overlay {
    padding: 6px 10px;
    margin-top: 8px;
    gap: 6px;
  }

  .file-name-text {
    font-size: 10px;
    max-width: 100%;
    flex: 1 1 auto;
  }

  .file-size-badge {
    font-size: 9px;
    padding: 1px 5px;
  }

  .form-group {
    margin-top: 12px;
  }

  .form-label-premium {
    font-size: 10px;
    margin-bottom: 4px;
  }

  .form-control-premium {
    font-size: 11px;
    padding: 8px 10px;
  }

  .btn-premium-action {
    padding: 10px;
    font-size: 12px;
    margin-top: 12px;
  }

  .output-content-area {
    padding: 12px;
  }

  .center-loader {
    padding: 40px 12px;
  }

  .loading-text {
    font-size: 11px;
    line-height: 1.5;
  }

  .block-title {
    font-size: 13px;
    margin-bottom: 10px;
  }

  .scopus-table {
    font-size: 10px;
    margin-top: 12px;
  }

  .scopus-table th,
  .scopus-table td {
    padding: 6px;
  }

  .narrative-box {
    padding: 10px;
    font-size: 11px;
    margin: 12px 0;
    text-align: left;
    line-height: 1.5;
  }

  .split-grid {
    grid-template-columns: 1fr;
    gap: 12px;
    margin-top: 12px;
  }

  .gap-card,
  .direction-card {
    padding: 10px;
    font-size: 10px;
    line-height: 1.5;
  }

  .gap-card h4,
  .direction-card h4 {
    font-size: 12px;
    margin-bottom: 6px;
  }

  .gap-card p,
  .direction-card p {
    margin: 4px 0;
    font-size: 10px;
  }

  .empty-placeholder {
    min-height: 220px;
    padding: 16px;
  }

  .large-icon {
    font-size: 36px;
    margin-bottom: 8px;
  }

  .empty-placeholder h4 {
    font-size: 14px;
  }

  .empty-placeholder p {
    font-size: 11px;
  }

  .data-block {
    margin-bottom: 12px;
  }
}

/* Extra Small (320px and below) */
@media (max-width: 320px) {
  .layout-grid {
    gap: 8px;
  }

  .input-sidebar-premium {
    padding: 10px;
  }

  .panel-heading {
    font-size: 14px;
  }

  .panel-subheading {
    font-size: 9px;
  }

  .premium-dropzone {
    padding: 16px 8px;
  }

  .animated-cloud-icon {
    font-size: 24px;
  }

  .main-upload-text {
    font-size: 10px;
  }

  .btn-premium-action {
    font-size: 11px;
    padding: 8px;
  }

  .output-content-area {
    padding: 10px;
  }

  .scopus-table {
    font-size: 9px;
  }

  .scopus-table th,
  .scopus-table td {
    padding: 4px;
  }
}
</style>