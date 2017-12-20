import { MyBoardDB } from '../../../collections/myBoard.js';

Template.MyBoard.helpers({
    MyBoardData:function(){
        return MyBoardDB.find();
    }
});

Template.MyBoard.events({
    'click .ReadLater': function(event){
        MyBoardDB.update(this._id,{$set:{readLater:true}});
    },
    'click addAsFavorite': function(event){
        MyBoardDB.update(this._id,{$set:{favorite:true}});
    },
    'click .RemoveArticle': function(event){
        MyBoardDB.remove(this._id);
    },
    'click .newArticle': function(event){
        console.log("clicked new article")
        if(Meteor.userId())
        {
            //Session.set('showAddNewArticle',true);
           FlowRouter.go('/addNewArticle1');
           
        }
        else{
            alert ("Please Login first!!!");
        }
    },
    'click .clickSource':function(event){
        console.log("in click sourse "+ event);
        console.log(event);
        sourceId = event.target.name;
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
    }
});