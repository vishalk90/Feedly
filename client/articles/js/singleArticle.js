import { Template } from "meteor/templating";
import { Session } from "meteor/session";
import {ArticlesDB} from '../../../collections/articles.js';
import { MyBoardDB } from '../../../collections/myBoard.js';

Template.SingleArticle.helpers({
    SingleArticle:function(){
        var id = Session.get('singleArticle');
        console.log("single "+id);
        var singleArticle = ArticlesDB.findOne({_id:id});
        console.log(singleArticle);
        return singleArticle;
    }
});


Template.SingleArticle.events({
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