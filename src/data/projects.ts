import photomentorImage from "./photomentor.png";
import safelinkImage from "./safelink.png";
import fakeJobImage from "./fakejobdetecor.png";

export const projects = [
  {
    id: "photomentor-ai",
    title: "PhotoMentorAI",
    subtitle: "Real-time Computer Vision Photography Assistant.",
    description:
      "A high-performance AI photography assistant that analyzes live camera feeds using computer vision and deep-learning emotion recognition to provide instant visual and voice-based shooting guidance.",
    highlights: [
      "Developed end-to-end AI inference pipelines using ONNX-optimized FER+ models for high-speed analysis.",
      "Implemented low-latency multi-face detection and sentiment analysis for group portraits.",
      "Containerized using Docker to ensure consistent deployment across various edge environments.",
    ],
    tech: ["React", "FastAPI", "Python", "OpenCV", "Deep Learning", "ONNX", "Docker"],
    image: photomentorImage,
    githubUrl: "https://github.com/raju8309/photo-mentor-ai",
    demoUrl: "https://photo-mentor-ai-six.vercel.app",
    implementation: [
      {
        title: "Step 1: Project Initialization",
        bullets: [
          "Set up a full-stack architecture using React (frontend) and FastAPI (backend).",
          "Established API communication between frontend and backend.",
        ],
      },
      {
        title: "Step 2: Live Camera Integration",
        bullets: [
          "Accessed the device camera using getUserMedia.",
          "Rendered a real-time video stream inside the React app.",
          "Captured frames using an off-screen <canvas>.",
        ],
      },
      {
        title: "Step 3: Frame Transmission to Backend",
        bullets: [
          "Converted captured frames into base64-encoded images.",
          "Sent frames to backend via POST /analyze_frame API.",
        ],
      },
      {
        title: "Step 4: Backend Image Processing",
        bullets: [
          "Decoded base64 images into OpenCV frames.",
          "Converted frames to grayscale for efficient processing.",
          "Calculated scene brightness for exposure analysis.",
        ],
      },
      {
        title: "Step 5: Face Detection",
        bullets: [
          "Detected faces in the frame using computer vision techniques.",
          "Determined whether a subject is present in the scene.",
        ],
      },
      {
        title: "Step 6: Exposure & Composition Analysis",
        bullets: [
          "Generated exposure feedback (too dark / too bright / balanced).",
          "Analyzed face positioning to provide composition guidance.",
        ],
      },
      {
        title: "Step 7: Timing & Capture Logic",
        bullets: [
          "Computed a timing score based on scene readiness.",
          "Generated actionable hints such as “Capture now” or “Wait”.",
        ],
      },
      {
        title: "Step 8: Deep Learning Emotion Detection",
        bullets: [
          "Integrated a FER+ deep-learning emotion model (ONNX).",
          "Inferred facial expressions with confidence scores.",
          "Replaced unreliable rule-based smile detection.",
        ],
      },
      {
        title: "Step 9: Real-Time UI Feedback",
        bullets: [
          "Displayed lighting, composition, timing, and expression results.",
          "Updated feedback dynamically for every frame.",
        ],
      },
      {
        title: "Step 10: Voice-Based Guidance",
        bullets: [
          "Added real-time speech feedback using the Web Speech API.",
          "Enabled short cues like “Capture now” for hands-free usage.",
        ],
      },
      {
        title: "Step 11: Environment Configuration",
        bullets: [
          "Introduced .env.example files for configuration clarity.",
          "Secured environment variables for local and production use.",
        ],
      },
      {
        title: "Step 12: Deployment",
        bullets: [
          "Deployed backend on Render.",
          "Deployed frontend on Vercel.",
          "Verified end-to-end real-time inference in production.",
        ],
      },
    ],
  },
  {
    id: "safelink-ai",
    title: "SafeLink AI",
    subtitle: "Intelligent Full-Stack Health & Emergency Assistant.",
    description:
      "A comprehensive AI-powered health platform enabling real-time symptom analysis and nearby hospital discovery with an intelligent fallback system for high-reliability medical support.",
    highlights: [
      "Integrated Large Language Models (LLMs) via Groq API with local Ollama fallback for uninterrupted service.",
      "Built custom rule-based medical logic to assess risk and provide immediate triage recommendations.",
      "Automated production deployment using robust CI/CD pipelines to ensure rapid iteration and stability.",
    ],
    tech: ["React", "FastAPI", "Python", "Groq API", "Ollama", "CI/CD", "PostgeSQL"],
    image: safelinkImage,
    githubUrl: "https://github.com/raju8309/SAFELINK_AI",
    demoUrl: "https://safelink-ai.vercel.app",
    implementation: [
      {
        title: "Step 1: Project Setup & Architecture",
        bullets: [
          "Built a full-stack architecture with React (frontend) and FastAPI (backend).",
          "Defined API contracts for symptom analysis and hospital discovery.",
        ],
      },
      {
        title: "Step 2: Symptom Intake UI",
        bullets: [
          "Designed a clean form-based UX for entering symptoms and relevant context.",
          "Validated and normalized user inputs before sending requests to backend.",
        ],
      },
      {
        title: "Step 3: LLM Integration (Primary)",
        bullets: [
          "Integrated Groq API for fast symptom reasoning and response generation.",
          "Implemented prompt structure to produce actionable recommendations and disclaimers.",
        ],
      },
      {
        title: "Step 4: Fallback Inference (Local)",
        bullets: [
          "Added Ollama fallback to keep the system running when the primary LLM is unavailable.",
          "Implemented routing/health checks to automatically switch providers.",
        ],
      },
      {
        title: "Step 5: Rule-Based Risk & Triage Layer",
        bullets: [
          "Built rule-based medical logic to flag high-risk symptom combinations.",
          "Returned urgency level and clear next actions for users.",
        ],
      },
      {
        title: "Step 6: Nearby Hospital Discovery",
        bullets: [
          "Implemented backend logic to surface nearby hospitals based on user location/search input.",
          "Displayed hospital results with key details for quick decision-making.",
        ],
      },
      {
        title: "Step 7: Database & Persistence",
        bullets: [
          "Added PostgreSQL persistence for storing key application data as needed.",
          "Structured the backend for maintainable data access and future expansion.",
        ],
      },
      {
        title: "Step 8: Production Deployment & CI/CD",
        bullets: [
          "Automated build and deployment using CI/CD workflows.",
          "Validated stability with repeatable deployments and environment configuration.",
        ],
      },
    ],
  },
  {
    id: "fake-job-detector",
    title: "Fake Job Posting Detector",
    subtitle: "Python, NLP, TF-IDF, Logistic Regression, RAG, MLflow • Aug. 2025 – Dec. 2025",
    description:
      "An advanced security tool that utilizes Natural Language Processing (NLP) and machine learning to classify online job postings as real or fraudulent with probability-based risk scoring.",
    highlights: [
      "Built an AI-powered fake job detection system with NLP/ML classification, probability-based risk scoring, and SHAP model explainability for transparent fraud detection",
      "Implemented multi-agent verification (web search investigator, email/domain auditor) and RAG memory bank with TF-IDF similarity search to identify fraud patterns from historical data",
      "Developed production-ready FastAPI backend with MLflow experiment tracking, Docker containerization, async pipelines, and memory-optimized deployment (512Mi) using lazy loading and chunked processing",
      "Integrated external APIs (Adzuna verification), built scalable REST endpoints with comprehensive error handling, and deployed full-stack application (Next.js frontend) on Render and Vercel",
    ],
    tech: ["Python", "NLP", "TF-IDF", "Logistic Regression", "RAG", "MLflow", "SHAP", "FastAPI", "Docker", "Next.js", "Render", "Vercel"],
    image: fakeJobImage,
    githubUrl: "https://github.com/raju8309/fake-job-detector",
    demoUrl: "https://fake-job-detector-iota.vercel.app",
    implementation: [
      {
        title: "Step 1: Data Prep & Labeling",
        bullets: [
          "Prepared a dataset of job postings with real/fake labels.",
          "Cleaned and normalized text fields for consistent feature extraction.",
        ],
      },
      {
        title: "Step 2: Feature Engineering (TF-IDF)",
        bullets: [
          "Engineered TF-IDF features to capture scam-like linguistic patterns.",
          "Tuned vectorizer settings (n-grams/stopwords) for better signal.",
        ],
      },
      {
        title: "Step 3: Model Training & Evaluation",
        bullets: [
          "Trained a Logistic Regression classifier for fraud detection.",
          "Evaluated performance and calibrated outputs for probability-based scoring.",
        ],
      },
      {
        title: "Step 4: FastAPI Inference Service",
        bullets: [
          "Built a FastAPI backend for model inference.",
          "Created endpoints to accept posting text and return risk probability.",
        ],
      },
      {
        title: "Step 5: Optional Live Scanning Integration",
        bullets: [
          "Structured the backend to integrate with external job board APIs for live scanning.",
          "Designed the system for scalable request handling.",
        ],
      },
      {
        title: "Step 6: Frontend UI",
        bullets: [
          "Built a Next.js frontend to submit job posting text and view results.",
          "Displayed probability score and interpretation for end users.",
        ],
      },
      {
        title: "Step 7: Deployment",
        bullets: [
          "Deployed backend on Render.",
          "Deployed frontend on Vercel.",
          "Verified end-to-end inference in production.",
        ],
      },
    ],
  },
];