<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
/* ==================== RESET & BASE STYLES ==================== */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  background: #f8fafc;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  color: #1f2937;
  line-height: 1.6;
}

/* ==================== CONTAINER & LAYOUT ==================== */
.app-container {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%);
}

.main-dashboard {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;
}

/* ==================== HERO SECTION ==================== */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 20px;
  text-align: center;
  border-radius: 16px;
  margin-bottom: 40px;
  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.3);
  animation: fadeInDown 0.8s ease-out;
}

.hero-icon {
  font-size: 48px;
  margin-bottom: 15px;
  display: block;
  animation: float 3s ease-in-out infinite;
}

.hero-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 10px;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 18px;
  margin-bottom: 8px;
  opacity: 0.95;
  font-weight: 500;
}

.hero-description {
  font-size: 14px;
  opacity: 0.85;
  margin-bottom: 25px;
  line-height: 1.5;
}

.hero-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

/* ==================== BUTTONS ==================== */
.btn-primary,
.btn-secondary,
.btn-nav {
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.btn-primary {
  background: white;
  color: #667eea;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.btn-secondary {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.btn-nav {
  padding: 10px 16px;
  font-size: 13px;
  background: #667eea;
  color: white;
  border-radius: 6px;
}

.btn-nav:hover:not(:disabled) {
  background: #764ba2;
  transform: translateY(-2px);
}

.btn-nav:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-prev {
  background: #e0e7ff;
  color: #667eea;
}

.btn-prev:hover:not(:disabled) {
  background: #c7d2fe;
}

.btn-next {
  background: #667eea;
  color: white;
}

/* ==================== STEP INDICATOR ==================== */
.step-indicator-mobile {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.step-dot {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  border: 2px solid #e0e7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: #64748b;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 14px;
}

.step-dot.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: #667eea;
  transform: scale(1.1);
  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.step-dot:hover {
  border-color: #667eea;
  transform: scale(1.05);
}

/* ==================== STEP SECTIONS ==================== */
.step-section {
  background: white;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #e2e8f0;
  animation: fadeIn 0.5s ease-out;
}

.step-header {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 2px solid #e0e7ff;
  align-items: flex-start;
}

.step-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  font-weight: 700;
  font-size: 18px;
  flex-shrink: 0;
}

.step-title {
  font-size: 20px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 4px;
}

.step-description {
  font-size: 13px;
  color: #64748b;
  margin: 0;
}

/* ==================== STEP NAVIGATION ==================== */
.step-navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin: 30px 0;
  padding: 16px;
  background: #f0f4ff;
  border-radius: 8px;
  flex-wrap: wrap;
}

.step-info {
  font-size: 14px;
  font-weight: 600;
  color: #667eea;
}

/* ==================== INFO SECTION ==================== */
.info-section {
  margin-top: 40px;
}

.info-card {
  background: linear-gradient(135deg, #fef3c7 0%, #fef9e7 100%);
  border: 1px solid #fcd34d;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
  text-align: center;
}

.info-icon {
  font-size: 40px;
  margin-bottom: 12px;
  display: block;
}

.info-title {
  font-size: 18px;
  font-weight: 700;
  color: #78350f;
  margin-bottom: 8px;
}

.info-text {
  font-size: 14px;
  color: #92400e;
  line-height: 1.6;
  margin: 0;
}

/* ==================== FEATURES GRID ==================== */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-top: 24px;
}

.feature-card {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  border-color: #667eea;
}

.feature-icon {
  font-size: 32px;
  margin-bottom: 12px;
  display: block;
}

.feature-card h4 {
  font-size: 14px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 6px;
}

.feature-card p {
  font-size: 12px;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}

/* ==================== WORD CLOUD SECTION ==================== */
.word-cloud-section {
  margin-top: 32px;
  padding-top: 32px;
  border-top: 2px solid #e0e7ff;
}

.section-title {
  font-size: 18px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 16px;
}

/* ==================== ANIMATIONS ==================== */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
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

/* ==================== LOADING & PLACEHOLDER ==================== */
.main-spinner {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto 16px auto;
}

.center-loader {
  text-align: center;
  padding: 60px 20px;
  color: #64748b;
  font-size: 14px;
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
  font-size: 48px;
  margin-bottom: 12px;
  display: block;
}

.empty-placeholder h4 {
  margin: 0 0 8px 0;
  color: #475569;
  font-size: 16px;
}

.empty-placeholder p {
  font-size: 12px;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}

/* ==================== RESPONSIVE DESIGN ==================== */

/* Tablet (768px and below) */
@media (max-width: 768px) {
  .hero-section {
    padding: 40px 16px;
    margin-bottom: 30px;
  }

  .hero-icon {
    font-size: 40px;
  }

  .hero-title {
    font-size: 26px;
  }

  .hero-subtitle {
    font-size: 16px;
  }

  .hero-description {
    font-size: 13px;
  }

  .hero-buttons {
    flex-direction: column;
    gap: 10px;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }

  .main-dashboard {
    padding: 16px;
  }

  .step-section {
    padding: 16px;
  }

  .step-header {
    gap: 12px;
  }

  .step-number {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }

  .step-title {
    font-size: 18px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .step-navigation {
    flex-direction: column;
  }

  .btn-nav {
    width: 100%;
  }
}

/* Mobile (480px and below) */
@media (max-width: 480px) {
  .hero-section {
    padding: 30px 12px;
    margin-bottom: 20px;
    border-radius: 12px;
  }

  .hero-icon {
    font-size: 36px;
    margin-bottom: 10px;
  }

  .hero-title {
    font-size: 24px;
    line-height: 1.2;
  }

  .hero-subtitle {
    font-size: 14px;
    margin-bottom: 6px;
  }

  .hero-description {
    font-size: 12px;
    margin-bottom: 18px;
  }

  .main-dashboard {
    padding: 12px;
  }

  .step-section {
    padding: 12px;
    margin-bottom: 16px;
  }

  .step-header {
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
    border-bottom: 1px solid #e0e7ff;
    padding-bottom: 12px;
  }

  .step-number {
    align-self: flex-start;
    width: 36px;
    height: 36px;
    font-size: 14px;
  }

  .step-title {
    font-size: 16px;
    margin-bottom: 2px;
  }

  .step-description {
    font-size: 12px;
  }

  .step-indicator-mobile {
    gap: 6px;
    margin-bottom: 20px;
  }

  .step-dot {
    width: 36px;
    height: 36px;
    font-size: 12px;
  }

  .info-card {
    padding: 16px;
  }

  .info-icon {
    font-size: 32px;
    margin-bottom: 8px;
  }

  .info-title {
    font-size: 16px;
    margin-bottom: 6px;
  }

  .info-text {
    font-size: 13px;
  }

  .features-grid {
    gap: 12px;
  }

  .feature-card {
    padding: 16px;
  }

  .feature-icon {
    font-size: 28px;
    margin-bottom: 8px;
  }

  .feature-card h4 {
    font-size: 13px;
    margin-bottom: 4px;
  }

  .feature-card p {
    font-size: 11px;
  }

  .step-navigation {
    padding: 12px;
  }

  .step-info {
    font-size: 12px;
    order: 3;
    width: 100%;
    text-align: center;
  }

  .btn-nav {
    flex: 1;
    padding: 8px 12px;
    font-size: 12px;
  }
}

/* ==================== TABLE STYLES ==================== */
.scopus-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
  margin-top: 16px;
}

.scopus-table th {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 12px;
  text-align: left;
  font-weight: 600;
  font-size: 12px;
}

.scopus-table td {
  padding: 10px 12px;
  border-bottom: 1px solid #e2e8f0;
  color: #475569;
}

.scopus-table tr:hover {
  background: #f8fafc;
}

.alt-row {
  background: #f0f4ff;
}

.count-text {
  font-weight: 700;
  color: #667eea;
}

.italic-text {
  font-style: italic;
  color: #64748b;
}

/* ==================== NARRATIVE & CARD STYLES ==================== */
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
  margin: 16px 0;
}

.gap-card {
  background: #fff5f5;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #fee2e2;
  border-left: 4px solid #ef4444;
  font-size: 12px;
  line-height: 1.6;
}

.gap-card h4 {
  color: #991b1b;
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 700;
}

.direction-card {
  background: #f0f8ff;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid #dbeafe;
  border-left: 4px solid #3b82f6;
  font-size: 12px;
  line-height: 1.6;
}

.direction-card h4 {
  color: #1e40af;
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 700;
}

.split-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 16px;
}

@media (max-width: 768px) {
  .split-grid {
    grid-template-columns: 1fr;
  }
}

/* ==================== TAG/CLOUD STYLES ==================== */
.cloud-tag {
  display: inline-block;
  padding: 6px 14px;
  background: white;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  margin: 4px;
  font-size: 12px;
  font-weight: 500;
  color: #475569;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.cloud-tag:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.15);
  background: #f0f4ff;
  border-color: #667eea;
  color: #667eea;
}

.tag-weight {
  font-size: 10px;
  font-weight: normal;
  color: #94a3b8;
  margin-left: 4px;
}

/* ==================== COMPONENT WRAPPER ==================== */
.component-wrapper {
  margin: 24px 0;
}

/* ==================== OUTPUT AREA ==================== */
.output-content-area {
  background: white;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

/* ==================== LAYOUT GRID ==================== */
.layout-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

@media (max-width: 1024px) {
  .layout-grid {
    grid-template-columns: 1fr;
  }
}

/* ==================== PRINT STYLES ==================== */
@media print {
  .hero-section,
  .step-navigation,
  .btn-nav,
  .info-card {
    display: none;
  }

  .step-section {
    page-break-inside: avoid;
    box-shadow: none;
  }
}
</style>