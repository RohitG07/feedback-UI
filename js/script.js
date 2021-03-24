const responses = document.querySelectorAll(".response");
const sendBtn = document.querySelector(".send");
const feedbackContainer = document.querySelector(".feedback-container");
const responseContainer = document.querySelector(".response-container");
let selectedResponse = "Satisfied";

responseContainer.addEventListener("click", e => {
  if (e.target.parentNode.classList.contains("response")) {
    deleteActive();
    e.target.parentNode.classList.add("active");
    selectedResponse = e.target.nextElementSibling.textContent;
  }
});

sendBtn.addEventListener("click", () => {
  feedbackContainer.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedResponse}</strong>
    <p>We'll use your feedback to improve your experience.</p>
  `;
});

function deleteActive() {
  responses.forEach(res => {
    res.classList.remove("active");
  });
}
