import {
    Category
} from '../../../collections/category.js';
import {
    SourcesDB
} from '../../../collections/sources.js';
import {
    Meteor
} from 'meteor/meteor';

Template.Category1.helpers({
    CategoriesDB: function () {

        Meteor.call('GetSources', function (error, response) {
            if (error) {
                console.log(error);
            } else {
                var result = JSON.parse(response);
                var size = result.sources.length;
                console.log(result.sources);


                   // for (var i = 0; i < size; i++) {
                    //    SourcesDB.insert(result.sources[i]);
                   // }

            }
        });

        CategoriesDB = Category.find();
       // console.log(CategoriesDB);
        return CategoriesDB;

    }
});

Template.Category1.events({
    'click .bottom': function (event) {
        console.log(event.target.children[0].title);
        sourceName = event.target.children[0].title

        console.log(this._id+" "+Meteor.userId());
        
        if(Meteor.userId())
        {
            FlowRouter.go('/source');
            Session.set('source',sourceName);
        }
        else{
            alert ("Please Login first!!!");
        }
        
    }
});