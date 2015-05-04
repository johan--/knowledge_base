(function() {
  $(document).on("click", "[data-toggle-class]", function() {
    return $($(this).data('target')).toggleClass($(this).data('toggle-class'));
  });

}).call(this);
