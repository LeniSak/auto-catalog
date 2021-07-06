import React, {Component} from 'react'

class AutoBody extends Component {
    state = {
        refVisible: this.props.features.length > 3,
        toggleBoolean: this.props.features.length > 3,
    }

    toggleList = () => {
        this.setState({
            toggleBoolean: !this.state.toggleBoolean,

        })
    }

    listRender(array) {
        const map = array.map ((feature, index) => {
            if (this.state.toggleBoolean && index < 3) {
                return (<li className="auto__feature" key={index}>{feature}</li>)
            } else 
                if (!this.state.toggleBoolean) {
                    return (<li className="auto__feature" key={index}>{feature}</li>)
                } else {return null}    
        })

        return (<ul className="auto__features">{map}</ul>)        
    }

    render () {
        if (this.state.refVisible) {
            // Assigning variables to the link
            const nFeatures = this.props.features.length - 3
            let endLink;            
            let n = nFeatures % 10            

            // Assigning 'endLink'
            if (nFeatures > 5 && nFeatures < 21) {endLink = 'ей'}
                else switch (n) {
                    case 1:
                        endLink = 'ь'
                        break;
                    case 2: case 3: case 4:
                        endLink = 'и'
                        break;
                    case 5: case 6: case 7: case 8: case 9: case 0:
                        endLink = 'ей'
                        break;
                    default: break;
                }
            
            
            return (
                <div className="auto__body">
                    {this.listRender(this.props.features)}
                    <span className="auto__link" href='#1' onClick={this.toggleList}>
                        {this.state.toggleBoolean
                            ? `еще ${nFeatures} особенност${endLink}`
                            : 'скрыть'
                        }
                    </span>
                </div>
            )

        } else {

            return (
                <div className="auto__body">
                    {this.listRender(this.props.features)}
                </div>
            )
        }
    }
}

export default AutoBody