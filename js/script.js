$(document).ready(function() {
	//$('#politic').modal('show');

	function pop(idFrom, idTo, type) {
		if (type == 1) {
			$(idFrom).on('click', function() {
				$(idTo).modal('show');
			});
		} else {
			$(idFrom).on('click', function() {
				$(idTo).modal('hide');
			});
		}

	}

	pop('#openPop', '#mail', 1);
	pop('#openPolitic', '#politic', 1);

	$('#closePop').on('click', function() {
		$('#mail').modal('hide').on('hidden.bs.modal', function(e) {
			$('#send').modal('show');
		});
		$('.close').modal('hide');

	});
	$('#mail,#send,#politic').on('show.bs.modal', function(e) {
		$('.filter').addClass('active');
	});
	$('#mail,#send,#politic').on('hide.bs.modal', function(e) {
		$('.filter').removeClass('active');
	});

	$('#email').on('keyup', function() {
		if ($(this).val() != '') {
			var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
			if (pattern.test($(this).val())) {
				$(this).removeClass('not-ok').addClass('ok');
				$('.button').prop("disabled", false);
			} else {
				$(this).removeClass('ok').addClass('not-ok');
				$('.button').prop("disabled", true);
			}
		} else {

		}
	});

});
