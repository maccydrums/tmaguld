import React, { Component } from 'react';

class MainInfo extends Component {
  render() {
    return (
      <div className = 'maininfo'>
        <div className = 'mainbox'>
          <h3>Välkommen till Tomas Martinsson Guld!</h3>
          <ul>
            <li>Vi är en liten och personlig guldsmedsbutik som har dig som kund i fokus.</li>
            <li>Vi designar och tillverkar personliga och unika smycken i vår egen ateljé.</li>
            <li>Vi skräddarsyr smycken efter dina egna önskemål och idéer.</li>
            <li>Vi omarbetar ditt "gamla" guld till nya och vackra modeller.</li>
            <li>Vi reparerar och utför värderingar av smycken.</li>
            <li>Vi har också ett urval av andra kända guldsmedsdesigners, t.ex Tina Engell Jewellery London, BNH Kaedevarer Köpenhamn m fl.</li>
            <li>Alltid högsta kvalitet till bästa pris!</li>
          </ul>
        </div>
        <div className = 'aside'>
          <h4>Våra öppetider:</h4>
            <p>
              Måndag - fredag: 10.00-18.00 <br/>
              Lördagar och söndagar, eller vardagar på andra tidpunkter än ovan enligt överenskommelse.
              <br/><br/>
              Butiken ligger på
              Sandviksvägen 10<br/>352 41, på stadsdelen Öster i Växjö.
            </p>
        </div>
      </div>
    );
  }
}

export default MainInfo;
