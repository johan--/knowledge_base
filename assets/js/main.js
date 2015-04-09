(function() {
  var SEARCH_ENDPOINT;

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

  SEARCH_ENDPOINT = "http://dobt-knowledge-base-search.herokuapp.com/search";

  $(document).on("click", "[data-toggle-class]", function() {
    return $($(this).data('target')).toggleClass($(this).data('toggle-class'));
  });

  $(function() {
    var h, ourEmail, query, _i, _len, _ref;
    $('input, textarea').placeholder();
    ourEmail = ['hello', '@', 'dobt', '.', 'co'].join('');
    $('.dynamic_email').attr('href', "mailto:" + ourEmail).append(ourEmail);
    _ref = $(".article_body > :header");
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      h = _ref[_i];
      $(h).hover(function() {
        return $("#anchor-" + this.id).show();
      }, function() {
        return $("#anchor-" + this.id).hide();
      });
      $(h).prepend("<a class='anchor' id='anchor-" + h.id + "' href='#" + h.id + "'><i class='fa fa-link'></i></a>");
      $("#anchor-" + h.id).hide();
    }
    $.getJSON('https://c73bgtwgrhvh.statuspage.io/api/v1/status.json', function(data) {
      var _ref1;
      if (((_ref1 = data.status) != null ? _ref1.indicator : void 0) == null) {
        return;
      }
      $('.status.loading').hide();
      if (data.status.indicator === 'none') {
        return $('.status.up').show();
      } else if (data.status.indicator === 'minor') {
        return $('.status.partial').show();
      } else if ((data.status.indicator === 'major') || (data.status.indicator === 'critical')) {
        return $('.status.major').show();
      }
    });
    $('#choose-app').on('change', function() {
      return window.location.href = '/' + $(this).val();
    });
    $(".toggle_toc").on('click', function() {
      var $h4, $icon, $section, willHide;
      $h4 = $(this).find('h4');
      $icon = $(this).find('.fa');
      $section = $("#" + ($(this).attr('name')));
      willHide = $icon.hasClass('fa-chevron-down');
      $('.toc_section').find('h4').removeClass('active');
      if (!willHide) {
        $h4.addClass('active');
      }
      $icon.removeClass('fa-chevron-down fa-chevron-up');
      $icon.addClass(willHide ? 'fa-chevron-up' : 'fa-chevron-down');
      return $section[willHide ? 'hide' : 'show']();
    });
    if ($(".search-results")[0]) {
      query = $.url().param('q');
      if (!(query.length > 0)) {
        $(".search-results-loading").remove();
        return $(".no-query").show();
      }
      $(".centersearch-input").val(query);
      $.getJSON(SEARCH_ENDPOINT, {
        q: query
      }, function(data) {
        var result, _j, _len1, _results;
        $(".search-results-loading").remove();
        if (data.length < 1) {
          return $(".no-search-results").show();
        } else {
          $('.results-count').show().find('h3').text("" + data.length + " search result" + (data.length === 1 ? '' : 's'));
          _results = [];
          for (_j = 0, _len1 = data.length; _j < _len1; _j++) {
            result = data[_j];
            _results.push($(".search-results").append("<div class='result'> <h4><a href='" + result.url + "'>" + result.title + "</a></h4> <p class='result-body'> " + result.excerpt + " </p> </div>"));
          }
          return _results;
        }
      });
    }
    return $.getJSON('https://c73bgtwgrhvh.statuspage.io/api/v1/status.json', function(data) {
      var newClass, _ref1;
      if (((_ref1 = data.status) != null ? _ref1.indicator : void 0) == null) {
        return;
      }
      newClass = (function() {
        switch (data.status.indicator) {
          case 'none':
            return 'is_up';
          case 'minor':
            return 'is_partial';
          case 'major':
          case 'critical':
            return 'is_down';
        }
      })();
      return $('.footer_status').addClass(newClass);
    });
  });

  $(document).on('submit', '.newsletter_form', function(e) {
    var $input;
    e.preventDefault();
    $input = $(this).find('input[type=email]');
    if (!$input.val()) {
      return;
    }
    $.ajax({
      url: 'http://dobt.createsend.com/t/t/s/dijhkj/?callback=?',
      type: 'get',
      dataType: 'json',
      data: {
        'cm-dijhkj-dijhkj': $input.val()
      },
      success: function(data) {
        if (data.Status === 400) {
          return $input.flashPlaceholder('Whoops, an error occurred!', 2000);
        } else {
          return $input.flashPlaceholder('Thanks!', 2000);
        }
      }
    });
    $input.flashPlaceholder('Subscribing...');
    return $input.blur();
  });

}).call(this);
