//sliders
function sliderOption (thisSlider,option,min,max,step,description) {
  thisSlider.each(function(){
    var current = $('.leg_wrapper input[name='+option+']').val();
    if (option === "max_walked") {
      var current = (current/1609*4)/4;//1 mile is 1609 meters
      if (current >= 10.25){
    	  var current = 10.25;
      }
    }
    if (option === "maxVehicles") {
      if (current == 0){
    	  var current = 10;
      }
      if (current == 1) {
        var description = "Vehicle";
      } 
    }
    $(this).slider({
			range: "min",
			value: current,
			min: min,
			max: max,
			step: step,
			slide: function( event, ui ) {
				$(this).next("p.amount").text(ui.value + " "+description+"");
				var uivalue = ui.value;
				if (ui.value == max) {
				  $(this).next("p.amount").text("Unlimited");
				  if (option === "max_walked") {
				    ui.value = 9999;
				  }
				  if (option === "maxVehicles") {
				    ui.value = 0;
				  }
				}
				$(this).parents(".leg_wrapper").find(".apply").show();
				applyFix();
				if (option === "max_walked") {
				  ui.value = ui.value*1609;
			  }
				$("form[name=form_3]").find("input[name="+option+"]").val(ui.value);
			}
    });
    var value = $(this).slider("value");
    if (value == max) {
      $(this).next("p.amount").text( "Unlimited" );
    }
    else {
      $(this).next("p.amount").text( value + " "+description+"" );
    }
  }); 
};