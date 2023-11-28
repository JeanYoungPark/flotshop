import React, {useCallback, useEffect} from 'react'
import redArrow from 'assets/images/about/marker_red.png'
import blueArrow from 'assets/images/about/marker_blue.png'
import mintArrow from 'assets/images/about/marker_mint.png'
import yellowArrow from 'assets/images/about/marker_yellow.png'
import ReactDOMServer from 'react-dom/server'
import { FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router'
import { InfoType, MarkerList, CustomOverlay } from './CustomOverlay'
import yongSan from 'assets/images/about/yongSan.jpg'
import seoul from 'assets/images/about/seoul.jpg'
import namYang from 'assets/images/about/namYang.jpg'

interface LocationState {
    path: string;
}

export const OffLineComponent = () => {

    const navigate = useNavigate();

    const onClickHome = useCallback(() => {
        navigate('/');
    }, [navigate])

    useEffect(() => {
        const markerList : MarkerList = {
            'red': [
                { lat: 37.637937, lng: 126.917519, type: '롯데마트', title: '롯데마트 은평점', address: '서울특별시 은평구 통일로 1050 롯데몰 은평점', phone: '02-2674-0000' },
                { lat: 37.554961, lng: 126.970142, type: '롯데마트', title: '롯데마트 서울역점', address: '서울특별시 용산구 한강대로 405 서울역(철도역)', phone: '02-390-2500', img: seoul },
                { lat: 37.562285, lng: 126.801430, type: '롯데마트', title: '롯데마트 김포공함점', address: '서울특별시 강서구 하늘길 77 김포공항역', phone: '02-6124-2500' },
            ],
            'mint': [
                { lat: 37.525728, lng: 126.928185, type: '백화점', title: '더현대서울 : 위펫 (9월 21일 오픈예정)', address: '서울특별시 영등포구 여의대로 108 파크원', phone: '02-767-2233' },
            ],
            'blue': [
                { lat: 37.529843, lng: 126.964390, type: '본사직영:원테일', title: '원테일 용산아이파크몰점', address: '서울특별시 용산구 한강대로 23길 용산역', phone: '02-2012-1441', img: yongSan },
            ],
            'yellow': [
                { lat: 37.605647, lng: 127.174794, type: '기타', title: '타르틴베이커리 남양주점', address: '경기도 남양주시 다산지금로 202', phone: '031-560-9885', img: namYang },
            ]
        };

        const contentString = (markerInfo: InfoType) => {
            return ReactDOMServer.renderToStaticMarkup(
                <div className="iw_inner">
                    <h3>{markerInfo.title}</h3>
                    <p>
                        <span>{markerInfo.address}</span>
                        <span>{markerInfo.phone}</span>
                    </p>
                </div>
            )
        }
        
        const initMap = () => {
            const position = new naver.maps.LatLng(37.511337, 127.012084);
            const map = new naver.maps.Map("map", {
                center: position,
                zoomControl: true,
                zoomControlOptions: {
                    position: naver.maps.Position.TOP_RIGHT
                },
                zoom: 10,
            });

            const overlay = new CustomOverlay({
                map: map,
                position: position,
                info: markerList
            });

            overlay.setMap(map);
            
            for(const color of Object.keys(markerList)){
                let arrowImg;

                switch(color){
                    case 'red':
                        arrowImg = redArrow;
                        break;
                    case 'blue':
                        arrowImg = blueArrow;
                        break;
                    case 'mint':
                        arrowImg = mintArrow;
                        break;
                    case 'yellow':
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
                        content: contentString(coord)
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
            <div className='bg'></div>
            <div className='mapWrap'>
                <div className='home' onClick={onClickHome}><FaHome/></div>
                <div className='top'>
                    <h2>플로트 오프라인 매장</h2>
                </div>
                <p className='des'>매장별 취급품목과 재고가 상이하여, 방문 전 매장 재고 확인 부탁드립니다.</p>
                <div id='map'></div>
            </div>
        </div>
    )
}
