import {
    TodaysFeedsDB
} from '../../../collections/todaysFeeds.js';
import {
    Category
} from '../../../collections/category.js';

import {ArticlesDB} from '../../../collections/articles.js';
import { MyBoardDB } from '../../../collections/myBoard.js';

Template.SavedForLaterReading.helpers({
    GetArticles: function () {
        return ArticlesDB.find();
    }
});

Template.SavedForLaterReading.events({
    'click .ClickTitle':function(event){

        if(Meteor.userId())
        {
            Session.set('singleArticle',this._id);
        console.log("clicking title");
            FlowRouter.go('/singleArticle');
            
        }
        else{
            alert ("Please Login first!!!");
        }


    },
    'click .ReadLater': function(event){
        alert ("Saved!");
        MyBoardDB.update(this._id,{$set:{readLater:true}});
        console.log("saved "+ this._id);
    },
    'click AddToFavorite':function(event){
        alert ("Saved to Favorite");
    }

});