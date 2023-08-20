function submitted() {
    var r=document.getElementsByTagName("textarea");
    r.value="";
    var formElements = document.getElementsByTagName("input");
    for (var i = 0; i < formElements.length; i++) {
      formElements[i].value = "";
    }
    
  }