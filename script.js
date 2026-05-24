// script.js

const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatArea = document.getElementById("chatArea");
const themeToggle = document.getElementById("themeToggle");

// Send Message

function sendMessage(){

  const text = userInput.value.trim();

  if(text === "") return;

  // User Message

  const userMsg = document.createElement("div");
  userMsg.classList.add("message", "user");
  userMsg.innerText = text;

  chatArea.appendChild(userMsg);

  // AI Reply

  setTimeout(() => {

    const aiMsg = document.createElement("div");
    aiMsg.classList.add("message", "ai");

    aiMsg.innerText = getAIResponse(text);

    chatArea.appendChild(aiMsg);

    chatArea.scrollTop = chatArea.scrollHeight;

  }, 700);

  userInput.value = "";

}

// Fake AI

function getAIResponse(question){

  question = question.toLowerCase();

  if(question.includes("2x + 5 = 15")){
    return "Subtract 5 from both sides.\n2x = 10\nDivide by 2.\nx = 5";
  }

  if(question.includes("hello")){
    return "Hello 👋 How can I help you study today?";
  }

  if(question.includes("biology")){
    return "Biology is the study of living organisms.";
  }

  return "I am still learning 🤖";
}

// Button Click

sendBtn.addEventListener("click", sendMessage);

// Enter Key

userInput.addEventListener("keypress", function(e){

  if(e.key === "Enter"){
    sendMessage();
  }

});

// Dark Mode

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("dark");

});
