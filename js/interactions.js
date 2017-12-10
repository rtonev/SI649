$(document).ready(function() {
$('#AvgDaysServed').prop('checked', true);
$('#numAppointments').prop('checked', true);
$('#avgEaseOfConfirmation').prop('checked', true);
$('#perMinority').prop('checked', true);
$('#perMale').prop('checked', true);
$('#perMilitary').prop('checked', true);

  $('#AvgDaysServed').change(function() {
  if(this.checked){
    $('#avgDaysServedChart').show();
  }
  else {
    $('#avgDaysServedChart').hide();
  }
});

$('#numAppointments').change(function() {
if(this.checked){
  $('#appointmentsChart').show();
}
else {
  $('#appointmentsChart').hide();
}
});

$('#avgEaseOfConfirmation').change(function() {
if(this.checked){
  $('#avgEaseOfConfirmationChart').show();
}
else {
  $('#avgEaseOfConfirmationChart').hide();
}
});

$('#perMinority').change(function() {
if(this.checked){
  $('#perMinorityChart').show();
}
else {
  $('#perMinorityChart').hide();
}
});

$('#perMale').change(function() {
if(this.checked){
  $('#perMaleChart').show();
}
else {
  $('#perMaleChart').hide();
}
});

$('#perMilitary').change(function() {
if(this.checked){
  $('#perMilitaryChart').show();
}
else {
  $('#perMilitaryChart').hide();
}
});

});
