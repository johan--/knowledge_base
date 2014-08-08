(function() {
  $(function() {
    $('#choose-app').on('change', function() {
      return window.location.href = '/' + $(this).val();
    });
    return $(".toggle_toc").on('click', function() {
      var $icon, $section, willHide;
      $icon = $(this).find('.fa');
      $section = $("#" + ($(this).attr('name')));
      willHide = $icon.hasClass('fa-toggle-down');
      $icon.removeClass('fa-toggle-down fa-toggle-up');
      $icon.addClass(willHide ? 'fa-toggle-up' : 'fa-toggle-down');
      return $section[willHide ? 'hide' : 'show']();
    });
  });

}).call(this);
