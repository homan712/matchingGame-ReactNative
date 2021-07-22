import React,{ Component } from 'react'
import {
    TouchableOpacity,
    Text, 
} from 'react-native'

class Card extends Component {
    render(){
        return (
          <TouchableOpacity onPress={this.props.onPress}style={ {...this.props.style} }>
            <Text style={{fontSize: this.props.fontSize || 32}}>{this.props.isShow ? this.props.title : this.props.cover}</Text>
          </TouchableOpacity>
        )
    }
}


export default Card