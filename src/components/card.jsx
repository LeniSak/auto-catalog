import React, {Component} from 'react'
import AutoHeader from './autoHeader'
import AutoBody from './autoBody'
import AutoFooter from './autoFooter'

class Card extends Component {
    render () {
        
        const headVariable = {
            url: this.props.images,
            name: this.props.model_name,
            price: this.props.price,
            kit_name: this.props.kit_name,
        }
        const bodyVariable = {
            features: this.props.features,
        }
        const footVariable = {
            ...this.props.dealer,
            setDistance: this.props.setDistance(this.props.index)
        }

        return (
            <li className="list-auto__item">
                <div className="item-auto">
                    <AutoHeader 
                        {...headVariable}
                    />
                    <AutoBody
                        {...bodyVariable}
                    />
                    <AutoFooter
                        {...footVariable}
                    />
                </div>
                
            </li>
        )
    }
}

export default Card