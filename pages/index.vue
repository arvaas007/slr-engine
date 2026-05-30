<script setup>
import { ref } from 'vue'
import PrismaScanner from '~/components/PrismaScanner.vue'
import BibliometricProcessor from '~/components/BibliometricProcessor.vue'
import CrossReferenceVisualizer from '~/components/CrossReferenceVisualizer.vue'

// Jantung Data Komunikasi Antar-Komponen (State Management)
const globalParsedPapers = ref([])

const handlePrismaCompletion = (data) => {
  // Tempat menerima data PRISMA jika dibutuhkan di masa depan
}

const handleBibliometricPapersUpdate = (papersArray) => {
  // Menangkap data berkas .RIS riil dari Step 2, lalu dilempar ke Step 3
  globalParsedPapers.value = papersArray
}
</script>

<template>
  <div class="main-dashboard">
    <header class="main-header">
      <h1 class="main-title">🔬 SLR & Bibliometric Disruptive Engine</h1>
      <p class="main-subtitle">Memotong Kompas Kompleksitas Riset: Solusi Instan untuk Automasi PRISMA & Visualisasi Matriks Tanpa Fragmentasi Software.</p>
    </header>

    <section class="value-prop-box">
      <strong>💡 Menjawab Keresahan Dunia Penelitian Akademik Saat Ini:</strong> 
      Melakukan analisis bibliometrik dan SLR selama ini sangat melelahkan karena peneliti dipaksa menguasai banyak software yang terfragmentasi. Platform ini hadir untuk mendisrupsi tantangan tersebut! Cukup unggah berkas diagram PRISMA atau seret puluhan file .RIS/.BIB/CSV Anda ke sistem, AI akan langsung merumuskan analisis konseptual komprehensif Scopus-Ready di satu halaman terpadu.
    </section>

    <PrismaScanner @prisma-processed="handlePrismaCompletion" />

    <div class="component-wrapper" style="margin-top: 40px;">
      <BibliometricProcessor @papers-parsed-event="handleBibliometricPapersUpdate" />
    </div>

    <div class="component-wrapper" style="margin-top: 40px;">
      <CrossReferenceVisualizer :parsedPapers="globalParsedPapers" />
    </div>
  </div>
</template>