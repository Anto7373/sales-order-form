$('#myTable').on('click', 'input[type="button"]', function () {
    $(this).closest('tr').remove();
})
$('p input[type="button"]').click(function () {
    $('#myTable').append('<tbody><tr><td><input type="text" class="form-control" /></td><td><input type="text" class="form-control" /></td><td><input type="text" class="form-control" /></td><td><input type="text" class="form-control" /></td><td><input type="text" class="form-control" /></td><td><input type="text" class="form-control" /></td><td><input type="text" class="form-control" /></td><td><input type="text" class="form-control" /></td><td><input type="text" class="form-control" /></td><td><input type="text" class="form-control" /></td><td><input type="text" class="form-control" /></td><td><input type="text" class="form-control" /></td><td><input type="text" class="form-control" /></td><td><input type="text" class="form-control" /></td><td><input type="text" class="form-control" /></td><td><input type="button" value="Delete" /></td></tr></tbody>')
});