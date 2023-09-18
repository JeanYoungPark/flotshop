import { useEffect } from 'react';
import fullpage from 'fullpage.js';

export const Main = () => {
    useEffect(() => {
        new fullpage('#fullpage', {
          });
    }, []);

    return (
        <div id="fullpage">
            <div className="section">Section 1</div>
            <div className="section">Section 2</div>
        </div>
    )
}
