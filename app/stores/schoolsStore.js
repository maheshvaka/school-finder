var dispatcher = require("../dispatcher");

function SchoolStore() {
    var schools_listeners = [];
    var school_listener = {};
    var schools = [{ name: "Lovedale", tagline:"A wonderful school",rank: "2" , attendance:"89",behaviour:"good"}, 
                    { name: "Bishop",tagline:"An awesome school" ,rank: "3",attendance:"87",behaviour:"average"},
                    { name: "Daffodils", tagline:"An excellent school" ,rank: "5",attendance:"85",behaviour:"below average"}];
    var school = {};

    function getSchools() {
        return schools;
    }
    
    function getSchool() {
        return school;
    }

    function onChange(schools_listener, school_listner) {
        schools_listeners.push(schools_listener);
        school_listener = school_listner;
    }

    function addSchool(school ) {
        schools.push(school)
        triggerListeners();
    }

    function changePreview(school ) {
        school = school
        triggerSchoolListener(school);
    }

    function deleteSchool(school) {
        var _index;
        schools.map(function (s, index) {
            if (s.name === school.name) {
                _index = index;
            }
        });
        schools.splice(_index, 1);


        triggerListeners();
    }

    function triggerListeners() {
        schools_listeners.forEach(function (listener) {
            listener(schools);
        });
    }

    function triggerSchoolListener(school){
        school_listener(school);
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "school") {
            switch (split[1]) {
                case "addSchool":
                    addSchool(payload.school);
                    break;
                case "deleteSchool":
                    deleteSchool(payload.school);
                    break;
                case "changePreview":
                    changePreview(payload.school);
                    break;
            }
        }
    });

    return {
        getSchools: getSchools,
        getSchool: getSchool,
        onChange: onChange
    }
}

module.exports = SchoolStore();