onload = function() {
    var click_cnt = 0;
    var $html = document.getElementsByTagName("html")[0];
    var $body = document.getElementsByTagName("body")[0];
    $html.onclick = function(e) {
    var $elem = document.createElement("b");
    $elem.style.color = "#E94F06";
    $elem.style.zIndex = 9999;
    $elem.style.position = "absolute";
    $elem.style.select = "none";
    var x = e.pageX;
    var y = e.pageY;
    $elem.style.left = (x - 10) + "px";
    $elem.style.top = (y - 20) + "px";
    clearInterval(anim);
    switch (++click_cnt) {
     case 3:
     $elem.innerText = "OωO";
     break;
     case 5:
     $elem.innerText = "(๑•́ ∀ •̀๑)";
     break;
     case 7:
     $elem.innerText = "(๑•́ ₃ •̀๑)";
     break;
     case 9:
     $elem.innerText = "(๑•̀_•́๑)";
     break;
     case 11:
     $elem.innerText = "（￣へ￣）";
     break;
     case 13:
     $elem.innerText = "(╯°口°)╯(┴—┴";
     break;
     case 17:
     $elem.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
     break;
     case 19:
     $elem.innerText = "╮(｡>口<｡)╭";
     break;
     case 21:
     $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
     break;
     case 100:
     case 101:
     case 102:
     case 103:
     case 104:
     case 105:
     $elem.innerText = "(ꐦ°᷄д°᷅)";
     break;
     default:
     $elem.innerText = "❤";
     break;
    }
    $elem.style.fontSize = Math.random() * 10 + 8 + "px";
    var increase = 0;
    var anim;
    setTimeout(function() {
     anim = setInterval(function() {
     if (++increase == 150) {
      clearInterval(anim);
      $body.removeChild($elem);
     }
     $elem.style.top = y - 20 - increase + "px";
     $elem.style.opacity = (150 - increase) / 120;
     }, 8);
    }, 70);
    $body.appendChild($elem);
    };
   };