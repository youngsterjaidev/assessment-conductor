const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());

app.use("/", express.static(path.join(__dirname, 'public')));

// store the credentials
let users = [];
let reportedUsers = [];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/reported", (req, res) => {
  res.json(reportedUsers);
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  users.push({ email, password });

  // Add your authentication logic here
  if (email === "jaidevv999@gmail.com" && password === "password") {
    res.status(200).send({ message: "Login successful" });
  } else {
    res.status(401).send({ message: "Invalid credentials" });
  }
});

app.get("/image", (req, res) => {
  const imagePath = path.join(__dirname, "/test.png");
  res.sendFile(imagePath);
});

app.post("/log-incident", (req, res) => {
  // Store the incident details
  const { name, enrollment, incident, timestamp } = req.body;
  reportedUsers.push({ name, enrollment, incident, timestamp });

  res.status(200).send({ message: "Incident logged successfully" });
});

app.get("/api/questions", (req, res) => {

  const questions = [
    {
      "id": 1,
      "text": "What does CPU stand for?",
      "options": [
        "Central Processing Unit",
        "Computer Processing Unit",
        "Central Power Unit",
        "Computer Power Unit"
      ]
    },
    {
      "id": 2,
      "text": "What does RAM stand for?",
      "options": [
        "Random Access Memory",
        "Read Access Memory",
        "Run Access Memory",
        "Random Actual Memory"
      ]
    },
    {
      "id": 3,
      "text": "Which of the following is a programming language?",
      "options": [
        "HTML",
        "CSS",
        "Python",
        "JPEG"
      ]
    },
    {
      "id": 4,
      "text": "What is the full form of SQL?",
      "options": [
        "Structured Query Language",
        "Simple Query Language",
        "Standard Query Language",
        "System Query Language"
      ]
    },
    {
      "id": 5,
      "text": "Which of the following is an example of an operating system?",
      "options": [
        "Microsoft Word",
        "Windows",
        "Google Chrome",
        "Adobe Photoshop"
      ]
    },
    {
      "id": 6,
      "text": "What is the primary function of a compiler?",
      "options": [
        "To execute code line by line",
        "To convert high-level code into machine code",
        "To debug code",
        "To store data"
      ]
    },
    {
      "id": 7,
      "text": "What does HTML stand for?",
      "options": [
        "HyperText Markup Language",
        "High-Level Text Machine Language",
        "Hyperlink Text Management Language",
        "Home Tool Markup Language"
      ]
    },
    {
      "id": 8,
      "text": "Which of the following is a database management system?",
      "options": [
        "MySQL",
        "Python",
        "Java",
        "HTML"
      ]
    },
    {
      "id": 9,
      "text": "What is the smallest unit of data in a computer?",
      "options": [
        "Byte",
        "Bit",
        "Kilobyte",
        "Megabyte"
      ]
    },
    {
      "id": 10,
      "text": "What does URL stand for?",
      "options": [
        "Uniform Resource Locator",
        "Universal Resource Locator",
        "Uniform Retrieval Locator",
        "Universal Retrieval Locator"
      ]
    },
    {
      "id": 11,
      "text": "Which of the following is a web browser?",
      "options": [
        "Google Chrome",
        "Microsoft Word",
        "Adobe Photoshop",
        "Windows"
      ]
    },
    {
      "id": 12,
      "text": "What is the full form of HTTP?",
      "options": [
        "HyperText Transfer Protocol",
        "High-Level Text Transfer Protocol",
        "Hyperlink Text Transfer Protocol",
        "HyperText Transmission Protocol"
      ]
    },
    {
      "id": 13,
      "text": "What is the purpose of a firewall?",
      "options": [
        "To block unauthorized access to a network",
        "To increase internet speed",
        "To store data",
        "To process graphics"
      ]
    },
    {
      "id": 14,
      "text": "What does BIOS stand for?",
      "options": [
        "Basic Input/Output System",
        "Binary Input/Output System",
        "Basic Internal Operating System",
        "Binary Internal Operating System"
      ]
    },
    {
      "id": 15,
      "text": "Which of the following is a type of computer memory?",
      "options": [
        "RAM",
        "CPU",
        "GPU",
        "USB"
      ]
    },
    {
      "id": 16,
      "text": "What is the full form of PDF?",
      "options": [
        "Portable Document Format",
        "Personal Data File",
        "Printable Document Format",
        "Public Data File"
      ]
    },
    {
      "id": 17,
      "text": "Which of the following is a high-level programming language?",
      "options": [
        "Assembly Language",
        "Machine Language",
        "Python",
        "Binary Code"
      ]
    },
    {
      "id": 18,
      "text": "What is the purpose of an operating system?",
      "options": [
        "To manage hardware and software resources",
        "To create documents",
        "To browse the internet",
        "To design graphics"
      ]
    },
    {
      "id": 19,
      "text": "What is the full form of IP?",
      "options": [
        "Internet Protocol",
        "Internal Protocol",
        "Internet Provider",
        "Internal Provider"
      ]
    },
    {
      "id": 20,
      "text": "Which of the following is a type of computer network?",
      "options": [
        "LAN",
        "CPU",
        "RAM",
        "GPU"
      ]
    },
    {
      "id": 21,
      "text": "What is the full form of CSS?",
      "options": [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets",
        "Creative Style Sheets"
      ]
    },
    {
      "id": 22,
      "text": "Which of the following is a storage device?",
      "options": [
        "Hard Disk",
        "CPU",
        "RAM",
        "GPU"
      ]
    },
    {
      "id": 23,
      "text": "What is the full form of VPN?",
      "options": [
        "Virtual Private Network",
        "Virtual Public Network",
        "Visual Private Network",
        "Visual Public Network"
      ]
    },
    {
      "id": 24,
      "text": "Which of the following is a type of software?",
      "options": [
        "Operating System",
        "Hard Disk",
        "CPU",
        "RAM"
      ]
    },
    {
      "id": 25,
      "text": "What is the full form of GUI?",
      "options": [
        "Graphical User Interface",
        "General User Interface",
        "Graphical Unified Interface",
        "General Unified Interface"
      ]
    },
    {
      "id": 26,
      "text": "Which of the following is a type of computer virus?",
      "options": [
        "Trojan Horse",
        "Firewall",
        "Router",
        "Switch"
      ]
    },
    {
      "id": 27,
      "text": "What is the full form of DNS?",
      "options": [
        "Domain Name System",
        "Dynamic Name System",
        "Domain Network System",
        "Dynamic Network System"
      ]
    },
    {
      "id": 28,
      "text": "Which of the following is a type of computer port?",
      "options": [
        "USB",
        "CPU",
        "RAM",
        "GPU"
      ]
    },
    {
      "id": 29,
      "text": "What is the full form of API?",
      "options": [
        "Application Programming Interface",
        "Application Program Interface",
        "Advanced Programming Interface",
        "Advanced Program Interface"
      ]
    },
    {
      "id": 30,
      "text": "Which of the following is a type of computer keyboard?",
      "options": [
        "QWERTY",
        "CPU",
        "RAM",
        "GPU"
      ]
    }
  ]
  // Add more questions as needed

  res.status(200).json({ questions });
});

app.post("/submit-assessment", (req, res) => {
  const { name, section, enrollment, ...answers } = req.body;

  // Store the assessment details
  users.push({ name, section, enrollment, answers });

  res.status(200).send({ message: "Assessment submitted successfully" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
