import './Background.css';

import Anchors from '../../assets/backgrounds/anchors-away.svg?react';
import Bubbles from '../../assets/backgrounds/bubbles.svg?react';
import Hexagons from '../../assets/backgrounds/hexagons.svg?react';
import Topography from '../../assets/backgrounds/topography.svg?react';



interface bgProps {
    background: string;
}

function Background({ background }: bgProps) {

    function pickBg(background: string) {

        switch (background) {
            case "anchors":
                return <Anchors className="anchors" />
            
            case "bubbles":
                return <Bubbles className="bubbles" />

            case "hexagons":
                return <Hexagons className="hexagons" />

            case "topography":
                return <Topography className="topography" />
            
            default:
                return <Bubbles className="bubbles" />
        }
    }

    return (
        <section className="background">
            {pickBg(background)}
        </section>
    )
    
}


export default Background;