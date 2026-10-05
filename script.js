/* ============ IMAGES ============
   Each key maps to either a Wikimedia Commons file name or a full https:// URL.
   To change a picture, paste any image link (or a Commons file name) as the value.
   If an image fails to load, a coloured emoji tile is shown instead. */
const IMG = {
  gujarat:"Rann of Kutch white desert.jpg", hospitality:"Gujarati thali.jpg", language:"Gujarati script.jpg",
  music:"Dhol player Gujarat.jpg", folk:"Gujarat folk dance.jpg", community:"Gujarat village life.jpg",
  garba:"Garba dance Navratri.jpg", dandiya:"Dandiya Raas.jpg",
  dhokla:"Dhokla.jpg", khandvi:"Khandvi.jpg", thepla:"Thepla.jpg", fafda:"Fafda Jalebi.jpg",
  undhiyu:"Undhiyu.jpg", kadhi:"Gujarati Kadhi.jpg", handvo:"Handvo.jpg",
  chaniya:"Chaniya choli.jpg", bandhani:"Bandhani saree.jpg", jewellery:"Gujarati traditional jewellery.jpg",
  kediyu:"Kediyu Gujarat.jpg", chorno:"Chorno Gujarat.jpg", turban:"Kutchi turban.jpg",
  patola:"Patan patola.jpg", kutch:"Kutch embroidery.jpg", rogan:"Rogan art.jpg", ajrakh:"Ajrakh block printing.jpg",
  navratri:"Navratri Garba Gujarat.jpg", uttarayan:"Uttarayan kite festival Ahmedabad.jpg",
  rannutsav:"Rann Utsav.jpg", diwali:"Diwali lamps.jpg", janmashtami:"Janmashtami Dwarka.jpg",
  unity:"Statue of Unity.jpg", rann:"Rann of Kutch.jpg", sabarmati:"Sabarmati Ashram.jpg",
  modhera:"Modhera Sun Temple.jpg", dwarka:"Dwarkadhish Temple.jpg", somnath:"Somnath Temple.jpg", gir:"Gir National Park.jpg",
  lion:"Asiatic lion Gir.jpg", food:"Gujarati thali.jpg", clothing:"Chaniya choli.jpg"
};
const src = (k, w = 600) => {
  const v = IMG[k] || k;
  return v.startsWith("http") ? v : "https://commons.wikimedia.org/wiki/Special:FilePath/" + encodeURIComponent(v) + "?width=" + w;
};
const pic = (k, e, cls = "") =>
  `<div class="pic ${cls}" data-e="${e}"><img loading="lazy" src="${src(k)}" alt="" onerror="this.remove()"></div>`;
const $ = id => document.getElementById(id);
 
/* ============ CONTENT ============ */
// [imageKey, emoji, title, text, optional "tap to expand" extra]
const culture = [
  ["hospitality","🤝","Hospitality","Guests are treated like family. Offering food and water first, and the greeting “Kem cho?”, is a daily habit.","Gujarati homes often say “Atithi Devo Bhava”, meaning the guest is like God."],
  ["language","🗣️","Language","Gujarati is written in its own script and is the language of poet Narsinh Mehta and Mahatma Gandhi.","Narsinh Mehta, the 15th-century poet-saint, is called the Adi Kavi (first poet) of Gujarati."],
  ["music","🎶","Music","Dhol, harmonium and folk songs set the rhythm of every celebration, from weddings to Navratri.","Garba songs and bhajans are sung in groups, and everyone joins in."],
  ["folk","🪘","Folk traditions","Bhavai theatre, Raas and Garba grew out of village life and storytelling.","Bhavai is an old folk theatre form that mixes comedy, music and social messages."],
  ["community","🏘️","Community life","Gujarat is known for trade, enterprise and giving. Families, neighbours and communities celebrate together.","The state is also home to many communities, including Jain, Parsi, Hindu, Muslim and tribal groups, living side by side."]
];
const dance = [
  ["garba","💃","Garba","A circular dance around a lamp or an image of Goddess Shakti, performed in rhythmic claps and graceful steps. The circle stands for the cycle of time and life.","Performed mainly during the nine nights of Navratri (Sep–Oct), and also at weddings. In 2023 UNESCO added “Garba of Gujarat” to its list of Intangible Cultural Heritage."],
  ["dandiya","🥁","Dandiya Raas","A lively dance where partners strike decorated sticks (dandiya) together in time with the dhol. It recalls playful dances of Krishna and the Gopis.","Danced during Navratri, usually after the Garba rounds late into the night."]
];
const food = [
  ["dhokla","🍽️","Dhokla","A soft, spongy steamed cake of fermented gram flour. It is topped with a tempering of mustard seeds and green chillies, and served with chutney."],
  ["khandvi","🍽️","Khandvi","Thin rolls of gram flour and yogurt batter, rolled by hand into delicate swirls. It is finished with coconut, coriander and mustard seeds."],
  ["thepla","🍽️","Thepla","A soft flatbread made with wheat flour, fenugreek leaves and spices. It stays fresh for days, so it is the favourite travel food of Gujaratis."],
  ["fafda","🍽️","Fafda-Jalebi","A crunchy gram flour fafda eaten with sweet, crisp jalebi and papaya chutney. It is the classic Sunday breakfast, especially on Dussehra."],
  ["undhiyu","🍽️","Undhiyu","A winter speciality of mixed vegetables, beans and fenugreek dumplings, slow-cooked in spices. It is a star dish of Uttarayan."],
  ["kadhi","🍽️","Gujarati Kadhi","A smooth, thin yogurt and gram flour curry, gently sweet and tangy. It is eaten with khichdi or rice."],
  ["handvo","🍽️","Handvo","A savoury baked cake of rice, lentils and bottle gourd, with a golden crust and a tempering of sesame seeds."]
];
const women = [
  ["chaniya","👗","Chaniya Choli","A three-piece outfit of a mirror-worked blouse, a flared skirt and a dupatta. It is the signature Navratri dress."],
  ["bandhani","🧣","Bandhani","Tie-dyed dupattas and sarees dotted with tiny patterns. They are worn on festivals and weddings."],
  ["jewellery","📿","Traditional jewellery","Chunky silver and gold pieces such as necklaces, anklets, nose rings and bangles complete the look."]
];
const men = [
  ["kediyu","👕","Kediyu","A short, flared, pleated cotton top, tied with strings on the chest. It is worn by men for Garba and folk dances."],
  ["chorno","👖","Chorno","Fitted trousers worn with the Kediyu. They are loose at the hips and tight at the ankles, for easy movement while dancing."],
  ["turban","👳","Traditional turbans","A pagh or pheta in bright colours marks respect and identity, and styles vary across Kutch and Saurashtra."]
];
const art = [
  ["bandhani","🎨","Bandhani","Cloth is tied with thread into tiny knots before dyeing, leaving dotted patterns. The name comes from “bandh”, meaning to tie. Kutch and Jamnagar are famous for it."],
  ["patola","🎨","Patola","A double-ikat silk saree from Patan in which both warp and weft threads are dyed before weaving. One saree can take months to make."],
  ["kutch","🎨","Kutch embroidery","Bright threads, tiny mirrors and detailed stitches tell stories on bags, skirts and quilts. Each community has its own style."],
  ["rogan","🎨","Rogan art","Castor-oil paint is drawn with a metal rod onto cloth to make bold patterns. Today, only a few families in Nirona, Kutch keep this rare art alive."],
  ["ajrakh","🎨","Ajrakh printing","Block-printed cloth in deep indigo and red, with geometric patterns. Making it takes many steps of dyeing, washing and printing."]
];
// [imageKey, emoji, title, what, when, how]
const fests = [
  ["navratri","🎉","Navratri","A nine-night festival honouring Goddess Durga.","September–October","Whole neighbourhoods gather every night for Garba and Dandiya Raas in colourful chaniya cholis and kediyus."],
  ["uttarayan","🪁","Uttarayan","The kite festival that marks the sun's northward journey.","14 January","Rooftops fill with families flying kites, and Gujarat hosts a big International Kite Festival in Ahmedabad. People eat undhiyu, chikki and jalebi."],
  ["rannutsav","🌕","Rann Utsav","A cultural festival in the white salt desert of Kutch.","Roughly November to February","Visitors stay in tents, watch folk music and dance, shop for handicrafts, and walk on the glowing white desert under the full moon."],
  ["diwali","🪔","Diwali","The festival of lights, and the start of the new year for many Gujaratis.","October–November","Homes are lit with diyas, floors are decorated with rangoli, sweets are shared, and the next day is celebrated as Bestu Varas (Gujarati New Year)."],
  ["janmashtami","🎊","Janmashtami","The birthday of Lord Krishna.","August–September","Dwarka, Krishna's legendary kingdom, celebrates with midnight prayers and processions, and “matki-phod” (breaking the pot) events with songs and joy."]
];
const places = [
  ["unity","🗿","Statue of Unity","A 182-metre statue of Sardar Vallabhbhai Patel on the Narmada river in Kevadia, the tallest statue in the world. A viewing gallery looks over the Sardar Sarovar Dam."],
  ["rann","🏜️","Rann of Kutch","One of the largest salt deserts in the world. In winter it turns into a glittering white plain, and it hosts the Rann Utsav."],
  ["sabarmati","🕊️","Sabarmati Ashram","Mahatma Gandhi's home on the Sabarmati river in Ahmedabad. The Dandi March began from here in 1930."],
  ["modhera","☀️","Modhera Sun Temple","An 11th-century Solanki temple to the Sun God, built so the first rays of the sun fall on the sanctum at the equinoxes. It has a beautiful stepped tank (kund)."],
  ["dwarka","🛕","Dwarka","One of the Char Dham pilgrimage sites, on the western coast. It is linked with Lord Krishna, and the Dwarkadhish Temple is its centre."],
  ["somnath","🛕","Somnath","The first of the twelve Jyotirlinga shrines of Lord Shiva, next to the Arabian Sea. It has been rebuilt many times and is a symbol of resilience."],
  ["gir","🦁","Gir National Park","A forest in Saurashtra and the only place where Asiatic lions live in the wild. Safaris show lions, leopards, deer and many birds."]
];
const gallery = [
  ["garba","💃","Garba"],["bandhani","🧣","Bandhani"],["patola","🎨","Patola"],["kutch","🧵","Kutch embroidery"],
  ["food","🍽️","Gujarati food"],["rann","🏜️","Rann of Kutch"],["clothing","👗","Traditional clothing"],["navratri","🎉","Festivals"]
];
const facts = [
  ["🌊","Gujarat has the longest coastline of any mainland Indian state, about 1,600 km."],
  ["🦁","Gir is the only place in the world where Asiatic lions live in the wild."],
  ["🗿","The Statue of Unity, at 182 metres, is the tallest statue in the world."],
  ["💃","Garba of Gujarat was added to UNESCO's Intangible Cultural Heritage list in 2023."],
  ["🏛️","Ahmedabad became India's first UNESCO World Heritage City in 2017."],
  ["🥛","Amul, the dairy brand that started India's White Revolution, began in Anand, Gujarat."],
  ["🕊️","Mahatma Gandhi was born in Porbandar, Gujarat, in 1869."]
];
 
/* ============ RENDER ============ */
const card = ([k, e, t, d, x]) =>
  `<article class="card${x ? " tap" : ""}">${pic(k, e)}<h3>${t}</h3><p>${d}</p>${x ? `<p class="more">${x}</p>` : ""}</article>`;
const fill = (id, list) => $(id).innerHTML = list.map(card).join("");
fill("cultureGrid", culture); fill("danceGrid", dance); fill("foodGrid", food);
fill("womenGrid", women); fill("menGrid", men); fill("artGrid", art);
 
const sumHtml = (k, e, t) => `<summary><span>${e}</span> ${t}</summary>`;
$("festList").innerHTML = fests.map(([k, e, t, w, when, how]) =>
  `<details>${sumHtml(k, e, t)}<div class="dbody">${pic(k, e)}<p><b>What:</b> ${w}</p><p><b>When:</b> ${when}</p><p><b>How Gujarat celebrates:</b> ${how}</p></div></details>`).join("");
$("placeList").innerHTML = places.map(([k, e, t, d]) =>
  `<details>${sumHtml(k, e, t)}<div class="dbody">${pic(k, e)}<p>${d}</p></div></details>`).join("");
$("galGrid").innerHTML = gallery.map(([k, e, t]) =>
  `<button data-k="${k}" data-t="${t}">${pic(k, e)}<span>${t}</span></button>`).join("");
$("factList").innerHTML = facts.map(([e, t]) => `<div class="fact"><i>${e}</i><p>${t}</p></div>`).join("");
$("lionPic").innerHTML = `<img loading="lazy" src="${src("lion", 800)}" alt="Asiatic lion" onerror="this.remove()" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1">`;
 
/* ============ INTERACTION ============ */
// Expand culture / dance cards
document.querySelectorAll(".card.tap").forEach(c => c.addEventListener("click", () => c.classList.toggle("open")));
 
// Only one festival / place open at a time
document.querySelectorAll(".list").forEach(list => list.addEventListener("toggle", ev => {
  if (ev.target.open) list.querySelectorAll("details").forEach(d => { if (d !== ev.target) d.open = false; });
}, true));
 
// Menu
const menu = $("menu"), burger = $("burger");
burger.addEventListener("click", () => {
  const o = menu.classList.toggle("open");
  burger.setAttribute("aria-expanded", o);
  burger.textContent = o ? "✕" : "☰";
});
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  menu.classList.remove("open"); burger.textContent = "☰"; burger.setAttribute("aria-expanded", false);
}));
 
// Lightbox
const lb = $("lb"), lbImg = $("lbImg");
$("galGrid").addEventListener("click", ev => {
  const b = ev.target.closest("button"); if (!b) return;
  lbImg.src = src(b.dataset.k, 1000); lbImg.alt = b.dataset.t;
  lbImg.onerror = () => { lbImg.removeAttribute("src"); };
  $("lbCap").textContent = b.dataset.t; lb.hidden = false;
});
const closeLb = () => lb.hidden = true;
lb.addEventListener("click", closeLb);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLb(); });
 
// Back-to-top button
const up = $("up");
addEventListener("scroll", () => up.classList.toggle("show", scrollY > 500), { passive: true });
up.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));