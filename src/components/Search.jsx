import React, {Component} from 'react'

class Search extends Component {

    render () {
        
        return (
            <div className="App__header">
                <div  className="sort">
                    <span className="sort__title">Сортивровать по:</span>
                    <select className="sort__select" onChange={this.props.sortCars}>
                        <option value="Name">По имени</option>
                        <option value="Descending">По убыванию цены</option>
                        <option value="Ascending">По возрастании цены</option>
                        <option value="Distance">По удаленности</option>
                    </select>
                </div>
                <div className="search" onChange={this.props.searchCars}>
                    <input type="Text" className="search__input" placeholder="Поиск по авто, названию, адресу, городу филиала"/>
                </div>
                
            </div>
        )
    }
}

export default Search