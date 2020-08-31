// Initialize
    var Tooltips = document.getElementsByClassName('TooltipTrigger');

    // Track all tooltips trigger
    for (var i = 0; i < Tooltips.length; i++) {

      // Event Handler
      Tooltips[i].addEventListener("mouseenter", function(ev) {
        ev.preventDefault();
        this.style.position = "relative";
        this.innerHTML = this.innerHTML + "<div class='Tooltips'><p class='" + this.getAttribute("data-position") + "'>" + this.getAttribute("data-tooltips") + "</p></div>";
      });
      Tooltips[i].addEventListener("mouseleave", function(ev) {
        ev.preventDefault();
        this.removeAttribute("style");
        this.innerHTML = this.innerHTML.replace(/<div[^]*?<\/div>/, '');;
      });

    }

    var Tooltips_Bio = document.getElementsByClassName('Tooltip_BioTrigger');

    // Track all tooltips trigger
    for (var i = 0; i < Tooltips_Bio.length; i++) {

      // Event Handler
      Tooltips_Bio[i].addEventListener("mouseenter", function(ev) {
        ev.preventDefault();
        this.style.position = "relative";
        this.innerHTML = this.innerHTML + "<div class='Tooltips' style='min-width: 500px;'><p style='-webkit-transform: translate(-0%, -50%); transform: translate(-125%, 110%);' class='" + this.getAttribute("data-position") + "'>" + this.getAttribute("data-tooltips") + "</p></div>";
      });
      Tooltips_Bio[i].addEventListener("mouseleave", function(ev) {
        ev.preventDefault();
        this.removeAttribute("style");
        this.innerHTML = this.innerHTML.replace(/<div[^]*?<\/div>/, '');;
      });

    }

    var Tooltips_Acre = document.getElementsByClassName('Tooltip_AcreTrigger');

    // Track all tooltips trigger
    for (var i = 0; i < Tooltips_Acre.length; i++) {

      // Event Handler
      Tooltips_Acre[i].addEventListener("mouseenter", function(ev) {
        ev.preventDefault();
        this.style.position = "relative";
        this.innerHTML = this.innerHTML + "<div class='Tooltips' style='min-width: 500px;'><p style='-webkit-transform: translate(-0%, -50%); transform: translate(-120%, 120%);' class='" + this.getAttribute("data-position") + "'>" + this.getAttribute("data-tooltips") + "</p></div>";
      });
      Tooltips_Acre[i].addEventListener("mouseleave", function(ev) {
        ev.preventDefault();
        this.removeAttribute("style");
        this.innerHTML = this.innerHTML.replace(/<div[^]*?<\/div>/, '');;
      });

    }

    var Tooltips_Guar = document.getElementsByClassName('Tooltip_GuarTrigger');

    // Track all tooltips trigger
    for (var i = 0; i < Tooltips_Guar.length; i++) {

      // Event Handler
      Tooltips_Guar[i].addEventListener("mouseenter", function(ev) {
        ev.preventDefault();
        this.style.position = "relative";
        this.innerHTML = this.innerHTML + "<div class='Tooltips' style='min-width: 500px;'><p style='-webkit-transform: translate(-0%, -50%); transform: translate(-110%, 110%);' class='" + this.getAttribute("data-position") + "'>" + this.getAttribute("data-tooltips") + "</p></div>";
      });
      Tooltips_Guar[i].addEventListener("mouseleave", function(ev) {
        ev.preventDefault();
        this.removeAttribute("style");
        this.innerHTML = this.innerHTML.replace(/<div[^]*?<\/div>/, '');;
      });

    }

    var Tooltips_Fires = document.getElementsByClassName('Tooltip_FiresTrigger');

    // Track all tooltips trigger
    for (var i = 0; i < Tooltips_Fires.length; i++) {

      // Event Handler
      Tooltips_Fires[i].addEventListener("mouseenter", function(ev) {
        ev.preventDefault();
        this.style.position = "relative";
        this.innerHTML = this.innerHTML + "<div class='Tooltips' style='min-width: 1000px;'><p style='-webkit-transform: translate(-0%, -50%); transform: translate(-145%, 120%);' class='" + this.getAttribute("data-position") + "'>" + this.getAttribute("data-tooltips") + "</p></div>";
      });
      Tooltips_Fires[i].addEventListener("mouseleave", function(ev) {
        ev.preventDefault();
        this.removeAttribute("style");
        this.innerHTML = this.innerHTML.replace(/<div[^]*?<\/div>/, '');;
      });

    }
