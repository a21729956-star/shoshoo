/* ====================== */
/* فيديو الإدخال          */
/* ====================== */
const introEl = document.getElementById("intro-video");
const welcomeVid = document.getElementById("welcomeVideo");
welcomeVid.addEventListener("ended", () => {
  introEl.style.opacity = "0";
  introEl.style.visibility = "hidden";
});
setTimeout(() => {
  introEl.style.opacity = "0";
  introEl.style.visibility = "hidden";
}, 9000);

/* ====================== */
/* انيميشن الظهور عند التمرير */
/* ====================== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("active"); });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal-up").forEach(el => revealObserver.observe(el));

/* ====================== */
/* عداد الأرقام           */
/* ====================== */
function countUp(el) {
  const target = +el.dataset.target;
  let count = 0;
  const step = target / 55;
  const timer = setInterval(() => {
    count = Math.min(count + step, target);
    el.textContent = Math.floor(count);
    if (count >= target) clearInterval(timer);
  }, 22);
}
const numObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll(".stat-num, .badge-num").forEach(countUp);
      numObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll(".about-stats, .about-video-full").forEach(el => numObserver.observe(el));

/* ====================== */
/* بطاقات القلب + التابز  */
/* ====================== */
const cards = document.querySelectorAll(".flip-card");
const tabs  = document.querySelectorAll(".candle-tabs span");

function showCard(i, el) {
  cards.forEach(c => c.classList.remove("active-card"));
  tabs.forEach(t => t.classList.remove("tab-active"));
  cards[i].classList.add("active-card");
  if (el) el.classList.add("tab-active");
}
/* ==================== */
/* Contact Popup        */
/* ==================== */

const contactPopup = document.getElementById("contactPopup");

function openContactPopup(){
  contactPopup.classList.add("active");
}

function closeContactPopup(){
  contactPopup.classList.remove("active");
}

/* قفل عند الضغط برا */
contactPopup.addEventListener("click", (e)=>{
  if(e.target === contactPopup){
    closeContactPopup();
  }
});