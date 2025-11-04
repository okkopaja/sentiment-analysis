# 🎭 SentiFlow - AI-Powered Sentiment Analysis Platform

Analyze emotions, detect languages, and understand sentiment with cutting-edge AI technology.

![Status](https://img.shields.io/badge/Status-Active-success)
![Python](https://img.shields.io/badge/Python-3.11-blue)
![Django](https://img.shields.io/badge/Django-5.2.7-green)
![FastAPI](https://img.shields.io/badge/FastAPI-Latest-teal)
![React](https://img.shields.io/badge/React-18+-blue)

---

## 🌟 Overview

SentiFlow is a microservices-based sentiment analysis platform that processes multilingual text, detects language, translates if necessary, and returns sentiment results with confidence scoring.

---

## ✨ Features

- 🌍 Multi-Language Support
- 🤖 AI-Powered Sentiment Detection
- 🔄 Automatic Translation
- 📊 Confidence Scoring
- 🎨 Modern Interactive UI
- 🧱 Microservices Architecture (Django + FastAPI + React)

---

## 🛠️ Tech Stack

| Layer      | Technology |
|-----------|------------|
| Frontend  | React      |
| Backend   | Django REST Framework |
| ML Engine | FastAPI + Transformers |
| Database  | SQLite (default) |
| Environment | Python 3.11 |

---

## 📋 Prerequisites

| Requirement | Version |
|------------|---------|
| Python     | 3.11    |
| Node.js    | 16+     |

Check versions:

```sh
python --version
node --version
npm --version
```

---

## 🚀 Quick Setup From Root Directory (Copy & Paste)

```sh
py -3.11 -m venv venv
.\env\Scripts\activate

python -m pip install --upgrade pip setuptools
pip install -r requirements.txt
pip install django-cors-headers

cd backend
python manage.py migrate
cd ..

cd frontend
npm install
cd ..
```

---

## ▶️ Running the Application

Open **3 terminals**:

### 1️⃣ Django Backend

```sh
cd backend
..\venv\Scripts\activate
python manage.py runserver 8001
```

### 2️⃣ FastAPI ML Service

```sh
cd ml_service
..\venv\Scripts\activate
uvicorn app:app --reload --port 8000
```

### 3️⃣ React Frontend

```sh
cd frontend
npm start
```

| Service | URL |
|--------|-----|
| Frontend UI | http://localhost:3000 |
| Django Backend | http://127.0.0.1:8001 |
| FastAPI ML Service | http://127.0.0.1:8000 |

---

## 💡 Usage

1. Open the UI at `http://localhost:3000`
2. Enter any text (English or any supported language)
3. Click **Analyze**
4. View:
   - Detected Language
   - Translated Text (if applicable)
   - Sentiment Result
   - Confidence Score

---

## 🔌 API Example

```js
fetch("http://127.0.0.1:8001/api/analyze_review/?text=I love this project")
  .then(r => r.json())
  .then(console.log);
```

---

## 🐛 Troubleshooting

| Problem | Fix |
|--------|-----|
| ModuleNotFoundError: django | Activate venv + reinstall requirements |
| CORS Errors | Install & configure `django-cors-headers` |
| DB Migration Issues | `python manage.py makemigrations && python manage.py migrate` |
| Port Already in Use | Kill process using: `netstat -ano` + `taskkill /PID <ID> /F` |

---

## 🤝 Contributing

```sh
git checkout -b feature/YourFeature
git commit -m "Add feature"
git push origin feature/YourFeature
```

---

## 📝 License

MIT License.

---

**Made with ❤️ + ☕**
