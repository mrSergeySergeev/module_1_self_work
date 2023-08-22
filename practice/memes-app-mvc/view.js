class View {
    constructor({ getMemOnId }) {
        this.memImageInputNode = document.querySelector('#memImageInput');
        this.memUpperTextInputNode = document.querySelector('#memUpperTextInput');
        this.memBottomTextInputNode = document.querySelector('#memBottomTextInput');
        this.memTextPositionNode = document.querySelector('#memTextPosition');
        this.memTextColorNode = document.querySelector('#memTextColor');
        this.memResultNode = document.querySelector('#memResult');
        this.upperTextNode = document.querySelector('#upperText');
        this.bottomTextNode = document.querySelector('#bottomText');

        this.getMemOnId = getMemOnId;

        this.memUpperTextInputNode.addEventListener('input', this._getUpperText);
        this.memBottomTextInputNode.addEventListener('input', this._getBottomText);
        this.memImageInputNode.addEventListener('input', this.getMemFromUser);
        this.memTextPositionNode.addEventListener('input', this._renderTextPosition);
        this.memTextColorNode.addEventListener('input', this._renderTextColor);
    }

    _getUpperText = () => {
        const text = this.memUpperTextInputNode.value;
        this.upperTextNode.innerHTML = text;
        return text;
    }

    _getBottomText = () => {
        const text = this.memBottomTextInputNode.value;
        this.bottomTextNode.innerHTML = text;
        return text;
    }

    getMemFromUser = () => {
        const id = this.memImageInputNode.value;
        const mem = this.getMemOnId(id)
        this._renderMemImage(mem);
        this._renderTextPosition()
        this._renderTextColor()
    }

    _renderMemImage = (mem) => {
        this.memResultNode.innerHTML = '';
        this.memResultNode.innerHTML = `<img class="memImg" src="${mem.url}" >`
    }

    renderMemesInput(memes) {
        memes = memes.data.memes;
        memes.forEach(mem => {
            this.memImageInputNode.innerHTML += `<option value="${mem.id}">${mem.name}</option>`;
        })
    }

    _renderTextPosition = () => {
        const position = this.memTextPositionNode.value
        switch (position) {
            case 'center':
                this.upperTextNode.classList.add('position_center')
                this.upperTextNode.classList.remove('position_left', 'position_right')
                this.bottomTextNode.classList.add('position_center')
                this.bottomTextNode.classList.remove('position_left', 'position_right')
                break;
            case 'start':
                this.upperTextNode.classList.add('position_left')
                this.upperTextNode.classList.remove('position_center', 'position_right')
                this.bottomTextNode.classList.add('position_left')
                this.bottomTextNode.classList.remove('position_center', 'position_right')
                break;
            case 'end':
                this.upperTextNode.classList.add('position_right')
                this.upperTextNode.classList.remove('position_center', 'position_left')
                this.bottomTextNode.classList.add('position_right')
                this.bottomTextNode.classList.remove('position_center', 'position_left')
                break;
        };
    }

    _renderTextColor = () => {
        const color = this.memTextColorNode.value
        console.log(color)
        switch (color) {
            case 'black':
                this.upperTextNode.classList.add('text_color_black')
                this.upperTextNode.classList.remove('text_color_white', 'text_color_green', 'text_color_red', 'text_color_blue')
                this.bottomTextNode.classList.add('text_color_black')
                this.bottomTextNode.classList.remove('text_color_white', 'text_color_green', 'text_color_red', 'text_color_blue')
                break;
            case 'white':
                this.upperTextNode.classList.add('text_color_white')
                this.upperTextNode.classList.remove('text_color_black', 'text_color_green', 'text_color_red', 'text_color_blue')
                this.bottomTextNode.classList.add('text_color_white')
                this.bottomTextNode.classList.remove('text_color_black', 'text_color_green', 'text_color_red', 'text_color_blue')
                break;
            case 'green':
                this.upperTextNode.classList.add('text_color_green')
                this.upperTextNode.classList.remove('text_color_black', 'text_color_white', 'text_color_red', 'text_color_blue')
                this.bottomTextNode.classList.add('text_color_green')
                this.bottomTextNode.classList.remove('text_color_black', 'text_color_white', 'text_color_red', 'text_color_blue')
                break;
            case 'red':
                this.upperTextNode.classList.add('text_color_red')
                this.upperTextNode.classList.remove('text_color_black', 'text_color_white', 'text_color_green', 'text_color_blue')
                this.bottomTextNode.classList.add('text_color_red')
                this.bottomTextNode.classList.remove('text_color_black', 'text_color_white', 'text_color_green', 'text_color_blue')
                break;
            case 'blue':
                this.upperTextNode.classList.add('text_color_blue')
                this.upperTextNode.classList.remove('text_color_black', 'text_color_white', 'text_color_green', 'text_color_red')
                this.bottomTextNode.classList.add('text_color_blue')
                this.bottomTextNode.classList.remove('text_color_black', 'text_color_white', 'text_color_green', 'text_color_red')
                break;
        };
    }
}