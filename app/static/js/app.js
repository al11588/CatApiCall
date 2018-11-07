$("button").click(function () {
	$.ajax({
			url: 'https://aws.random.cat/meow',
			type: 'get',
			crossDomain: 'true',
			data: {},
			success: function (data) {
				$('img').attr('src', data.file);
			}
		});
});