(function() {
  $(function() {
    var query;
    $('#choose-app').on('change', function() {
      return window.location.href = '/' + $(this).val();
    });
    $(".toggle_toc").on('click', function() {
      var $icon, $section, willHide;
      $icon = $(this).find('.fa');
      $section = $("#" + ($(this).attr('name')));
      willHide = $icon.hasClass('fa-toggle-down');
      $icon.removeClass('fa-toggle-down fa-toggle-up');
      $icon.addClass(willHide ? 'fa-toggle-up' : 'fa-toggle-down');
      return $section[willHide ? 'hide' : 'show']();
    });
    if ($(".search-results")[0]) {
      query = window.location.search.slice(3);
      $(".centersearch").attr('value', query);
      $(".search-results").text("...");
      return $.get("http://dobt-knowledge-base-search.herokuapp.com/search", {
        q: query
      }, function(data) {
        var result, _i, _len, _results;
        $(".search-results").text("");
        _results = [];
        for (_i = 0, _len = data.length; _i < _len; _i++) {
          result = data[_i];
          _results.push($(".search-results").append("<div> <a href='" + result.url + "'>" + result.title + "</a> <p>" + result.body + "</p> </div>"));
        }
        return _results;
      });
    }
  });

}).call(this);
