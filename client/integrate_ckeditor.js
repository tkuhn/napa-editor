var changes = {};

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
      console.log('CHANGES: ' + changes);
      $.post( "/event", changes );
      changes = {};
    }
  }, 1000);
});

