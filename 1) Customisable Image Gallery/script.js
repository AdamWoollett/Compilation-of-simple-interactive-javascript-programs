const submitURLButton = document.getElementById("submitURLButton");
submitURLButton.addEventListener("click",addImage);

function addImage(){
    const urlID = document.getElementById("urlInput").value;
    if(urlID){
        const gallery = document.getElementById("galleryGrid");
        //Create a new Div for the image and assign it the relevant class
        const galleryDiv = document.createElement("div");
        galleryDiv.classList.add("galleryItem");
        //Creat image element and assign the URL to it
        const imageElement = document.createElement("img");
        imageElement.src = urlID;
        //Create a button to remove the image from the gallery
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove Image";
        removeButton.classList.add("removeButton");
        removeButton.onclick = () => gallery.removeChild(galleryDiv);
        //Stitch it all together
        galleryDiv.appendChild(imageElement);
        galleryDiv.appendChild(removeButton);
        gallery.appendChild(galleryDiv);
        document.getElementById("urlInput").value = "";
    } else {
        alert("please enter an image URL");
    }
}
