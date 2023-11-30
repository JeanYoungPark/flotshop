const addOnloadAnimation = (className: string) => {
    setTimeout(() => {
        document.querySelectorAll(className).forEach((element) => {
            if((element as HTMLElement).dataset){
                // const scrollHeight = (element as HTMLElement).dataset?.scroll;
            }else{
                element.classList.add('onload');
            }
        });
    }, 500);
}

export const fromTopIn20 = () => {
    addOnloadAnimation('.fromTopIn20');
}

export const fromBottomIn40 = () => {
    addOnloadAnimation('.fromBottomIn40');
}

export const fromLeftIn20 = () => {
    addOnloadAnimation('.fromLeftIn20');
}

export const fromRightIn20 = () => {
    addOnloadAnimation('.fromRightIn20');
}