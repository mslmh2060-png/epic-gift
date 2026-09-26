document.addEventListener('DOMContentLoaded', () => {

  if (window.Telegram?.WebApp) {
    Telegram.WebApp.ready();
    Telegram.WebApp.expand();
  }

  const gifts = {
    "Heart Locket": ["heart", "Rare", "3.84 TON"],
    "Bonded Ring": ["ring", "Rare", "2.71 TON"],
    "Durov's Cap": ["cap", "Epic", "8.42 TON"],
    "Ion Gem": ["gem", "Epic", "12.60 TON"]
  };

  const page = (title, html) => {
    document.querySelector(".page")?.remove();

    const p = document.createElement("div");
    p.className = "page";

    p.innerHTML = `
      <div class="ptop">
        <button class="back">‹</button>
        <strong>${title}</strong>
      </div>

      <div class="body">
        ${html}
      </div>
    `;

    p.querySelector(".back").onclick = () => p.remove();

    document.body.appendChild(p);

    return p;
  };

  const msg = (title, message) => {
    page(
      title,
      `
      <div class="panel">
        <h2>${title}</h2>
        <p class="muted">${message}</p>
      </div>
      `
    );
  };

  function rocket() {

    const p = page(
      "Rocket",
      `
      <div class="hero rocketH">
        <small>PLAY MODE</small>
        <h1>Rocket</h1>
        <p>Cash out before the crash.</p>
      </div>

      <div class="panel">

        <div class="stats">

          <div class="stat">
            <b id="x">1.00×</b>
            <small>Multiplier</small>
          </div>

          <div class="stat">
            <b>0.10</b>
            <small>Min TON</small>
          </div>

          <div class="stat">
            <b>LIVE</b>
            <small>Round</small>
          </div>

        </div>

        <button class="primary" id="go">
          START ROUND
        </button>

      </div>
      `
    );

    let running = false;
    let timer;

    p.querySelector("#go").onclick = () => {

      if (running) {

        clearInterval(timer);

        running = false;

        p.querySelector("#go").textContent =
          "CASHED OUT";

        return;
      }

      running = true;

      let multiplier = 1;

      p.querySelector("#go").textContent =
        "CASH OUT";

      timer = setInterval(() => {

        multiplier += 0.08;

        p.querySelector("#x").textContent =
          multiplier.toFixed(2) + "×";

        if (multiplier >= 2.4) {

          clearInterval(timer);

          running = false;

          p.querySelector("#go").textContent =
            "ROUND ENDED";
        }

      }, 100);

    };

  }


  function pvp() {

    const p = page(
      "PvP",
      `
      <div class="hero pvpH">
        <small>BATTLE MODE</small>
        <h1>PvP</h1>
        <p>Fight for the bank.</p>
      </div>

      <div class="players">

        <div class="fighter">
          <div class="face"></div>
          <b>YOU</b>
        </div>

        <div class="vs">VS</div>

        <div class="fighter">
          <div class="face"></div>
          <b>OPPONENT</b>
        </div>

      </div>

      <div class="panel">

        <div class="stats">

          <div class="stat">
            <b>0.20</b>
            <small>Prize pool</small>
          </div>

          <div class="stat">
            <b>2</b>
            <small>Players</small>
          </div>

          <div class="stat">
            <b>FAIR</b>
            <small>System</small>
          </div>

        </div>

        <div class="bets">

          <button class="bet on">
            0.1 TON
          </button>

          <button class="bet">
            0.5 TON
          </button>

          <button class="bet">
            1 TON
          </button>

        </div>

        <button class="primary" id="match">
          FIND MATCH
        </button>

      </div>

      <div class="panel">
        <p class="muted">
          PvP demo interface.
          Real matches require backend integration.
        </p>
      </div>
      `
    );

    p.querySelectorAll(".bet").forEach(button => {

      button.onclick = () => {

        p.querySelectorAll(".bet")
          .forEach(x => x.classList.remove("on"));

        button.classList.add("on");

      };

    });

    p.querySelector("#match").onclick = () => {

      const button = p.querySelector("#match");

      button.textContent = "SEARCHING…";

      setTimeout(() => {

        button.textContent = "MATCH FOUND";

      }, 900);

    };

  }


  function upgrade() {

    page(
      "Upgrade",
      `
      <div class="hero greenH">
        <small>PLAY MODE</small>
        <h1>Upgrade</h1>
        <p>
          Choose a target and try to upgrade your gift.
        </p>
      </div>

      <div class="panel">

        <div class="stats">

          <div class="stat">
            <b>2.4×</b>
            <small>Target</small>
          </div>

          <div class="stat">
            <b>48%</b>
            <small>Chance</small>
          </div>

          <div class="stat">
            <b>0.1</b>
            <small>Entry</small>
          </div>

        </div>

        <button class="primary">
          CHOOSE TARGET
        </button>

      </div>
      `
    );

  }


  function contracts() {

    page(
      "Contracts",
      `
      <div class="hero purpleH">
        <small>PLAY MODE</small>
        <h1>Contracts</h1>
        <p>
          Combine gifts into a new drop.
        </p>
      </div>

      <div class="grid2">

        <div class="quick">
          <b>Safe Mode</b>
          <small>Low risk · similar value</small>
        </div>

        <div class="quick">
          <b>Normal Mode</b>
          <small>Balanced risk & reward</small>
        </div>

        <div class="quick">
          <b>Risky Mode</b>
          <small>High risk mode</small>
        </div>

        <div class="quick">
          <b>Inventory</b>
          <small>Select your gifts</small>
        </div>

      </div>

      <div class="panel">

        <button class="primary">
          SELECT GIFTS
        </button>

      </div>
      `
    );

  }


  function mines() {

    const p = page(
      "Mines",
      `
      <div class="hero purpleH">
        <small>PLAY MODE</small>
        <h1>Mines</h1>
        <p>
          Open cells and cash out before a bomb.
        </p>
      </div>

      <div class="panel">

        <div class="stats">

          <div class="stat">
            <b>3</b>
            <small>Mines</small>
          </div>

          <div class="stat">
            <b>0.10</b>
            <small>Bet</small>
          </div>

          <div class="stat">
            <b id="mx">1.00×</b>
            <small>Multiplier</small>
          </div>

        </div>

        <div class="mine">

          ${Array.from(
            { length: 25 },
            (_, i) =>
              `<button class="cell" data-i="${i}"></button>`
          ).join("")}

        </div>

        <button class="primary" id="cash">
          CASH OUT
        </button>

      </div>
      `
    );

    let opened = 0;

    p.querySelectorAll(".cell").forEach(cell => {

      cell.onclick = () => {

        if (cell.classList.contains("open")) return;

        if (Math.random() < 0.18) {

          cell.classList.add("bomb");

        } else {

          cell.classList.add("open");

          opened++;

          p.querySelector("#mx").textContent =
            (1 + opened * 0.27).toFixed(2) + "×";

        }

      };

    });

    p.querySelector("#cash").onclick = () => {

      msg(
        "Mines",
        "Demo cash-out. Real bets and settlement require a backend."
      );

    };

  }


  function free24() {

    const last =
      Number(localStorage.epicFree24 || 0);

    const ready =
      Date.now() - last >= 86400000;

    const p = page(
      "FREE24",
      `
      <div class="hero purpleH">
        <small>DAILY GIFT</small>
        <h1>FREE24</h1>
        <p>
          Open once every 24 hours with no deposit.
        </p>
      </div>

      <div class="panel">

        <h2>
          ${ready ? "Ready to open" : "Already opened"}
        </h2>

        <p class="muted">
          FREE24 demo cooldown.
        </p>

        <button
          class="primary"
          id="open"
          ${ready ? "" : "disabled"}
        >
          ${ready ? "OPEN FREE24" : "WAIT 24 HOURS"}
        </button>

      </div>
      `
    );

    p.querySelector("#open").onclick = () => {

      localStorage.epicFree24 =
        Date.now();

      msg(
        "FREE24",
        "Demo reward opened."
      );

    };

  }


  function farm() {

    const p = page(
      "Farm Box",
      `
      <div class="hero greenH">
        <small>GIFT BOX</small>
        <h1>Farm Box</h1>
        <p>
          Any gift can drop.
          Boosts can improve odds.
        </p>
      </div>

      <div class="panel">

        <div class="stats">

          <div class="stat">
            <b>0.1 TON</b>
            <small>Example price</small>
          </div>

          <div class="stat">
            <b>ANY</b>
            <small>Gift range</small>
          </div>

          <div class="stat">
            <b>BOOSTS</b>
            <small>Odds</small>
          </div>

        </div>

        <button class="primary" id="openFarm">
          OPEN FARM
        </button>

      </div>
      `
    );

    p.querySelector("#openFarm").onclick = () => {

      msg(
        "Farm Box",
        "Demo opening. Real payment and gift delivery require backend integration."
      );

    };

  }


  function gift(name) {

    const giftData = gifts[name];

    if (!giftData) return;

    const type =
      giftData[0];

    page(
      name,
      `
      <div class="giftDetail">

        <div class="detailGift ${type}">
          ${type === "gem" ? "◆" : ""}
        </div>

      </div>

      <div class="panel">

        <h2>${name}</h2>

        <p class="muted">
          ${giftData[1]} · demo value ${giftData[2]}
        </p>

        <button class="primary">
          USE GIFT
        </button>

      </div>
      `
    );

  }


  function hub() {

    const p = page(
      "Play Hub",
      `
      <div class="list">

        <button class="row" data-x="rocket">
          Rocket <b>›</b>
        </button>

        <button class="row" data-x="pvp">
          PvP <b>›</b>
        </button>

        <button class="row" data-x="mines">
          Mines <b>›</b>
        </button>

        <button class="row" data-x="plinko">
          Plinko <b>›</b>
        </button>

        <button class="row" data-x="contracts">
          Contracts <b>›</b>
        </button>

        <button class="row" data-x="upgrade">
          Upgrade <b>›</b>
        </button>

      </div>
      `
    );

    p.querySelectorAll("[data-x]").forEach(button => {

      button.onclick = () => {

        const action = {
          rocket,
          pvp,
          mines,
          contracts,
          upgrade,

          plinko: () => {
            msg(
              "Plinko",
              "Front-end demo. Real rounds require backend game logic."
            );
          }

        }[button.dataset.x];

        if (action) action();

      };

    });

  }


  function backpack() {

    const p = page(
      "Backpack",
      `
      <div class="panel">

        <h2>Your Gifts</h2>

        <p class="muted">
          Gifts deposited through Gift Backpack
          would appear here.
        </p>

      </div>

      <div class="grid2">

        ${Object.keys(gifts).map(name => `
          <button class="quick" data-g="${name}">
            <b>${name}</b>
            <small>${gifts[name][1]}</small>
          </button>
        `).join("")}

      </div>
      `
    );

    p.querySelectorAll("[data-g]").forEach(button => {

      button.onclick = () =>
        gift(button.dataset.g);

    });

  }


  function invite() {

    const p = page(
      "Invite",
      `
      <div class="hero purpleH">

        <small>REFERRAL PROGRAM</small>

        <h1>Invite</h1>

        <p>
          Share your referral link
          and track rewards.
        </p>

      </div>

      <div class="panel">

        <button class="primary" id="copy">
          COPY REFERRAL LINK
        </button>

      </div>
      `
    );

    p.querySelector("#copy").onclick = async () => {

      const link =
        "https://t.me/epic_gift_bot?start=demo";

      try {

        await navigator.clipboard.writeText(link);

        msg(
          "Copied",
          "Referral link copied."
        );

      } catch {

        msg(
          "Referral",
          link
        );

      }

    };

  }


  function leaderboard() {

    page(
      "Leaderboard",
      `
      <div class="panel">

        <h2>Weekly Race</h2>

        <p class="muted">
          Weekly leaderboard demo.
        </p>

      </div>

      <div class="list">

        ${[
          "Durov's Cap",
          "Precious Peach",
          "Heroic Helmet",
          "Artisan Brick",
          "Swiss Watch",
          "Bonded Ring",
          "Rare Bird",
          "Gift Collector"
        ].map((name, i) => `
          <div class="row">

            <span>
              ${i + 1}. ${name}
            </span>

            <b>
              ${(12500 - i * 731).toLocaleString()}
            </b>

          </div>
        `).join("")}

      </div>
      `
    );

  }


  function earn() {

    page(
      "Earn",
      `
      <div class="panel">

        <h2>Tasks</h2>

        <p class="muted">
          Complete tasks to earn points.
        </p>

      </div>

      <div class="list">

        ${[
          ["Join Epic Gift channel", 500],
          ["Daily check-in", 100],
          ["Invite a friend", 250],
          ["Play Hub session", 300]
        ].map(task => `
          <div class="row">

            <span>${task[0]}</span>

            <b>+${task[1]}</b>

          </div>
        `).join("")}

      </div>
      `
    );

  }


  const actions = {
    contracts,
    upgrade,
    rocket,
    pvp,
    mines,
    free24,
    farm,
    hub
  };


  document.querySelectorAll("[data-page]")
    .forEach(button => {

      button.onclick = () => {

        const action =
          actions[button.dataset.page];

        if (action) action();

      };

    });


  document.querySelectorAll("[data-gift]")
    .forEach(button => {

      button.onclick = () =>
        gift(button.dataset.gift);

    });


  document.querySelector("#deposit").onclick =
    () => {

      msg(
        "Deposit",
        "This is a front-end demo. Real deposits require backend integration."
      );

    };


  document.querySelector("#menu").onclick =
    () => {

      page(
        "Menu",
        `
        <div class="list">

          <div class="row">
            Profile <b>›</b>
          </div>

          <div class="row">
            Settings <b>›</b>
          </div>

          <div class="row">
            Support <b>›</b>
          </div>

        </div>
        `
      );

    };


  document.querySelector("#close").onclick =
    () => {

      window.Telegram?.WebApp?.close();

    };


  document.querySelector("#all").onclick =
    () => {

      const p = page(
        "Gift Boxes",
        `
        <div class="list">

          ${Object.keys(gifts).map(name => `
            <button class="row" data-g="${name}">
              ${name}
              <b>›</b>
            </button>
          `).join("")}

        </div>
        `
      );

      p.querySelectorAll("[data-g]")
        .forEach(button => {

          button.onclick = () =>
            gift(button.dataset.g);

        });

    };


  document.querySelectorAll("nav button")
    .forEach(button => {

      button.onclick = () => {

        document
          .querySelectorAll("nav button")
          .forEach(x =>
            x.classList.remove("active")
          );

        button.classList.add("active");

        const navAction = {
          home: () =>
            document.querySelector(".page")?.remove(),

          backpack,
          invite,
          leaderboard,
          earn

        }[button.dataset.nav];

        if (navAction) navAction();

      };

    });


  setInterval(() => {

    const live =
      document.querySelector("#live");

    if (live?.firstElementChild) {

      live.appendChild(
        live.firstElementChild
      );

    }

  }, 2200);

});
