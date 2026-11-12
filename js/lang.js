(function () {
  var KEY = "kiaa-forum-2026-lang";
  var titles = {
    zh: "2026 KIAA Forum：面向SKA的星际介质科学",
    en: "2026 KIAA Forum: Interstellar Medium Science for the SKA"
  };
  var qrAlt = {
    zh: "会议注册二维码",
    en: "Registration QR code"
  };

  function apply(lang) {
    if (lang !== "en" && lang !== "zh") lang = "zh";
    document.body.classList.remove("lang-zh", "lang-en");
    document.body.classList.add(lang === "en" ? "lang-en" : "lang-zh");
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    document.title = titles[lang];
    var qr = document.getElementById("qr");
    if (qr) qr.alt = qrAlt[lang];
    var buttons = document.querySelectorAll("[data-set-lang]");
    for (var i = 0; i < buttons.length; i++) {
      var on = buttons[i].getAttribute("data-set-lang") === lang;
      buttons[i].setAttribute("aria-pressed", on ? "true" : "false");
    }
    try {
      localStorage.setItem(KEY, lang);
    } catch (e) {}
  }

  var buttons = document.querySelectorAll("[data-set-lang]");
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      apply(this.getAttribute("data-set-lang"));
    });
  }

  var saved = "zh";
  try {
    saved = localStorage.getItem(KEY) || "zh";
  } catch (e) {}
  apply(saved);
})();
