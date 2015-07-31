var changes = {};

$(function() {
  var i = 1;
  $(".section,.abstract,.page-header,.bibliography").find("p,h1").not(".keywords").each(function() {
    $(this).attr("contenteditable", "true");
    var id = "editor" + i++;
    $(this).attr("id", id);
    editor = CKEDITOR.inline($(this).get(0));
    editor.on('change', function(evt) {
      changes[id] = evt.editor.getData();
    });
  });
  setInterval(function () {
    if (!jQuery.isEmptyObject(changes)) {
      console.log('CHANGES: ' + changes);
      $.post( "/event", { 'changes': changes } );
      changes = {};
    }
  }, 1000);
});

