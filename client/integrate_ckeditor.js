var changes = {};

var sessionid = Math.floor(Math.random() * 1000000000);

$(function() {
  var i = 1;
  $("[contenteditable]").each(function() {
    var id = $(this).attr("id");
    editor = CKEDITOR.inline($(this).get(0));
    editor.on('change', function(evt) {
      changes[id] = evt.editor.getData();
    });
  });
  setInterval(function () {
    if (!jQuery.isEmptyObject(changes)) {
      changes["_sessionid_"] = sessionid;
      $.post("", changes);
      changes = {};
    }
  }, 1000);
});

