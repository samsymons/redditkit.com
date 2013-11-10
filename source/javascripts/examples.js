$(document).ready(function() {
  $('.code-section pre').each(function(i, e) {hljs.highlightBlock(e)});

  $(".code-example-language").click(function() {
    var linkParent = $(this).parent().parent();
    var rubyCode = linkParent.find('.ruby');
    var objcCode = linkParent.find('.objectivec');

    if (!$(this).hasClass('active')) {
      $(this).toggleClass("active");
      $(this).siblings().toggleClass("active");
    }

    if ($(this).hasClass('ruby-language')) {
      rubyCode.show();
      objcCode.hide();
    } else if ($(this).hasClass('objc-language')) {
      rubyCode.hide();
      objcCode.show();
    }
  });
});
