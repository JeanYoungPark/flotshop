import React, {useEffect} from 'react'

export const OffLineComponent = () => {
    useEffect(() => {
        const loadNabverMapScript = () => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=gwj6ysym1z';
            script.async = true;
            script.onload = initMap;

            document.head.appendChild(script);
        }

        
        const initMap = () => {
            const map = new naver.maps.Map('map', {
                center: new naver.maps.LatLng(37.550316, 126.989797),
                zoom: 10
            });
    
            const marker = new naver.maps.Marker({
                position: new naver.maps.LatLng(37.550316, 126.989797),
                map: map
            });

            // const markerList = [
            //     new naver.maps.LatLng(37.637937, 126.917519),
            //     new naver.maps.LatLng(37.525728, 126.928185),
            //     new naver.maps.LatLng(37.605647, 127.174794),
            //     new naver.maps.LatLng(37.554961, 126.970142),
            //     new naver.maps.LatLng(37.562285, 126.801430),
            //     new naver.maps.LatLng(37.529843, 126.964390),
            // ];
        }

        loadNabverMapScript();
    }, []);

    return (
        <div className='wrapper'>
            <div className='bg'>
                <div id='map' style={{width: '400px', height: '400px'}}></div>;
            </div>
        </div>
    )
}
