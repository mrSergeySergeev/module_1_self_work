function checkTitleNull () {
    popupNode.classList.add(POPUP_OPENED_CLASSNAME);
    bodyNode.classList.add(BODY_FIXED_CLASSNAME);
    validationMessageNode[0].classList.add(POPUP_TITLE_ACTIVE);
};

function checkDescriptionNull () {
    popupNode.classList.add(POPUP_OPENED_CLASSNAME);
    bodyNode.classList.add(BODY_FIXED_CLASSNAME);
    validationMessageNode[1].classList.add(POPUP_TITLE_ACTIVE);
};

function checkTitleMore () {
    popupNode.classList.add(POPUP_OPENED_CLASSNAME);
    bodyNode.classList.add(BODY_FIXED_CLASSNAME);
    validationMessageNode[2].classList.add(POPUP_TITLE_ACTIVE);
};


function checkDescriptionMore () {
    popupNode.classList.add(POPUP_OPENED_CLASSNAME);
    bodyNode.classList.add(BODY_FIXED_CLASSNAME);
    validationMessageNode[3].classList.add(POPUP_TITLE_ACTIVE);
};

function initInputValue () {
    popupNode.classList.add(POPUP_OPENED_CLASSNAME);
    bodyNode.classList.add(BODY_FIXED_CLASSNAME);
    validationMessageNode[4].classList.add(POPUP_TITLE_ACTIVE);
}

function removePopup() {
    popupNode.classList.remove(POPUP_OPENED_CLASSNAME);
    bodyNode.classList.remove(BODY_FIXED_CLASSNAME);
    validationMessageNode[0].classList.remove(POPUP_TITLE_ACTIVE);    
    validationMessageNode[1].classList.remove(POPUP_TITLE_ACTIVE);    
    validationMessageNode[2].classList.remove(POPUP_TITLE_ACTIVE);    
    validationMessageNode[3].classList.remove(POPUP_TITLE_ACTIVE);    
    validationMessageNode[4].classList.remove(POPUP_TITLE_ACTIVE);    
}


