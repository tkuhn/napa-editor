$(function() {
  $(".section,.abstract,.page-header,.bibliography").find("p,h1,.author_name,.affiliation,.email").not(".keywords").each(function() {
    $(this).attr("class", $(this).attr("class")+" cke_editable cke_editable_inline cke_contents_ltr cke_show_borders");
    $(this).attr("contenteditable", "true");
  });
  $(".keywords").find("code").each(function() {
    $(this).attr("class", $(this).attr("class")+" cke_editable cke_editable_inline cke_contents_ltr cke_show_borders");
    $(this).attr("contenteditable", "true");
  });
});

