import React, {Component}  from 'react'
import Card from './components/card.jsx'
import cars from './assets/cars'
import './App.css'
import Search from './components/Search'

class App extends Component {
  state = {
    count: this.updateDimensions(),
    mapCar: this.carRender(),
    value: 'Name',
    distance: {},
    inputCar: this.carRender(),
  }

  setDistance(index) {
    return (value) => { // eslint-disable-next-line
      this.state.distance[index] = value 
    }
  }

  carRender () {
    const mapCar = cars.map((car, index) => {
      return (
        <Card
            {...cars[index]}
            key = {index}
            index = {index}
            setDistance = {this.setDistance.bind(this)}
        />
      )
    })
    
    return mapCar
  }

  sortCars (events) {
    if (events) {
        this.setState ({
            value: events.target.value
        })
    }

    const value = this.state.value

    function sortDefault () {
      this.state.mapCar.sort((a,b) => {
        return b.props.price - a.props.price
      })
    }

    this.state.inputCar.sort((a,b) => {    
        // First
        sortDefault.apply(this)
        if (value === 'Name') {                
            if (a.props.model_name + (a.props.kit_name || '') < b.props.model_name  + (b.props.kit_name || '')) {
                return 1
            } else if (a.props.model_name + (a.props.kit_name || '')  > b.props.model_name + (b.props.kit_name || '')) {
                return -1
            } else {
                return 0
            }
        }
        // Second 
        if (value === 'Ascending') {
            return a.props.price - b.props.price
        }
        // Third
        if (value === 'Descending') {
            return b.props.price - a.props.price
        }
        // Fourth
        if (value === 'Distance') {
            if (this.state.distance[a.props.index] < this.state.distance[b.props.index]) {
                return 1
            } else if (this.state.distance[a.props.index] > this.state.distance[b.props.index]) {
                return -1
            } else {
                return 0
            }
        }
        return true
    })

      return true
}

  searchCars (props) {
    const value = props.target.value.toLowerCase()
    const mapCar = this.state.mapCar
    let newMapCar = []
    if (value.trim()) {
      for (let i in mapCar) {
        let modelName = mapCar[i].props.model_name.toLowerCase()
        let kitName = (mapCar[i].props.kit_name || '').toLowerCase()
        let modelKitName = modelName + ' ' + kitName
        let city = mapCar[i].props.dealer.city.toLowerCase()
        let address = (mapCar[i].props.dealer.address || '').toLowerCase()
        let dealerName = mapCar[i].props.dealer.name.toLowerCase()
        let longAdress = dealerName + ' ' + city + ' ' + address
        if (modelName.indexOf(value) >= 0 ||
            kitName.indexOf(value) >= 0 ||
            modelKitName.indexOf(value) >= 0 ||
            city.indexOf(value) >= 0 ||
            address.indexOf(value) >= 0 ||
            dealerName.indexOf(value) >= 0 ||
            longAdress.indexOf(value) >= 0
            ) {
          newMapCar.push(mapCar[i])
          continue;
        }   
      } 
    } else {
      newMapCar = [...mapCar]
    } 
    
      
      this.setState(prevState => ({
        inputCar: [...newMapCar]
      }))
  }

  columnsGroupBy (num = this.updateDimensions(), array) {
    let count = 1
    let arr = []; arr[0]=[]; arr[0].push(array[0])

    if (array.length === 0) {
      return (
        <div className="list-auto">
          <p class="list-auto__empty">
            По вашему запросу автомобили не найдены. Измените или очистите запрос.
          </p>
        </div>
      )
    }

    array.reduce((none, obj) => {
      if (count === num) {count = 0}
      arr[count] = arr[count] || []
      arr[count].push(obj)
      count++
      return none
    })

    for (let i in arr) {
      arr[i] = <div 
                    className="auto__group" 
                    style={{maxWidth: 100/this.state.count+"%"}} 
                    key = {i}>
                  {arr[i]} {/*value*/}
                </div>
    }

    return (
      <div className="App__body">
        <div className="list-auto">
          {[...arr]}
        </div>
      </div>)
  }
  
  updateDimensions() {
    const width = window.innerWidth
    let num = 4
    if (width <= 1000) {
      num = 3
    }
    if (width <= 768) {
      num = 2
    }
    if (width <= 480) {
      num = 1
    }
    this.setState(()=> {
      return {
        count: num
      }
    })
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  render () {     
    this.sortCars()

    function success({ coords }) {
      // Get latitude and longitude
      const { latitude, longitude } = coords
      const position = [latitude, longitude]
      if (JSON.parse(localStorage.getItem('geo')) == null) {
        localStorage.setItem('geo', JSON.stringify(position))
        document.location.reload()
      }
      
    }
      
    function error({ message }) {
      console.log(message) // if access is denied, we get - "PositionError: User denied Geolocation"
      localStorage.setItem('geo', null)
    }

    navigator.geolocation.getCurrentPosition(success, error, {enableHighAccuracy: true,})
    
    return (
      <div className="App">
        <Search
          sortCars = {this.sortCars.bind(this)}
          searchCars = {this.searchCars.bind(this)}
        />
        {this.columnsGroupBy(this.state.count ,this.state.inputCar)}
      </div>
    );
  }

}

export default App;