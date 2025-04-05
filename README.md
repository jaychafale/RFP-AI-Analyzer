# 🧠 GovRFP AI — Government RFP Analyzer with Generative AI + RAG

> ✨ Automating compliance analysis, eligibility filtering, submission checklist extraction, and risk detection from government RFPs using **Gemini 1.5 Pro**, **FastAPI**, and a **React frontend**.

---

## 📌 Problem Statement

Responding to U.S. government RFPs is time-consuming, legal-heavy, and error-prone. Manual review often leads to missed compliance criteria, overlooked risks, or inefficient proposal prep.

### 🎯 Objective
Build an AI-powered solution that **automates RFP analysis**, using **Generative AI**, **Retrieval-Augmented Generation (RAG)**, and **agentic workflows** to:

- ✅ Check legal & compliance eligibility
- ✅ Extract required documents & submission guidelines
- ✅ Detect risky contract clauses
- ✅ Generate a downloadable AI summary

---

## 🏗️ Tech Stack

| Layer     | Tech Used                       |
|-----------|---------------------------------|
| ✨ AI      | Google Gemini 1.5 Pro           |
| 🔍 RAG     | FAISS + Custom Chunk Embedding |
| 🧠 Backend | Python, FastAPI, PyMuPDF        |
| 🌐 Frontend| React.js, Axios, html2pdf.js    |
| 📂 Storage | In-memory processing            |

---

## 🧩 Features

### 🛡️ Compliance Agent
- Checks legal registration, certifications, past performance
- Flags missing capabilities (e.g., medical staffing)

### ✅ Eligibility Agent
- Summarizes “must-have” qualifications
- Extracts eligibility clauses automatically

### 📋 Checklist Builder
- Extracts document formatting, required sections, and submission instructions
- Output is actionable and ready-to-use

### ⚠️ Risk Analyzer
- Flags biased or one-sided contract terms
- Suggests AI-generated legal edits or counter clauses

### 🧾 AI Summary Generator
- Combines all sections into a **Markdown summary**
- Includes one-click export to **PDF**

---

## 🖼️ UI Overview

- Drag & drop PDF RFP and company profile
- Real-time status while analyzing
- View structured response:
  - Compliance status
  - Eligibility verdict
  - Submission checklist
  - Contract risk report
- Export report as **printable PDF**

---

## 🚀 Running the Project (Local LAN Setup)

### 🖥 Backend (Your Machine)

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt

# Run on LAN
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Ensure you're connected to the same Wi-Fi as the frontend.

> 🔍 Get your IP using `ipconfig` and look for `IPv4 Address` (e.g., `192.168.1.42`)

---

### 💻 Frontend (Friend’s Machine)

```bash
cd frontend
npm install
npm run dev
```

#### ✅ Update API base in `src/api.js`:

```js
const API_URL = "http://192.168.1.42:8000"; // Replace with actual backend IP
```

---

## 📂 Project Structure

```
backend/
│
├── main.py
├── rag_pipeline.py
├── agents/
│   ├── compliance_checker.py
│   ├── eligibility_extractor.py
│   ├── checklist_builder.py
│   └── risk_analyzer.py
├── utils/
│   ├── pdf_parser.py
│   └── embedding_utils.py

frontend/
├── src/
│   ├── App.jsx
│   ├── api.js
│   └── components/
│       ├── UploadForm.jsx
│       ├── ResultsDisplay.jsx
│       └── ExportButton.jsx
```

---

## 📸 Screenshots (Insert These)

1. Upload UI
2. Markdown summary display
3. PDF export in browser
4. FastAPI Swagger UI

---

## 🧠 Innovation Highlights

- 🔍 Real AI-based compliance/risk parsing — **not keyword search**
- 📄 Markdown + PDF export for easy submission
- ⚡ Lightning-fast — <5s average response
- 👥 Works in LAN for distributed teams
- 🤖 Agent-based, modular & extensible

---

## 🏁 Future Enhancements

- User login and proposal tracking dashboard
- Real-time Gemini API streaming (chat interface)
- Add `.docx` parsing support
- Fine-tune embedding + retrieval
- Deploy backend via Render or GCP Cloud Run

---

## 🏆 Built With ❤️ At

```
🛠️ Odyssey of Code 2025 — Hackathon Submission
Team: [Your Team Name Here]
```