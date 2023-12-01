import React, {useEffect} from 'react'
import { fromTopIn20 } from 'utils';

export const VideoComponent = () => {
    useEffect(() => {
        fromTopIn20();
    }, []);

    return (
        <div className='wrapper'>
            <div className='top fromTopIn20'>
                <h2>영상 소개</h2>
            </div>
            <div className='content'>
                <div className='pd-60'>
                    <iframe width="800" height="450" src="https://www.youtube.com/embed/79WTt_0J38w" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
                <div className='pd-60'>
                    <iframe width="800" height="450" src="https://www.youtube.com/embed/eV6KDEZAjms" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
                <div className='pd-60'>
                    <iframe width="800" height="450" src="https://www.youtube.com/embed/qPS5s0fY_tM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
            </div>
        </div>
    )
}
