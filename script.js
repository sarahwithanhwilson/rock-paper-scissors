$(document).ready(function() {

	//HIDE FROM START
	$('.ready').hide();
	$('#cRock').hide();
	$('#cPaper').hide();
	$('#cScissors').hide();
	$('.vs').hide();
	$('.playerWin').hide();
	$('.compWin').hide();
	$('.tie').hide();
	$('.button').hide();

	//PLAYER CHOOSES WEAPON
	$('.choice').on('mouseenter', event => {
		$(event.currentTarget).addClass('active');
	});
	$('.choice').on('mouseleave', event => {
		$(event.currentTarget).removeClass('active');
	});

	var $playerWeapon;
	$('.choice').on('click', event => {
		$('.choice').hide();
		$playerWeapon = $(event.currentTarget);
		$playerWeapon.show();
		$('.welcome').hide();
		$('.ready').show();
		$('.battle').show();
		$('.chooseAgain').show();
	});

	//BATTLE BUTTON
	$('.battle').on('click', function() {
		$('.welcome').hide();
		$('.ready').hide();
		$('.battle').hide();
		$('.chooseAgain').hide();
		$('.vs').show();
		$('.section').addClass('trio');
		$('.playAgain').fadeIn(2000);

		//show computer weapon
		var index = Math.floor(Math.random() * 3);
		var $compWeapon;
		if (index === 1) {
			$compWeapon = $('#cRock');
		} else if (index === 2) {
			$compWeapon = $('#cPaper');
		} else {
			$compWeapon = $('#cScissors');
		}
		$compWeapon.show();

		//say who won
		if ($compWeapon.hasClass('rock') && $playerWeapon.hasClass('rock')
			|| $compWeapon.hasClass('paper') && $playerWeapon.hasClass('paper')
			|| $compWeapon.hasClass('scissors') && $playerWeapon.hasClass('scissors')) {
				$('.tie').fadeIn(2000);
		} else if ($compWeapon.hasClass('rock') && $playerWeapon.hasClass('scissors')
			|| $compWeapon.hasClass('paper') && $playerWeapon.hasClass('rock')
			|| $compWeapon.hasClass('scissors') && $playerWeapon.hasClass('paper')) {
				$('.compWin').fadeIn(2000);
		} else {
				$('.playerWin').fadeIn(2000);
		}
	});

	//CHOOSE AGAIN / PLAY AGAIN BUTTON
	$('.restart').click(function() {
    	location.reload();
	});

});