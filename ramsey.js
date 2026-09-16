(function(){
if(window.__ramsey)return;window.__ramsey=1;
var PH='+17209124676',PD='720-912-4676';

var CSS='\
.rmy-launch{position:fixed;right:18px;bottom:18px;z-index:980;display:flex;flex-direction:column;align-items:flex-end;gap:4px;font-family:Archivo,Arial,sans-serif}\
.rmy-btn{width:190px;height:162px;border-radius:0;background:transparent;border:0;cursor:pointer;padding:0;overflow:visible;transition:transform .2s;filter:drop-shadow(0 8px 16px rgba(19,42,25,.35))}\
.rmy-btn:hover{transform:scale(1.06)}\
.rmy-btn svg{width:100%;height:100%;display:block}\
.rmy-tip{background:#fff;color:#132a19;border:2px solid #1f3d26;border-radius:14px 14px 4px 14px;padding:10px 32px 10px 14px;font-weight:700;font-size:.95rem;max-width:250px;box-shadow:0 8px 24px rgba(0,0,0,.15);position:relative;margin:0 30px 0 0;line-height:1.3;cursor:pointer}\
.rmy-tip button{position:absolute;top:4px;right:6px;border:0;background:none;font-size:1.1rem;cursor:pointer;color:#4b564c}\
.rmy-wave{transform-origin:274px 402px;animation:rmyw 1.6s ease-in-out infinite alternate}\
@keyframes rmyw{from{transform:rotate(-10deg)}to{transform:rotate(12deg)}}\
.rmy-panel{position:fixed;right:18px;bottom:190px;z-index:990;width:390px;max-width:calc(100vw - 24px);height:600px;max-height:calc(100vh - 220px);background:#fff;border-radius:16px;box-shadow:0 30px 80px rgba(8,20,10,.4);display:flex;flex-direction:column;overflow:hidden;font-family:Archivo,Arial,sans-serif;border:2px solid #1f3d26}\
.rmy-head{background:#1f3d26;color:#fff;display:flex;align-items:center;gap:10px;padding:10px 12px}\
.rmy-head .av{width:52px;height:52px;border-radius:50%;background:#fff;overflow:hidden;flex-shrink:0}\
.rmy-head .av svg{width:100%;height:100%}\
.rmy-head b{display:block;font-size:1.05rem}\
.rmy-head span{font-size:.8rem;color:#e8d2a4}\
.rmy-head .x{margin-left:auto;background:none;border:2px solid rgba(255,255,255,.4);color:#fff;border-radius:6px;padding:4px 10px;cursor:pointer;font-weight:800}\
.rmy-head a{color:#132a19;background:#d9a441;text-decoration:none;font-weight:800;font-size:.8rem;padding:6px 9px;border-radius:6px;white-space:nowrap}\
.rmy-log{flex:1;overflow-y:auto;padding:14px;background:#f3f5f1;display:flex;flex-direction:column;gap:10px}\
.rmy-m{max-width:88%;padding:10px 13px;border-radius:14px;font-size:.96rem;line-height:1.45}\
.rmy-m.bot{background:#fff;color:#1b231c;border:1px solid #d7ddd4;border-bottom-left-radius:4px;align-self:flex-start}\
.rmy-m.me{background:#1f3d26;color:#fff;border-bottom-right-radius:4px;align-self:flex-end}\
.rmy-m a{color:#a3452a;font-weight:700}\
.rmy-typing{align-self:flex-start;background:#fff;border:1px solid #d7ddd4;border-radius:14px;padding:10px 14px;color:#4b564c;font-size:.9rem}\
.rmy-chips{display:flex;flex-wrap:wrap;gap:6px;padding:10px 12px 0;background:#fff;border-top:1px solid #d7ddd4}\
.rmy-chips button{border:2px solid #1f3d26;background:#fff;color:#1f3d26;border-radius:18px;padding:7px 12px;font-weight:700;font-size:.88rem;cursor:pointer;font-family:inherit}\
.rmy-chips button:hover{background:#1f3d26;color:#fff}\
.rmy-in{display:flex;gap:8px;padding:10px 12px 12px;background:#fff}\
.rmy-in input{flex:1;border:2px solid #d7ddd4;border-radius:10px;padding:11px;font-size:1rem;font-family:inherit;min-width:0}\
.rmy-in input:focus{outline:none;border-color:#1f3d26}\
.rmy-in button{background:#d9a441;color:#132a19;border:0;border-radius:10px;padding:0 16px;font-weight:900;cursor:pointer;font-family:inherit}\
.rmy-modal{position:fixed;inset:0;z-index:1000;background:rgba(10,22,13,.72);display:flex;align-items:center;justify-content:center;padding:16px}\
.rmy-dialog{background:#fff;border-radius:14px;width:560px;max-width:100%;max-height:calc(100vh - 32px);overflow-y:auto;font-family:Archivo,Arial,sans-serif;box-shadow:0 30px 80px rgba(0,0,0,.45)}\
.rmy-dtop{background:#1f3d26;color:#fff;padding:18px 20px;display:flex;gap:14px;align-items:center;position:relative}\
.rmy-dtop .av{width:70px;height:70px;border-radius:50%;background:#fff;overflow:hidden;flex-shrink:0}\
.rmy-dtop h2{color:#fff;font-size:1.35rem;margin:0;line-height:1.15}\
.rmy-dtop p{color:#e8d2a4;font-size:.9rem;margin-top:3px}\
.rmy-dtop .x{position:absolute;top:10px;right:10px;background:none;border:2px solid rgba(255,255,255,.4);color:#fff;border-radius:6px;padding:3px 9px;cursor:pointer;font-weight:800}\
.rmy-dbody{padding:18px 20px 20px}\
.rmy-seg{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}\
@media (max-width:640px){.rmy-launch{bottom:74px;right:4px}.rmy-btn{width:118px;height:101px}.rmy-tip{margin:0 14px 0 0;font-size:.84rem;max-width:210px;padding:8px 28px 8px 11px}.rmy-panel{right:6px;left:6px;width:auto;bottom:180px;height:auto;top:70px;max-height:none}.rmy-seg{grid-template-columns:1fr}}\
@media (prefers-reduced-motion:reduce){.rmy-wave{animation:none}}';
var st=document.createElement('style');st.textContent=CSS;document.head.appendChild(st);

var BODY='<path d="M232 580 C232 460 280 392 340 392 C400 392 448 460 448 580 Z" fill="#fdfdf8" stroke="#1b231c" stroke-width="3"/><path d="M286 488 C292 482 300 490 296 496 C292 502 282 496 286 488 Z" fill="#ff4d6d"/><path d="M404 520 C409 515 416 522 412 527 C408 532 400 526 404 520 Z" fill="#3a86ff"/><circle cx="340" cy="490" r="36" fill="#1f3d26"/><path d="M321 482 C304 469 306 448 323 450 C334 452 334 467 325 473" fill="none" stroke="#d9a441" stroke-width="5" stroke-linecap="round"/><path d="M359 482 C376 469 374 448 357 450 C346 452 346 467 355 473" fill="none" stroke="#d9a441" stroke-width="5" stroke-linecap="round"/><path d="M329 477 L351 477 L347 507 L333 507 Z" fill="#f3e6cc"/><circle cx="336" cy="488" r="2" fill="#1b231c"/><circle cx="344" cy="488" r="2" fill="#1b231c"/>';
var WAVE='<g class="rmy-wave"><path d="M262 416 C244 386 226 360 212 338 L238 322 C252 344 270 370 288 400 Z" fill="#fdfdf8" stroke="#1b231c" stroke-width="3"/><path d="M216 342 C208 330 204 320 202 310 L224 302 C226 312 230 322 234 330 Z" fill="#f2c29b" stroke="#1b231c" stroke-width="3"/><rect x="180" y="238" width="12" height="36" rx="6" fill="#f2c29b" stroke="#1b231c" stroke-width="2.5" transform="rotate(-14 186 272)"/><rect x="194" y="230" width="12" height="42" rx="6" fill="#f2c29b" stroke="#1b231c" stroke-width="2.5" transform="rotate(-4 200 272)"/><rect x="208" y="232" width="12" height="40" rx="6" fill="#f2c29b" stroke="#1b231c" stroke-width="2.5" transform="rotate(6 214 272)"/><rect x="221" y="242" width="11" height="32" rx="5.5" fill="#f2c29b" stroke="#1b231c" stroke-width="2.5" transform="rotate(16 226 274)"/><rect x="160" y="276" width="12" height="30" rx="6" fill="#f2c29b" stroke="#1b231c" stroke-width="2.5" transform="rotate(-58 172 300)"/><path d="M180 270 C178 290 184 308 204 312 C224 314 234 298 232 276 C230 266 182 262 180 270 Z" fill="#f2c29b" stroke="#1b231c" stroke-width="2.5"/><path d="M184 272 L230 272" stroke="#f2c29b" stroke-width="5"/></g>';
var HEAD='<path d="M418 416 C432 440 444 462 452 482 L426 494 C418 474 406 452 394 430 Z" fill="#fdfdf8" stroke="#1b231c" stroke-width="3"/><rect x="318" y="366" width="44" height="32" fill="#e9b48a"/><ellipse cx="340" cy="296" rx="78" ry="82" fill="#f2c29b" stroke="#1b231c" stroke-width="3"/><ellipse cx="262" cy="306" rx="12" ry="18" fill="#f2c29b" stroke="#1b231c" stroke-width="3"/><ellipse cx="418" cy="306" rx="12" ry="18" fill="#f2c29b" stroke="#1b231c" stroke-width="3"/><path d="M258 258 C258 196 300 174 340 174 C380 174 422 196 422 258 Z" fill="#1f3d26" stroke="#1b231c" stroke-width="3"/><path d="M300 254 C340 242 400 242 468 260 C470 272 440 276 410 270 C380 264 330 264 300 270 Z" fill="#d9a441" stroke="#1b231c" stroke-width="3"/><circle cx="340" cy="176" r="6" fill="#d9a441"/><circle cx="340" cy="216" r="31" fill="#fbf3e0" stroke="#d9a441" stroke-width="4"/><path d="M326 214 C312 204 314 188 327 190 C335 192 335 203 329 208" fill="none" stroke="#1f3d26" stroke-width="4.5" stroke-linecap="round"/><path d="M354 214 C368 204 366 188 353 190 C345 192 345 203 351 208" fill="none" stroke="#1f3d26" stroke-width="4.5" stroke-linecap="round"/><path d="M331 209 L349 209 L345 234 L335 234 Z" fill="#c9a26a" stroke="#1f3d26" stroke-width="2"/><circle cx="336" cy="217" r="2" fill="#1f3d26"/><circle cx="344" cy="217" r="2" fill="#1f3d26"/><ellipse cx="312" cy="302" rx="8" ry="10" fill="#1b231c"/><ellipse cx="368" cy="302" rx="8" ry="10" fill="#1b231c"/><circle cx="315" cy="298" r="3" fill="#fff"/><circle cx="371" cy="298" r="3" fill="#fff"/><path d="M298 284 L324 280" stroke="#6b4a2b" stroke-width="4" stroke-linecap="round"/><path d="M356 280 L382 284" stroke="#6b4a2b" stroke-width="4" stroke-linecap="round"/><path d="M306 336 C322 362 358 362 374 336" fill="#fff" stroke="#1b231c" stroke-width="3"/><circle cx="288" cy="326" r="10" fill="#f59f9f"/><circle cx="392" cy="326" r="10" fill="#f59f9f"/>';
var BRUSH='<g transform="rotate(10 470 420)"><path d="M462 530 C458 500 458 460 462 444 L478 444 C482 460 482 500 478 530 C476 542 464 542 462 530 Z" fill="#c68642" stroke="#1b231c" stroke-width="3"/><path d="M438 380 L502 380 L496 446 L444 446 Z" fill="#b8c0c4" stroke="#1b231c" stroke-width="3"/><path d="M440 398 L500 398 M441 408 L499 408 M443 430 L497 430" stroke="#7d868b" stroke-width="2"/><path d="M434 382 C430 344 436 318 444 302 L496 302 C504 318 510 344 506 382 Z" fill="#e8c78a" stroke="#1b231c" stroke-width="3"/><path d="M448 378 L446 312 M460 378 L459 306 M470 378 L470 304 M480 378 L481 306 M492 378 L494 312" stroke="#b89556" stroke-width="1.5"/><path d="M444 302 C452 330 464 334 470 314 C474 334 490 332 496 302 Z" fill="#ff4d6d"/><path d="M434 330 C442 338 452 340 456 330 C462 346 482 344 486 332 C492 342 502 340 508 334 L506 352 C490 356 452 358 432 350 Z" fill="#ff4d6d"/></g><ellipse cx="456" cy="490" rx="24" ry="20" fill="#f2c29b" stroke="#1b231c" stroke-width="3"/><path d="M438 482 C446 476 462 476 474 484 M436 494 C446 488 462 488 476 496" stroke="#1b231c" stroke-width="2.5" fill="none" stroke-linecap="round"/>';
var EXTRAS='<g stroke="#8a5a2b" stroke-width="10" stroke-linecap="round"><line x1="540" y1="120" x2="512" y2="570"/><line x1="636" y1="120" x2="664" y2="570"/></g><g stroke="#a8743f" stroke-width="7" stroke-linecap="round"><line x1="537" y1="180" x2="640" y2="180"/><line x1="533" y1="250" x2="644" y2="250"/><line x1="528" y1="320" x2="648" y2="320"/><line x1="524" y1="390" x2="653" y2="390"/><line x1="519" y1="460" x2="657" y2="460"/><line x1="515" y1="530" x2="661" y2="530"/></g><path d="M96 70 C118 56 128 88 148 80 C174 72 176 104 158 116 C182 128 168 162 142 156 C140 184 108 186 100 166 C82 190 50 176 60 152 C30 152 26 118 54 110 C42 84 74 66 96 70 Z" fill="#ff4d6d"/><path d="M600 250 C620 238 632 262 648 256 C668 252 666 282 652 290 C668 306 648 330 630 318 C622 340 596 336 596 318 C576 326 562 304 576 290 C556 278 574 250 600 250 Z" fill="#8338ec"/><path d="M430 60 C442 52 452 70 462 66 C476 64 476 84 466 88 C474 100 458 110 448 102 C440 112 422 102 428 92 C414 84 422 58 430 60 Z" fill="#3a86ff"/><path d="M58 300 C70 292 80 306 90 302 C104 300 104 318 94 324 C102 336 88 348 78 340 C70 350 52 340 58 330 C44 322 50 298 58 300 Z" fill="#2ec4b6"/>';
var BUCKET='<path d="M120 470 L220 470 L210 568 L130 568 Z" fill="#c9d1d4" stroke="#1b231c" stroke-width="3"/><ellipse cx="170" cy="470" rx="50" ry="12" fill="#3a86ff" stroke="#1b231c" stroke-width="3"/><path d="M140 474 C142 494 136 506 140 516 C142 524 150 524 150 516 C148 504 146 492 150 476 Z" fill="#3a86ff"/><path d="M120 472 C120 420 220 420 220 472" fill="none" stroke="#1b231c" stroke-width="3"/><rect x="136" y="522" width="68" height="26" rx="3" fill="#1f3d26"/><text x="170" y="540" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-size="15" font-weight="900" fill="#fff">PAINT</text>';
function svg(vb,full,label){return '<svg viewBox="'+vb+'" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="'+(label||'Ramsey, the Bighorn Painting helper')+'">'+(full?EXTRAS:'')+BODY+WAVE+HEAD+BRUSH+(full?BUCKET:'')+'</svg>';}
window.RAMSEY={full:function(){return svg('0 0 680 580',true);},face:function(){return svg('176 164 290 290',false);}};

function el(h){var d=document.createElement('div');d.innerHTML=h.trim();return d.firstChild;}
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}

/* ---------- estimate pop-up ---------- */
var modal=null,lastFocus=null;
function openEstimate(prefill){
  lastFocus=document.activeElement;
  if(!modal){
    modal=el('<div class="rmy-modal" role="dialog" aria-modal="true" aria-labelledby="rmyEstH" hidden>\
<div class="rmy-dialog"><div class="rmy-dtop"><div class="av">'+RAMSEY.face()+'</div><div><h2 id="rmyEstH">Free, no-obligation estimate</h2><p>Virtual from photos, or Bighorn comes to you. Your call.</p></div><button type="button" class="x" aria-label="Close">X</button></div>\
<div class="rmy-dbody"><form novalidate>\
<div class="hp" aria-hidden="true"><label>Leave blank<input type="text" name="_honey" tabindex="-1" autocomplete="off"></label></div>\
<input type="hidden" name="source_site" value="denverpaintcontractors.com estimate pop-up">\
<div class="fld"><span class="lbl">How would you like your estimate?</span><div class="rmy-seg">\
<label class="pick"><input type="radio" name="estimate_type" value="In-home visit" checked><span>Come see it</span></label>\
<label class="pick"><input type="radio" name="estimate_type" value="Virtual from photos"><span>Virtual, from photos</span></label>\
<label class="pick"><input type="radio" name="estimate_type" value="Help me decide"><span>Help me decide</span></label></div></div>\
<div class="grid2"><div class="fld"><label for="rmyN">Name <em>*</em></label><input id="rmyN" name="user_name" autocomplete="name"></div>\
<div class="fld"><label for="rmyP">Phone <em>*</em></label><input id="rmyP" name="user_phone" type="tel" inputmode="tel" autocomplete="tel"></div>\
<div class="fld"><label for="rmyZ">Zip code</label><input id="rmyZ" name="user_zip" inputmode="numeric" autocomplete="postal-code" maxlength="10"></div>\
<div class="fld"><label for="rmyE">Email</label><input id="rmyE" name="user_email" type="email" autocomplete="email"></div></div>\
<div class="fld"><label for="rmyS">What are we painting?</label><select id="rmyS" name="project"><option value="">Choose one</option><option>Home exterior</option><option>Interior rooms</option><option>Kitchen cabinets</option><option>Deck or fence</option><option>Doors and trim</option><option>Commercial property</option><option>More than one project</option><option>Not sure yet</option></select></div>\
<div class="fld"><label for="rmyF">Photos of the project (optional, up to 4)</label><input id="rmyF" name="photos" type="file" accept="image/*" multiple><small>Photos help Bighorn price a virtual estimate faster.</small></div>\
<div class="fld"><label for="rmyM">Anything we should know?</label><textarea id="rmyM" name="user_message" rows="3" placeholder="Rooms, size, timeline, colors, HOA rules..."></textarea></div>\
<button type="submit" class="btn btn-go" style="width:100%;padding:16px">Book my free estimate</button>\
<div class="form-msg" role="status" aria-live="polite"></div>\
<p class="form-note">Rather talk? Call <a href="tel:'+PH+'"><strong>'+PD+'</strong></a>, Mon to Sat, 7am to 7pm.</p>\
</form></div></div></div>');
    document.body.appendChild(modal);
    modal.addEventListener('click',function(e){if(e.target===modal||e.target.closest('.x'))closeEstimate();});
    modal.addEventListener('keydown',function(e){
      if(e.key==='Escape')closeEstimate();
      if(e.key==='Tab'){var f=modal.querySelectorAll('button,input:not([tabindex="-1"]),select,textarea,a[href]');var a=f[0],z=f[f.length-1];
        if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus();}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus();}}
    });
    var form=modal.querySelector('form');
    form.addEventListener('submit',function(e){
      e.preventDefault();
      var box=form.querySelector('.form-msg'),btn=form.querySelector('button[type=submit]');
      if(form.elements['_honey'].value)return;
      var n=form.user_name,p=form.user_phone;
      if(!n.value.trim()||p.value.replace(/\D/g,'').length<10){box.className='form-msg warn';box.textContent='Add your name and a 10-digit phone number so Bighorn can reach you.';(n.value.trim()?p:n).focus();return;}
      if(!window.BP){box.className='form-msg warn';box.innerHTML='Please call <a href="tel:'+PH+'">'+PD+'</a>.';return;}
      btn.disabled=true;btn.textContent='Sending...';
      var fileIn=form.querySelector('input[type=file]');
      BP.photos(fileIn).then(function(pics){
        var fd=new FormData(form);fd.delete('photos');pics.forEach(function(pic,i){fd.append('photo_'+(i+1),pic);});
        return BP.send(fd,'New estimate request: Denver Paint Contractors (pop-up)');
      }).then(function(s){
        btn.disabled=false;btn.textContent='Book my free estimate';
        if(s==='blocked')return;BP.say(box,s);if(s==='ok'){form.reset();btn.textContent='Sent';}
      });
    });
  }
  var form=modal.querySelector('form');
  if(prefill){Object.keys(prefill).forEach(function(k){var f=form.querySelector('[name="'+k+'"]');if(!f)return;if(f.type==='radio'){var r=form.querySelector('[name="'+k+'"][value="'+prefill[k]+'"]');if(r)r.checked=true;}else f.value=prefill[k];});}
  modal.hidden=false;document.documentElement.style.overflow='hidden';
  setTimeout(function(){form.querySelector('#rmyN').focus();},50);
}
function closeEstimate(){if(!modal)return;modal.hidden=true;document.documentElement.style.overflow='';if(lastFocus&&lastFocus.focus)lastFocus.focus();}
window.BPestimate=openEstimate;
document.addEventListener('keydown',function(e){if(e.key!=='Escape')return;if(modal&&!modal.hidden)closeEstimate();else if(panel&&!panel.hidden)closeChat();});
document.addEventListener('click',function(e){var t=e.target.closest('[data-estimate]');if(!t)return;e.preventDefault();openEstimate();});

/* ---------- knowledge base ---------- */
var BOOK='<a href="#" data-rmy="book">set up a free estimate</a>';
var KB=[
 [/\b(hail|storm)\b/i,'Colorado hail can chip paint, dent trim and crack older finishes. Photos of the damage are the fastest place to start, and Bighorn can tell you what needs repainting. Questions about insurance coverage are best answered by your insurer.'],
 [/\b(cost|price|pricing|how much|expensive|cheap|quote|budget|per square|sq ?ft)\b/i,'Every house is different, but here is a ballpark: Angi\'s Denver cost data puts exterior painting around $1.55 to $4.10 per square foot, and interiors are commonly quoted around $1.50 to $3.50 per square foot. Height, prep, trim detail and the paint line move the number most. The only number that really means anything is one for your home, and Bighorn\'s estimates are free. Want me to '+BOOK+'?'],
 [/\b(virtual|video|photo|photos|pictures?|facetime|zoom)\b/i,'Yes! A lot of jobs can be estimated virtually from photos or a quick video walkthrough, especially interiors, cabinets, decks and simpler exteriors. Bigger or trickier jobs usually get an in-person look. Either way it is free.'],
 [/\b(pay|payment|deposit|credit card|financ)/i,'Bighorn accepts cash, check and credit card, and the payment schedule is laid out on your written estimate.'],
 [/\b(how long|days|take|timeline|duration|schedule)\b/i,'Most home exteriors take about 3 to 5 working days, and a few interior rooms can be a day or two. Prep and weather change that, and your estimate spells out the schedule. One reviewer, Sarah, had a large rental project knocked out in 2 days.'],
 [/\b(winter|cold|snow|december|january|february)\b/i,'Interior painting runs all year, and winter is a great time for rooms, ceilings, trim or cabinets while exteriors wait for warm weather. Exterior paint needs the temperature on the can label, including overnight, so winter exteriors are rare here.'],
 [/\b(season|best time|when should|summer|spring|fall|autumn|temperature|weather)\b/i,'Along the Front Range, late spring through early fall gives the most dependable exterior painting days. Every paint label lists a minimum temperature, and the overnight low matters as much as the afternoon high, so the crew watches both. Summer dates fill up, so booking early helps.'],
 [/\b(brand|brands|sherwin|ppg|benjamin|behr|valspar|what paint|which paint|product)\b/i,'Bighorn primarily uses Sherwin-Williams and PPG and picks the product line for each surface. The exact product and sheen go on your estimate, and nobody swaps in a cheaper can after you sign. Good to know: PPG\'s pro lines come from PPG stores and dealers, not the big-box shelf.'],
 [/\b(warrant|guarantee)/i,'Bighorn backs its work with a 5-year workmanship warranty, and the job is not done until you walk it with the crew and say it is right. The paint also carries its own manufacturer warranty. You get the warranty terms in writing with your estimate. That kind of protection matters on the biggest investment you own, doesn\'t it?'],
 [/\b(insur|licens|bonded|legit)/i,'Bighorn is insured and brings proof of coverage to the estimate. Colorado does not issue a statewide painting license, so ask any painter you talk to for a certificate of insurance and any license your city requires.'],
 [/\b(lead paint|lead|1978|old house|older home|historic|victorian|bungalow|built in|18\d\d|19[0-7]\d)\b/i,'If your home was built before 1978, it may have lead-based paint. Federal EPA rules require certified firms and lead-safe practices when those painted surfaces are disturbed. Mention the year your home was built when you book so the estimate accounts for it.'],
 [/\b(cabinets?|kitchen|vanity|vanities)\b/i,'Cabinet painting is one of the best-value updates there is. Cabinets are degreased, scuff-sanded, primed with a bonding primer and sprayed with a cabinet-grade finish, so there are no brush marks. If the boxes are solid, it costs far less than replacing them.'],
 [/\b(decks?|fences?|stain|staining|pergolas?|railings?)\b/i,'Colorado sun grays and splits wood fast. Decks and fences get cleaned, prepped and stained with products chosen for sun and freeze-thaw. Staining before boards fail is maintenance. Waiting turns it into repairs.'],
 [/\b(stucco|brick|masonry)\b/i,'Stucco is common around Denver. It gets cleaned, cracks get addressed, and it is coated with a product made for masonry. Brett\'s review mentions a 5-story Winter Park project with stucco and rough-cut siding, so it is familiar territory.'],
 [/\b(hoa|homeowners association|approval|covenant)/i,'Plenty of Denver-area HOAs require color approval before exterior painting. Get your approved palette or submit colors first, and Bighorn can help with samples and match the approved colors.'],
 [/\b(commercial|office|business|retail|warehouse|apartment|multi|property manag|tenant)/i,'Bighorn paints offices, retail spaces and multi-unit properties, and schedules around your business so you stay open. Commercial jobs usually get an in-person walkthrough so the scope is right. Ask about after-hours scheduling.'],
 [/\b(color|colour|colors|swatch|sample|choose)\b/i,'Color consultation is free with every estimate. A chip under store lights often looks lighter or cooler on a big wall in Colorado sun, so samples go up on your actual walls or siding before anyone commits.'],
 [/\b(peel|peeling|flak|chalk|fading|faded|blister|crack)/i,'Peeling or chalking usually means moisture, poor adhesion or skipped prep underneath. Painting over it traps the problem, so loose paint gets scraped and the cause gets looked at first. How long has it been looking like that?'],
 [/\b(prep|caulk|scrape|sand|primer|prime|pressure wash|power wash)/i,'Prep is where paint jobs are won or lost: wash, scrape loose paint, sand edges smooth, fill and caulk gaps, and spot-prime bare wood before the finish coats. At altitude, strong sun and freeze-thaw find every shortcut fast.'],
 [/\b(drywall|patch|repair|water damage|hole)\b/i,'Normal patching and prep are part of a good paint job. Sarah\'s review mentions the crew repairing water-damaged ceiling on her rental. Bigger repairs get talked through at the estimate so nothing is a surprise.'],
 [/\b(voc|fumes|smell|odor|pets?|kids|baby|allerg)/i,'Colorado adopted tighter VOC limits for architectural paints in 2020, and most interior wall paints today are water-based and low in VOCs. If anyone in the home is sensitive, ask about zero-VOC options at your estimate.'],
 [/\b(area|serve|service area|come to|arvada|lakewood|golden|westminster|aurora|littleton|denver|broomfield|thornton|wheat ridge|centennial|highlands|location|where)\b/i,'Bighorn is based in Arvada and works across Denver and the Front Range: Arvada, Wheat Ridge, Golden, Lakewood, Westminster, Broomfield, Thornton, Aurora, Englewood, Littleton, Centennial, Highlands Ranch and Denver neighborhoods. Jefferson County usually gets the fastest scheduling.'],
 [/\b(hours|open|available|saturday|sunday)\b/i,'Bighorn answers Monday through Saturday, 7am to 7pm. Call <a href="tel:'+PH+'">'+PD+'</a>, or I can take your info right here.'],
 [/\b(discount|coupon|deal|promo|sale|save|saving)s?\b/i,'No fake countdown coupons here. The real savings come from bundling projects, flexible scheduling and easy prep you can handle. See <a href="/discounts/">ways to save</a>, and ask about any seasonal pricing when you book.'],
 [/\b(review|reviews|rating|stars|references)\b/i,'Bighorn holds 4.9 stars across 95 Google reviews. Justin wrote that no corners were cut and the crew took real pride in the prep. Jane called Bighorn the best painting company she has ever worked with.'],
 [/\b(owner|asa|who are you|about you|company|local)\b/i,'Bighorn Painting is locally owned and based in Arvada. Customers mention Asa by name a lot for being responsive and kind, and the crew for being meticulous and cleaning up.'],
 [/\b(exterior|siding|trim|outside|house paint)\b/i,'Exterior jobs start with washing, scraping, caulking and priming, then Sherwin-Williams or PPG coatings picked for sun exposure. Most take 3 to 5 working days. Want me to '+BOOK+'?'],
 [/\b(interior|inside|rooms?|ceilings?|walls?|basements?|bedrooms?|bathrooms?|hallways?)\b/i,'Interior jobs get floors and furniture protected, patching and prep, clean cut lines and daily cleanup. Many interiors can be priced virtually from photos. Want me to '+BOOK+'?'],
 [/\b(human|person|call|talk|phone|someone)\b/i,'You can talk to Bighorn directly at <a href="tel:'+PH+'">'+PD+'</a>, Monday through Saturday, 7am to 7pm.']
];
function kb(t){for(var i=0;i<KB.length;i++){if(KB[i][0].test(t))return KB[i][1];}return null;}

/* ---------- chat ---------- */
var panel,log,chips,input,photoIn,data={},step=null,typedFirst=false,started=false,transcript=[];
function addMsg(html,who){var m=el('<div class="rmy-m '+who+'"></div>');m.innerHTML=html;log.appendChild(m);log.scrollTop=log.scrollHeight;transcript.push((who==='me'?'Visitor: ':'Ramsey: ')+m.textContent);}
function bot(html,opts,cb){
  var ty=el('<div class="rmy-typing" aria-hidden="true">Ramsey is typing...</div>');log.appendChild(ty);log.scrollTop=log.scrollHeight;setChips([]);
  var wait=window.matchMedia('(prefers-reduced-motion: reduce)').matches?0:Math.min(1200,350+html.length*6);
  setTimeout(function(){ty.remove();addMsg(html,'bot');setChips(opts||[]);if(cb)cb();},wait);
}
function setChips(opts){chips.innerHTML='';chips.hidden=!opts.length;opts.forEach(function(o){var b=document.createElement('button');b.type='button';b.textContent=o[0];b.addEventListener('click',function(){addMsg(esc(o[0]),'me');o[1](o[0]);});chips.appendChild(b);});}
function ask(key,html,opts){step=key;bot(html,opts);}

var FLOW={
 start:function(){ask('project','Hey, I\'m Ramsey with Bighorn Painting. I can answer painting questions or get you a free estimate. What are we painting?',[
   ['Home exterior',pick('project')],['Interior rooms',pick('project')],['Kitchen cabinets',pick('project')],['Deck or fence',pick('project')],['Commercial',pick('project')],['I just have a question',function(){step='free';bot('Fire away. Ask me anything about painting in Colorado: cost, timing, prep, paint brands, warranty, you name it.',[]);}]]);},
 reason:function(){ask('reason','Good choice. What has you thinking about paint right now?',[
   ['Peeling or fading',pick('reason')],['Dated color',pick('reason')],['Getting ready to sell',pick('reason')],['Just moved in',pick('reason')],['Hail or water damage',pick('reason')],['It is just time',pick('reason')]]);},
 worry:function(){
   var r=data.reason||'',q;
   if(/Peeling|Hail/.test(r))q='How long has it been like that? At altitude, every winter pushes water behind failing paint and into the wood. What worries you most if it waits another season?';
   else if(/sell/.test(r))q='Makes sense. Buyers judge a house in the first few seconds from the curb. What worries you most about getting it done in time?';
   else q='Let me ask you something real quick. How would you feel if you hired a cheap "Chuck in a Truck" painter, he skipped the prep, and it was peeling again in two winters?';
   ask('worry',q,[['I\'d be sick about it',pick('worry')],['Paying twice',pick('worry')],['Wood rot and damage',pick('worry')],['How it looks',pick('worry')],['Not worried, just curious',pick('worry')]]);
 },
 tie:function(){ask('tie','That\'s exactly why Bighorn does the prep most painters skip, uses Sherwin-Williams and PPG, and backs the work with a 5-year workmanship warranty. Customers rate them 4.9 stars across 95 Google reviews. It\'s important to you to work with a company that stands behind its work and protects your investment, isn\'t it?',[
   ['Yes, very important',pick('tie')],['Yes',pick('tie')],['Price matters most',function(v){data.tie=v;bot('Totally fair, and you should compare. Just know a cheap paint job that fails costs more than one done right. The estimate is free and in writing, so you can compare line by line. Getting a real number makes sense, right?',[['Yes, let\'s do it',function(){FLOW.timeline();}],['Tell me more first',function(){step='free';bot('Sure thing. Ask me anything: cost, prep, paint, warranty, timing.',[['Book my free estimate',function(){FLOW.timeline();}]]);}]]);}]]);},
 timeline:function(){ask('timeline','When are you hoping to have it done?',[['As soon as possible',pick('timeline')],['Within a month',pick('timeline')],['1 to 3 months',pick('timeline')],['Just pricing it out',pick('timeline')]]);},
 type:function(){ask('type','Good news: a lot of jobs can be estimated virtually from photos or a quick video call. Bigger or trickier ones get an in-person look. Which works best for you?',[
   ['Virtual, from photos',pick('type')],['Come see it in person',pick('type')],['Help me decide',function(v){data.type='Help me decide';bot('Interiors, cabinets, decks and simpler exteriors often work virtually. Multi-story homes, older homes, stucco repairs and commercial jobs usually get an in-person visit. Bighorn will recommend the best fit when they call.',[],function(){FLOW.name();});}]]);},
 name:function(){ask('name','Let\'s get it booked. What\'s your first and last name?',[]);input.focus();},
 phone:function(){ask('phone','Thanks, '+esc(data.name.split(' ')[0])+'. What\'s the best phone number for Bighorn to reach you?',[]);},
 zip:function(){ask('zip','What zip code is the project in?',[['Skip',function(){data.zip='';FLOW.email();}]]);},
 email:function(){ask('email','Email for a written copy of the estimate? (optional)',[['Skip',function(){data.email='';FLOW.photos();}]]);},
 photos:function(){
   if(/Virtual|decide/.test(data.type||'')){ask('photos','Want to add a few photos? It speeds up a virtual estimate.',[['Add photos',function(){photoIn.click();}],['Skip photos',function(){FLOW.send();}]]);}
   else FLOW.send();
 },
 send:function(){
   step='sending';bot('Sending this over to Bighorn now...',[]);
   var fd=new FormData();
   fd.append('source_site','denverpaintcontractors.com Ramsey chat');
   [['user_name','name'],['user_phone','phone'],['user_zip','zip'],['user_email','email'],['project','project'],['reason','reason'],['biggest_worry','worry'],['importance_of_warranty','tie'],['timeline','timeline'],['estimate_type','type']].forEach(function(p){if(data[p[1]])fd.append(p[0],data[p[1]]);});
   fd.append('chat_transcript',transcript.join('\n'));
   (window.BP?BP.photos(photoIn):Promise.resolve([])).then(function(pics){
     pics.forEach(function(p,i){fd.append('photo_'+(i+1),p);});
     return window.BP?BP.send(fd,'Ramsey chat lead: Denver Paint Contractors'):'fail';
   }).then(function(s){
     if(s==='ok'){step='free';bot('Done! Bighorn has your request and will call you to set up your free estimate. Anything else I can answer while you wait?',[['Ask a question',function(){bot('Go for it.',[]);}],['Call now',function(){location.href='tel:'+PH;}]]);}
     else if(s==='fast'){setTimeout(FLOW.send,4000);}
     else{step='free';bot('Hmm, I could not confirm that went through. Please call <a href="tel:'+PH+'">'+PD+'</a> so your request does not get lost.',[['Call now',function(){location.href='tel:'+PH;}],['Try again',function(){FLOW.send();}]]);}
   });
 }
};
var ORDER={project:'reason',reason:'worry',worry:'tie',tie:'timeline',timeline:'type',type:'name'};
function pick(key){return function(v){data[key]=v;var nx=ORDER[key];FLOW[nx]();};}

function handleText(t){
  addMsg(esc(t),'me');
  if(step==='name'){if(t.trim().length<2){bot('Just need a name so Bighorn knows who to ask for.');return;}data.name=t.trim();FLOW.phone();return;}
  if(step==='phone'){var dgt=t.replace(/\D/g,'');if(dgt.length<10){bot('That looks short. Can you type the full 10-digit number?');return;}data.phone=t.trim();FLOW.zip();return;}
  if(step==='zip'){data.zip=t.trim();FLOW.email();return;}
  if(step==='email'){data.email=t.trim();FLOW.photos();return;}
  if(step==='worry'||step==='reason'){var a0=kb(t);if(!a0){data[step]=t;FLOW[ORDER[step]]();return;}}
  var a=kb(t);
  if(a){
    var resume=step&&step!=='free'&&FLOW[step]?step:null;
    bot(a,resume?[]:[['Book my free estimate',function(){FLOW.timeline();}],['Ask something else',function(){bot('Sure, what else?',[]);}]],function(){if(resume){setTimeout(function(){bot('Now, back to your project...',[],function(){FLOW[resume]();});},300);}});
  }else{
    bot('Good question, and one Bighorn can answer for your specific home. Want me to set up a free estimate, or would you rather call <a href="tel:'+PH+'">'+PD+'</a>?',[['Book my free estimate',function(){FLOW.timeline();}],['Call now',function(){location.href='tel:'+PH;}]]);
  }
}

function openChat(){
  if(!panel){
    panel=el('<div class="rmy-panel" role="dialog" aria-label="Chat with Ramsey from Bighorn Painting" hidden>\
<div class="rmy-head"><div class="av">'+RAMSEY.face()+'</div><div><b>Ramsey</b><span>Bighorn Painting helper</span></div><a href="tel:'+PH+'">Call '+PD+'</a><button type="button" class="x" aria-label="Close chat">X</button></div>\
<div class="rmy-log" aria-live="polite"></div><div class="rmy-chips" hidden></div>\
<form class="rmy-in"><label class="sr" for="rmyText">Message Ramsey</label><input id="rmyText" autocomplete="off" placeholder="Type a question or answer..."><button type="submit">Send</button></form>\
<input type="file" accept="image/*" multiple hidden></div>');
    document.body.appendChild(panel);
    log=panel.querySelector('.rmy-log');chips=panel.querySelector('.rmy-chips');input=panel.querySelector('#rmyText');photoIn=panel.querySelector('input[type=file]');
    panel.querySelector('.x').addEventListener('click',closeChat);
    panel.addEventListener('keydown',function(e){if(e.key==='Escape')closeChat();});
    panel.querySelector('form').addEventListener('submit',function(e){e.preventDefault();var v=input.value.trim();if(!v||step==='sending')return;input.value='';handleText(v);});
    photoIn.addEventListener('change',function(){var n=Math.min(4,photoIn.files.length);if(!n)return;addMsg(n+' photo'+(n>1?'s':'')+' attached','me');FLOW.send();});
    log.addEventListener('click',function(e){var a=e.target.closest('[data-rmy="book"]');if(a){e.preventDefault();FLOW.timeline();}});
  }
  panel.hidden=false;launch.querySelector('.rmy-btn').setAttribute('aria-expanded','true');
  var tip=launch.querySelector('.rmy-tip');if(tip)tip.remove();
  if(!started){started=true;FLOW.start();}
  setTimeout(function(){input.focus();},60);
}
function closeChat(){panel.hidden=true;launch.querySelector('.rmy-btn').setAttribute('aria-expanded','false');launch.querySelector('.rmy-btn').focus();}
window.BPchat=openChat;

var launch=el('<div class="rmy-launch"><button type="button" class="rmy-btn" aria-label="Chat with Ramsey for a free painting estimate" aria-expanded="false">'+RAMSEY.full()+'</button></div>');
document.body.appendChild(launch);
launch.querySelector('.rmy-btn').addEventListener('click',function(){if(panel&&!panel.hidden)closeChat();else openChat();});
document.addEventListener('click',function(e){if(e.target.closest('[data-chat]')){e.preventDefault();openChat();}});
var tipX=false;try{tipX=sessionStorage.getItem('rmyTipX')==='1';}catch(e){}
if(!tipX){setTimeout(function(){
  if(panel&&!panel.hidden)return;
  var tip=el('<div class="rmy-tip" role="status">I\'m here to answer questions and help make your painting project a total success!<button type="button" aria-label="Dismiss">&times;</button></div>');
  launch.insertBefore(tip,launch.firstChild);
  tip.addEventListener('click',function(e){if(e.target.tagName==='BUTTON'){tip.remove();try{sessionStorage.setItem('rmyTipX','1');}catch(x){}}else openChat();});
},1200);}
})();
