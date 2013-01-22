(function($){
  $(document).ready(function(){
    console.log("ready");
    var x = 0;
    var y = 0;
    $("#btn").live("click",function(){
      x++;
      console.log("click btn " + x + " times.");
      $("#label").text("click " + x + " times.");
    });
  });
})($);
