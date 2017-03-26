var React = require("react");
var actions = require("../actions/SchoolActions");

module.exports = React.createClass({
    deleteSchool: function(e){
        e.preventDefault();
        result = window.confirm("Do you want to delete this School");
        if(result){
            actions.deleteSchool(this.props.info);
        }
    },
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteSchool}>&times;</span>
                </div>
                <div className="panel-body">{this.props.info.tagline}</div>
                <div className="panel-footer">{this.props.info.rank}</div>
                <div className="panel-something">{this.props.info.attendance}</div>
                 <div className="panel-veryspecial">{this.props.info.behaviour}</div>
            </div>

        )
    }
})