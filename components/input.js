import React from 'react'
import ReactDOM from 'react-dom'



module.exports = class recentImgs extends React.Component {

	render (){
	    return (
	    	<div>
	    		<input type='text' onChange={this.props.onChange}/>
	    		<button>Click</button>
	    	</div>
	   	)

	}
}