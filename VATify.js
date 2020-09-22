document.addEventListener('DOMContentLoaded', (event) => {
  addVATs("INSERT_TAG");
  });
  
  
// Loops through the page given a class name to look for, adding VAT text elements
function addVATs(className){    

  function getPriceUpdate(mutations){
    for (let mutation of mutations) {
      if (mutation.addedNodes.length > 0) {
        mutation.target.nextElementSibling.textContent = returnVATText(mutation.addedNodes[0].textContent.substr(1));
      };
    }
  }
    
  // Takes a div that contains a £ value (and any amount of whitespace) and removes the whitespace and currency symbol
  function getPriceFromDiv(element){
    return element.innerHTML.replace(/\s/g,'').substr(1)
  }
    
  // Takes a value and returns it, with VAT, to two digits
  function returnVAT(value){
    return parseFloat(value * 1.20).toFixed(2);
  }
    
  // Takes a value, returns the text to write into the div
  function returnVATText(value){
    return " (£" + returnVAT(value) + " inc VAT)";
  }
      
    
  Array.from(document.getElementsByClassName(className)).forEach(function(element){
    // Add the observers
    let observer = new MutationObserver(getPriceUpdate);
    observer.observe(element, {childList: true});
      
    // Add the correct spans to the page
    let VATSpan = document.createElement("span");
    let VATText = document.createTextNode(" (£" + returnVAT(getPriceFromDiv(element)) + " inc VAT)");
    VATSpan.appendChild(VATText);
    VATSpan.setAttribute("class","withVAT");
    element.parentNode.insertBefore(VATSpan, element.nextSibling)
  });
}
