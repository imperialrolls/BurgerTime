var plate_full = false

$("#burger-submit").click( function (e) {
  e.preventDefault()
  console.log($("#burger").val())
  if ($("#burger").val() != 0) {
    var burgerObj = {
      burger_name: $("#burger").val()
    }
    $.ajax("api/burgers", {
      type: "POST",
      data: burgerObj
    }).then( function(){
      location.reload();
    })
  }
})

$(".eat").click( function (e) {
  e.preventDefault()
  console.log($("#eat").val())
  $.ajax(`/api/burger/${$(this).attr("id")}` , {
    type: "PUT" ,
  }).then( function(){
    location.reload();
  })
})
