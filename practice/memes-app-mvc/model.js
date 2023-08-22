class Model {
    constructor({ renderMemInput }) {
        this.memes = [];
        this.isError = false;

        this.renderMemInput = renderMemInput;
    }

    _checkError = (check) => {
        if (check != true) {
            this.isError = true;
            console.log('сюда приделать сообщение об ошибке в html');
            return;
        } else {
            this.isError = false;
            console.log('сюда не надо приделать сообщение об ошибке в html ')
        }
    }

    initMemes = (memes) => {
        this.memes = memes
        const boolean = memes.success
        this._checkError(boolean)
        this.renderMemInput(this.memes);
    }

    _getMemes = () => {
        return this.memes
    }

    getMemOnId = (id) => {
        const memesArray = this.memes.data.memes
        for (let i = 0; i < memesArray.length; i++) {
            if (memesArray[i].id === id) {             
                return memesArray[i];
            };
        };   
    };
    
}