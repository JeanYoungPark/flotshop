export type InfoType = {
    lat: number; lng: number, type: string, title: string, address: string, phone: string, img?: string
}

export type MarkerList = {
    [key: string]: InfoType[];
};

export class CustomOverlay extends naver.maps.OverlayView {

    private _element: HTMLElement | null = null;
    private _position: naver.maps.LatLng;
    private _info: MarkerList;

    constructor(props: {map:any, position: naver.maps.LatLng, info: MarkerList}){
        super();
        this._position = props.position;
        this._info = props.info;
    }

    draw() {
        const projection = this.getProjection();
        const pixelPosition = projection.fromCoordToOffset(this._position);

        if (pixelPosition) {
            this._element!.style.position = 'absolute';
            this._element!.style.left = '20px';
            this._element!.style.top = '20px';
        }
    }
    
    onAdd() {
        this._element = document.createElement('ul');
        let contentHTML = "<ul class='mapList'>";

        for(const color of Object.keys(this._info)){
            for(const info of this._info[color]){
                contentHTML += '<li>';
                if(info.img){
                    contentHTML += `<div class='thumb'><img src='${info.img}' alt='썸네일'/></div>`;
                }
                    
                contentHTML += `
                        <div>
                            <h4 class='${color}'>${info.type}</h4>
                            <h5>${info.title}</h5>
                            <p>${info.address}</p>
                            <span>${info.phone}</span>
                        </div>
                    </li>
                `
            }
        }

        contentHTML += "</ul>";
        
        this._element.insertAdjacentHTML('beforeend', contentHTML);
        
        this.getPanes().floatPane.appendChild(this._element);
        this.setPosition(this._position); // 초기 위치 설정
    }

    setPosition(position: naver.maps.LatLng | null) {
        if (position) {
            this._position = position;
            this.draw(); // 위치 변경 시 draw 메서드 호출
        }
    }
}