(function() {
  var StyledSelect;

  StyledSelect = (function() {
    StyledSelect.prototype.defaults = {
      width: void 0,
      blank: ''
    };

    function StyledSelect($el, options) {
      var i, j, len, ref;
      this.$el = $el;
      this.options = $.extend({}, this.defaults, options);
      ref = ['width'];
      for (j = 0, len = ref.length; j < len; j++) {
        i = ref[j];
        if (this.$el.data(i) != null) {
          this.options[i] = this.$el.data(i);
        }
      }
      this.initWrapper();
      this.$el.on('change', $.proxy(this._change, this));
      this._change();
    }

    StyledSelect.prototype.initWrapper = function() {
      this.$wrapper = $('<div class="styled_select_wrapper" />');
      this.$span = $('<div class="styled_select" />');
      this.setWidth();
      this.$el.wrap(this.$wrapper);
      return this.$span.appendTo(this.$el.parent());
    };

    StyledSelect.prototype.setWidth = function() {
      if (this.options.width === 'full') {
        return this.$wrapper.addClass('full');
      } else if (this.options.width === 'auto') {
        return this.$wrapper.addClass('auto');
      } else if (this.options.width) {
        return this.$wrapper.width(this.options.width);
      }
    };

    StyledSelect.prototype._change = function() {
      var text;
      if ((text = this.$el.find('option:selected').text())) {
        this.$span.text(text);
        return this.$span.removeClass('is_blank');
      } else {
        this.$span.text(this.options.blank);
        return this.$span.addClass('is_blank');
      }
    };

    return StyledSelect;

  })();

  window.StyledSelect = StyledSelect;

  $.fn.extend({
    styledSelect: function(opts) {
      return $(this).find('select:not(.datetime)').each(function() {
        if (!this.styledSelect) {
          this.styledSelect = true;
          return new StyledSelect($(this), opts);
        }
      });
    }
  });

}).call(this);
