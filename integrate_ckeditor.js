$(function() {
  $(".section,.abstract,.page-header,.bibliography").find("p,h1").not(".keywords").each(function() {
    $(this).attr("contenteditable", "true");
    editor = CKEDITOR.inline($(this).get(0));
    editor.on('change', function(evt) {
      console.log('CHANGED TEXT: ' + evt.editor.getData());
    });
  });
});

