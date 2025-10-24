// -------------------
// Contact Form Submission (Formspree)
// -------------------
document.getElementById("shareForm").addEventListener("submit", async e => {
  e.preventDefault();
  const form = e.target;
  const responseMsg = document.getElementById("responseMsg");
  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      const name = formData.get("name");
      responseMsg.textContent = `✅ Thanks ${name}! We'll reach out to you soon 💌`;
      responseMsg.style.color = "#bbf7d0";
      form.reset();
    } else {
      responseMsg.textContent = "❌ Oops! Something went wrong. Please try again.";
      responseMsg.style.color = "#f87171";
    }

  } catch (error) {
    responseMsg.textContent = "❌ Error! Please check your internet connection.";
    responseMsg.style.color = "#f87171";
    console.error("Form submission error:", error);
  }
});

// -------------------
// Auto Image Slider
// -------------------
let index = 0;
const slides = document.querySelector(".slides");
const total = document.querySelectorAll(".slide").length;

function showSlide(i) { slides.style.transform = `translateX(-${i * 100}%)`; }
function next() { index = (index + 1) % total; showSlide(index); }
let interval = setInterval(next, 6000);

document.querySelector(".prev").onclick = () => {
  clearInterval(interval);
  index = (index - 1 + total) % total;
  showSlide(index);
  interval = setInterval(next, 6000);
}

document.querySelector(".next").onclick = () => {
  clearInterval(interval);
  next();
  interval = setInterval(next, 6000);
}
