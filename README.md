![Express](https://img.shields.io/badge/Express.js-Backend-lightgrey)

![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)


# 🤖 DocuMind AI - Intelligent PDF Chat Assistant

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://docu-mind-ai-azure.vercel.app)

## 🌐 Live Demo

**Frontend:** https://docu-mind-ai-azure.vercel.app


## 🌟 Overview

**DocuMind AI** is a full-stack AI-powered PDF Assistant that allows users to upload PDF documents, extract text automatically, and chat with an AI assistant that answers questions strictly from the uploaded document.

Instead of reading lengthy PDFs manually, users can ask questions in natural language, generate summaries, find important information, and retrieve key insights instantly.

The project demonstrates real-world full-stack AI application development using **Next.js, Node.js, Express.js, MongoDB, PDF.js, and Groq LLM**.



## 📑 Table of Contents

- Overview
- Features
- Tech Stack
- System Architecture
- Project Structure
- AI Workflow
- Key Features
- API Endpoints
- What I Learned
- Challenges Faced
- Future Enhancements
- Setup Instructions
- Author
- License
- Acknowledgments



## ✨ Why DocuMind AI?

📄 Upload PDF Documents

🤖 AI-powered Question Answering

🧠 Intelligent Document Understanding

📚 Automatic PDF Text Extraction

💬 Chat History

📂 Multiple PDF Management

⚡ Fast REST APIs

🗄 MongoDB Database

🎨 Modern Dashboard UI

📱 Responsive Design



## 🚀 Features

### 📄 PDF Management

- Upload PDF documents
- Automatic text extraction
- Store PDFs in MongoDB
- View uploaded PDFs
- Delete PDFs
- Recent PDF selection
- Multiple PDF support



### 🤖 AI Chat

- Ask questions about uploaded PDFs
- AI answers only from document content
- Smart prompt engineering
- AI summaries
- Key points extraction
- Explain document topics
- Multi-turn conversations
- Chat history



### 📂 Dashboard

- Recent uploaded PDFs
- Storage usage
- AI chat statistics
- Quick navigation
- Delete documents
- Document management



### 🔍 Search

- Search previous conversations
- View chat history
- Switch between uploaded PDFs#



### ⚙ Backend

- RESTful APIs
- File Upload API
- AI Chat API
- PDF Extraction Service
- MongoDB Integration
- Error Handling



## 🛠 Tech Stack

### Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Axios
- React Markdown



### Backend

- Node.js
- Express.js
- Multer
- Groq API
- PDF.js
- dotenv



### Database

- MongoDB Atlas
- Mongoose ODM



### AI

- Groq API
- Llama 3.3 70B Versatile



### Development Tools

- VS Code
- Git
- GitHub
- Postman
- npm



### Deployment

Frontend : Vercel

Backend : Render

Database : MongoDB Atlas

AI : Groq API


## 🏗 System Architecture

```text
                        ┌──────────────────────────────┐
                        │      Next.js Frontend        │
                        │ (React + Tailwind CSS + TS)  │
                        └──────────────┬───────────────┘
                                       │
                               Axios REST API
                                       │
                        ┌──────────────▼───────────────┐
                        │      Express.js Backend      │
                        │ Controllers + Services + API │
                        └──────────────┬───────────────┘
                                       │
              ┌────────────────────────┼────────────────────────┐
              │                        │                        │
              ▼                        ▼                        ▼
       MongoDB Atlas            PDF.js Extraction          Groq API
     (Documents & Chats)       (Extract PDF Text)      (Llama 3.3 70B)
```



### 📂 Project Structure

```text
DocuMind-AI
│
├── frontend
│   │
│   ├── app
│   │   ├── dashboard
│   │   ├── upload
│   │   ├── chat
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── components
│   │   ├── ActionButton.tsx
│   │   ├── DocumentCard.tsx
│   │   ├── Navbar.tsx
│   │   └── StatCard.tsx
│   │
│   ├── public
│   ├── styles
│   ├── package.json
│   └── README.md
│
├── backend
│   │
│   ├── config
│   │   ├── db.js
│   │   └── groq.js
│   │
│   ├── controllers
│   │   ├── uploadController.js
│   │   ├── chatController.js
│   │   └── historyController.js
│   │
│   ├── middleware
│   │
│   ├── models
│   │   ├── Pdf.js
│   │   └── Chat.js
│   │
│   ├── routes
│   │   ├── uploadRoutes.js
│   │   ├── chatRoutes.js
│   │   └── historyRoutes.js
│   │
│   ├── services
│   │   └── pdfService.js
│   │
│   ├── uploads
│   │
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```


### 🤖 AI Workflow

The complete AI pipeline of DocuMind AI is shown below.

```text
User Uploads PDF
        │
        ▼
Multer Upload Middleware
        │
        ▼
Save PDF in uploads/
        │
        ▼
PDF.js Extracts Text
        │
        ▼
Store Extracted Text in MongoDB
        │
        ▼
User asks Question
        │
        ▼
Retrieve PDF Text
        │
        ▼
Prompt Engineering
        │
        ▼
Groq LLM
        │
        ▼
Generate AI Answer
        │
        ▼
Store Chat History
        │
        ▼
Return Response to User
```

### 📄 PDF Processing Pipeline

```text
PDF Upload

↓

PDF.js

↓

Extract Text

↓

MongoDB

↓

Groq AI

↓

AI Response
```

### 💬 Chat Workflow

```text
User Question

↓

Chat API

↓

Find Selected PDF

↓

Prepare Prompt

↓

Groq API

↓

Generate Answer

↓

Save Chat

↓

Display Response
```

## 🌐 REST API Endpoints

### 📄 Upload APIs

#### Upload PDF

POST

```http
/api/upload
```

Uploads a PDF and extracts text.


#### Get All PDFs

GET

```http
/api/upload
```

Returns every uploaded PDF.


#### Get Latest PDF

GET

```http
/api/upload/latest
```

Returns the most recently uploaded PDF.


#### Delete PDF

DELETE

```http
/api/upload/:id
```

Deletes a selected PDF.


### 🤖 Chat APIs

#### Ask AI

POST

```http
/api/chat
```

Body

```json
{
  "message": "Summarize this document",
  "pdfId": "PDF_ID"
}
```

Returns

```json
{
  "success": true,
  "answer": "..."
}
```



### 💬 Chat History

GET

```http
/api/history?pdfId=PDF_ID
```

Returns all previous conversations for the selected PDF.



## 🗄 Database Collections



### PDFs Collection

Stores:

- Original file name
- Uploaded file path
- Extracted text
- File size
- Upload date



### Chats Collection

Stores:

- User Question
- AI Answer
- Related PDF
- Timestamp

## 🎯 Key Features Explained

### 🤖 AI-Powered PDF Chat

DocuMind AI allows users to upload PDF documents and interact with them using natural language.

Instead of manually searching through long documents, users can simply ask questions such as:

- "Summarize this PDF."
- "Who is the faculty mentioned?"
- "What are the key topics?"
- "Explain this section."

The AI answers strictly from the uploaded document, reducing hallucinations and improving accuracy.



### 📄 Real PDF Text Extraction

Unlike many AI chat applications that require manually copying text, DocuMind AI automatically extracts the complete textual content from uploaded PDF files.

The extraction pipeline uses **PDF.js**, ensuring reliable parsing of multi-page PDF documents.

### Extraction Pipeline

```text
Upload PDF
      │
      ▼
Save File
      │
      ▼
PDF.js
      │
      ▼
Extract Text
      │
      ▼
MongoDB
```



### 🧠 Intelligent AI Responses

The extracted document is combined with a carefully designed prompt before being sent to the Groq API.

Prompt engineering ensures that the AI:

- Answers only using the uploaded document
- Avoids generating false information
- Produces structured responses
- Supports summaries
- Explains concepts clearly
- Uses bullet points whenever appropriate



### 💬 Persistent Chat History

Every conversation is automatically stored inside MongoDB.

This allows users to:

- View previous conversations
- Continue discussions
- Switch between different uploaded PDFs
- Search previous chats



### 📂 Multi-PDF Support

Users can upload multiple PDF documents.

Each document maintains its own:

- Chat history
- AI conversations
- Extracted content

This allows users to work with multiple documents independently.



### 📊 Dashboard

The dashboard provides a centralized place to manage uploaded documents.

Features include:

- Recently uploaded PDFs
- Storage statistics
- Total uploaded files
- Quick navigation
- Document deletion



### 🔍 Smart Search

Users can quickly search through previous AI conversations.

This eliminates the need to scroll through long chat histories.



### ⚡ Performance Highlights

- Fast PDF uploads
- Automatic text extraction
- Efficient MongoDB queries
- Lightweight REST APIs
- Optimized React rendering
- Fast AI responses using Groq LLM



### 🛡 Error Handling

The backend includes robust error handling for common scenarios such as:

- Invalid PDF uploads
- Missing files
- AI service failures
- Database errors
- Invalid requests

Meaningful error messages are returned to improve the user experience.



## 📚 What I Learned

Developing **DocuMind AI** significantly strengthened my understanding of modern full-stack AI application development.

Throughout this project, I learned:

- Building scalable REST APIs using Express.js
- Designing MongoDB schemas with Mongoose
- File upload handling using Multer
- PDF text extraction using PDF.js
- AI integration using the Groq API
- Prompt engineering for LLMs
- Building responsive interfaces with Next.js and Tailwind CSS
- Managing asynchronous workflows in JavaScript
- Structuring backend applications using Controllers, Routes, Models, and Services
- Building reusable React components
- Managing application state using React Hooks
- API communication using Axios
- Git and GitHub workflow
- Debugging backend services
- Error handling in production-ready applications



## 💡 Project Highlights

- ✅ Full-Stack Architecture
- ✅ AI-Powered PDF Question Answering
- ✅ PDF Text Extraction
- ✅ RESTful API Development
- ✅ MongoDB Database Integration
- ✅ Responsive Next.js UI
- ✅ Modular Backend Architecture
- ✅ Prompt Engineering with Groq LLM

## 🎓 Real-World Skills Demonstrated

This project demonstrates practical knowledge of:

- Full Stack Web Development
- Backend API Development
- Database Design
- Artificial Intelligence Integration
- Document Processing
- Frontend Development
- Software Architecture
- Clean Code Practices
- MVC-inspired Project Structure
- Modern JavaScript & TypeScript Development

## 🚧 Challenges Faced

Developing **DocuMind AI** involved solving several real-world engineering challenges. Some of the most significant challenges and their solutions are described below.



### 1. AI API Integration

#### Challenge

Initially, the project used the Google Gemini API. During development, the API returned quota limit and model availability errors, preventing AI responses.

#### Solution

Migrated the application to the **Groq API** using the **Llama 3.3 70B Versatile** model, which provided:

- Faster inference
- Better free-tier support
- Reliable API availability
- Lower response latency



### 2. PDF Text Extraction

#### Challenge

Extracting readable text from uploaded PDFs was difficult because many PDFs contain embedded fonts and multiple page layouts.

#### Solution

Integrated **PDF.js** to parse uploaded documents page-by-page and combine the extracted text into a single document before storing it in MongoDB.



### 3. AI Hallucination

#### Challenge

Large Language Models may generate information that is not present in the uploaded document.

#### Solution

Used prompt engineering to instruct the AI to answer **only from the uploaded PDF**.

If the requested information is unavailable, the AI responds:

> "I couldn't find this information in the uploaded document."

This significantly improves response reliability.



### 4. Chat History Management

##### Challenge

Maintaining previous conversations for each uploaded PDF while allowing users to switch documents.

#### Solution

Designed a dedicated **Chat Collection** in MongoDB where every question-answer pair is linked to its corresponding PDF.


### 5. Managing Multiple PDFs

#### Challenge

Users needed to upload multiple PDFs and maintain separate conversations for each one.

#### Solution

Each uploaded PDF receives its own document ID, allowing chat history to remain isolated and organized.



### 6. Backend Architecture

#### Challenge

Keeping the backend maintainable as more features were added.

#### Solution

Adopted a modular project structure:

- Controllers
- Routes
- Models
- Services
- Config

This separation of concerns improves scalability and code readability.



## 🚀 Future Enhancements

The following features can further improve DocuMind AI and make it production-ready.

### 🤖 AI Features

- RAG (Retrieval-Augmented Generation)
- Semantic Search
- AI-generated Flashcards
- AI Quiz Generator
- AI Notes Generator
- AI Mind Maps
- AI Document Comparison
- AI Citation Generator



### 📄 Document Features

- OCR support for scanned PDFs
- Word (.docx) support
- PowerPoint (.pptx) support
- Excel (.xlsx) support
- Image-based document understanding
- Drag-and-drop uploads
- Bulk document upload



### 🔐 Authentication

- Clerk Authentication
- Google OAuth
- GitHub Login
- User Profiles
- Role-based Access Control



### 📊 Dashboard Improvements

- AI usage analytics
- Document insights
- Search analytics
- Storage management
- Usage charts



### ☁ Deployment

- Docker Support
- CI/CD using GitHub Actions
- AWS Deployment
- Azure Deployment
- Vercel + Render Production Setup



## ⚙ Setup Instructions

### Prerequisites

Before running the project, install:

- Node.js (v18 or above)
- MongoDB Atlas Account
- Groq API Key
- Git
- VS Code

## 📦 Install Dependencies

### Backend

```bash
cd backend

npm install
```



### Frontend

```bash
cd frontend

npm install
```

## 🔑 Environment Variables

Create a **.env** file inside the **backend** folder.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

GROQ_API_KEY=your_groq_api_key
```



Create a **.env.local** file inside the **frontend** folder.

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```



## ▶ Running the Backend

```bash
cd backend

npm run dev
```

Backend Server

```
http://localhost:5000
```



## ▶ Running the Frontend

```bash
cd frontend

npm run dev
```

Frontend Server

```
http://localhost:3000
```

## 🏆 Resume Project Description

**DocuMind AI** is a full-stack AI-powered PDF Question Answering application built using **Next.js, Node.js, Express.js, MongoDB Atlas, PDF.js, and Groq LLM**.

The application allows users to upload PDF documents, automatically extract text, and interact with the content through natural language conversations. It features intelligent document understanding, AI-powered summaries, persistent chat history, and a responsive dashboard for managing uploaded documents.

The project demonstrates practical knowledge of modern full-stack development, REST API design, document processing, AI integration, prompt engineering, and database management.

---


## 🌟 Skills Demonstrated

### Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Axios
- Responsive UI


### Backend

- Node.js
- Express.js
- REST APIs
- Multer
- PDF.js
- Groq API
- Error Handling



### Database

- MongoDB Atlas
- Mongoose ODM



### AI & NLP

- Large Language Models (LLMs)
- Prompt Engineering
- Context-based Question Answering
- AI-powered Summarization
- Document Intelligence



### Software Engineering

- MVC-inspired Architecture
- Modular Code Organization
- Clean Code Principles
- API Integration
- Asynchronous Programming
- Git & GitHub Workflow



## 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, distribute, and adapt this project in accordance with the terms of the MIT License. See the `LICENSE` file for details.


## 👨‍💻 Author

### Nancy Kashyap

**Computer Science Engineering Student**

Passionate about:

- Full Stack Development
- Backend Development
- Artificial Intelligence
- Machine Learning
- Software Engineering



### GitHub

```
https://github.com/your-github-username
```

### LinkedIn

```
https://linkedin.com/in/your-linkedin-username
```

### Email

```
your-email@example.com
```

## 🙏 Acknowledgments

Special thanks to the following technologies and communities:

- Next.js
- React
- Tailwind CSS
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Groq
- Llama 3.3
- PDF.js
- Axios
- GitHub
- VS Code

## ⭐ Support

If you found this project helpful,

⭐ Star this repository

🍴 Fork it

🛠 Contribute improvements

📢 Share it with others

## 🚀 Future Vision

DocuMind AI is designed as the foundation for a complete **AI Document Intelligence Platform**.

Planned future features include:

- 🔍 Retrieval-Augmented Generation (RAG)
- 📚 Semantic Search
- 🧠 AI Flashcards
- 📝 AI Notes Generation
- ❓ AI Quiz Generator
- 📊 Document Analytics
- 📂 Multi-document Chat
- 🌐 Cloud Storage Integration
- 🔐 Authentication & User Profiles
- 📱 Mobile Responsive Enhancements
- ☁️ Production Deployment
- 📈 Usage Analytics
- 🧾 OCR for Scanned PDFs
- 📎 Support for DOCX, PPTX, and TXT Files

## ❤️ Thank You

Thank you for visiting the **DocuMind AI** repository!

If you have suggestions, feedback, or ideas for improvement, feel free to open an issue or submit a pull request.

Happy Coding! 🚀

