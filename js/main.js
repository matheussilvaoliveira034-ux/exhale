const $=id=>document.getElementById(id);
const slot=(k,n,c="")=>`<div class="slot ${c}" data-img="${k}" data-name="${n}"></div>`;
/* pilares */
$("pg").innerHTML=[["♡","Atendimento Individualizado","Aulas planejadas de acordo com a necessidade de cada aluno, com olhar atento e cuidadoso."],["✦","Equipamentos Novinhos","Ambiente climatizado, aconchegante e estruturado com aparelhos modernos."],["✧","Qualidade de Vida e Bem-Estar","Foco em reabilitação, melhora de dores lombares, flexibilidade, força e postura."]].map((p,i)=>`<div class="pc">${slot("pilar"+(i+1),"FOTO PILAR "+(i+1))}<div><i>${p[0]}</i><b>${p[1]}</b>${p[2]}</div></div>`).join("");

/* avaliações */
const REV=[
  ["Alessandra Borges","O Pilates virou algo necessário na minha vida, a experiência do Pilates no studio Exhale com a Laura faz parte da minha rotina. Ela é acolhedora, atenciosa, competente e o espaço é lindo, climatizado, aconchegante!! Amo ser aluna Exhale."],
  ["Lays Cristina","Fazer pilates tem me ajudado muito com o alívio das dores na coluna e na EXHALE, a Laura faz com que isso seja prazeroso. Ela é super competente, atenciosa e nos corrige o tempo todo."],
  ["Elaine Teixeira","Ambiente acolhedor, atendimento de qualidade e aulas muito bem conduzidas. Cada exercício é explicado com atenção e profissionalismo. Recomendo!"],
  ["Neidimar Antunes","Esse Studio é excelente, nota mil! Consegui reabilitar meu joelho totalmente graças ao profissionalismo e capacidade da professora Laura, do Studio Exhale. Parabéns 👏"],
  ["Fabrício Antunes","Excelente estrutura, profissionais muito competentes, recomendo a todos."],
  ["Aline Antunes","Ambiente super agradável, equipamentos novinhos e instrutora extremamente capacitada e gentil. E desenvolvem um lindo trabalho com crianças também. Aprovadissimo!!!"]
];

$("rt").innerHTML=REV.map(r=>`<div class="rc"><span class="stars">★★★★★</span>"${r[1]}"<em>— ${r[0]}</em></div>`).join("");
$("dots").innerHTML=REV.map(()=>"<i></i>").join("");
const rt=$("rt"),dots=[...$("dots").children];
const act=()=>{const i=Math.round(rt.scrollLeft/(rt.children[0].offsetWidth+16));dots.forEach((d,k)=>d.classList.toggle("on",k===i))};
rt.addEventListener("scroll",act,{passive:true});act();
setInterval(()=>{if(matchMedia("(hover:hover)").matches&&rt.matches(":hover"))return;const w=rt.children[0].offsetWidth+16;rt.scrollTo({left:rt.scrollLeft+w>=rt.scrollWidth-rt.clientWidth+4?0:rt.scrollLeft+w,behavior:"smooth"})},4500);

/* galeria com o layout original */
let g="";
for(let i=1; i<=10; i++){
  if(i%3===2 && i+1 <= 10){
    g+=`<div class="gi">${slot("galeria"+i,"GALERIA "+i)}${slot("galeria"+(i+1),"GALERIA "+(i+1))}</div>`;
    i++;
  } else {
    g+=`<div class="gi">${slot("galeria"+i,"GALERIA "+i)}</div>`;
  }
}
$("gal").innerHTML=g+g;

/* modalidades / tratamentos */
[["◎","Pilates Contemporâneo",["Aulas dinâmicas para todas as idades","Foco em fortalecimento e flexibilidade","Prevenção e alívio de dores nas costas"]],["✦","Reabilitação e Postura",["Reabilitação de joelhos e articulações","Correção postural e alívio de dores lombares","Acompanhamento totalmente individualizado"]],["★","Pilates Infantil",["Desenvolvimento motor saudável","Trabalho lúdico e seguro para crianças","Acompanhamento especializado e gentil"]]].forEach(t=>$("tg").insertAdjacentHTML("beforeend",`<div class="tk"><h4><i>${t[0]}</i>${t[1]}</h4><ul>${t[2].map(x=>`<li>${x}</li>`).join("")}</ul></div>`));

/* avaliação */
$("av").innerHTML=[["▤","Avaliação postural e funcional"],["∿","Entendimento das suas dores e necessidades"],["◉","Exercícios adaptados ao seu ritmo"],["▦","Acompanhamento com a instrutora Laura"],["→","Foco em resultados e bem-estar"]].map(a=>`<li><i>${a[0]}</i>${a[1]}</li>`).join("");

/* faq */
const FAQ=[
  ["Quais são os horários de funcionamento?","O stúdio atende de segunda a sexta-feira, fechando às 20:00."],
  ["Onde o EXHALE Stúdio está localizado?","Estamos na Av. Paracatu, 461 - Sl 101 - Rosário, Patos de Minas - MG."]
];
$("faq").innerHTML=FAQ.map(f=>`<div class="fi"><button>${f[0]}</button><p>${f[1]}</p></div>`).join("");
document.querySelectorAll(".fi button").forEach(b=>b.onclick=()=>b.parentElement.classList.toggle("on"));

/* imagens e whatsapp */
document.querySelectorAll("[data-img]").forEach(e=>{const s=IMG[e.dataset.img];
 if(s){e.classList.add("has");e.innerHTML=`<img src="${s}" alt="${e.dataset.name}">`}
 else e.innerHTML=`<span>📷 ${e.dataset.name}<br><small style="font-weight:400">IMG.${e.dataset.img}</small></span>`});
document.querySelectorAll(".wpp").forEach(a=>a.href=`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MSG)}`);

/* revelar ao rolar */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll("h2,.s,.s2,.narrow p,.pc,.rc,.tk,.tp,.cb,.av>div,.ph,.sb>div,.info>div,.fi,.cta p,.hc>*").forEach((e,i)=>{e.classList.add("fx");e.style.transitionDelay=(i%4)*90+"ms";io.observe(e)});