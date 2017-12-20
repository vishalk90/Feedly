import { SourcesDB } from '../../../collections/sources.js';
import { MyBoardDB } from '../../../collections/myBoard.js';
import { Session } from 'meteor/session';

Template.Source1.helpers({
    SorcesDB: function(){
        var _source = Session.get('source');
        
        var result = SourcesDB.find({category:_source});
        console.log(result);
        return result;
    }
});

Template.Source1.events({
    'click .clickSource':function(event){
        console.log("in click sourse "+ event);
        sourceId = event.target.nextElementSibling.childNodes[1].name;
        console.log(sourceId);
        //console.log(this._id+" "+Meteor.userId());
        
        if(Meteor.userId())
        {
            Session.set('sourceId',sourceId);
            //FlowRouter.go('/singleSource');
        }
        else{
            alert ("Please Login first!!!");
        }
    },
    'click .FollowArticle':function(event){
        console.log(event);
        articleID = event.target.children[0].title;

        //console.log(this._id+" "+Meteor.userId());
        
        if(Meteor.userId())
        {
            MyBoardDB.insert(this);
        }
        else{
            alert ("Please Login first!!!");
        }
    }
});