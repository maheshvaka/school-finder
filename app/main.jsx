//main.jsx
var React = require("react");
var ReactDOM = require("react-dom");
var SchoolsList = require("./components/SchoolsList.jsx");
var schoolsStore = require("./stores/schoolsStore");
var _schools = schoolsStore.getSchools();
var _school = schoolsStore.getSchool();
schoolsStore.onChange(function(schools){
    _schools = schools;
    render();
}, function(school){
	_school = school;
    render();
});

function render(){
    ReactDOM.render(<SchoolsList schools={_schools} school={_school} />, document.getElementById("container"));    
}

render();