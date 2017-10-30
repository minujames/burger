$(document).ready(function(){
  $(".devour-burger").on("click", function(event){
    var id = $(this).data("id");
    console.log("id", id);

    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: {devoured: true}
    }).then(function(){
      console.log("Ate burger", id);
      location.reload();
    });
  });
});

