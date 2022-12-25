const saveBtn = document.querySelector('.save-btn')
saveBtn.addEventListener("click",function(){
    const textArea = document.querySelector('#text1');
    const text = textArea.value;

    const textBlob = new Blob([text], { type: 'text/plain' });
    saveBtn.download = 'text.txt';
    if (window.webkitURL != null) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        saveBtn.href = window.webkitURL.createObjectURL(textBlob);
    }
    else{
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        saveBtn.href = window.URL.createObjectURL(textBlob);
        saveBtn.onclick = destroyClickedElement;
        saveBtn.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    console.log("its working")
})

let btn = document.querySelector('#btn')
let sidebar = document.querySelector('.sidebar')

btn.onclick = function(){
    sidebar.classList.toggle('active');
}