(function() {
  $.getJSON('https://c73bgtwgrhvh.statuspage.io/api/v1/status.json', function(data) {
    var newClass, ref;
    if (((ref = data.status) != null ? ref.indicator : void 0) == null) {
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

}).call(this);
