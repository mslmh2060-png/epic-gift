document.addEventListener("DOMContentLoaded", () => {

  const closeBtn = document.querySelector(".close");
  const menuBtn = document.querySelector(".menu");
  const depositBtn = document.querySelector(".deposit");
  const navButtons = document.querySelectorAll(".bottom-nav button");

  if (window.Telegram?.WebApp) {
    window.Telegram.WebApp.ready();
    window.Telegram.WebApp.expand();
  }

  function openPanel(title, text) {
    document.querySelector(".epic-panel")?.remove();

    const panel = document.createElement("div");
    panel.className = "epic-panel";

    panel.innerHTML = `
      <div class="epic-panel-box">
        <div class="epic-panel-head">
          <strong>${title}</strong>
          <button class="epic-panel-close">✕</button>
        </div>

        <div class="epic-panel-body">
          ${text}
        </div>
      </div>
    `;

    Object.assign(panel.style, {
      position: "fixed",
      inset: "0",
      zIndex: "100",
      background: "rgba(0,0,0,.72)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      padding: "10px"
    });

    const box = panel.querySelector(".epic-panel-box");

    Object.assign(box.style, {
      width: "100%",
      maxWidth: "520px",
      background: "#222224",
      borderRadius: "22px",
      padding: "16px",
      boxShadow: "0 15px 50px rgba(0,0,0,.55)"
    });

    panel.querySelector(".epic-panel-close").onclick = () => {
      panel.remove();
    };

    panel.onclick = (e) => {
      if (e.target === panel) {
        panel.remove();
      }
    };

    document.body.appendChild(panel);
  }

  closeBtn?.addEventListener("click", () => {

    if (window.Telegram?.WebApp) {
      window.Telegram.WebApp.close();
    } else {
      openPanel(
        "Epic Gift",
        "این دکمه هنگام اجرای Mini App داخل تلگرام عمل می‌کند."
      );
    }

  });

  menuBtn?.addEventListener("click", () => {

    openPanel(
      "Menu",
      `
      <div style="display:grid;gap:10px">

        <button
          onclick="alert('Profile')"
          style="padding:13px;border:0;border-radius:12px;background:#303034;color:white">
          👤 Profile
        </button>

        <button
          onclick="alert('Settings')"
          style="padding:13px;border:0;border-radius:12px;background:#303034;color:white">
          ⚙️ Settings
        </button>

        <button
          onclick="alert('Help')"
          style="padding:13px;border:0;border-radius:12px;background:#303034;color:white">
          ❓ Help
        </button>

      </div>
      `
    );

  });

  depositBtn?.addEventListener("click", () => {

    openPanel(
      "Deposit",
      "اتصال کیف پول و شارژ واقعی در مرحله بعد اضافه می‌شود."
    );

  });

  const navInfo = {

    Backpack: [
      "🎒 Backpack",
      "اینجا Giftها و آیتم‌های شما نمایش داده می‌شوند."
    ],

    Invite: [
      "👥 Invite",
      "اینجا لینک دعوت و پاداش Referral قرار می‌گیرد."
    ],

    Leaderboard: [
      "🏆 Leaderboard",
      "رتبه‌بندی بازیکنان اینجا نمایش داده می‌شود."
    ],

    Earn: [
      "⚡ Earn",
      "Taskها و روش‌های دریافت POWER اینجا قرار می‌گیرند."
    ]

  };

  navButtons.forEach((button) => {

    button.addEventListener("click", () => {

      navButtons.forEach((item) => {
        item.classList.remove("active");
      });

      button.classList.add("active");

      const name =
        button.querySelector("span")?.textContent;

      if (name !== "Home" && navInfo[name]) {

        openPanel(
          navInfo[name][0],
          navInfo[name][1]
        );

      }

    });

  });

  document
    .querySelector(".rocket-banner")
    ?.addEventListener("click", () => {

      openPanel(
        "🚀 Rocket",
        "بخش Rocket اینجا باز می‌شود."
      );

    });

  document
    .querySelector(".pvp-banner")
    ?.addEventListener("click", () => {

      openPanel(
        "⚔ PVP",
        "بخش PVP اینجا باز می‌شود."
      );

    });

  document
    .querySelector(".play-banner")
    ?.addEventListener("click", () => {

      openPanel(
        "🎮 Play Hub",
        "بخش بازی‌ها اینجا باز می‌شود."
      );

    });

  document
    .querySelector(".free24")
    ?.addEventListener("click", () => {

      openPanel(
        "🎁 FREE 24H",
        "پاداش 24 ساعته اینجا دریافت می‌شود."
      );

    });

  document
    .querySelector(".free")
    ?.addEventListener("click", () => {

      openPanel(
        "🎁 FREE",
        "پاداش رایگان اینجا دریافت می‌شود."
      );

    });

});
