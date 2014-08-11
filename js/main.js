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
        var i, r, re, re_left, re_right, result, results, _i, _j, _len, _len1, _ref, _results;
        $(".search-results").text("");
        _results = [];
        for (_i = 0, _len = data.length; _i < _len; _i++) {
          result = data[_i];
          results = "...";
          re_left = "(\\S+\\s){0,8}";
          re_right = "(\\S*\\s\\S+){0,8}";
          re = new RegExp(re_left + query + re_right, 'ig');
          _ref = result.body.match(re);
          for (i = _j = 0, _len1 = _ref.length; _j < _len1; i = ++_j) {
            r = _ref[i];
            if (i < 10) {
              results = results + r + "... ";
            }
          }
          results = results.replace(new RegExp(query, 'ig'), "<span class='highlight'>" + query + "</span>");
          _results.push($(".search-results").append("<div class='result'> <h4><a href='" + result.url + "'>" + result.title + "</a></h4> <p class='result-body'> " + results + " </p> </div>"));
        }
        return _results;
      });
    }
  });

}).call(this);
