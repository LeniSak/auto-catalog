function autoFooter(props) {
    let distance,address;
    props.address 
        ? address = ', ' + props.address
        : address = ''
    const positionDealer = [props.latitude||'error', props.longitude||'error']
    const position = JSON.parse(localStorage.getItem('geo'))
    

      if (!positionDealer.includes('error') && position !== null) {
        const R = 6371
        const dLat = deg2rad(position[0]-positionDealer[0])
        const dLon = deg2rad(position[1]-positionDealer[1])
        const a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(position[0])) * Math.cos(deg2rad(positionDealer[0])) *
          Math.sin(dLon/2) * Math.sin(dLon/2)

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
        distance = (R * c).toFixed(1)
        props.setDistance(distance)
        distance += ' (км)'
        function deg2rad(deg) {
          return Math.PI/180 * deg
        }
      } else {
        distance = ''
        props.setDistance(distance)
      }

    function openUrl() {
      if (props.url) window.open(props.url)
    }

    return (
      <div className="auto__footer">
        <svg className='auto__loc-icon' xmlns="http://www.w3.org/2000/svg" width="500" height="500" viewBox="0 0 500 500">
          <g fill-rule="evenodd">
              <path d="M249.1,82c54.4,0,113.1,33.7,114.9,124.2c0,78.4-88.8,175.8-109.7,198.5c-1.7,1.8-6.9,1.8-8.7,0
          C224.8,383.8,136,286.3,136,206.2C136,115.7,193.8,82,249.1,82z M249.9,230.8c19.9,0,36-16.1,36-35.9s-16.1-35.9-36-35.9
          s-36,16.1-36,35.9C213.9,214.7,230,230.8,249.9,230.8L249.9,230.8z"/>
          </g>
        </svg>
        <span className="auto__address" onClick={openUrl}>
          {`${distance} ${props.name}, ${props.city}${address}`}
        </span>
      </div>
    )
}


export default autoFooter