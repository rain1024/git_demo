/**
 * Created by rain on 8/7/2015.
 */

var app = app || {

	init: function(){
		app.change_to("ABCDEFGH");
		app.animate_input();
	},

	i: 0,

	animate_input: function(){
		$("#change-text").on("click", function(){
			app.i = 0;
			app.change_to($("#new-text").val());
		})
	},

	change_to: function(chars){

		//Settings
		var char_cycles = 20; //how many nonsense letters it cycles through
		var char_cycle_length = 30; //length of each cycle in milliseconds

		//Hide/show characters to present proper number
		$(".letter").removeClass("is-hidden");
		for (var z = chars.length; z < 7; z++){
			$(".letter").eq(z).addClass("is-hidden");
		}

		//Cycle through the appropriate number of letters,
		//according to the settings above
		if (app.i < char_cycles){
			setTimeout(function(){
					app.i++;
					for (var x = 0; x < chars.length; x++){
						$(".letter").eq(x).text(app.all_characters[Math.floor((Math.random()*36))]);
					}
					app.change_to(chars);
			}, char_cycle_length);
		}

		//After cycling, assign the chosen characters
		else {
			chars = chars.toUpperCase();
			for (var y = 0; y < chars.length; y++){
				$(".letter").eq(y).text(chars.substring(y,y+1));
			}
		}

	},

	all_characters: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9','0']

}

$(document).ready(function(){
	app.init();
});
