import { useState, useEffect } from 'react';
import './SponsorCatalog.css';



type Sponsor = {
    name: string;
    logo: string;
    website: string;
    description: string;
    tier: string;
    theme: string;
}

function SponsorCatalog() {

    const [sponsors, setSponsors] = useState<Sponsor[] | []>([]);

    useEffect(() => {
        fetch('/data/sponsors.json')
        .then((res) => res.json())
        .then(setSponsors)
        .catch(console.error);
    }, []);


    const sponsorDeck = sponsors.map((item, index) => {
        return <SponsorCard key={index} id={index} sponsor={item} />
    });


    return (
        <section className="sponsor-catalog">

            <h2>Our Sponsors</h2>

            <div className="scroll-x-container">
                <div className="sponsor-deck">
                    {sponsorDeck}
                </div>
            </div>

            <div className="divider" />

        </section>
    );
}



interface sponsorCardProps {
    id: number;
    sponsor: Sponsor;
}

function SponsorCard({ sponsor }: sponsorCardProps) {


    return (
        <div className="sponsor-card">
            <div className="display">
                <img src={`./images/logos/${sponsor.logo}`} />
                <div className="underline" />
            </div>

            <div className="content">
                <h3>{sponsor.name}</h3>
                <p>{sponsor.description}</p>
            </div>
        </div>
    );

}


export default SponsorCatalog;