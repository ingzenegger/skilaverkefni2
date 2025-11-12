////Ætla að nota kommentin til að útskýra fyrir sjálfri mér hvað ég er að gera jafn óðum.
// Hugmyndin er að þú byrjar að nota random number generator til að fá einhverja tölu milli 1 og 1000 og svo áttu að nota vasareikninn til að fá sömu tölu og þá dansar grísinn. Ef þú klúðrar því, we get the sads.

//random number generator til að setja áskorun
function randomNumber() {
  let goalNumber = Math.floor(Math.random() * 100) + 1;
  document.getElementById("generator").textContent = goalNumber;
}
//Allskonar dót sem ég þarf að nota const-að:
////Sækja öll numBox undir heitinu numTakkar:
const numTakkar = document.querySelectorAll(".numBox");
console.log(numTakkar);
////Sækja alla reikniaðgerðar div-in undir reiknTakkar :
const reiknTakkar = document.querySelectorAll(".reiknAdgerd");
console.log(reiknTakkar);
////sækja 'clear' og '=' boxin (naming things really is a bitch, pardon my french):
const otherFuckers = document.querySelectorAll(".the-other-fuckers");
console.log(otherFuckers);
////sækja reikniglugga content:
const svarBoxStrengur = document.getElementById("calc-svar-box").textContent;
console.log(svarBoxStrengur);
const svarBox = document.getElementById("calc-svar-box");
////sækja random number generator content:
const goalNum = document.getElementById("generator").textContent;
console.log(goalNum);

//hér eitthvað svona CSS event dútl:
//// HOVER BORDER -  bæta event listener á öll numBoxin sem bætir við hvítum ramma við mouse hover og setur aftur á fyrri stillingu þegar músin fer aftur:
numTakkar.forEach(function (takki) {
  takki.addEventListener("mouseover", function () {
    takki.style.border = "3px solid white";
  });
  takki.addEventListener("mouseout", function () {
    takki.style.border = "";
  });
});
//// og svo eins event listener fyrir reikniaðgerðartakkana, nema svartur rammi við mouse hover til að matcha textalitinn.
reiknTakkar.forEach(function (takki) {
  takki.addEventListener("mouseover", function () {
    takki.style.border = "3px solid black";
  });
  takki.addEventListener("mouseout", function () {
    takki.style.border = "";
  });
});
////og svo sama fyrir other fuckers nema núna background í stað border - örugglega til auðveldari leið fyrir þetta en læri vonandi eitthvað af því að skrifa sama stuffið aftur og aftur...we can always hope
otherFuckers.forEach(function (takki) {
  takki.addEventListener("mouseover", function () {
    takki.style.backgroundColor = "white";
  });
  takki.addEventListener("mouseout", function () {
    takki.style.backgroundColor = "";
  });
});

//Svo þarf að vera hægt að slá eitthvað inn í gluggann til að reikna:
////Byrja á function sem tekur text content úr numboxi þegar smellt er á það og bætir því inn í svarBox
numTakkar.forEach(function (takki) {
  takki.addEventListener("click", function () {
    const div = document.getElementById("calc-svar-box");
    const tala = takki.textContent;
    console.log(tala);
    div.append(tala);
  });
});

//// function sem tekur tákn úr reiknAdgerd tökkum og bætir því í svarBox gluggann
reiknTakkar.forEach(function (takki) {
  takki.addEventListener("click", function () {
    const div = document.getElementById("calc-svar-box");
    const adgerd = takki.textContent;
    console.log(adgerd);
    div.append(" " + adgerd + " ");
    //div.append(adgerd);
  });
});

////function á clear div sem hreinsar content, þarf jú líka stundum að stroka út/byrja upp á nýtt.

function clearBox () {
document.getElementById("calc-svar-box").innerHTML = "";
document.getElementById("reward-box")
.innerHTML = `<img src="/gunterStill2.jpg" alt="" id="waitPiggy" />`;
}
document.getElementById("clear-box").addEventListener('click', clearBox)

// document.getElementById("clear-box").addEventListener("click", function () {
//   document.getElementById("calc-svar-box").innerHTML = "";
//   document.getElementById(
//     "reward-box"
//   ).innerHTML = `<img src="/gunterStill2.jpg" alt="" id="waitPiggy" />`;
// });

//before the grand finale þarf að setja upp fúnksjónir fyrir það sem gerist þegar okkur tekst eða mistekst að fá rétta niðurstöðu:
////reward function
function getReward() {
  const reward = document.getElementById("reward-box");
  reward.innerHTML = `<img src="/pigsDance.gif" alt="" id="dancePiggy" />`;
}

//// fail function
function fail() {
  const reward = document.getElementById("reward-box");
  reward.innerHTML = `<img src="/disappointed-pig.gif" alt="" id="dancePiggy" />`;
}

//then the grand finale, breytum strengnum sem notandi hefur slegið inn í dæmi sem við getum unnið með og sjáum afleiðingar.

////setjum function á '=' takkann.
document.getElementById("box-reikna").addEventListener("click", function () {
  const daemi = document.getElementById("calc-svar-box").textContent;
  const nums = daemi.split(" ");
  console.log(nums);
  const challenge = document.getElementById("generator").textContent;
  //////nú er ég búin að sækja tölurnar og táknið sem notandi hefur slegið inn sem array, en tölurnar eru ennþá strengir, þar sem við erum bara með tvær tölur (Hjúkket!) þá getum við gert það individually. með lengra array hefðum við þurft að taka eð lúppu eða map eitthvað dæmi...
  nums[0] = Number(nums[0]);
  nums[2] = Number(nums[2]);
  //testing:
  console.log(typeof nums[0], nums[0], typeof nums[2], nums[2]);
  console.log(typeof nums[1], nums[1]);
  ///þá er að framkvæma actual útreikninga og afleiðingar...en byrjum á að tryggja að notandi reyni ekki að gera flóknari dæmi en við ráðum við:
  if (nums.length > 3) {
    alert("sláðu inn dæmi með 2 tölum")
    clearBox()
    // document.getElementById("calc-svar-box").textContent =
    //   "sláðu inn dæmi með 2 tölum";
  } else if (nums.includes("+")) {
    let svar = nums[0] + nums[2];
    console.log(svar);
    //Nú er ég búin að reikna dæmið, svo er að skila því aftur í calc svar boxið
    document.getElementById("calc-svar-box").textContent = svar;
    //og svo vil ég senda út verðlaunafunctionið ef svarið er rétt en fail functionið ef ekki rétt:
    if (svar == challenge) {
      getReward();
    } else {
      fail();
    }
  } else if (nums.includes("-")) {
    let svar = nums[0] - nums[2];
    document.getElementById("calc-svar-box").textContent = svar;
    if (svar == challenge) {
      getReward();
    } else {
      fail();
    }
  } else if (nums.includes("x")) {
    let svar = nums[0] * nums[2];
    document.getElementById("calc-svar-box").textContent = svar;
    if (svar == challenge) {
      getReward();
    } else {
      fail();
    }
  } else if (nums.includes("/")) {
    let svar = nums[0] / nums[2];
    document.getElementById("calc-svar-box").textContent = svar;
    if (svar == challenge) {
      getReward();
    } else {
      fail();
    }
  } else {
    alert("sláðu inn dæmi með 2 tölum")
    clearBox()
    // document.getElementById("calc-svar-box").textContent =
    //   "sláðu inn dæmi með 2 tölum";
  }
});
