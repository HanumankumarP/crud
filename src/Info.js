import React,{Component} from 'react';

const Info=(props)=>{
    return(
        <div>
        <h1> Technologies used to develop this </h1>
        <ul className="list-group">
            <li className="list-group-item">
                HTML5 (Simantic Elements)
            </li>

            <li className="list-group-item bg-light">
                CSS3, Bootstrap4.0
            </li>

            <li className="list-group-item">
                JavaScript (ES-6)
            </li>
            <li className="list-group-item bg-light">
                ReactJS (16.12.x) along with states,components
            </li>
            <li className="list-group-item">
                PWA concepts (serviceWorker, manifest.json, 
                Accessibility(color contrast))
            </li>
        </ul>
        </div>
    )
}

export default Info;