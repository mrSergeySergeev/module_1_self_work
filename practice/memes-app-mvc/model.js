class Model {
    constructor() {
        this.memes = [];        
        this.isError = false
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

    setMemes = (memes) => {
        this.memes = memes
        const boolean = memes.success
        this._checkError(boolean)
        memes = memes.data.memes
        console.log(memes);
        return this.memes;
    }  

    getMemes() {
        return this.memes;
    }
}