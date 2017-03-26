var dispatcher = require("../dispatcher");

module.exports = {
    changePreview:function(school){
        dispatcher.dispatch({
           school:school,
           type:"school:changePreview" 
        });
    },
    addSchool:function(school){
        dispatcher.dispatch({
           school:school,
           type:"school:addSchool" 
        });
    },
    deleteSchool:function(school){
        dispatcher.dispatch({
           school:school,
           type:"school:deleteSchool" 
        });
    }
}