import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Nameplate from './nameplate'



class Scoreboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            data : nextProps.data.sort( (a,b) => {
                if( b.score === a.score){
                    return a.is_self ? -1 : 1
                }
                else{
                    return b.score - a.score
                }
            })
        }) 
        
    }
    render(){
        const nameplates = this.state.data.map(data =>
        <Nameplate key={data.name} name={data.name} score={data.score} is_self={data.is_self}/>
        )
        return (
            <div>{nameplates}</div>
        )
    }
}

export default Scoreboard