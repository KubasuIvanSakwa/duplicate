import './ServiceCoverage.css';

export default function ServiceCoverage() {
  return (
    <div className='service-coverage'>
      <h2>We Are At Your Doorstep</h2>
      <p>Our mobile professionals visit residents in the following locations:</p>
      <table>
        <thead>
          <tr>
            <th>County</th>
            <th>Coverage</th>
            <th>Travel Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Nairobi</td>
            <td>Westlands, Kilimani, kileleshwa, Lavington peponi road,muthaiga,south c,south b,karen,lagata, thome</td>
            <td>Ksh 500</td>
          </tr>
          <tr>
            <td>Kiambu</td>
            <td>kiambu road, kitusuru, thigiri,gigiri,runda, Rosslyn, Lowerkabete</td>
            <td>Ksh 500</td>
          </tr>
          <tr>
            <td>Kajiado</td>
            <td>Karen</td>
            <td>Ksh 700</td>
          </tr>

        </tbody>
      </table>
      <p>You can easily confirm on this map whether your location is within our service reach.</p>
      <a href="https://maps.app.goo.gl/i7WF2JVCgfLQ4LsA8" target="_blank" rel="noopener noreferrer" className="map-link">
        View Coverage Map
      </a>
    </div>
  );
}
