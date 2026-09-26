const tg=window.Telegram?.WebApp;if(tg){tg.ready();tg.expand()}
let hashes=0;const hashesEl=document.getElementById('hashes');
setInterval(()=>{hashes+=0.0000015;hashesEl.textContent=hashes.toFixed(8)},1000);
const page=document.getElementById('page');
function show(title,html){page.classList.remove('hidden');page.innerHTML='<div class="page-title">'+title+'</div>'+html;page.scrollIntoView({behavior:'smooth',block:'center'})}
document.querySelectorAll('.nav button').forEach(b=>b.onclick=()=>{const p=b.dataset.page;if(p==='home'){page.classList.add('hidden');return}
if(p==='shop')show('SHOP','<p class="muted">Buy POWER and upgrade your mining contracts.</p><button class="primary">Buy 200 POWER</button>');
if(p==='trophy')show('TROPHY','<p>🏆 Your achievements will appear here.</p>');
if(p==='team')show('TEAM','<p>Invite friends and earn referral rewards.</p><button class="primary">Invite friends</button>');
if(p==='earn')show('EARN','<p>Complete tasks to receive POWER.</p><button class="primary">Join @epic_gifto — +500 POWER</button>');
if(p==='more')show('MORE','<p>Wheel • Daily reward • Settings</p>');
if(p==='payout')show('PAYOUTS','<p class="muted">Connect your wallet to request a payout.</p>')});
document.getElementById('freePower').onclick=()=>show('FREE POWER','<p>Complete available tasks to receive free POWER.</p>');
document.getElementById('swap').onclick=()=>show('SWAP HASHES → GRAM','<p class="muted">Available HASHES: '+hashes.toFixed(8)+'</p><button class="primary">Swap</button>');