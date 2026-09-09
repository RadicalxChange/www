(function(){
  function rng(seed){let h=1779033703^seed.length;for(let i=0;i<seed.length;i++){h=Math.imul(h^seed.charCodeAt(i),3432918353);h=(h<<13)|(h>>>19);}return function(){h=Math.imul(h^(h>>>16),2246822507);h=Math.imul(h^(h>>>13),3266489909);h^=h>>>16;return(h>>>0)/4294967296;};}
  function gauss(r){let u=0,v=0;while(u===0)u=r();while(v===0)v=r();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}
  function makePoints(seed,n,spread){const r=rng(seed),pts=[];for(let i=0;i<n;i++){pts.push({dx:gauss(r)*spread,dy:gauss(r)*spread,cluster:i<n/2?'a':'b',size:1.6+r()*1.8});}return pts;}
  const A='#2B3EFF',B='#E23A6B',C='#EDFF38';
  function render(svg,pts,ca,cb,radius){
    let out='';
    for(const p of pts){
      const c=p.cluster==='a'?ca:cb,x=c.x+p.dx,y=c.y+p.dy;
      const inA=Math.hypot(x-ca.x,y-ca.y)<radius,inB=Math.hypot(x-cb.x,y-cb.y)<radius;
      const fill=(inA&&inB)?C:(p.cluster==='a'?A:B),op=(inA&&inB)?1:0.85;
      out+=`<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${p.size.toFixed(2)}" fill="${fill}" opacity="${op}"/>`;
    }
    const t=svg.querySelector('title');svg.innerHTML=(t?t.outerHTML:'')+out;
  }
  // Hero: one page-load moment. Two clusters drift together; the overlap turns yellow.
  const hero=document.getElementById('heroMap');
  if(hero){
    const pts=makePoints('density-done-well-2026',420,52),R=105;
    const start={a:{x:110,y:200},b:{x:410,y:200}},end={a:{x:205,y:200},b:{x:315,y:200}};
    if(matchMedia('(prefers-reduced-motion: reduce)').matches){render(hero,pts,end.a,end.b,R);}
    else{
      const t0=performance.now(),dur=1900,ease=t=>1-Math.pow(1-t,3);
      (function frame(now){
        const t=Math.min(1,(now-t0-300)/dur),e=ease(Math.max(0,t));
        render(hero,pts,{x:start.a.x+(end.a.x-start.a.x)*e,y:200},{x:start.b.x+(end.b.x-start.b.x)*e,y:200},R);
        if(t<1)requestAnimationFrame(frame);
      })(t0);
    }
  }
  // Project fields: static, seeded by slug, so each project always has the same shape.
  document.querySelectorAll('svg[data-field]').forEach(svg=>{
    const seed=svg.dataset.field,pts=makePoints(seed,150,22),r=rng(seed+'-layout'),off=18+r()*10;
    render(svg,pts,{x:80-off,y:80},{x:80+off,y:80},40);
  });
})();
