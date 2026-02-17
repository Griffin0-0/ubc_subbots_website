import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import './SponsorTiers.css';



type Sponsor = {
    name: string;
    logo: string;
    website: string;
    description: string;
    tier: string;
    theme: string;
}

type SponsorTier = {
    tier: string;
    price: number;
    image: string;
    deliverables: string[];
}

function SponsorTiers() {

    const [sponsorTiers, setSponsorTiers] = useState<SponsorTier[]>([]);
    const [sponsors, setSponsors] = useState<Sponsor[] | []>([]);

    useEffect(() => {
        fetch('/data/sponsor-tiers.json')
            .then((res) => res.json())
            .then(setSponsorTiers)
            .catch(console.error);

        fetch('/data/sponsors.json')
            .then((res) => res.json())
            .then(setSponsors)
            .catch(console.error);
    }, []);



    const sponsorCountByTier: Record<string, number> = sponsors.reduce(
        (acc, sponsor) => {
            if (!acc[sponsor.tier]) acc[sponsor.tier] = 0;
            acc[sponsor.tier]++;
            return acc;
        },
        {} as Record<string, number>
    );


    const tierDeck = sponsorTiers.map((item, index) => {
        return <TierDropdown key={index} id={index} sponsorTier={item} sponsorCount={sponsorCountByTier[item.tier] ?? 0} />
    });



    return (
        <div className="sponsor-tiers">
            {tierDeck}
        </div>
    );
}



interface tierDropdownProps {
    sponsorTier: SponsorTier;
    sponsorCount: number;
    id: number;
}


function TierDropdown({ sponsorTier, sponsorCount, id }: tierDropdownProps) {


    return (
        <div className="tier-dropdown">
            <div className="header">
                <h2>{sponsorTier.tier}</h2>
                {/* <FontAwesomeIcon icon={} /> */}
            </div>

            <div className="dropdown-content">
                <img src="" />

                <div></div>

                <h4>{sponsorCount} Current sponsor{sponsorCount === 1 ? "" : "s"}</h4>
            </div>
        </div>
    );
}




export default SponsorTiers;