import React, {useEffect} from 'react'
import redArrow from 'assets/images/about/marker_red.png'
import blueArrow from 'assets/images/about/marker_blue.png'
import mintArrow from 'assets/images/about/marker_mint.png'
import yellowArrow from 'assets/images/about/marker_yellow.png'
import ReactDOMServer from 'react-dom/server'

type MarkerList = {
    [key: string]: { lat: number; lng: number, title: string }[];
};

export const OffLineComponent = () => {

    useEffect(() => {
        const markerList : MarkerList = {
            'redArrow': [
                { lat: 37.637937, lng: 126.917519, title: '롯데마트 은평점' },
                { lat: 37.554961, lng: 126.970142, title: '롯데마트 서울역점' },
                { lat: 37.562285, lng: 126.801430, title: '롯데마트 김포공함점' },
            ],
            'mintArrow': [
                { lat: 37.525728, lng: 126.928185, title: '더현대서울 : 위펫 (9월 21일 오픈예정)' },
            ],
            'blueArrow': [
                { lat: 37.529843, lng: 126.964390, title: '원테일 용산아이파크몰점' },
            ],
            'yellowArrow': [
                { lat: 37.605647, lng: 127.174794, title: '타르틴베이커리 남양주점' },
            ]
        };

        const contentString = (title: string) => {
            return ReactDOMServer.renderToStaticMarkup(
                <div className="iw_inner">
                <h3>{title}</h3>
                <p>서울특별시 중구 태평로1가 31 | 서울특별시 중구 세종대로 110 서울특별시청<br />
                <img src="/img/example/hi-seoul.jpg" width="55" height="55" alt="서울시청" className="thumb" /><br />
                02-120 | 공공,사회기관 &gt; 특별,광역시청<br />
                <a href="http://www.seoul.go.kr" target="_blank" rel="noreferrer">www.seoul.go.kr/</a>
                </p>
                </div>
            )
        }
        
        const initMap = () => {
            const map = new naver.maps.Map("map", {
                center: new naver.maps.LatLng(37.511337, 127.012084),
                zoom: 10,
            });

            for(const color of Object.keys(markerList)){
                let arrowImg;

                switch(color){
                    case 'redArrow':
                        arrowImg = redArrow;
                        break;
                    case 'blueArrow':
                        arrowImg = blueArrow;
                        break;
                    case 'mintArrow':
                        arrowImg = mintArrow;
                        break;
                    case 'yellowArrow':
                        arrowImg = yellowArrow;
                        break;
                }

                for(const coord of markerList[color]){
                    
                    const marker = new naver.maps.Marker({
                        position: new naver.maps.LatLng(coord.lat, coord.lng),
                        map: map,
                        icon: {
                            content: `<img src=${arrowImg} alt="" class="marker"/>`
                        }
                    });

                    const infowindow = new naver.maps.InfoWindow({

                        content: contentString(coord.title)
                    });

                    naver.maps.Event.addListener(marker, "click", () => {
                        if (infowindow.getMap()) {
                            infowindow.close();
                        } else {
                            infowindow.open(map, marker);
                        }
                    });
                    
                }
            }
        }

        initMap();
    }, []);

    return (
        <div className='wrapper'>
            <div className='bg'>
                <div id='map'></div>;
            </div>
        </div>
    )
}
