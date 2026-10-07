/* Denver Paint Contractors - Fred assistant, virtual estimator and in-person estimate request */
(function () {
  "use strict";
  var TEL = "+17202085645", DISP = "720-208-5645";

  /* ---------- Fred artwork ---------- */
  function fredSVG(cls) {
    return '<svg class="' + (cls || '') + '" viewBox="0 0 300 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Fred, the Denver Paint Contractors painter">' +
      '<defs><linearGradient id="fdCap" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1e3a63"/><stop offset="1" stop-color="#16294a"/></linearGradient></defs>' +
      /* ladder behind */
      '<g opacity=".95"><rect x="236" y="96" width="9" height="250" rx="3" fill="#c98b3a"/><rect x="276" y="96" width="9" height="250" rx="3" fill="#c98b3a"/>' +
      '<rect x="236" y="140" width="49" height="8" rx="3" fill="#d9a441"/>' +
      '<rect x="236" y="196" width="49" height="8" rx="3" fill="#d9a441"/><rect x="236" y="252" width="49" height="8" rx="3" fill="#d9a441"/><rect x="236" y="308" width="49" height="8" rx="3" fill="#d9a441"/></g>' +
      /* legs: white painter pants */
      '<path d="M104 236 h92 l8 108 h-38 l-14-70 -14 70 h-38 z" fill="#f7f7f4" stroke="#d7d9d3" stroke-width="3"/>' +
      '<rect x="112" y="266" width="26" height="30" rx="4" fill="#eef0ec" stroke="#d7d9d3" stroke-width="2"/>' +
      /* paint spatter on pants */
      '<g opacity=".9"><circle cx="124" cy="306" r="5" fill="#1c7ed6"/><circle cx="139" cy="330" r="3.4" fill="#d6342c"/><circle cx="170" cy="300" r="4.3" fill="#2f9e44"/>' +
      '<circle cx="186" cy="334" r="3" fill="#f2b705"/><circle cx="151" cy="290" r="2.6" fill="#ef7d1a"/><circle cx="196" cy="292" r="2.4" fill="#1c7ed6"/>' +
      '<circle cx="117" cy="286" r="2.2" fill="#2f9e44"/><ellipse cx="178" cy="318" rx="6" ry="3" fill="#d6342c" opacity=".75"/></g>' +
      /* boots */
      '<rect x="98" y="338" width="54" height="18" rx="6" fill="#4a4a46"/><rect x="152" y="338" width="54" height="18" rx="6" fill="#4a4a46"/>' +
      /* torso: navy tee */
      '<path d="M150 118 c-34 0-58 14-62 34 l-6 86 h136 l-6-86 c-4-20-28-34-62-34z" fill="#16294a"/>' +
      '<path d="M104 160 l-16 56 22 8 14-50z" fill="#16294a"/><path d="M196 160 l16 56-22 8-14-50z" fill="#16294a"/>' +
      /* apron strap + pocket */
      '<rect x="112" y="196" width="76" height="42" rx="6" fill="#f7f7f4" stroke="#d7d9d3" stroke-width="3"/>' +
      '<text x="150" y="224" font-family="Arial,Helvetica,sans-serif" font-size="15" font-weight="bold" fill="#16294a" text-anchor="middle">DPC</text>' +
      /* arms + hands */
      '<g class="fd-wave"><path d="M88 216 c-14-10-18-30-10-44 l16 8 c-4 8-2 18 6 24z" fill="#16294a"/>' +
      '<circle cx="80" cy="170" r="15" fill="#f0c49a"/><rect x="72" y="146" width="5" height="18" rx="2.5" fill="#f0c49a"/><rect x="79" y="142" width="5" height="22" rx="2.5" fill="#f0c49a"/><rect x="86" y="146" width="5" height="18" rx="2.5" fill="#f0c49a"/></g>' +
      /* brush in right hand */
      '<circle cx="214" cy="222" r="15" fill="#f0c49a"/><rect x="206" y="226" width="12" height="54" rx="5" fill="#c98b3a" transform="rotate(12 212 250)"/>' +
      '<rect x="202" y="276" width="22" height="14" rx="3" fill="#b9bdc2" transform="rotate(12 213 283)"/><rect x="200" y="288" width="26" height="22" rx="3" fill="#2b2b2b" transform="rotate(12 213 299)"/>' +
      /* head */
      '<circle cx="150" cy="86" r="38" fill="#f0c49a"/>' +
      '<path d="M112 78 a38 38 0 0 1 76 0 z" fill="url(#fdCap)"/><path d="M186 76 h30 a6 6 0 0 1 0 12 h-30z" fill="#1e3a63"/>' +
      '<rect x="128" y="62" width="44" height="14" rx="4" fill="#d9a441"/><text x="150" y="73" font-family="Arial,Helvetica,sans-serif" font-size="10" font-weight="bold" fill="#16294a" text-anchor="middle">PAINT</text>' +
      '<circle cx="136" cy="92" r="4.2" fill="#2b2b2b"/><circle cx="164" cy="92" r="4.2" fill="#2b2b2b"/>' +
      '<path d="M136 108 q14 12 28 0" stroke="#8a5a3b" stroke-width="3.4" fill="none" stroke-linecap="round"/>' +
      '<path d="M120 100 q-6 6 0 12" stroke="#e0a98a" stroke-width="3" fill="none"/>' +
      /* bucket */
      '<path d="M26 300 h54 l-6 46 h-42z" fill="#dfe3e8" stroke="#b9bdc2" stroke-width="3"/><rect x="26" y="294" width="54" height="10" rx="3" fill="#b9bdc2"/>' +
      '<rect x="36" y="312" width="34" height="16" rx="3" fill="#16294a"/><text x="53" y="324" font-family="Arial,Helvetica,sans-serif" font-size="9" font-weight="bold" fill="#fff" text-anchor="middle">PAINT</text>' +
      '</svg>';
  }

  /* ---------- styles ---------- */
  var css = document.createElement('style');
  css.textContent = [
    '.fd-launch{position:fixed;right:16px;bottom:16px;z-index:980;display:flex;flex-direction:column;align-items:flex-end;gap:4px}',
    '.fd-btn{width:150px;height:190px;background:none;border:0;padding:0;cursor:pointer;filter:drop-shadow(0 10px 18px rgba(22,41,74,.3));transition:transform .2s}',
    '.fd-btn:hover{transform:translateY(-4px)}',
    '.fd-btn svg{width:100%;height:100%;display:block}',
    '.fd-wave{transform-origin:86px 206px;animation:fdwave 3.4s ease-in-out infinite}',
    '@keyframes fdwave{0%,70%,100%{transform:rotate(0)}80%{transform:rotate(-16deg)}90%{transform:rotate(6deg)}}',
    '.fd-tip{background:#fff;color:#16294a;border:2px solid #16294a;border-radius:12px 12px 4px 12px;padding:10px 30px 10px 13px;font:700 .92rem/1.3 Inter,system-ui,sans-serif;max-width:235px;box-shadow:0 10px 26px rgba(0,0,0,.16);position:relative;margin-right:26px;cursor:pointer}',
    '.fd-tip button{position:absolute;top:3px;right:5px;border:0;background:none;font-size:1.05rem;color:#5a6679;cursor:pointer;line-height:1}',
    '.fd-tabs{position:fixed;right:0;top:46%;transform:translateY(-50%);z-index:975;display:flex;flex-direction:column;gap:8px}',
    '.fd-tab{writing-mode:vertical-rl;background:#16294a;color:#fff;border:0;border-radius:6px 0 0 6px;padding:16px 10px;font:700 .85rem Inter,system-ui,sans-serif;letter-spacing:.06em;cursor:pointer;box-shadow:-3px 4px 14px rgba(22,41,74,.25);display:flex;align-items:center;gap:8px}',
    '.fd-tab.alt{background:#d6342c}',
    '.fd-tab:hover{filter:brightness(1.12)}',
    '.fd-tab svg{width:16px;height:16px;writing-mode:horizontal-tb}',
    '.fd-panel{position:fixed;right:16px;bottom:16px;width:400px;max-width:calc(100vw - 24px);height:640px;max-height:calc(100vh - 110px);background:#fff;border:1px solid #dde3ec;border-radius:10px;box-shadow:0 26px 70px rgba(22,41,74,.3);z-index:1000;display:flex;flex-direction:column;overflow:hidden}',
    '.fd-head{background:#16294a;color:#fff;padding:12px 14px;display:flex;align-items:center;gap:10px}',
    '.fd-head .av{width:44px;height:44px;border-radius:50%;background:#fff;overflow:hidden;flex-shrink:0;display:grid;place-items:center}',
    '.fd-head .av svg{width:130px;height:auto;margin-top:34px}',
    '.fd-head b{font:700 1.02rem Inter,system-ui,sans-serif;display:block}',
    '.fd-head span{font-size:.78rem;color:rgba(255,255,255,.8)}',
    '.fd-head .x{margin-left:auto;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.4);color:#fff;border-radius:4px;padding:5px 9px;cursor:pointer;font-weight:700}',
    '.fd-head .call{background:#d9a441;color:#16294a;border:0;border-radius:4px;padding:7px 10px;font:700 .82rem Inter,system-ui,sans-serif;text-decoration:none}',
    '.fd-body{flex:1;overflow-y:auto;padding:14px;background:#f5f7fa;font:1rem/1.55 Inter,system-ui,sans-serif;color:#1b2435}',
    '.fd-msg{max-width:88%;padding:10px 13px;border-radius:12px;margin-bottom:10px;font-size:.95rem}',
    '.fd-msg.bot{background:#fff;border:1px solid #dde3ec;border-bottom-left-radius:3px}',
    '.fd-msg.me{background:#16294a;color:#fff;margin-left:auto;border-bottom-right-radius:3px}',
    '.fd-msg a{color:inherit}',
    '.fd-opts{display:flex;flex-wrap:wrap;gap:7px;padding:10px 14px;background:#fff;border-top:1px solid #dde3ec}',
    '.fd-opt{background:#fff;border:1px solid #16294a;color:#16294a;border-radius:4px;padding:8px 11px;font:600 .88rem Inter,system-ui,sans-serif;cursor:pointer}',
    '.fd-opt:hover{background:#16294a;color:#fff}',
    '.fd-opt.go{background:#d6342c;border-color:#d6342c;color:#fff}',
    '.fd-foot{display:flex;gap:7px;padding:10px 14px;border-top:1px solid #dde3ec;background:#fff}',
    '.fd-foot input{flex:1;border:1px solid #dde3ec;border-radius:4px;padding:10px;font:1rem Inter,system-ui,sans-serif;background:#f5f7fa}',
    '.fd-foot button{background:#d9a441;border:0;border-radius:4px;padding:10px 14px;font-weight:700;color:#16294a;cursor:pointer}',
    '.fd-wrap{padding:14px;background:#fff;border-top:1px solid #dde3ec}',
    '.fd-f label{display:block;font:600 .84rem Inter,system-ui,sans-serif;color:#16294a;margin:9px 0 4px}',
    '.fd-f input,.fd-f select,.fd-f textarea{width:100%;border:1px solid #dde3ec;border-radius:4px;padding:10px;font:1rem Inter,system-ui,sans-serif;background:#f5f7fa;color:#1b2435}',
    '.fd-f .row{display:grid;grid-template-columns:1fr 1fr;gap:0 10px}',
    '.fd-f button.sub{width:100%;margin-top:12px;background:#d6342c;color:#fff;border:0;border-radius:4px;padding:13px;font:700 1rem Inter,system-ui,sans-serif;cursor:pointer}',
    '.fd-note{font-size:.8rem;color:#5a6679;margin-top:8px}',
    '.fd-quote{background:#16294a;color:#fff;border-radius:8px;padding:16px;margin-bottom:12px}',
    '.fd-quote b{display:block;font-size:1.6rem;color:#d9a441;font-family:Fraunces,Georgia,serif}',
    '.fd-quote span{font-size:.85rem;color:rgba(255,255,255,.85);display:block;margin-top:6px}',
    '.fd-line{display:flex;justify-content:space-between;gap:10px;font-size:.86rem;padding:5px 0;border-bottom:1px dashed rgba(255,255,255,.25)}',
    '.fd-bar{height:7px;background:#dde3ec;border-radius:4px;overflow:hidden;margin:10px 14px 0}',
    '.fd-bar i{display:block;height:100%;background:#d9a441;width:0;transition:width .3s}',
    '@media (max-width:640px){.fd-panel{right:6px;left:6px;width:auto;bottom:74px;top:62px;height:auto;max-height:none}',
    '.fd-launch{right:4px;bottom:72px}.fd-btn{width:104px;height:132px}.fd-tip{font-size:.84rem;max-width:180px;margin-right:16px}',
    '.fd-tabs{top:170px;bottom:auto;transform:none}.fd-tab{padding:11px 7px;font-size:.72rem;letter-spacing:.03em}}',
    '@media (prefers-reduced-motion:reduce){.fd-wave{animation:none}}'
  ].join('');
  document.head.appendChild(css);

  /* ---------- shell ---------- */
  function el(h) { var d = document.createElement('div'); d.innerHTML = h.trim(); return d.firstChild; }
  var launch = el('<div class="fd-launch"><button class="fd-btn" id="fdBtn" aria-label="Chat with Fred, our painting assistant" aria-expanded="false">' + fredSVG('fd-art') + '</button></div>');
  document.body.appendChild(launch);
  var tabs = el('<div class="fd-tabs">' +
    '<button class="fd-tab" data-mode="virtual">Virtual estimate</button>' +
    '<button class="fd-tab alt" data-mode="inperson">In-person estimate</button></div>');
  document.body.appendChild(tabs);

  var panel = null, state = {}, answers = {};

  function openPanel(mode) {
    if (!panel) {
      panel = el('<div class="fd-panel" role="dialog" aria-modal="false" aria-label="Fred, painting assistant">' +
        '<div class="fd-head"><span class="av">' + fredSVG('') + '</span><span><b>Fred</b><span>Denver Paint Contractors</span></span>' +
        '<a class="call" href="tel:' + TEL + '">Call ' + DISP + '</a><button class="x" aria-label="Close">X</button></div>' +
        '<div class="fd-bar"><i id="fdBar"></i></div>' +
        '<div class="fd-body" id="fdBody"></div><div class="fd-opts" id="fdOpts"></div>' +
        '<div class="fd-foot"><label class="sr" for="fdIn">Type a message</label><input id="fdIn" placeholder="Type a question or answer..." autocomplete="off"><button id="fdSend">Send</button></div></div>');
      document.body.appendChild(panel);
      panel.querySelector('.x').addEventListener('click', closePanel);
      panel.querySelector('#fdSend').addEventListener('click', submitInput);
      panel.querySelector('#fdIn').addEventListener('keydown', function (e) { if (e.key === 'Enter') submitInput(); });
    }
    panel.hidden = false;
    document.getElementById('fdBtn').setAttribute('aria-expanded', 'true');
    launch.style.display = 'none';
    if (mode === 'virtual') startVirtual();
    else if (mode === 'inperson') startInPerson();
    else if (!state.started) greet();
  }
  function closePanel() {
    if (panel) panel.hidden = true;
    launch.style.display = '';
    document.getElementById('fdBtn').setAttribute('aria-expanded', 'false');
  }
  document.getElementById('fdBtn').addEventListener('click', function () { openPanel(); });
  tabs.querySelectorAll('.fd-tab').forEach(function (t) { t.addEventListener('click', function () { openPanel(t.dataset.mode); }); });
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-estimate]');
    if (a) { e.preventDefault(); openPanel('virtual'); }
  });

  /* ---------- message helpers ---------- */
  function say(html, who) {
    var b = document.getElementById('fdBody');
    var m = el('<div class="fd-msg ' + (who || 'bot') + '">' + html + '</div>');
    b.appendChild(m); b.scrollTop = b.scrollHeight;
  }
  function opts(list) {
    var o = document.getElementById('fdOpts'); o.innerHTML = '';
    list.forEach(function (x) {
      var b = el('<button class="fd-opt' + (x.go ? ' go' : '') + '" type="button">' + x.label + '</button>');
      b.addEventListener('click', function () { say(x.label, 'me'); o.innerHTML = ''; x.fn(); });
      o.appendChild(b);
    });
  }
  function progress(p) { var b = document.getElementById('fdBar'); if (b) b.style.width = (p * 100) + '%'; }
  function wrapForm(html) {
    var o = document.getElementById('fdOpts'); o.innerHTML = '';
    var b = document.getElementById('fdBody');
    var f = el('<div class="fd-f">' + html + '</div>');
    b.appendChild(f); b.scrollTop = b.scrollHeight;
    return f;
  }

  /* ---------- knowledge base ---------- */
  var KB = [
    [/\b(cost|price|pricing|how much|expensive|charge)\b/i, 'Published 2026 Denver data puts exterior painting around <strong>$1.55 to $4.10 per square foot</strong> and interior around <strong>$1.50 to $3.50</strong>. Cabinets usually run <strong>$2,000 to $8,000</strong>. Want me to walk you through a virtual estimate for your project?'],
    [/\b(warranty|guarantee)\b/i, 'Every project carries a <strong>5-year workmanship warranty</strong> in writing, plus the manufacturer warranty on the Sherwin-Williams, PPG or Behr coating we use. Details are on our <a href="/warranty/">warranty page</a>.'],
    [/\b(insur|licen|bonded)\b/i, 'We are <strong>fully insured</strong> and bring proof of coverage to every estimate. Colorado does not issue a statewide painting license, so insurance and a written scope are what you should ask any painter to show.'],
    [/\b(discount|deal|offer|coupon|sale|special|25)\b/i, 'Right now it is <strong>25% off painting projects booked by October 31, 2026</strong>. The discount applies to labor; paint and materials are not included. See <a href="/discounts/">the offer</a>.'],
    [/\b(peel|flak|bubbl|chalk|fail|crack)\b/i, 'Peeling and chalking usually trace back to moisture, contamination or skipped prep. Our <a href="/blog/why-is-my-paint-peeling/">peeling diagnosis guide</a> walks through it, and we fix other companies\' failed work regularly. Send photos and I will get you a real answer.'],
    [/\b(cabinet|kitchen)\b/i, 'Cabinets get degreased, scuff sanded, bonding primed and sprayed with a cabinet-grade finish. Denver pricing typically lands <strong>$2,000 to $8,000</strong>. See <a href="/cabinet-painting/">cabinet painting</a>.'],
    [/\b(deck|fence|stain)\b/i, 'Decks and fences are cleaned, brightened, sanded where needed and sealed with products chosen for Colorado sun. More on <a href="/deck-staining/">deck and fence staining</a>.'],
    [/\b(interior|inside|room|wall|ceiling)\b/i, 'Interior work runs year-round: walls, ceilings, trim, doors and basements, with everything protected and daily cleanup. See <a href="/interior-painting/">interior painting</a>.'],
    [/\b(exterior|outside|siding|stucco|brick)\b/i, 'Exteriors get washed, scraped, sanded, caulked and spot-primed before any finish coat. See <a href="/exterior-painting/">exterior painting</a>.'],
    [/\b(commercial|office|retail|hoa|building|tenant)\b/i, 'We handle offices, retail, warehouses, HOAs and multi-unit properties with phased or after-hours scheduling. See <a href="/commercial-painting/">commercial painting</a>.'],
    [/\b(color|colour|swatch|sherwin|ppg|behr|paint brand)\b/i, 'We use Sherwin-Williams, PPG and Behr, picked by surface and exposure. Color consultation is free with your estimate, and our <a href="/color-selection/">color page</a> has real swatches.'],
    [/\b(when|time|season|winter|cold|weather|spring)\b/i, 'Exteriors run best from roughly mid-May through early October here, since Denver averages its last spring freeze near May 5 and first fall freeze near October 7. Interiors run all year. More in our <a href="/blog/best-time-to-paint-house-exterior-colorado/">timing guide</a>.'],
    [/\b(how long|how many days|timeline|schedule)\b/i, 'Most home exteriors take 3 to 5 working days, a few interior rooms take 1 to 2 days, and cabinets usually take 3 to 5 days because of cure time between coats.'],
    [/\b(area|serve|location|city|near me|where)\b/i, 'We cover Denver and the Front Range, including Littleton, Aurora, Castle Rock, Parker, Highlands Ranch, Centennial, Thornton, Englewood and Broomfield. See <a href="/service-areas/">service areas</a>.'],
    [/\b(experience|years|who are you|about)\b/i, 'Over 20 years of painting experience in Colorado, fully insured, with a 5-year workmanship warranty on every project. More on our <a href="/about/">about page</a>.'],
    [/\b(lead|1978|old house)\b/i, 'Homes built before 1978 may contain lead-based paint, and federal EPA rules require certified firms and lead-safe work practices when those surfaces are disturbed. Tell us the year built and we will plan for it.'],
    [/\b(voc|smell|odor|pet|kid|safe)\b/i, 'Most interior paints today are water-based and low in VOC, and Colorado tightened VOC limits for architectural coatings in 2020. Zero-VOC options are available if anyone in the home is sensitive.'],
    [/\b(hoa|approval|covenant)\b/i, 'Many Front Range communities require color approval before an exterior repaint. We match approved palettes, prepare samples and handle the submission.'],
    [/(cheaper|do better on price|better price|lower (the )?price|beat .*(price|quote|bid)|more of a discount|negotiat|price match)/i, 'Straight answer: the October discount is already built into the number you get, so there is no second price hiding behind it. What can move is scope or schedule. If budget is the constraint we can phase the work and start with the sun-facing elevations that are actually failing.'],
    [/\b(why (you|should)|what makes|different|better than|choose you)\b/i, 'Four things. Crews that specialize by type of work instead of doing a bit of everything. Over 20 years of Colorado experience, which mostly means knowing what fails here and why. A dedicated project manager so one person owns your project. And a 5-year workmanship warranty in writing, which only works because the preparation is real.'],
    [/\b(twice|again|redo|do it over|shortcut|short cut|cheap (job|bid|quote))\b/i, 'The expensive version is doing it twice. A cheap job skips washing, scraping and priming, looks fine for a season, then fails. The next painter has to remove the failed coating before starting, so you pay for the cheap job, the removal, and the correct job. That is exactly why our prep is itemized in writing.'],
    [/\b(prep|preparation|what.*included|scope|process|steps)\b/i, 'Exterior: protect the property, power wash, scrape and sand back to a sound edge, fill and caulk, prime what needs it, then the agreed coats on siding, trim, window and door casings, soffit and fascia. Then full cleanup and a walkthrough with you. Interiors follow the same logic indoors. All itemized on your estimate.'],
    [/\b(deposit|payment|financ|pay|invoice|down payment)\b/i, 'A deposit reserves your dates, commonly half, and the balance is due at completion after you walk the work with us. Terms are printed on the estimate, and the <a href="/terms/">terms page</a> spells out the rest.'],
    [/\b(crew|who does|subcontract|project manager)\b/i, 'Crews that specialize: exterior, interior, cabinets and commercial are different skill sets. You also get a dedicated project manager, so there is one person accountable rather than a rotating phone tree.'],
    [/\b(proposal|contract|paperwork|sign|agreement|in writing)\b/i, 'Everything goes in writing: surfaces, preparation steps, product line and sheen, coat counts, schedule, payment terms and the warranty. You can sign it electronically on your phone and a PDF copy lands in your inbox.'],
    [/\b(think about it|not ready|hold off|get back to you)\b/i, 'Completely fair. Usually one specific thing is unresolved: price, timing, the crew, or whether the scope is right. Which one is it? I would rather answer it now than leave you guessing.'],
    [/\b(phone|call|contact|talk|human)\b/i, 'Call us any day at <a href="tel:' + TEL + '">' + DISP + '</a>, or I can take your details right here and have someone call you.']
  ];

  function answerText(t) {
    for (var i = 0; i < KB.length; i++) if (KB[i][0].test(t)) return KB[i][1];
    return null;
  }
  function submitInput() {
    var inp = document.getElementById('fdIn'), t = inp.value.trim();
    if (!t) return;
    inp.value = '';
    say(t, 'me');
    log('Visitor: ' + t);
    if (state.capture) { state.capture(t); return; }
    var a = answerText(t);
    if (a) { say(a); log('Fred: answered'); afterAnswer(); }
    else {
      say('Good question, and I would rather give you a real answer than a guess. The fastest route is a free estimate, or call <a href="tel:' + TEL + '">' + DISP + '</a>.');
      afterAnswer();
    }
  }
  function afterAnswer() {
    opts([
      { label: 'Walk me through a virtual estimate', go: true, fn: startVirtual },
      { label: 'Request an in-person visit', fn: startInPerson },
      { label: 'I have another question', fn: function () { say('Go ahead, type it below.'); } }
    ]);
  }

  var transcript = [];
  function log(s) { transcript.push(s); }

  function greet() {
    state.started = true;
    say('Hi, I am <strong>Fred</strong> with Denver Paint Contractors. I can price your project two ways: a <strong>virtual estimate</strong> right here in about two minutes, or an <strong>in-person visit</strong> at your home or business. Which would you like?');
    opts([
      { label: 'Virtual estimate', go: true, fn: startVirtual },
      { label: 'In-person estimate', fn: startInPerson },
      { label: 'Just a question first', fn: function () { say('Ask away. Cost, timing, warranty, colors, prep, anything.'); } }
    ]);
  }

  /* ---------- virtual estimator ---------- */
  var V = {};
  function startVirtual() {
    V = { type: '', coats: 2, notes: [] };
    answers = {};
    say('Great. A few quick questions and I will give you a real published-range ballpark, then a written estimate follows by phone. <strong>What are we painting?</strong>');
    progress(.08);
    opts([
      { label: 'Interior rooms', fn: function () { V.type = 'interior'; vInteriorScope(); } },
      { label: 'House exterior', fn: function () { V.type = 'exterior'; vExtSize(); } },
      { label: 'Kitchen cabinets', fn: function () { V.type = 'cabinets'; vCabCount(); } },
      { label: 'Deck or fence', fn: function () { V.type = 'deck'; vDeck(); } }
    ]);
  }

  /* --- interior path --- */
  function vInteriorScope() {
    answers.project = 'Interior painting';
    say('<strong>Walls only, or walls plus ceilings?</strong> Ceilings add real time, so this matters for the number.');
    progress(.18);
    opts([
      { label: 'Walls only', fn: function () { V.ceil = false; answers.scope = 'Walls only'; vTrim(); } },
      { label: 'Walls and ceilings', fn: function () { V.ceil = true; answers.scope = 'Walls and ceilings'; vTrim(); } },
      { label: 'Ceilings only', fn: function () { V.ceil = true; V.ceilOnly = true; answers.scope = 'Ceilings only'; vTrim(); } }
    ]);
  }
  function vTrim() {
    say('<strong>How much trim, baseboard and door casing?</strong> Trim is detail work and gets priced by linear foot.');
    progress(.28);
    opts([
      { label: 'No trim', fn: function () { V.trimLF = 0; answers.trim = 'None'; vColorNow(); } },
      { label: 'Light (about 100 lf)', fn: function () { V.trimLF = 100; answers.trim = 'Light, about 100 linear feet'; vColorNow(); } },
      { label: 'Average (200-300 lf)', fn: function () { V.trimLF = 250; answers.trim = 'Average, 200-300 linear feet'; vColorNow(); } },
      { label: 'Heavy (400+ lf)', fn: function () { V.trimLF = 450; answers.trim = 'Heavy, 400+ linear feet'; vColorNow(); } }
    ]);
  }
  function vColorNow() {
    say('<strong>What color is it now?</strong>');
    progress(.36);
    opts([
      { label: 'White or off-white', fn: function () { V.from = 'light'; answers.current_color = 'White or off-white'; vColorNew(); } },
      { label: 'Light neutral (beige, gray)', fn: function () { V.from = 'light'; answers.current_color = 'Light neutral'; vColorNew(); } },
      { label: 'Medium tone', fn: function () { V.from = 'medium'; answers.current_color = 'Medium tone'; vColorNew(); } },
      { label: 'Dark or bold (red, navy, brown)', fn: function () { V.from = 'dark'; answers.current_color = 'Dark or bold'; vColorNew(); } }
    ]);
  }
  function vColorNew() {
    say('<strong>What color do you want?</strong>');
    progress(.44);
    opts([
      { label: 'White or off-white', fn: function () { V.to = 'light'; answers.new_color = 'White or off-white'; vCoats(); } },
      { label: 'Light neutral', fn: function () { V.to = 'light'; answers.new_color = 'Light neutral'; vCoats(); } },
      { label: 'Medium tone', fn: function () { V.to = 'medium'; answers.new_color = 'Medium tone'; vCoats(); } },
      { label: 'Dark or bold', fn: function () { V.to = 'dark'; answers.new_color = 'Dark or bold'; vCoats(); } }
    ]);
  }
  function vCoats() {
    var big = (V.from === 'dark' && V.to === 'light') || (V.from === 'light' && V.to === 'dark') || V.to === 'dark' || (V.from === 'dark');
    V.coats = big ? 2 : 2;
    V.extraCoat = big;
    if (big) {
      say('That color change needs <strong>two full coats, sometimes a tinted primer plus two</strong>. Going dark to light, or into a deep saturated color like red or navy, almost never covers in one pass. I have built that into the number.');
      V.notes.push('Color change requires two coats, possibly a tinted primer');
      answers.coats = 'Two coats (color change), tinted primer possible';
    } else {
      say('Similar tones, so <strong>two coats</strong> is standard and we will not need a tinted primer under it.');
      answers.coats = 'Two coats, standard';
    }
    progress(.52);
    vSheen();
  }
  function vSheen() {
    say('<strong>What sheen do you want on the walls?</strong> Flat hides flaws best, satin cleans best.');
    opts([
      { label: 'Flat or matte', fn: function () { V.sheen = 1; answers.sheen = 'Flat or matte'; vPrep(); } },
      { label: 'Eggshell', fn: function () { V.sheen = 1.02; answers.sheen = 'Eggshell'; vPrep(); } },
      { label: 'Satin', fn: function () { V.sheen = 1.05; answers.sheen = 'Satin'; vPrep(); } },
      { label: 'Semi-gloss', fn: function () { V.sheen = 1.08; answers.sheen = 'Semi-gloss'; vPrep(); } }
    ]);
  }
  function vPrep() {
    say('<strong>How much patching do the walls need?</strong> Be honest, it changes the prep hours more than anything else.');
    progress(.62);
    opts([
      { label: 'Light: a few nail holes', fn: function () { V.prep = 1; answers.prep = 'Light: a few nail holes'; vSqft(); } },
      { label: 'Medium: lots of holes, some dings', fn: function () { V.prep = 1.1; answers.prep = 'Medium: many holes and dings'; vSqft(); } },
      { label: 'Heavy: cracks, texture repair', fn: function () { V.prep = 1.22; answers.prep = 'Heavy: cracks and texture repair'; V.inperson = true; vSqft(); } },
      { label: 'Peeling or water damage', fn: function () { V.prep = 1.35; answers.prep = 'Peeling or water damage present'; V.inperson = true; vSqft(); } }
    ]);
  }
  function vSqft() {
    say('<strong>Roughly how much space?</strong> Rooms are fine, I will convert it.');
    progress(.72);
    opts([
      { label: '1 room', fn: function () { V.sq = 350; answers.size = '1 room'; vResult(); } },
      { label: '2-3 rooms', fn: function () { V.sq = 850; answers.size = '2-3 rooms'; vResult(); } },
      { label: '4-6 rooms', fn: function () { V.sq = 1600; answers.size = '4-6 rooms'; vResult(); } },
      { label: 'Whole house', fn: function () { V.sq = 2400; answers.size = 'Whole house interior'; vResult(); } }
    ]);
  }

  /* --- exterior path --- */
  function vExtSize() {
    answers.project = 'Exterior house painting';
    say('<strong>What size and shape is the house?</strong>');
    progress(.2);
    opts([
      { label: 'Single story ranch', fn: function () { V.sq = 1600; V.story = 1; answers.size = 'Single story ranch'; vExtSub(); } },
      { label: 'Two story', fn: function () { V.sq = 2600; V.story = 1.12; answers.size = 'Two story'; vExtSub(); } },
      { label: 'Large two story or walkout', fn: function () { V.sq = 3400; V.story = 1.2; answers.size = 'Large two story or walkout'; vExtSub(); } },
      { label: 'Townhome or condo', fn: function () { V.sq = 1100; V.story = 1.05; answers.size = 'Townhome or condo'; vExtSub(); } }
    ]);
  }
  function vExtSub() {
    say('<strong>What is the siding?</strong>');
    progress(.3);
    opts([
      { label: 'Wood or hardboard', fn: function () { V.sub = 1.08; answers.substrate = 'Wood or hardboard'; vExtCond(); } },
      { label: 'Fiber cement', fn: function () { V.sub = 1; answers.substrate = 'Fiber cement'; vExtCond(); } },
      { label: 'Stucco', fn: function () { V.sub = 1.05; answers.substrate = 'Stucco'; vExtCond(); } },
      { label: 'Vinyl or aluminum', fn: function () { V.sub = .98; answers.substrate = 'Vinyl or aluminum'; vExtCond(); } }
    ]);
  }
  function vExtCond() {
    say('<strong>How much scraping and prep does it need?</strong> Walk up and rub a sunny wall, then look at the trim.');
    progress(.42);
    opts([
      { label: 'Faded but sound', fn: function () { V.prep = 1; answers.prep = 'Faded but sound'; vExtColor(); } },
      { label: 'Chalky, some cracked caulk', fn: function () { V.prep = 1.14; answers.prep = 'Chalky with cracked caulk'; vExtColor(); } },
      { label: 'Peeling in spots, bare wood', fn: function () { V.prep = 1.3; answers.prep = 'Peeling in spots, bare wood showing'; V.inperson = true; vExtColor(); } },
      { label: 'Peeling badly everywhere', fn: function () { V.prep = 1.45; answers.prep = 'Peeling badly across the house'; V.inperson = true; vExtColor(); } }
    ]);
  }
  function vExtColor() {
    say('<strong>Staying close to the current color, or changing it?</strong>');
    progress(.56);
    opts([
      { label: 'Similar color', fn: function () { V.extraCoat = false; answers.color_change = 'Similar color'; vExtTrim(); } },
      { label: 'Noticeably different', fn: function () { V.extraCoat = true; answers.color_change = 'Noticeably different color'; vExtTrim(); } },
      { label: 'Going much darker', fn: function () { V.extraCoat = true; V.notes.push('Darker exterior color; on vinyl this must come from a vinyl-safe collection'); answers.color_change = 'Going much darker'; vExtTrim(); } },
      { label: 'Dark to light', fn: function () { V.extraCoat = true; answers.color_change = 'Dark to light, two coats required'; vExtTrim(); } }
    ]);
  }
  function vExtTrim() {
    say('<strong>How much trim detail?</strong> Older homes carry far more trim per wall than newer builds.');
    progress(.68);
    opts([
      { label: 'Minimal trim', fn: function () { V.sheen = .97; answers.trim = 'Minimal trim'; vResult(); } },
      { label: 'Average trim and shutters', fn: function () { V.sheen = 1; answers.trim = 'Average trim and shutters'; vResult(); } },
      { label: 'Heavy trim, multiple colors', fn: function () { V.sheen = 1.12; answers.trim = 'Heavy trim, multiple colors'; vResult(); } }
    ]);
  }

  /* --- cabinets --- */
  function vCabCount() {
    answers.project = 'Cabinet painting';
    say('<strong>Roughly how many cabinet doors and drawer fronts?</strong> Count every door and drawer, including the pantry.');
    progress(.25);
    opts([
      { label: 'Small kitchen (10-18)', fn: function () { V.doors = 15; answers.size = 'Small kitchen, 10-18 pieces'; vCabBoxes(); } },
      { label: 'Average kitchen (20-35)', fn: function () { V.doors = 28; answers.size = 'Average kitchen, 20-35 pieces'; vCabBoxes(); } },
      { label: 'Large kitchen (36-50)', fn: function () { V.doors = 43; answers.size = 'Large kitchen, 36-50 pieces'; vCabBoxes(); } },
      { label: 'Very large or multiple rooms', fn: function () { V.doors = 60; answers.size = 'Very large or multiple rooms'; vCabBoxes(); } }
    ]);
  }
  function vCabBoxes() {
    say('<strong>Boxes and face frames too, or just the doors and drawer fronts?</strong>');
    progress(.45);
    opts([
      { label: 'Doors and fronts only', fn: function () { V.boxes = 1; answers.scope = 'Doors and drawer fronts only'; vCabFinish(); } },
      { label: 'Doors, fronts and boxes', fn: function () { V.boxes = 1.3; answers.scope = 'Doors, fronts and boxes'; vCabFinish(); } },
      { label: 'Everything including interiors', fn: function () { V.boxes = 1.5; answers.scope = 'Everything including interiors'; vCabFinish(); } }
    ]);
  }
  function vCabFinish() {
    say('<strong>What is on them now?</strong>');
    progress(.65);
    opts([
      { label: 'Stained or sealed wood', fn: function () { V.prep = 1.05; answers.prep = 'Stained or sealed wood'; vCabColor(); } },
      { label: 'Factory painted, good shape', fn: function () { V.prep = 1; answers.prep = 'Factory painted, good shape'; vCabColor(); } },
      { label: 'Previously painted, chipping', fn: function () { V.prep = 1.25; answers.prep = 'Previously painted and chipping'; V.inperson = true; vCabColor(); } },
      { label: 'Laminate or thermofoil', fn: function () { V.prep = 1.18; answers.prep = 'Laminate or thermofoil'; V.inperson = true; vCabColor(); } }
    ]);
  }
  function vCabColor() {
    say('<strong>What color are you going to?</strong>');
    opts([
      { label: 'White or off-white', fn: function () { V.extraCoat = true; V.sheen = 1; answers.new_color = 'White or off-white'; vResult(); } },
      { label: 'Greige or light gray', fn: function () { V.extraCoat = false; V.sheen = 1; answers.new_color = 'Greige or light gray'; vResult(); } },
      { label: 'Deep green, navy or black', fn: function () { V.extraCoat = true; V.sheen = 1.04; answers.new_color = 'Deep green, navy or black'; vResult(); } },
      { label: 'Two-tone, different upper and lower', fn: function () { V.extraCoat = true; V.sheen = 1.08; answers.new_color = 'Two-tone'; vResult(); } }
    ]);
  }

  /* --- deck --- */
  function vDeck() {
    answers.project = 'Deck or fence staining';
    say('<strong>What are we sealing?</strong>');
    progress(.3);
    opts([
      { label: 'Deck under 300 sq ft', fn: function () { V.sq = 260; answers.size = 'Deck under 300 sq ft'; vDeckCond(); } },
      { label: 'Deck 300-600 sq ft', fn: function () { V.sq = 450; answers.size = 'Deck 300-600 sq ft'; vDeckCond(); } },
      { label: 'Large deck with railings', fn: function () { V.sq = 700; V.sheen = 1.15; answers.size = 'Large deck with railings'; vDeckCond(); } },
      { label: 'Fence, or deck and fence', fn: function () { V.sq = 800; V.sheen = 1.05; answers.size = 'Fence, or deck plus fence'; vDeckCond(); } }
    ]);
  }
  function vDeckCond() {
    say('<strong>What shape is the wood in?</strong>');
    progress(.6);
    opts([
      { label: 'Maintained, just needs a refresh', fn: function () { V.prep = 1; answers.prep = 'Maintained'; vResult(); } },
      { label: 'Gray and weathered', fn: function () { V.prep = 1.18; answers.prep = 'Gray and weathered'; vResult(); } },
      { label: 'Old stain peeling off', fn: function () { V.prep = 1.4; answers.prep = 'Old stain peeling, stripping required'; V.inperson = true; vResult(); } },
      { label: 'Some boards look bad', fn: function () { V.prep = 1.3; answers.prep = 'Some boards may need replacement'; V.inperson = true; vResult(); } }
    ]);
  }

  /* --- result --- */
  function vResult() {
    progress(.85);
    var lo, hi, lines = [];
    var prep = V.prep || 1, sheen = V.sheen || 1, extra = V.extraCoat ? 1.12 : 1;
    if (V.type === 'interior') {
      var base = V.ceilOnly ? .9 : 1, ceil = V.ceil && !V.ceilOnly ? 1.22 : 1;
      lo = V.sq * 1.50 * base * ceil; hi = V.sq * 3.50 * base * ceil;
      lo += V.trimLF * 1.75; hi += V.trimLF * 3.50;
      lines.push(['Area painted', Math.round(V.sq) + ' sq ft']);
      if (V.trimLF) lines.push(['Trim', V.trimLF + ' linear feet']);
    } else if (V.type === 'exterior') {
      lo = V.sq * 1.55 * (V.story || 1) * (V.sub || 1); hi = V.sq * 4.10 * (V.story || 1) * (V.sub || 1);
      lines.push(['Paintable surface', 'about ' + Math.round(V.sq) + ' sq ft']);
    } else if (V.type === 'cabinets') {
      lo = (1500 + V.doors * 70) * (V.boxes || 1); hi = (2400 + V.doors * 135) * (V.boxes || 1);
      lines.push(['Doors and drawer fronts', 'about ' + V.doors]);
    } else {
      lo = V.sq * 2.10; hi = V.sq * 4.60;
      lines.push(['Wood surface', 'about ' + Math.round(V.sq) + ' sq ft']);
    }
    lo = lo * prep * sheen * extra; hi = hi * prep * sheen * extra;
    var loD = Math.round(lo * .75 / 50) * 50, hiD = Math.round(hi * .75 / 50) * 50;
    lo = Math.round(lo / 50) * 50; hi = Math.round(hi / 50) * 50;
    answers.ballpark = '$' + lo.toLocaleString() + ' - $' + hi.toLocaleString() + ' before discount';
    answers.ballpark_after_discount = '$' + loD.toLocaleString() + ' - $' + hiD.toLocaleString() + ' with 25% off labor';
    var rows = lines.map(function (r) { return '<span class="fd-line"><span>' + r[0] + '</span><span>' + r[1] + '</span></span>'; }).join('');
    say('<div class="fd-quote"><b>$' + lo.toLocaleString() + ' - $' + hi.toLocaleString() + '</b>' + rows +
      '<span>Published 2026 Denver market range for this scope. With <strong>25% off labor</strong> on projects booked by October 31, 2026, most of this scope lands around <strong>$' + loD.toLocaleString() + ' - $' + hiD.toLocaleString() + '</strong>. Paint and materials are not included in the discount.</span></div>');
    if (V.notes.length) say('Worth noting: ' + V.notes.join('. ') + '.');
    if (V.inperson) {
      say('Based on what you described, <strong>this one is worth seeing in person</strong>. Peeling, water damage, failing finishes and questionable boards all change the prep plan, and I would rather be accurate than optimistic. The visit is free either way.');
      answers.recommendation = 'In-person visit recommended due to condition';
    } else {
      say('That is a solid working range. A written estimate confirms it, and we can do that from photos or in person, whichever you prefer.');
      answers.recommendation = 'Photos sufficient, in-person optional';
    }
    setTimeout(function () {
      say('One honest question before I take your details: if a written estimate comes back at that number, with the preparation spelled out and your dates confirmed, is that something you would be ready to move forward on?');
      opts([
        { label: 'Yes, if the details are right', go: true, fn: function () { answers.intent = 'Ready to move forward if details fit'; collect(V.inperson ? 'inperson' : 'virtual'); } },
        { label: 'Maybe, I want to compare', fn: function () { answers.intent = 'Comparing options'; say('Smart. When you compare, look at four lines: the preparation, the exact product and sheen, the number of coats, and the warranty. A lower number is almost always one of those four being smaller.'); collect(V.inperson ? 'inperson' : 'virtual'); } },
        { label: 'Just gathering information', fn: function () { answers.intent = 'Information gathering'; say('No pressure. I will still get you the written scope so you have a real benchmark whenever you are ready.'); collect(V.inperson ? 'inperson' : 'virtual'); } }
      ]);
    }, 700);
  }

  /* ---------- lead capture ---------- */
  function collect(kind) {
    progress(.95);
    say(kind === 'inperson'
      ? 'Let me set up your free in-person visit. Where should we come, and when works?'
      : 'Last step. Where do I send the written estimate, and can we add photos?');
    var f = wrapForm(
      '<label for="fdNm">Your name</label><input id="fdNm" autocomplete="name">' +
      '<div class="row"><div><label for="fdPh">Phone</label><input id="fdPh" type="tel" inputmode="tel" autocomplete="tel"></div>' +
      '<div><label for="fdZp">ZIP code</label><input id="fdZp" inputmode="numeric" autocomplete="postal-code" maxlength="10"></div></div>' +
      '<label for="fdEm">Email</label><input id="fdEm" type="email" autocomplete="email">' +
      (kind === 'inperson' ? '<label for="fdAd">Property address</label><input id="fdAd" autocomplete="street-address">' +
        '<label for="fdWh">Best time for a visit</label><select id="fdWh"><option>Weekday mornings</option><option>Weekday afternoons</option><option>Evenings</option><option>Saturday</option><option>Any time, call me</option></select>' : '') +
      '<label for="fdPhotos">Photos of the project (up to 4)</label><input id="fdPhotos" type="file" accept="image/*" multiple>' +
      '<label for="fdMs">Anything else we should know?</label><textarea id="fdMs" rows="2"></textarea>' +
      '<button class="sub" type="button" id="fdGo">' + (kind === 'inperson' ? 'Book my free visit' : 'Send my estimate request') + '</button>' +
      '<p class="fd-note">We use your details only to prepare your estimate. Prefer to talk? Call <a href="tel:' + TEL + '">' + DISP + '</a>.</p>');
    f.querySelector('#fdGo').addEventListener('click', function () { sendLead(kind, f, this); });
  }

  function sendLead(kind, f, btn) {
    var nm = f.querySelector('#fdNm').value.trim(), ph = f.querySelector('#fdPh').value.trim();
    if (!nm || ph.replace(/\D/g, '').length < 10) {
      say('I need a name and a 10-digit phone number so someone can actually reach you.');
      return;
    }
    btn.disabled = true; btn.textContent = 'Sending...';
    var fd = new FormData();
    fd.append('source_site', 'denverpaintcontractors.com Fred ' + (kind === 'inperson' ? 'in-person request' : 'virtual estimate'));
    fd.append('user_name', nm); fd.append('user_phone', ph);
    fd.append('user_email', f.querySelector('#fdEm').value.trim());
    fd.append('user_zip', f.querySelector('#fdZp').value.trim());
    if (f.querySelector('#fdAd')) fd.append('property_address', f.querySelector('#fdAd').value.trim());
    if (f.querySelector('#fdWh')) fd.append('visit_time', f.querySelector('#fdWh').value);
    fd.append('user_message', f.querySelector('#fdMs').value.trim());
    fd.append('estimate_type', kind === 'inperson' ? 'In-person visit requested' : 'Virtual estimate');
    Object.keys(answers).forEach(function (k) { fd.append(k, answers[k]); });
    fd.append('chat_transcript', transcript.join('\n') || 'Estimator only');
    var filesIn = f.querySelector('#fdPhotos');
    var photos = (window.DPC && DPC.photos) ? DPC.photos(filesIn) : Promise.resolve([]);
    photos.then(function (pics) {
      pics.forEach(function (p, i) { fd.append('photo_' + (i + 1), p); });
      return (window.DPC && DPC.send) ? DPC.send(fd, 'Fred ' + (kind === 'inperson' ? 'IN-PERSON' : 'VIRTUAL') + ' estimate: Denver Paint Contractors') : Promise.resolve('fail');
    }).then(function (state2) {
      progress(1);
      if (state2 === 'ok') {
        f.remove();
        say('Got it, ' + nm.split(' ')[0] + '. Your request is in and someone will call you to confirm the details. If you want to talk sooner, call <a href="tel:' + TEL + '">' + DISP + '</a>.');
        opts([{ label: 'Thanks, Fred', fn: closePanel }]);
      } else if (state2 === 'blocked' || state2 === 'fast') {
        btn.disabled = false; btn.textContent = 'Send my estimate request';
        say('Give that one more second and press send again.');
      } else {
        btn.disabled = false; btn.textContent = 'Try again';
        say('I could not confirm that went through. Please call <a href="tel:' + TEL + '">' + DISP + '</a> so your request does not get lost.');
      }
    });
  }

  /* ---------- in-person path ---------- */
  function startInPerson() {
    answers = {};
    V = { notes: [] };
    say('Happy to come out. In-person visits are free, at your home or business, and they are the right call when there is peeling, water damage or anything that needs a closer look. <strong>What is the project?</strong>');
    progress(.3);
    ['Interior painting', 'Exterior house painting', 'Cabinet painting', 'Deck or fence staining', 'Commercial property', 'Fixing another painter\'s work'].forEach(function () { });
    opts([
      { label: 'Interior', fn: function () { answers.project = 'Interior painting'; ipWhen(); } },
      { label: 'Exterior', fn: function () { answers.project = 'Exterior house painting'; ipWhen(); } },
      { label: 'Cabinets', fn: function () { answers.project = 'Cabinet painting'; ipWhen(); } },
      { label: 'Deck or fence', fn: function () { answers.project = 'Deck or fence staining'; ipWhen(); } },
      { label: 'Commercial', fn: function () { answers.project = 'Commercial property'; ipWhen(); } },
      { label: 'Fixing bad paint work', fn: function () { answers.project = 'Repair of another painter\'s work'; ipWhen(); } }
    ]);
  }
  function ipWhen() {
    say('<strong>When would you like the work done?</strong>');
    progress(.6);
    opts([
      { label: 'As soon as possible', fn: function () { answers.timeline = 'As soon as possible'; collect('inperson'); } },
      { label: 'Within a month', fn: function () { answers.timeline = 'Within a month'; collect('inperson'); } },
      { label: '1 to 3 months', fn: function () { answers.timeline = '1 to 3 months'; collect('inperson'); } },
      { label: 'Planning and pricing', fn: function () { answers.timeline = 'Planning and pricing'; collect('inperson'); } }
    ]);
  }

  /* ---------- tip bubble ---------- */
  var dismissed = false;
  try { dismissed = sessionStorage.getItem('fdTipX') === '1'; } catch (e) { }
  if (!dismissed) {
    setTimeout(function () {
      if (panel && !panel.hidden) return;
      var tip = el('<div class="fd-tip" role="status">I can price your project right now, virtually or in person. Want to try?<button type="button" aria-label="Dismiss">&times;</button></div>');
      launch.insertBefore(tip, launch.firstChild);
      tip.addEventListener('click', function (e) {
        if (e.target.tagName === 'BUTTON') { tip.remove(); try { sessionStorage.setItem('fdTipX', '1'); } catch (x) { } }
        else openPanel();
      });
    }, 1400);
  }

  /* header phone wrap guard */
  var s2 = document.createElement('style');
  s2.textContent = '.head-call b{white-space:nowrap}@media (max-width:760px){.head-call b{font-size:1.08rem!important;letter-spacing:-.02em}}@media (max-width:400px){.head-call b{font-size:1rem!important}.brand img{height:58px!important}}';
  document.head.appendChild(s2);
})();
