document.addEventListener("DOMContentLoaded",()=>{const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);let hashes=0,power=100;
if(window.Telegram?.WebApp){Telegram.WebApp.ready();Telegram.WebApp.expand();Telegram.WebApp.setHeaderColor?.("#111214");Telegram.WebApp.setBackgroundColor?.("#111214")}
function update(){hashes+=power/86400*2;$("#hashes").textContent=Math.floor(hashes).toLocaleString();$("#swapHashes").textContent=Math.floor(hashes).toLocaleString();$("#gram").textContent=(hashes/100000).toFixed(3);$("#power").textContent=Math.floor(power)}
setInterval(update,2000);update();
function page(title,html){const main=document.querySelector("main");main.innerHTML=`<div class="pagehead"><button class="back" id="back">‹</button><b>${title}</b></div>${html}`;$("#back").onclick=home}
function home(){location.reload()}
function simple(title,rows){page(title,`<div class="list">${rows.map(x=>`<div class="row"><span>${x[0]}</span><b>${x[1]}</b></div>`).join("")}</div>`)}
$$("[data-page]").forEach(b=>b.onclick=()=>open(b.dataset.page));
$$("[data-nav]").forEach(b=>b.onclick=()=>open(b.dataset.nav));
function open(p){if(p==="home")return home();if(p==="shop")return simple("SHOP",[["Power Boost","+25 POWER"],["Mining Boost","+50%"],["Premium Contract","Coming soon"]]);if(p==="trophy")return simple("TROPHY",[["First Contract","Locked"],["1M HASHES","Locked"],["Empire Builder","Locked"]]);if(p==="team")return simple("TEAM",[["Your team","0 members"],["Referral bonus","10%"],["Invite","Share link"]]);if(p==="earn")return simple("EARN",[["Daily check-in","+100 POWER"],["Invite friend","+250 POWER"],["Watch task","+50 POWER"]]);if(p==="more")return simple("MORE",[["Settings","›"],["Support","›"],["Terms","›"]]);if(p==="payouts")return simple("PAYOUTS",[["Available GRAM","0.000"],["Minimum payout","—"],["Status","Not connected"]]);}
$("#buyPower").onclick=()=>{power+=10;update();alert("Demo: +10 POWER")};
$("#freePower").onclick=()=>{power+=5;update();alert("Demo: +5 POWER")};
$("#swapBtn").onclick=()=>{if(hashes<1000)return alert("Not enough HASHES");hashes-=1000;update();alert("Demo swap: 1000 HASHES → 0.010 GRAM")};
$("#contracts").onclick=()=>simple("YOUR CONTRACTS",[["Mining Contract","+12K / day"],["POWER","100"],["Status","Active"]]);
$("#menu").onclick=()=>simple("MENU",[["Profile","›"],["Settings","›"],["Support","›"]]);
$("#profile").onclick=()=>simple("PROFILE",[["Balance","0 GRAM"],["POWER",String(power)],["HASHES",String(Math.floor(hashes))]]);
});