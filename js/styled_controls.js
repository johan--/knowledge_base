(function() {
  $.fn.extend({
    styledControls: function() {
      return $(this).find('label.control').each(function() {
        if (!this.hasStyledControls) {
          this.hasStyledControls = true;
          return $(this).find('input').after("<span class='control_styled' />");
        }
      });
    }
  });

}).call(this);
