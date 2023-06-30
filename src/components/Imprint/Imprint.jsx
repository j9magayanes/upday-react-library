import React from 'react';
import './imprint.css';


export const Imprint= () => {
        return (
            <div className="page">
            <article>
            <div className="padded-lr legal">
                <h1 id="imprint">Impressum</h1>

                <p>(Anbieterkennzeichnung gemäß § 5 TMG)</p>

                <p>upday GmbH & Co. KG <br/>
                Axel-Springer-Straße 65 <br/>
                10888 Berlin <br/></p>

                <p>Vertreten durch die upday Management GmbH, diese vertreten durch ihre Geschäftsführer Peter Würtenberger und Thomas Hirsch.</p>

                <p>
                    <h4>Kontakt:</h4>
                    Telefax: +49 (0)30 – 2591 38652 <br/>
                    E-Mail: <a href="mailto:info@upday.com">info@upday.com</a>
                </p>

                <p>
                    <h4>Registereintrag:</h4>
                    Amtsgericht Charlottenburg, Handelsregister Registernummer: HRA 51224 B
                </p>

                <p>
                    <h4>Umsatzsteuer-ID:</h4>
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: DE815576343
                </p>

                <p>
                    <h4>Datenschutzbeauftragter:</h4>
                    Dr. Olaf Koglin, <br />
                    upday GmbH & Co. KG <br /> Axel-Springer-Str. 65 <br /> 10888 Berlin <br />
                    <a href="mailto:privacy@upday.com">privacy@upday.com</a>
                </p>

            </div>
            </article>
            </div>
        );
}
