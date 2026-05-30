<template>
  <div>
    <NuxtPage />
  </div>
</template>

<style>
/* CORE SYSTEM LAYOUT DESIGN */
body { margin: 0; padding: 0; background-color: #f8fafc; font-family: 'Segoe UI', system-ui, sans-serif; }
.main-dashboard { max-width: 1340px; margin: 40px auto; padding: 0 20px; box-sizing: border-box; }
.main-header { border-bottom: 3px solid #0f172a; padding-bottom: 15px; margin-bottom: 20px; }
.main-title { margin: 0; font-size: 28px; font-weight: 800; color: #0f172a; letter-spacing: -0.5px; }
.main-subtitle { margin: 5px 0 0 0; color: #64748b; font-size: 14px; }

.value-prop-box { background: #fef9c3; border: 1px solid #f59e0b; padding: 16px; border-radius: 8px; margin-bottom: 35px; font-size: 13px; color: #78350f; line-height: 1.6; }
.layout-grid { display: grid; grid-template-columns: 380px 1fr; gap: 30px; }

.output-content-area { background: #ffffff; padding: 25px; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
.center-loader { text-align: center; padding: 80px 0; font-size: 13px; color: #64748b; }
.main-spinner { border: 4px solid #f3f3f3; border-top: 4px solid #0f172a; border-radius: 50%; width: 36px; height: 36px; animation: spin 1s linear infinite; margin: 0 auto 12px auto; }

.scopus-table { width: 100%; border-collapse: collapse; font-size: 12px; }
.scopus-table th { background: #0f172a; color: white; padding: 10px; text-align: left; font-weight: 600; }
.scopus-table td { padding: 10px; border: 1px solid #e2e8f0; color: #334155; }
.alt-row { background: #f8fafc; }
.count-text { font-weight: bold; color: #2563eb; }
.italic-text { font-style: italic; color: #64748b; }

.narrative-box { background: #f0fdf4; border: 1px solid #bbf7d0; padding: 15px; border-radius: 8px; font-size: 13.5px; line-height: 1.6; text-align: justify; color: #166534; }
.split-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.gap-card { background: #fff5f5; padding: 15px; border-radius: 8px; border: 1px solid #fee2e2; font-size: 12.5px; line-height: 1.5; }
.gap-card h4 { color: #991b1b; margin: 0 0 10px 0; border-bottom: 2px solid #fca5a5; padding-bottom: 4px; }
.direction-card { background: #f0f8ff; padding: 15px; border-radius: 8px; border: 1px solid #dbeafe; font-size: 12.5px; line-height: 1.5; }
.direction-card h4 { color: #1e40af; margin: 0 0 10px 0; border-bottom: 2px solid #93c5fd; padding-bottom: 4px; }

.empty-placeholder { display: flex; flex-direction: column; align-items: center; justify-content: center; height: 320px; color: #94a3b8; text-align: center; }
.large-icon { font-size: 45px; margin-bottom: 10px; }
.empty-placeholder h4 { margin: 0; color: #475569; }
.empty-placeholder p { font-size: 12px; max-width: 380px; margin-top: 6px; }

.cloud-tag { display: inline-block; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); padding: 6px 14px; background: white; border-radius: 20px; border: 1px solid #e2e8f0; margin: 5px; box-shadow: 0 1px 3px rgba(0,0,0,0.02); }
.cloud-tag:hover { transform: translateY(-4px) scale(1.1); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); background: #ffffff; }
.tag-weight { font-size: 10px; font-weight: normal; color: #94a3b8; margin-left: 2px; }

@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
</style>