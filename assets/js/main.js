(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please fill in your name, a valid email and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();

(function(){
function $(i){return document.getElementById(i);}
var CARE={cotton:["Cotton","Warm 40&deg;C wash","Tumble dry low","Iron hot (200&deg;C)",["Wash dark cotton inside out for the first few washes.","Shrinkage happens in the first hot wash, not the fifth.","Line drying keeps colour longer than a hot tumble."]],
linen:["Linen","Cool 30&deg;C, gentle","Dry flat or on a line","Iron damp, hot",["Creasing is the fabric, not a fault.","Never wring linen; press water out between towels.","It softens every wash, so skip the fabric conditioner."]],
wool:["Wool","Hand wash or wool cycle, 30&deg;C","Dry flat, away from heat","Steam, do not press",["Never hang wet wool; the weight stretches the shoulders.","Air it between wears instead of washing.","Use a comb or stone for pills, not scissors."]],
silk:["Silk","Hand wash cool with mild soap","Dry flat in shade","Iron cool on the reverse",["Rinse with a splash of white vinegar to keep the shine.","Deodorant and perfume mark silk permanently.","Direct sun fades silk faster than any wash."]],
viscose:["Viscose","Cool 30&deg;C, short spin","Dry flat; it is weak when wet","Iron warm on the reverse",["Viscose loses strength when wet, so handle it gently.","Expect a little shrinkage on the first wash.","Hanging it wet will stretch the hem out of true."]],
polyester:["Polyester","Warm 40&deg;C","Tumble dry low or line dry","Iron cool",["High heat sets creases permanently and can glaze the surface.","Wash sportswear quickly; polyester holds odour.","Skip fabric conditioner, it coats the fibre."]],
denim:["Denim","Cold 30&deg;C inside out","Line dry","Iron warm",["Wash denim rarely; air it between wears.","Cold water keeps indigo in the cloth.","Tumble drying is what shrinks the waistband."]],
cashmere:["Cashmere","Hand wash 30&deg;C with mild soap","Dry flat on a towel","Steam only",["Fold, never hang, to keep the shoulders square.","Wash after three or four wears, not every wear.","Store with cedar; moths find wool in summer."]]};
var fs=$('fab');
function careOut(){var d=CARE[fs.value];var o=$('careOut');
 o.innerHTML='<h4>'+d[0]+'</h4><p><b>Wash:</b> '+d[1]+'<br><b>Dry:</b> '+d[2]+'<br><b>Press:</b> '+d[3]+'</p><ul>'+d[4].map(function(x){return '<li>'+x+'</li>';}).join('')+'</ul>';}
if(fs){fs.addEventListener('change',careOut);careOut();}
var SZ={tops:{us:[0,2,4,6,8,10,12,14,16],uk:[4,6,8,10,12,14,16,18,20],eu:[32,34,36,38,40,42,44,46,48],it:[36,38,40,42,44,46,48,50,52],bust:[31,32,33,34.5,36,37.5,39.5,41.5,43.5]},
bottoms:{us:[0,2,4,6,8,10,12,14,16],uk:[4,6,8,10,12,14,16,18,20],eu:[32,34,36,38,40,42,44,46,48],it:[36,38,40,42,44,46,48,50,52],bust:[24,25,26,27.5,29,30.5,32.5,34.5,36.5]}};
function szOut(){var t=$('szType').value,i=+$('szUs').value,d=SZ[t],lab=t==='tops'?'Bust':'Waist';
 $('szOut').innerHTML='<h4>US '+d.us[i]+' &middot; '+(t==='tops'?'tops':'bottoms')+'</h4><p><b>UK</b> '+d.uk[i]+' &nbsp;&middot;&nbsp; <b>EU</b> '+d.eu[i]+' &nbsp;&middot;&nbsp; <b>IT</b> '+d.it[i]+'</p><p><b>'+lab+' it is cut for:</b> about '+d.bust[i]+' in ('+Math.round(d.bust[i]*2.54)+' cm)</p><ul><li>Brands cut differently, so treat this as a starting point and check the brand chart.</li><li>If you fall between two sizes, size up for woven cloth and down for knits.</li><li>Measure over the underwear you will wear with the garment.</li></ul>';}
['szType','szUs'].forEach(function(i){var e=$(i);if(e)e.addEventListener('input',szOut);});
if($('szUs'))szOut();
var FIB={cotton:{n:"Cotton",br:8,wr:3,wa:5,st:2,dr:6},linen:{n:"Linen",br:10,wr:1,wa:3,st:1,dr:7},wool:{n:"Wool",br:7,wr:8,wa:10,st:6,dr:8},
silk:{n:"Silk",br:7,wr:4,wa:6,st:3,dr:5},viscose:{n:"Viscose",br:6,wr:3,wa:4,st:3,dr:3},polyester:{n:"Polyester",br:3,wr:9,wa:6,st:6,dr:9},
elastane:{n:"Elastane",br:2,wr:8,wa:5,st:10,dr:7},nylon:{n:"Nylon",br:3,wr:8,wa:5,st:7,dr:10}};
function bar(l,v){return '<div class="mlab"><span>'+l+'</span><span>'+v.toFixed(1)+'/10</span></div><div class="meter"><i style="width:'+(v*10)+'%"></i></div>';}
function blOut(){var a=FIB[$('f1').value],b=FIB[$('f2').value],p=+$('mix').value,q=100-p;
 $('mixLab').textContent=p+'% '+a.n+' / '+q+'% '+b.n;
 var m=function(k){return (a[k]*p+b[k]*q)/100;};
 var notes=[];var br=m('br'),wr=m('wr'),st=m('st'),dr=m('dr'),wa=m('wa');
 notes.push(br>=7?'Breathes well, so it suits warm days and long wear.':(br>=4.5?'Middling breathability; fine indoors, warm in summer heat.':'Holds heat and moisture, so it can feel clammy in summer.'));
 notes.push(wr>=7?'Keeps its press, good for travel and long days.':(wr>=4?'Creases softly and drops out when hung.':'Creases readily; plan to steam it or enjoy the rumple.'));
 notes.push(st>=6?'There is real stretch here, so it moves with you.':'Little stretch, so the cut has to do the work.');
 notes.push(dr>=7?'Hard-wearing; a good choice for clothes worn weekly.':'Treat it gently and it will last; it is not a workhorse.');
 if(p>0&&q>0&&a.n!==b.n)notes.push('Blends wash like their weakest fibre, so follow the gentler care rule of the two.');
 $('blOut').innerHTML='<h4>'+p+'% '+a.n+(q?' / '+q+'% '+b.n:'')+'</h4>'+bar('Breathability',br)+bar('Crease resistance',wr)+bar('Warmth',wa)+bar('Stretch',st)+bar('Hard-wearing',dr)+'<ul><li>'+notes.join('</li><li>')+'</li></ul>';}
['f1','f2','mix'].forEach(function(i){var e=$(i);if(e)e.addEventListener('input',blOut);});
if($('mix'))blOut();
})();
