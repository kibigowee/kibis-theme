document.addEventListener("DOMContentLoaded", function () {
    const changeButton = document.getElementById("saveChanges");
  
    changeButton.addEventListener("click", function () {
        // Define the parameters you want to pass to the content script and store them in localStorage
        const x = {
          unfinStartCol: (document.getElementById("first-unsubmit").value + ""),
          unfinEndCol: (document.getElementById("second-unsubmit").value + ""),
          unopenStartCol: (document.getElementById("first-unopen").value + ""),
          unopenEndCol: (document.getElementById("second-unopen").value + ""),
          shouldScramble: (document.getElementById("should-scramble").checked + "")
        };
        
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            const activeTab = tabs[0];
            chrome.scripting.executeScript({
              target: { tabId: activeTab.id },
              function: (params) => {
                localStorage.setItem("myExtensionParams", params);
              },
              args: [JSON.stringify(x)]
            });
        });
    });
});