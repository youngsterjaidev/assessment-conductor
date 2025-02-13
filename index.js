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
      id: 1,
      text: "What is the brain of the computer?",
      options: ["CPU", "RAM", "Hard Drive", "Motherboard"],
    },
    {
      id: 2,
      text: "What does RAM stand for?",
      options: [
        "Random Access Memory",
        "Read Access Memory",
        "Run Access Memory",
        "Random Actual Memory",
      ],
    },
    {
      id: 3,
      text: "What is the main function of the CPU?",
      options: ["Process data", "Store data", "Transfer data", "Delete data"],
    },
    {
      id: 4,
      text: "Which of the following is an input device?",
      options: ["Keyboard", "Monitor", "Printer", "Speaker"],
    },
    {
      id: 5,
      text: "What is the full form of HTML?",
      options: [
        "HyperText Markup Language",
        "HyperText Machine Language",
        "HyperText and links Markup Language",
        "HyperTool Multi Language",
      ],
    },
    {
      id: 6,
      text: "Which of the following is a programming language?",
      options: ["Python", "HTML", "CSS", "SQL"],
    },
    {
      id: 7,
      text: "What is the main function of an operating system?",
      options: [
        "Manage hardware and software resources",
        "Store data",
        "Transfer data",
        "Delete data",
      ],
    },
    {
      id: 8,
      text: "Which of the following is a storage device?",
      options: ["Hard Drive", "Monitor", "Keyboard", "Mouse"],
    },
    {
      id: 9,
      text: "What does URL stand for?",
      options: [
        "Uniform Resource Locator",
        "Uniform Resource Link",
        "Universal Resource Locator",
        "Universal Resource Link",
      ],
    },
    {
      id: 10,
      text: "Which of the following is a web browser?",
      options: [
        "Google Chrome",
        "Microsoft Word",
        "Adobe Photoshop",
        "Windows Explorer",
      ],
    },
    {
      id: 11,
      text: "What is the main function of a router?",
      options: [
        "Direct network traffic",
        "Store data",
        "Process data",
        "Delete data",
      ],
    },
    {
      id: 12,
      text: "Which of the following is an example of software?",
      options: ["Microsoft Office", "Keyboard", "Monitor", "Mouse"],
    },
    {
      id: 13,
      text: "What does IP stand for in IP address?",
      options: [
        "Internet Protocol",
        "Internet Provider",
        "Internal Protocol",
        "Internal Provider",
      ],
    },
    {
      id: 14,
      text: "Which of the following is a type of network?",
      options: ["LAN", "CPU", "RAM", "ROM"],
    },
    {
      id: 15,
      text: "What is the main function of a firewall?",
      options: [
        "Protect against unauthorized access",
        "Store data",
        "Process data",
        "Delete data",
      ],
    },
    {
      id: 16,
      text: "Which of the following is an example of an operating system?",
      options: [
        "Windows",
        "Microsoft Office",
        "Google Chrome",
        "Adobe Photoshop",
      ],
    },
    {
      id: 17,
      text: "What does GUI stand for?",
      options: [
        "Graphical User Interface",
        "Graphical User Internet",
        "General User Interface",
        "General User Internet",
      ],
    },
    {
      id: 18,
      text: "Which of the following is a type of software application?",
      options: ["Word Processor", "Keyboard", "Monitor", "Mouse"],
    },
    {
      id: 19,
      text: "What is the main function of a database?",
      options: [
        "Store and manage data",
        "Process data",
        "Transfer data",
        "Delete data",
      ],
    },
    {
      id: 20,
      text: "Which of the following is an example of a search engine?",
      options: [
        "Google",
        "Microsoft Word",
        "Adobe Photoshop",
        "Windows Explorer",
      ],
    },
  ];
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
