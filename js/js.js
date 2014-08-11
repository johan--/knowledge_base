(function() {
  $(function() {
    document.getElementById('choose-app').onchange = function() {
      return window.location.href = '/' + this.value;
    };
    return $(".toggle_toc").click(function() {
      if ($(this).children().hasClass('fa-toggle-down')) {
        $(this).children().removeClass('fa-toggle-down');
        $(this).children().addClass('fa-toggle-up');
        return $('#' + this.name).hide();
      } else {
        $(this).children().removeClass('fa-toggle-up');
        $(this).children().addClass('fa-toggle-down');
        return $('#' + this.name).show();
      }
    });
  });

}).call(this);
