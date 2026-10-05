/* ============ IMAGES ============
   Photos are loaded from Wikipedia/Wikimedia Commons (free, public, no login) using each
   article's main photograph, so links cannot go stale. Add your own photo for any key in OVERRIDE
   (paste a full https:// image link). If an image cannot load, a coloured emoji tile is shown. */
const WIKI = {
  gujarat:["Culture of Gujarat","Gujarat"], hospitality:["Gujarati cuisine"], language:["Gujarati language"],
  music:["Dhol"], folk:["Bhavai","Garba (dance)"], community:["Culture of Gujarat"],
  garba:["Garba (dance)"], dandiya:["Dandiya Raas"],
  dhokla:["Dhokla"], khandvi:["Khandvi"], thepla:["Thepla"], fafda:["Fafda"], undhiyu:["Undhiyu"], kadhi:["Kadhi"], handvo:["Handvo"],
  chaniya:["Chaniya choli"], bandhani:["Bandhani"], jewellery:["Kutch embroidery","Chaniya choli"],
  kediyu:["Kediyu"], chorno:["Kediyu"], turban:["Turban"],
  patola:["Patola"], kutch:["Kutch embroidery"], rogan:["Rogan painting"], ajrakh:["Ajrakh"],
  navratri:["Navaratri"], uttarayan:["Uttarayan"], rannutsav:["Rann Utsav","Dhordo"], diwali:["Diwali"],
  janmashtami:["Janmashtami","Dwarkadhish Temple"],
  unity:["Statue of Unity"], rann:["Great Rann of Kutch","Rann of Kutch"], sabarmati:["Sabarmati Ashram"],
  modhera:["Modhera Sun Temple","Sun Temple, Modhera"], dwarka:["Dwarkadhish Temple"], somnath:["Somnath temple","Somnath Temple"],
  gir:["Gir National Park"], lion:["Asiatic lion"], food:["Gujarati cuisine"], clothing:["Chaniya choli"]
};
const OVERRIDE = {fafda: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Jalebi_Fafda.jpg",

  community: "https://commons.wikimedia.org/wiki/Special:Redirect/file/50000_people_celebrating_navrathri_with_garba_dance_in_Vadodara,_India.jpg",
  patola: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Gujarat_patola.jpg",

  chorno: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Traditional_Folk_dance_garba_dress.jpg",

  ajrakh: "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ajrak.jpg" }; // e.g. OVERRIDE.garba = "https://example.com/my-garba.jpg";
const THUMB = {};
 
/* ============ CONTENT ============ */
// [imageKey, emoji, title, text, "Did you know" fact]
const culture = [
  ["hospitality","🤝","Hospitality","Guests in Gujarat are welcomed like family. Water, tea and snacks are offered first, and visitors are rarely allowed to leave without eating. This warmth is a big reason people love visiting.","Gujarati homes often follow “Atithi Devo Bhava”, meaning “the guest is like God”."],
  ["language","🗣️","Language","Gujarati belongs to the Indo-Aryan family and has its own script, written without the top line used in Devanagari. It is spoken by tens of millions of people in Gujarat and by Gujarati communities around the world.","The 15th-century saint-poet Narsinh Mehta is called the Adi Kavi (first poet) of Gujarati."],
  ["music","🎶","Music","Dhol drums, harmonium, tabla and folk songs fill Gujarat's celebrations. Garba songs, bhajans and haveli sangeet are sung in groups, so everyone joins in.","Haveli sangeet is a devotional music style linked with Krishna temples called havelis."],
  ["folk","🪘","Folk traditions","Folk arts such as Garba, Raas and Bhavai grew out of village life and storytelling. They bring communities together at festivals, weddings and fairs.","Bhavai is an old folk theatre of Gujarat that mixes humour, music and social messages."],
  ["community","🏘️","Community life","Gujarat is home to many communities, including Jain, Parsi, Muslim, Hindu and tribal groups. The state has long been known for trade and enterprise, and for caring about charity and learning.","Gujarat's merchants traded across the Arabian Sea for centuries from ports like Surat, Khambhat and Mandvi."]
];
const dance = [
  ["garba","💃","Garba","Garba is a circular folk dance performed around a lamp or an image of the goddess during Navratri. Dancers move in rings with claps and simple steps, and the speed builds as the night goes on. The circle stands for the cycle of life and time, and everyone, whatever their age, is welcome to join.","The word comes from the Sanskrit garbha (womb). UNESCO added “Garba of Gujarat” to its Intangible Cultural Heritage list in December 2023."],
  ["dandiya","🥁","Dandiya Raas","Dandiya Raas is a lively dance in which partners strike decorated sticks together in rhythm with the dhol. It is played in Navratri, usually after the Garba rounds, and is linked with the story of Goddess Durga and with Krishna's playful Raas.","The sticks are said to stand for the swords of Goddess Durga. Dancers often dress in Chaniya Choli and Kediyu."]
];
const food = [
  ["dhokla","🍽️","Dhokla","A soft, spongy steamed snack made from a fermented batter of rice and chickpeas. It is topped with mustard seeds, curry leaves and green chillies, and eaten with chutney. It is Gujarat's best-known snack.","Khaman is a close cousin made with chickpea (besan) flour."],
  ["khandvi","🍽️","Khandvi","Thin sheets of gram flour and buttermilk batter are cooked, spread, rolled into tiny swirls and finished with coconut, coriander and tempered mustard seeds. It is silky, light and mildly tangy.","The batter must be spread while it is still hot, so it takes skill."],
  ["thepla","🍽️","Thepla","A soft flatbread made with wheat flour, fenugreek (methi) leaves and spices. It stays fresh for days, so it is the classic travel food, eaten with pickle, yogurt or chundo.","Gujaratis carry theplas on train journeys and holidays."],
  ["fafda","🍽️","Fafda-Jalebi","Crisp gram flour fafda is eaten with sweet, syrupy jalebi, a papaya salad called sambharo and fried green chillies. The mix of salty, crunchy and sweet is a perfect Gujarati combination.","It is a traditional Sunday breakfast and a favourite on Dussehra."],
  ["undhiyu","🍽️","Undhiyu","A winter speciality of seasonal vegetables, beans and fenugreek dumplings, slow-cooked with spices and coconut. It is a famous dish of Surat.","The name comes from “undhu”, meaning upside down, because it was traditionally cooked upside down in earthen pots. It is a must at Uttarayan."],
  ["kadhi","🍽️","Gujarati Kadhi","A smooth, thin curry of yogurt and gram flour, lightly sweet from sugar or jaggery and tangy from curd, tempered with cloves, cinnamon and ginger. It is served with rice or khichdi.","Unlike kadhi in many other regions, the Gujarati version is gently sweet."],
  ["handvo","🍽️","Handvo","A savoury baked or pan-cooked cake of rice, lentils and grated bottle gourd, with a golden crust and sesame seeds on top. It is nutritious and filling.","It is often eaten at tea-time with chutney or tea."]
];
const women = [
  ["chaniya","👗","Chaniya Choli","The signature outfit of Navratri: a mirror-worked blouse (choli), a wide skirt (chaniya) and a dupatta. Its bright colours and embroidery look beautiful when dancers twirl.","The tiny round mirrors are known as abhla work and are especially popular in Kutch."],
  ["bandhani","🧣","Bandhani","Tie-dyed sarees and dupattas covered in small dotted patterns. They are worn on festivals and weddings, and the red and yellow Gharchola is a traditional bridal saree.","A single piece can have thousands of tiny hand-tied knots."],
  ["jewellery","📿","Traditional jewellery","Chunky silver and gold necklaces, anklets, bangles and nose rings finish the look. In Kutch and rural Gujarat, jewellery also shows a woman's community and village.","Heavy silver jewellery is a hallmark of the tribal communities of Kutch."]
];
const men = [
  ["kediyu","👕","Kediyu","A short, flared cotton top with pleats and ties at the chest, worn by men for Garba and folk dances. Its wide skirt flows when dancers spin.","Kediyu is the traditional men's wear for Garba, along with the chorno."],
  ["chorno","👖","Chorno","Trousers worn with the Kediyu. They are roomy at the top and fitted below the knees, so dancers can move freely.","Chorno and Kediyu together make the classic Gujarati folk costume for men."],
  ["turban","👳","Traditional turbans","The pagh or pagdi, a long cloth wrapped in bright colours, shows respect and identity. Styles and colours differ between Kutch, Saurashtra and other regions.","In some communities, a turban's style shows the wearer's village or caste."]
];
const art = [
  ["bandhani","🎨","Bandhani","Cloth is pinched and tied with thread into tiny knots before dyeing, so the tied spots stay undyed and form dotted patterns. The name comes from “bandh”, meaning to tie. Kutch and Jamnagar are famous for it, and it is an important part of Gujarati weddings.","Bandhani has been practised for many centuries."],
  ["patola","🎨","Patola","Patola from Patan is a silk saree woven in double ikat: both the warp and weft threads are dyed in the pattern before weaving, so the design appears on both sides. It can take months to make, and it is considered one of the most prized sarees in India.","The Patan Patola has a Geographical Indication (GI) tag."],
  ["kutch","🎨","Kutch embroidery","Different communities of Kutch, such as the Rabari, Ahir and Mutwa, each have their own stitches, bright threads and tiny mirrors. Women traditionally embroider bags, skirts, quilts and wall hangings that tell stories of their lives.","Many of these designs are passed from mother to daughter."],
  ["rogan","🎨","Rogan art","Rogan art is made by boiling castor oil into a thick coloured paste, which is then pulled into fine threads with a metal rod and drawn onto cloth in intricate patterns. It is now practised by only a few families in Nirona, Kutch.","A Rogan “Tree of Life” was presented to US President Barack Obama in 2014."],
  ["ajrakh","🎨","Ajrakh printing","Ajrakh is a block-printed cloth made with natural dyes, mainly deep indigo and madder red, in geometric patterns. Making a single piece takes many steps of printing, dyeing and washing.","Ajrakhpur in Kutch was set up by Ajrakh craftspeople after the 2001 earthquake."]
];
// [imageKey, emoji, title, what, when, how Gujarat celebrates, fact]
const fests = [
  ["navratri","🎉","Navratri","A nine-night festival that honours the goddess in her nine forms. It matters because it brings entire neighbourhoods together every night.","September–October","Gujarat celebrates with Garba and Dandiya Raas every night, in colourful Chaniya Choli and Kediyu, around a lit lamp or the goddess's image.","Gujarat's Navratri is often called the world's longest dance festival."],
  ["uttarayan","🪁","Uttarayan","The kite festival that marks the sun's journey to the north, also known as Makar Sankranti. It celebrates the end of winter and the start of longer days.","14 January (and Vasi Uttarayan on the 15th)","Families spend the whole day on rooftops flying kites, calling out “Kai po che!” when they cut another kite. They eat undhiyu, chikki and jalebi, and Ahmedabad hosts an International Kite Festival.","The sky above Gujarati cities is filled with thousands of kites on this day."],
  ["rannutsav","🌕","Rann Utsav","A cultural festival in the great white salt desert of Kutch. It matters because it supports local artisans and has brought world attention to Kutch.","Around November to February","Visitors stay in a Tent City near Dhordo, watch folk music and dance, buy Kutch handicrafts and see the white desert glow under a full moon.","Dhordo was named a Best Tourism Village by UN Tourism in 2023."],
  ["diwali","🪔","Diwali","The festival of lights, symbolising the victory of light over darkness. It is also the time when many Gujarati businesses begin a new accounting year.","October–November","Homes are lit with diyas and rangoli, families share sweets and savouries, and the day after Diwali is celebrated as Bestu Varas, the Gujarati New Year.","Gujaratis greet each other with “Saal Mubarak” on New Year's Day."],
  ["janmashtami","🎊","Janmashtami","The birthday of Lord Krishna, celebrated with great joy in Krishna's home state of Gujarat. It matters because Krishna is linked with Dwarka, which is believed to be his kingdom.","August–September","Temples at Dwarka and Dakor hold midnight prayers, devotional songs and processions. In many towns, groups form human pyramids to break a hanging pot of curd.","Dwarkadhish Temple in Dwarka is among the major Krishna temples."]
];
const places = [
  ["unity","🗿","Statue of Unity","At 182 metres, this statue of Sardar Vallabhbhai Patel is the tallest in the world. It stands on the Narmada river near Kevadia and honours the leader who helped unite India's princely states. A viewing gallery gives views of the Sardar Sarovar Dam and the Satpura-Vindhya hills.","It was inaugurated on 31 October 2018, Patel's birth anniversary."],
  ["rann","🏜️","Rann of Kutch","One of the world's largest salt deserts. It fills with water in the monsoon and dries into a dazzling white plain in winter, which is when the Rann Utsav takes place.","It is also an important breeding ground for flamingos."],
  ["sabarmati","🕊️","Sabarmati Ashram","Mahatma Gandhi lived here, on the banks of the Sabarmati river in Ahmedabad, from 1917 to 1930. The ashram was the centre of India's non-violent freedom movement.","The Dandi (Salt) March of 1930 began from here and covered about 390 km."],
  ["modhera","☀️","Modhera Sun Temple","Built in 1026–27 CE during the Solanki dynasty, it is dedicated to Surya, the Sun God. It has a hall of carved pillars, an assembly hall and a large stepped tank (kund) with many small shrines.","The temple is designed so that the first rays of the sun fall on the sanctum at the equinoxes."],
  ["dwarka","🛕","Dwarka","A historic coastal town on the western tip of Gujarat. It is one of the four Char Dham pilgrimage sites, and the Dwarkadhish Temple is dedicated to Lord Krishna, said to have ruled from here.","The temple's flag is changed several times a day by devotees."],
  ["somnath","🛕","Somnath","Considered the first of the twelve Jyotirlinga shrines of Lord Shiva, on the Arabian Sea coast. The temple has been destroyed and rebuilt several times and is seen as a symbol of resilience.","The present temple was completed in 1951."],
  ["gir","🦁","Gir National Park","A dry deciduous forest in Saurashtra and the last home of the Asiatic lion. Jeep safaris show lions, leopards, deer, crocodiles and over 300 bird species.","The local Maldhari herders have lived alongside the lions for generations."]
];
const gallery = [
  ["garba","💃","Garba"],["bandhani","🧣","Bandhani"],["patola","🎨","Patola"],["kutch","🧵","Kutch embroidery"],
  ["food","🍽️","Gujarati food"],["rann","🏜️","Rann of Kutch"],["clothing","👗","Traditional clothing"],["navratri","🎉","Festivals"]
];
const facts = [
  ["🌊","Gujarat has the longest coastline of any mainland Indian state, about 1,600 km."],
  ["🦁","Gir is the only place in the world where Asiatic lions live in the wild."],
  ["🗿","The Statue of Unity, at 182 metres, is the tallest statue in the world."],
  ["💃","Garba of Gujarat joined UNESCO's Intangible Cultural Heritage list in 2023."],
  ["🏛️","Ahmedabad became India's first UNESCO World Heritage City in 2017."],
  ["🧱","Dholavira, a Harappan city, became a UNESCO World Heritage site in 2021, and Rani ki Vav in Patan in 2014."],
  ["🥛","Amul, the dairy cooperative that began India's White Revolution, was born in Anand, Gujarat."],
  ["🕊️","Mahatma Gandhi was born in Porbandar, Gujarat, in 1869."]
];
 
/* ============ RENDER ============ */
const $ = id => document.getElementById(id);
const pic = (k, e, a, cls = "") => `<div class="pic ${cls}" data-k="${k}" data-e="${e}" data-a="${a}"></div>`;
const card = ([k, e, t, d, f], tap) =>
  `<article class="card${tap ? " tap" : ""}">${pic(k, e, t + " in Gujarat")}<h3>${t}</h3><p>${d}</p>` +
  (f ? `<p class="fact-line${tap ? " more" : ""}">💡 ${f}</p>` : "") + `</article>`;
const fill = (id, list, tap) => $(id).innerHTML = list.map(x => card(x, tap)).join("");
fill("cultureGrid", culture, true); fill("danceGrid", dance, true); fill("foodGrid", food);
fill("womenGrid", women); fill("menGrid", men); fill("artGrid", art);
 
const sum = (e, t) => `<summary><span>${e}</span> ${t}</summary>`;
$("festList").innerHTML = fests.map(([k, e, t, w, when, how, f]) =>
  `<details>${sum(e, t)}<div class="dbody">${pic(k, e, t + " festival in Gujarat")}<p><b>What:</b> ${w}</p><p><b>When:</b> ${when}</p><p><b>How Gujarat celebrates:</b> ${how}</p><p class="fact-line">💡 ${f}</p></div></details>`).join("");
$("placeList").innerHTML = places.map(([k, e, t, d, f]) =>
  `<details>${sum(e, t)}<div class="dbody">${pic(k, e, t + ", Gujarat")}<p>${d}</p><p class="fact-line">💡 ${f}</p></div></details>`).join("");
$("galGrid").innerHTML = gallery.map(([k, e, t]) =>
  `<button data-k="${k}" data-t="${t}" aria-label="Enlarge ${t}">${pic(k, e, t + " in Gujarat")}<span>${t}</span></button>`).join("");
$("factList").innerHTML = facts.map(([e, t]) => `<div class="fact"><i>${e}</i><p>${t}</p></div>`).join("");
 
/* ============ IMAGE LOADING ============ */
const API = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&redirects=1&prop=pageimages&piprop=thumbnail&pithumbsize=500&pilimit=50&titles=";
const io = "IntersectionObserver" in window ? new IntersectionObserver((es) => es.forEach(en => {
  if (en.isIntersecting) { io.unobserve(en.target); show(en.target); }
}), { rootMargin: "300px" }) : null;
function show(el) {
  const u = THUMB[el.dataset.k];
  if (!u || el.querySelector("img")) return;
  const i = new Image(); i.alt = el.dataset.a || ""; i.decoding = "async";
  i.onload = () => el.appendChild(i); i.src = u;
}
function paint() {
  document.querySelectorAll(".pic[data-k]").forEach(el => io ? io.observe(el) : show(el));
}
async function loadImages() {
  paint();
  try {
    const titles = [...new Set(Object.values(WIKI).flat())];
    const q = (await (await fetch(API + encodeURIComponent(titles.join("|")))).json()).query;
    const to = {}, th = {};
    [...(q.normalized || []), ...(q.redirects || [])].forEach(m => to[m.from] = m.to);
    Object.values(q.pages || {}).forEach(p => { if (p.thumbnail) th[p.title] = p.thumbnail.source; });
    const res = t => { let n = t; for (let i = 0; i < 3 && to[n]; i++) n = to[n]; return th[n]; };
    Object.keys(WIKI).forEach(k => THUMB[k] = OVERRIDE[k] || WIKI[k].map(res).find(Boolean));
  } catch (e) { /* offline: tiles stay */ }
  Object.keys(OVERRIDE).forEach(k => THUMB[k] = OVERRIDE[k]);
  document.querySelectorAll(".pic[data-k]").forEach(el => { if (!el.querySelector("img") && isNear(el)) show(el); });
  paint();
}
const isNear = el => { const r = el.getBoundingClientRect(); return r.top < innerHeight + 300 && r.bottom > -300 && r.width > 0; };
loadImages();
 
/* ============ INTERACTION ============ */
document.querySelectorAll(".card.tap").forEach(c => c.addEventListener("click", () => c.classList.toggle("open")));
 
document.querySelectorAll(".list").forEach(list => list.addEventListener("toggle", ev => {
  if (ev.target.open) list.querySelectorAll("details").forEach(d => { if (d !== ev.target) d.open = false; });
}, true));
 
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
  const base = THUMB[b.dataset.k];
  lbImg.removeAttribute("src"); lbImg.alt = b.dataset.t + " in Gujarat";
  if (base) {
    lbImg.onerror = () => { lbImg.onerror = null; lbImg.src = base; };
    lbImg.src = base.replace(/\/\d+px-/, "/960px-");
  }
  $("lbCap").textContent = base ? b.dataset.t : b.dataset.t + " (photo unavailable offline)";
  lb.hidden = false;
});
const closeLb = () => lb.hidden = true;
lb.addEventListener("click", closeLb);
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLb(); });
 
// Back-to-top
const up = $("up");
addEventListener("scroll", () => up.classList.toggle("show", scrollY > 500), { passive: true });
up.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));