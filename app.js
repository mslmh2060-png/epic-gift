document.addEventListener("DOMContentLoaded", () => {
  // Header buttons
  const closeBtn = document.querySelector(".close");
  const menuBtn = document.querySelector(".menu");

  closeBtn?.addEventListener("click", () => {
    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.close();
    }
  });

  menuBtn?.addEventListener("click", () => {
    alert("Epic Gift menu");
  });

  // Deposit
  const depositBtn = document.querySelector(".deposit");

  depositBtn?.addEventListener("click", () => {
    alert("Deposit will be available soon.");
  });

  // Bottom navigation
  const navButtons = document.querySelectorAll(".bottom-nav button");

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      navButtons.forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");
    });
  });

  // Banner interactions
  document.querySelector(".rocket-banner")?.addEventListener("click", () => {
    alert("Rocket is coming soon!");
  });

  document.querySelector(".pvp-banner")?.addEventListener("click", () => {
    alert("PVP is coming soon!");
  });

  document.querySelector(".play-banner")?.addEventListener("click", () => {
    alert("Play Hub is coming soon!");
  });

  // Free cards
  document.querySelector(".free24")?.addEventListener("click", () => {
    alert("FREE24 reward is coming soon!");
  });

  document.querySelector(".free")?.addEventListener("click", () => {
    alert("FREE reward is coming soon!");
  });

  // Telegram Mini App
  if (window.Telegram?.WebApp) {
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();
  }
});
