var React = require("react");
var actions = require("../actions/SchoolActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          tagline:"",
          rank: "",
          attendance:"",
          behaviour:""
      }  
    },
    addSchool:function(e){
        e.preventDefault();
        actions.addSchool(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
      actions.changePreview(this.state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addSchool}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">School Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="School Name" />                    
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="tagline">Tagline:</label>
                    <input type="text" className="form-control" id="tagline" name="tagline" value={this.state.address} onChange={this.handleInputChange} placeholder="Tagline" />                    
                </div>
                <div className="form-group">
                  <label className="control-label" htmlFor="rank">School Rank:</label>
                    <input type="text" className="form-control" id="rank" name="rank" value={this.state.rank} onChange={this.handleInputChange} placeholder="School Rank" /> 
                </div>
                <div className="form-group">
                  <label className="control-label" htmlFor="attendance">attendance:</label>
                    <input type="text" className="form-control" id="attendance" name="attendance" value={this.state.attendance} onChange={this.handleInputChange} placeholder="attendance" /> 
                </div>
                <div className="form-group">   
                  <label className="control-label" htmlFor="behaviour">behaviour:</label>
                    <input type="text" className="form-control" id="behaviour" name="behaviour" value={this.state.behaviour} onChange={this.handleInputChange} placeholder="behaviour" /> 
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add School</button>
                </div>
            </form>
        )
    }
})