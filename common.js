let dialog = document.createElement("dialog");
document.body.appendChild(dialog);

const closeDialog = () => {
    dialog.close()
    document.body.classList.remove("blur-background");
}

function openDialogOSLC(source) {
    if (dialog.open) {
        dialog.close();
    }
    else {
        document.body.classList.add("blur-background");
    }
    dialog.innerHTML = `
  <div id="oslc-modal" class="main-div" >
        <header class="header-div">
        <h2 class="header-title">TraceLynx<h2>
        <h2 id="oslc-modal-close" class="dialog-close-button"> ✕ </h2>                 
        </header>
        <div id="div-frame-container" class="iframe-div">
          <iframe frameBorder="0" src="https://lm-dev.koneksys.com/wbe?sourceType=${source?.sourceType}&title=${source?.title}&project=${source.projectName}&origin=${source.origin}&appName=${source?.appName}&uri=${source?.uri}" class="iframe-target-app"></iframe>
        </div>
        <div class="logos-container">
          <img src="https://lm-dev.koneksys.com/oslc_logo_labled.png" height="30px" alt="K logo"/>
          <img src="https://lm-dev.koneksys.com/koneksys_logo.png" height="30px" alt="K logo"/>
        </div>
  </div>`;

    dialog.id = "myDialog";
    document.getElementById("oslc-modal-close").addEventListener("click", closeDialog, false);
    dialog.showModal();
}