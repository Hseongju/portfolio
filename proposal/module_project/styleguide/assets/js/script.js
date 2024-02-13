$(window).load(function(){
  $("aside").empty().load("../../styleguide/guide/lnb.html", function(){
    $("#contents aside .guide-list a").removeClass("active");

    var originUrlString = window.location.href;
    var startIndex = window.location.href.indexOf("/guide/");
    var endIndex = window.location.href.indexOf(".html");
    var pageName = originUrlString.substr(startIndex + 7, endIndex - startIndex - 7);

    for(i = 0; i < $("#contents aside .guide-list li").length ; i++){
      if($("#contents aside .guide-list li").eq(i).text().toLowerCase() == pageName){
        $("#contents aside .guide-list li").eq(i).find("a").addClass("active");
        break;
      }
    }

    $("#contents aside .guide-list").scrollLeft($("#contents aside .guide-list li").eq(i).find("a").offset().left - ($("#contents aside .guide-list li").outerWidth(true) - $("#contents aside .guide-list li").innerWidth()) )
  });

});