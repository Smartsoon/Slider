class Slider {
    constructor(imageArea, prevBtnId, nextBtnId, addImages, addImagesBtn) {
        this.array = [];
        this.curImgIndex = 0;
        this.imgAreaId = document.querySelector(`${imageArea}`);
        this.prevBtn = document.querySelector(`${prevBtnId}`);
        this.nextBtn = document.querySelector(`${nextBtnId}`);
        this.linkUploader = document.querySelector(`${addImages}`);
        this.uploadButton = document.querySelector(`${addImagesBtn}`);
        this.newImage = null;
    }

    turnPrev() {
        this.curImgIndex--;
        this.imgAreaId.src = this.array[this.curImgIndex];
        this.nextBtn.disabled = false;
        if (this.curImgIndex <= 0) {
            this.prevBtn.disabled = true
        }
    }

    turnNext() {
        this.curImgIndex++;
        this.imgAreaId.src = this.array[this.curImgIndex];
        this.prevBtn.disabled = false;
        if (this.curImgIndex >= this.array.length - 1) {
            this.nextBtn.disabled = true
        }
    }

    addImagesByLink() {
        this.newImage = this.linkUploader.value;
        this.array.push(this.newImage);
        this.linkUploader.value = ''
    }

    add(arg) {
        this.array.push(arg);
        this.imgAreaId.src = this.array[this.curImgIndex];
        this.prevBtn.disabled = true
    }


    listenersReactions() {
        this.nextBtn.addEventListener('click', this.turnNext.bind(this));
        this.prevBtn.addEventListener('click', this.turnPrev.bind(this));
        this.uploadButton.addEventListener('click', this.addImagesByLink.bind(this))
    }

}

let slider = new Slider('.img', `.prev`, `.next`, '.new-image', '.upload-button');

slider.listenersReactions();

slider.add('https://i.piccy.info/i9/4a1a61f5af233f8642db5f3bd32eff7a/1581343907/52101/1323468/car_one.jpg');
slider.add('https://i.piccy.info/i9/fbeca19430af548dfb7a412425073a52/1581344152/133160/1323468/car_two.jpg');
slider.add('https://i.piccy.info/i9/ed984155cd7aabf275693c7f2e72b7ef/1581344167/132961/1323468/car_three.jpg');
slider.add('https://i.piccy.info/i9/b5ac09b67d445b6abcaf64edcd2fb2b7/1581344185/109148/1323468/car_four.jpg');



