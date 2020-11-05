import { el, mount } from "redom";
import modalDiv from './new-aroma-modal.html';
import $ from "jquery";

class NewAroma {
    constructor() {
    }

    show() {
        let modal = this.modal = el("div", {innerHTML: modalDiv});
        mount(document.body, modal);
        $(modal.children[0]).modal('show');
        $(modal.children[0]).on("hide.bs.modal", () => {
            modal.remove();
        });

        let uploadBtn = modal.querySelector("#aroma-img-upload-btn");
        uploadBtn.onclick = this.uploadImage.bind(this, uploadBtn);
    }

    uploadImage(btn) {
        let fileUploader = el("input", {type: "file", accept: "image/*"});
        fileUploader.onchange = () => {
            const reader = new FileReader();
            reader.onload = () => {
              var output = this.modal.querySelector('.image-preview');
              output.style.backgroundImage = `url(${reader.result})`;
              btn.innerHTML = "Change Photo";
              btn.classList.remove("btn-dark");
              btn.classList.add("btn-warning");
            }
            reader.readAsDataURL(event.target.files[0]);
        }
        fileUploader.click();
    }
}

export default NewAroma;