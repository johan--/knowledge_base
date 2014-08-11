(function() {
  $(function() {
    var query, url;
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
      url = "http://dobt-knowledge-base-search.herokuapp.com/search";
      query = decodeURIComponent(window.location.search.slice(3).replace(/\+/g, "%20"));
      $(".centersearch").attr('value', query);
      $(".search-results").text("...");
      return $.get(url, {
        q: query
      }, function(data) {
        var display, r, re, re_left, re_right, result, result_match, _i, _j, _len, _len1, _ref, _results;
        $(".search-results").text("");
        if (data.length < 1) {
          return $(".search-results").append("<h4>No results...</h4>");
        } else {
          _results = [];
          for (_i = 0, _len = data.length; _i < _len; _i++) {
            result = data[_i];
            display = "...";
            re_left = "(\\S+\\s){0,8}";
            re_right = "(\\S*\\s\\S+){0,8}";
            re = new RegExp(re_left + query + re_right, 'ig');
            result_match = result.body.match(re);
            if (result_match) {
              _ref = result_match.slice(0, 10);
              for (_j = 0, _len1 = _ref.length; _j < _len1; _j++) {
                r = _ref[_j];
                display = display + r + "... ";
              }
            }
            display = display.replace(new RegExp(query, 'ig'), "<span class='highlight'>" + query + "</span>");
            _results.push($(".search-results").append("<div class='result'> <h4><a href='" + result.url + "'>" + result.title + "</a></h4> <p class='result-body'> " + display + " </p> </div>"));
          }
          return _results;
        }
      });
    }
  });

}).call(this);
