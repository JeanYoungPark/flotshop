export let scrollHeightList : { [key: string]: Element[] } = {};

export const getScrollList = () => {
    const els = document.querySelectorAll('[data-scroll]');
    els.forEach(element => {
        const scrollKey = (element as HTMLElement).dataset?.scroll ?? '';

        if (!scrollHeightList[scrollKey]) scrollHeightList[scrollKey] = [];
        scrollHeightList[scrollKey].push(element);
    });
}

const addOnloadAnimation = (className: string) => {
    setTimeout(() => {
        document.querySelectorAll(className).forEach((element) => {
            element.classList.add('onload');
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