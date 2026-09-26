document.addEventListener("DOMContentLoaded", () => {

  if (window.Telegram?.WebApp) {
    Telegram.WebApp.ready();
    Telegram.WebApp.expand();
  }

  const openPanel = (title, text) => {
    document.querySelector(".epic-panel")?.remove();

    const panel = document.createElement("div");
    panel.className = "epic-panel";

    panel.innerHTML = `
      <div class="epic-panel-box">
        <div class="epic-panel-head">
          <strong>${title}</strong>
          <button class="epic-panel-close">×</button>
        </div>
        <div class="epic-panel-body">${text}</div>
      </div>
    `;

    panel.querySelector(".epic-panel-close").onclick = () => {
      panel.remove();
    };

    panel.onclick = e => {
      if (e.target === panel) panel.remove();
    };

    document.body.appendChild(panel);
  };

  document.querySelector(".close")?.addEventListener("click", () => {
    if (window.Telegram?.WebApp) {
      Telegram.WebApp.close();
    } else {
      openPanel(
        "Epic Gift",
        "این دکمه داخل Telegram Mini App پنجره را می‌بندد."
      );
    }
  });

  document.querySelector(".menu")?.addEventListener("click", () => {
    openPanel(
      "Menu",
      `
        <div style="display:grid;gap:9px">
          <button style="padding:14px;border-radius:13px;background:#292930;color:#fff">
            Profile
          </button>
          <button style="padding:14px;border-radius:13px;background:#292930;color:#fff">
            Settings
          </button>
          <button style="padding:14px;border-radius:13px;background:#292930;color:#fff">
            Support
          </button>
        </div>
      `
    );
  });

  document.querySelector(".deposit")?.addEventListener("click", () => {
    openPanel(
      "Deposit",
      "اتصال واقعی TON و Telegram Gifts را در مرحله بک‌اند اضافه می‌کنیم."
    );
  });

  document.querySelector(".rocket-banner")?.addEventListener("click", () => {
    openPanel(
      "Rocket",
      "Rocket Mode آماده است. سیستم ضریب، شرط و Cash Out در مرحله بعد اضافه می‌شود."
    );
  });

  document.querySelector(".pvp-banner")?.addEventListener("click", () => {
    openPanel(
      "PvP",
      "PvP برای بازی مقابل بازیکن‌ها طراحی می‌شود. موجودی و Prize Pool بعداً به بک‌اند وصل می‌شود."
    );
  });

  document.querySelector(".play-banner")?.addEventListener("click", () => {
    openPanel(
      "Play Hub",
      "بخش بازی‌ها و حالت‌های مختلف Epic Gift اینجا قرار می‌گیرد."
    );
  });

  document.querySelector(".free24")?.addEventListener("click", () => {
    openPanel(
      "FREE24",
      "این باکس برای دریافت جایزه روزانه طراحی شده است."
    );
  });

  document.querySelector(".free")?.addEventListener("click", () => {
    openPanel(
      "FARM",
      "Farm Box می‌تواند شامل Giftهای مختلف باشد."
    );
  });

  const navInfo = {
    Backpack: [
      "Backpack",
      "Giftهای دریافت‌شده و موجودی شما اینجا نمایش داده می‌شود."
    ],
    Invite: [
      "Invite",
      "لینک Referral و پاداش دعوت دوستان اینجا قرار می‌گیرد."
    ],
    Leaderboard: [
      "Leaderboard",
      "رتبه بازیکنان و جوایز این بخش بعداً به سیستم واقعی متصل می‌شود."
    ],
    Earn: [
      "Earn",
      "Taskها و POWER قابل دریافت اینجا نمایش داده می‌شوند."
    ]
  };

  document.querySelectorAll(".bottom-nav button").forEach(button => {

    button.addEventListener("click", () => {

      document
        .querySelectorAll(".bottom-nav button")
        .forEach(item => item.classList.remove("active"));

      button.classList.add("active");

      const name = button.querySelector("span")?.textContent;

      if (name !== "Home" && navInfo[name]) {
        openPanel(
          navInfo[name][0],
          navInfo[name][1]
        );
      }
    });

  });

});
