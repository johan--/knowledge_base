(function() {
  $.fn.extend({
    flashPlaceholder: function(text, timeout) {
      return this.each(function() {
        var initialPlaceholder;
        initialPlaceholder = $(this).attr('placeholder');
        $(this).val('');
        $(this).attr('placeholder', text);
        if (!$(this).data('original-placeholder')) {
          $(this).data('original-placeholder', initialPlaceholder);
        }
        if (timeout) {
          return setTimeout((function(_this) {
            return function() {
              $(_this).attr('placeholder', $(_this).data('original-placeholder'));
              return $(_this).data('original-placeholder', '');
            };
          })(this), timeout);
        }
      });
    }
  });

}).call(this);
