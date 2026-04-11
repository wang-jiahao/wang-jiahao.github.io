(function ($) {
  $(function () {
    var $nav = $("#site-nav");
    if ($nav.length === 0) return;

    var $btn = $nav.find("button").first();
    var $hlinks = $nav.find(".hidden-links").first();

    function closeMenu() {
      if ($btn.hasClass("close")) $btn.removeClass("close");
      if ($hlinks.length && !$hlinks.hasClass("hidden")) $hlinks.addClass("hidden");
    }

    // When a nav link is clicked, close the dropdown to avoid blocking scroll on touch devices.
    $nav.on("click", "a", function () {
      closeMenu();
    });

    // Also close when clicking/tapping outside of the nav.
    $(document).on("click touchstart", function (e) {
      if (!$btn.hasClass("close") && (!$hlinks.length || $hlinks.hasClass("hidden"))) return;
      if ($(e.target).closest("#site-nav").length) return;
      closeMenu();
    });
  });
})(jQuery);
