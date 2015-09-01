var defaultName = "John Terje";
var defaultRegex = ' (he|she|han|hun|henne|ham) ';

var jtRegex;
var jtName;

function loadOptions() {

	chrome.storage.sync.get("jtRegex", function(data) {
		var regexField = document.getElementById("regex");
		if (data.jtRegex == undefined) {
			chrome.storage.sync.set({'jtRegex':  defaultRegex}, function() {
				regexField.value = defaultRegex;
			});
		} else {
			jtRegex = data.jtRegex;

		  regexField.value = jtRegex;
		}
	});

	chrome.storage.sync.get("jtName", function(data) {
		var nameField = document.getElementById("name");
		if (data.jtName == undefined) {
			chrome.storage.sync.set({'jtName': defaultName}, function() {
			  nameField.value = defaultName;
			});
		} else {
			jtName = data.jtName;
		  nameField.value = jtName;
		}
	});

}

function saveOptions() {
	var name = document.getElementById("name").value;
  chrome.storage.sync.set({'jtName': name}, function() {
    console.log('Name saved');
  });

  var regex = document.getElementById("regex").value;
  chrome.storage.sync.set({'jtRegex': regex}, function() {
    console.log('Regex saved');
  });
}

function eraseOptions() {
	chrome.storage.sync.set({'jtName': defaultName}, function() {
  });
  chrome.storage.sync.set({'jtRegex': defaultRegex}, function() {
  });
	location.reload();
}

$( document ).ready(function() {
  loadOptions();
  $('#saveBtn').click(function(){
    saveOptions();
  });
  $('#eraseBtn').click(function(){
    eraseOptions();
  });
});
