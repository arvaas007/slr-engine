<script setup>
import { ref } from 'vue'
import PrismaScanner from '~/components/PrismaScanner.vue'
import BibliometricProcessor from '~/components/BibliometricProcessor.vue'
import CrossReferenceVisualizer from '~/components/CrossReferenceVisualizer.vue'
import WordCloudVisualizer from '~/components/WordCloudVisualizer.vue'

// State Management
const globalParsedPapers = ref([])
const activeStep = ref(1)
const showMobileMenu = ref(false)

const handlePrismaCompletion = (data) => {
  activeStep.value = 2
}

const handleBibliometricPapersUpdate = (papersArray) => {
  globalParsedPapers.value = papersArray
  activeStep.value = 3
}

const scrollToStep = (step) => {
  activeStep.value = step
  showMobileMenu.value = false
}
</script>

<template>
  <div class="app-container">
    <!-- HERO SECTION -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-icon">🔬</div>
        <h1 class="hero-title">SLR Engine</h1>
        <p class="hero-subtitle">Platform AI untuk Analisis Bibliometrik & Systematic Literature Review</p>
        <p class="hero-description">Automasi PRISMA, visualisasi data, dan insight riset dalam satu tempat</p>
        <div class="hero-buttons">
          <button class="btn-primary" @click="scrollToStep(1)">Mulai Analisis</button>
          <button class="btn-secondary" @click="scrollToStep(2)">Pelajari Lebih Lanjut</button>
        </div>
      </div>
    </section>

    <!-- MAIN DASHBOARD -->
    <div class="main-dashboard">
      <!-- STEP INDICATOR (Mobile) -->
      <div class="step-indicator-mobile">
        <div 
          v-for="step in 3" 
          :key="step"
          class="step-dot"
          :class="{ active: activeStep === step }"
          @click="activeStep = step"
        >
          {{ step }}
        </div>
      </div>

      <!-- STEP 1: PRISMA SCANNER -->
      <section v-show="activeStep === 1" class="step-section step-1">
        <div class="step-header">
          <span class="step-number">01</span>
          <div>
            <h2 class="step-title">Unggah Diagram PRISMA</h2>
            <p class="step-description">Impor diagram PRISMA atau dokumentasi SLR Anda</p>
          </div>
        </div>
        <PrismaScanner @prisma-processed="handlePrismaCompletion" />
      </section>

      <!-- STEP 2: BIBLIOMETRIC PROCESSOR -->
      <section v-show="activeStep === 2" class="step-section step-2">
        <div class="step-header">
          <span class="step-number">02</span>
          <div>
            <h2 class="step-title">Proses File Bibliometrik</h2>
            <p class="step-description">Upload file .RIS, .BIB, atau CSV untuk analisis</p>
          </div>
        </div>
        <BibliometricProcessor @papers-parsed-event="handleBibliometricPapersUpdate" />
      </section>

      <!-- STEP 3: CROSS-REFERENCE VISUALIZER -->
      <section v-show="activeStep === 3" class="step-section step-3">
        <div class="step-header">
          <span class="step-number">03</span>
          <div>
            <h2 class="step-title">Visualisasi Hasil</h2>
            <p class="step-description">Lihat insights dan hubungan antar paper</p>
          </div>
        </div>
        <CrossReferenceVisualizer :parsedPapers="globalParsedPapers" />
        
        <!-- Word Cloud Bonus -->
        <div class="word-cloud-section" v-if="globalParsedPapers.length > 0">
          <h3 class="section-title">Word Cloud Analisis</h3>
          <WordCloudVisualizer :parsedPapers="globalParsedPapers" />
        </div>
      


      
      </section>

      <div class="step-navigation">
        <button 
          v-if="activeStep > 1"
          class="btn-nav btn-prev"
          @click="activeStep--"
        >
          ← Kembali
        </button>
        <div class="step-info">
          Langkah {{ activeStep }} dari 3
        </div>
        <button 
          v-if="activeStep < 3 && globalParsedPapers.length === 0"
          class="btn-nav btn-next"
          @click="activeStep++"
          :disabled="activeStep === 1"
        >
          Lanjut →
        </button>
      </div>

      <!-- INFO BOX -->
      <section class="info-section">
        <div class="info-card">
          <div class="info-icon">💡</div>
          <h3 class="info-title">Mengapa SLR Engine?</h3>
          <p class="info-text">Platform kami dirancang untuk mempermudah peneliti dalam melakukan analisis bibliometrik komprehensif tanpa perlu menguasai banyak software berbeda.</p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h4>Cepat & Efisien</h4>
            <p>Proses ribuan paper dalam hitungan menit</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h4>Akurat</h4>
            <p>Hasil analisis presisi dengan teknologi AI</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h4>Visual</h4>
            <p>Visualisasi data yang mudah dipahami</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h4>Aman</h4>
            <p>Data Anda terlindungi dengan enkripsi</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>