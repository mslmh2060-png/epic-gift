document.addEventListener("DOMContentLoaded", () => {

  // Telegram Mini App
  if (window.Telegram?.WebApp) {
    Telegram.WebApp.ready();
    Telegram.WebApp.expand();
  }

  // =========================
  // FULL PAGE SYSTEM
  // =========================

  function openPage(title, content) {

    document.querySelector(".epic-page")?.remove();

    const page = document.createElement("div");

    page.className = "epic-page";

    page.innerHTML = `
      <div class="epic-page-top">

        <button class="epic-page-back">
          ‹
        </button>

        <strong>${title}</strong>

        <div class="epic-page-spacer"></div>

      </div>

      <div class="epic-page-content">
        ${content}
      </div>
    `;

    const backButton =
      page.querySelector(".epic-page-back");

    backButton.addEventListener("click", () => {
      page.remove();
    });

    document.body.appendChild(page);
  }


  // =========================
  // SIMPLE INFORMATION PAGE
  // =========================

  function openMessage(title, message) {

    openPage(
      title,

      `
      <div class="epic-info-card">

        <div class="epic-info-icon">
          ✦
        </div>

        <h2>
          ${title}
        </h2>

        <p>
          ${message}
        </p>

      </div>
      `
    );

  }


  // =========================
  // CLOSE MINI APP
  // =========================

  document
    .querySelector(".close")
    ?.addEventListener("click", () => {

      if (window.Telegram?.WebApp) {
        Telegram.WebApp.close();
      }

    });


  // =========================
  // MENU
  // =========================

  document
    .querySelector(".menu")
    ?.addEventListener("click", () => {

      openPage(
        "Menu",

        `
        <div class="page-list">

          <button>
            <span>Profile</span>
            <span>›</span>
          </button>

          <button>
            <span>Settings</span>
            <span>›</span>
          </button>

          <button>
            <span>Support</span>
            <span>›</span>
          </button>

        </div>
        `
      );

    });


  // =========================
  // DEPOSIT
  // =========================

  document
    .querySelector(".deposit")
    ?.addEventListener("click", () => {

      openMessage(
        "Deposit",
        "اتصال واقعی TON و Telegram Gifts در مرحله بک‌اند اضافه می‌شود."
      );

    });


  // =========================
  // ROCKET
  // =========================

  document
    .querySelector(".rocket-banner")
    ?.addEventListener("click", () => {

      openPage(
        "Rocket",

        `
        <div class="game-hero rocket-page">

          <span>
            PLAY MODE
          </span>

          <h1>
            ROCKET
          </h1>

          <p>
            Cash out before the crash.
          </p>

        </div>


        <div class="epic-info-card">

          <h2>
            Rocket Mode
          </h2>

          <p>
            ضریب بازی، شرط و Cash Out در این بخش قرار می‌گیرد.
          </p>

          <button
            class="primary-action"
            id="startRocket"
          >
            START ROCKET
          </button>

        </div>
        `
      );


      document
        .getElementById("startRocket")
        ?.addEventListener("click", () => {

          openMessage(
            "Rocket",
            "سیستم واقعی Rocket هنوز به بک‌اند متصل نشده است."
          );

        });

    });


  // =========================
  // PVP
  // =========================

  document
    .querySelector(".pvp-banner")
    ?.addEventListener("click", () => {

      openPage(
        "PvP",

        `
        <div class="game-hero pvp-page">

          <span>
            BATTLE MODE
          </span>

          <h1>
            PVP
          </h1>

          <p>
            Fight for the bank.
          </p>

        </div>


        <div class="epic-info-card">

          <h2>
            PvP Arena
          </h2>

          <p>
            اینجا محل ورود به مسابقه‌های PvP و Prize Pool خواهد بود.
          </p>

          <button
            class="primary-action"
            id="findMatch"
          >
            FIND MATCH
          </button>

        </div>
        `
      );


      document
        .getElementById("findMatch")
        ?.addEventListener("click", () => {

          openMessage(
            "PvP",
            "سیستم Matchmaking هنوز به بک‌اند متصل نشده است."
          );

        });

    });


  // =========================
  // PLAY HUB
  // =========================

  document
    .querySelector(".play-banner")
    ?.addEventListener("click", () => {

      openPage(
        "Play Hub",

        `
        <div class="page-list">

          <button id="hubRocket">
            <span>Rocket</span>
            <span>›</span>
          </button>

          <button id="hubPvp">
            <span>PvP</span>
            <span>›</span>
          </button>

          <button id="hubFree24">
            <span>FREE24</span>
            <span>›</span>
          </button>

          <button id="hubFarm">
            <span>FARM</span>
            <span>›</span>
          </button>

        </div>
        `
      );


      document
        .getElementById("hubRocket")
        ?.addEventListener("click", () => {

          openPage(
            "Rocket",

            `
            <div class="game-hero rocket-page">

              <span>
                PLAY MODE
              </span>

              <h1>
                ROCKET
              </h1>

              <p>
                Cash out before the crash.
              </p>

            </div>
            `
          );

        });


      document
        .getElementById("hubPvp")
        ?.addEventListener("click", () => {

          openPage(
            "PvP",

            `
            <div class="game-hero pvp-page">

              <span>
                BATTLE MODE
              </span>

              <h1>
                PVP
              </h1>

              <p>
                Fight for the bank.
              </p>

            </div>
            `
          );

        });


      document
        .getElementById("hubFree24")
        ?.addEventListener("click", () => {

          openFree24();

        });


      document
        .getElementById("hubFarm")
        ?.addEventListener("click", () => {

          openFarm();

        });

    });


  // =========================
  // FREE24 PAGE
  // =========================

  function openFree24() {

    openPage(
      "FREE24",

      `
      <div class="box-page-art free-art">

        <div class="box-lid"></div>

        <div class="box-body"></div>

        <div class="box-ribbon"></div>

      </div>


      <div class="epic-info-card">

        <span class="eyebrow">
          DAILY GIFT
        </span>

        <h2>
          FREE24
        </h2>

        <p>
          هر ۲۴ ساعت یک بار می‌توانی جایزه روزانه خودت را بررسی کنی.
        </p>

        <button
          class="primary-action"
          id="claimFree24"
        >
          CLAIM FREE24
        </button>

      </div>
      `
    );


    document
      .getElementById("claimFree24")
      ?.addEventListener("click", () => {

        openMessage(
          "FREE24",
          "سیستم دریافت جایزه واقعی بعد از اتصال بک‌اند فعال می‌شود."
        );

      });

  }


  // =========================
  // FARM PAGE
  // =========================

  function openFarm() {

    openPage(
      "FARM",

      `
      <div class="box-page-art farm-art">

        <div class="farm-box"></div>

        <div class="farm-leaf one"></div>

        <div class="farm-leaf two"></div>

      </div>


      <div class="epic-info-card">

        <span class="eyebrow">
          GIFT BOX
        </span>

        <h2>
          FARM
        </h2>

        <p>
          Farm Box می‌تواند شامل Giftهای مختلف باشد.
        </p>

        <button
          class="primary-action"
          id="openFarm"
        >
          OPEN FARM
        </button>

      </div>
      `
    );


    document
      .getElementById("openFarm")
      ?.addEventListener("click", () => {

        openMessage(
          "FARM",
          "سیستم واقعی باز کردن Farm Box بعداً به بک‌اند متصل می‌شود."
        );

      });

  }


  // =========================
  // FREE24 BUTTON
  // =========================

  document
    .querySelector(".free24")
    ?.addEventListener("click", () => {

      openFree24();

    });


  // =========================
  // FARM BUTTON
  // =========================

  document
    .querySelector(".free")
    ?.addEventListener("click", () => {

      openFarm();

    });


  // =========================
  // OTHER GIFT BOXES
  // =========================

  document
    .querySelectorAll(
      ".box-card:not(.free24):not(.free)"
    )
    .forEach(card => {

      card.addEventListener("click", () => {

        const title =
          card.querySelector("strong")
            ?.textContent || "Gift";

        const description =
          card.querySelector("span")
            ?.textContent || "Special Gift";

        openPage(
          title,

          `
          <div class="epic-info-card">

            <div class="epic-info-icon">
              ✦
            </div>

            <h2>
              ${title}
            </h2>

            <p>
              ${description}
            </p>

            <button
              class="primary-action"
              id="giftAction"
            >
              OPEN GIFT
            </button>

          </div>
          `
        );


        document
          .getElementById("giftAction")
          ?.addEventListener("click", () => {

            openMessage(
              title,
              "سیستم واقعی این Gift هنوز به بک‌اند متصل نشده است."
            );

          });

      });

    });


  // =========================
  // BOTTOM NAVIGATION
  // =========================

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
      "رتبه بازیکنان و جوایز این بخش اینجا نمایش داده می‌شود."
    ],

    Earn: [
      "Earn",
      "Taskها و POWER قابل دریافت اینجا نمایش داده می‌شوند."
    ]

  };


  document
    .querySelectorAll(".bottom-nav button")
    .forEach(button => {

      button.addEventListener("click", () => {

        document
          .querySelectorAll(".bottom-nav button")
          .forEach(item => {

            item.classList.remove("active");

          });


        button.classList.add("active");


        const name =
          button.querySelector("span")
            ?.textContent;


        if (
          name !== "Home" &&
          navInfo[name]
        ) {

          openMessage(
            navInfo[name][0],
            navInfo[name][1]
          );

        }

      });

    });

});
