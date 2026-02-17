import { useState, useEffect } from 'react';
import SponsorCatalog from '../../components/SponsorCatalog/SponsorCatalog.tsx';
import SponsorTiers from '../../components/SponsorTiers/SponsorTiers.tsx';

import './Sponsors.css';


function Sponsors() {

    return (
        <section className="Sponsors">

            <div className="playable-thumbnail">

            </div>


            <SponsorCatalog />


            <section className="tiers">

                <div className="title">
                    <h2>Tiers</h2>
                </div>

                <SponsorTiers />

            </section>

        </section>
    );
}

export default Sponsors;