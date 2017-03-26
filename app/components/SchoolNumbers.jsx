var React = require("react");
var SchoolInfo = require("./SchoolInfo.jsx");
var actions = require("../actions/SchoolActions");

module.exports = React.createClass({
		checkBoy: function(){
			if(boys < 1){
				attendance=present;
			}else{
				attendance=absence;
			}			
		},
		render: function(){
		return(
			<div>
				Preview Start
                <SchoolInfo info={this.props.school} key={"this.props.school"} />
				Preview End
			</div>
		)
	}
})