// Chat container
const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");

// Add message to chat
function addMessage(text, sender) {
  const msg = document.createElement("p");
  msg.textContent = (sender === "user" ? "You: " : "AI: ") + text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Send message
async function sendMessage() {
  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  // Fake AI reply for now (we upgrade later)
  setTimeout(() => {
    addMessage("I dey hear you 👍 (AI not connected yet)", "ai");
  }, 800);
}

// Voice input (basic)
function startVoice() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Your browser no support voice input");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";

  recognition.onresult = function (event) {
    input.value = event.results[0][0].transcript;
  };

  recognition.start();
}
