function tmgWidgetClose(){

    var x = document.getElementById("TextMyGovWidget");
      if (x.style.display === "none"){
        x.style.display = "block";
    } 
    else {
    x.style.display = "none";
  }
}  
  
  function tmgWidgetChangeImage(){

   var image = document.getElementById('tmgWidgetCloseButton');
     if (image.src.match("TextMyGov-medium-TM-logo.png")){
     image.src = "https://support.textmygov.com/wp-content/uploads/2023/04/close-button.png";
    } 
    else {image.src = "https://support.textmygov.com/wp-content/uploads/2021/04/TextMyGov-medium-TM-logo.png";
  }
}

  function tmgWidgetBigCloseButton(x){
    x.style.height = "40px";
}

  function tmgWidgetNormalCloseButton(x){
    x.style.height = "35px";
}
  
  function tmgWidgetShowCloseButton() { 
    document.getElementById("tmgWidgetCloseButton").style.display = "inline"; 
}
  setTimeout("tmgWidgetShowCloseButton()", 1800);
  
