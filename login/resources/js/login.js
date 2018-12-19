document.addEventListener("DOMContentLoaded", function(event){
  var elements = document.querySelectorAll("ul[data-filtered-by=\"social-provider-filter\"] li")

  if (elements.length >= 7) {
    var hideSocialProviders = function(){
      for (var i = elements.length - 1; i >= 0; i--) {
        element = elements[i];
        element.classList.add('hidden');
        element.classList.add('reveal');
      }
    }
    var filteredDisplayOfSocialProviders = function(text) {
      for (var i = elements.length - 1; i >= 0; i--) {
        element = elements[i];
        if (element.title.toLowerCase().search(text.toLowerCase()) >= 0) {
          element.classList.remove('hidden');
        } else {
          element.classList.add('hidden');
        }
      }
    }
    hideSocialProviders();
    var filterInput = document.getElementById("social-provider-filter");
    var filterChangeCallback = function(e) {
      var filterValue = e.target.value;
      if (filterValue) filteredDisplayOfSocialProviders(filterValue);
    }
    filterInput.addEventListener("change", filterChangeCallback);
    filterInput.addEventListener("input", filterChangeCallback);
  } else {
    document.getElementById("social-provider-filter").style.display = 'none';
    document.querySelector("label[for='social-provider-filter']").style.display = 'none';
  }

});

document.addEventListener("DOMContentLoaded", function(event){
  var togglers = document.querySelectorAll("a[data-revealer]")

  var toggleDisplay = function(e) {
    var toggle = e.target;
    var toToggle = document.getElementById(toggle.href.toString().split("#")[1]);
    window.setTimeout(function(){
      if (toToggle.classList.contains("hidden")) {
        toggle.classList.add('revealing');
        toToggle.classList.remove("hidden");
      } else {
        toggle.classList.remove('revealing');
        toToggle.classList.add("hidden");
      }
    }, 10);
    return false;
  }

  for (var i = togglers.length - 1; i >= 0; i--) {
    var toggle = togglers[i];
    var toToggle = document.getElementById(toggle.href.toString().split("#")[1]);
    toToggle.classList.add('hidden');
    toToggle.classList.add('reveal');
    toggle.addEventListener("click", toggleDisplay);
    toggle.addEventListener("touch", toggle);
  }
});
