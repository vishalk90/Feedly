import { Template } from "meteor/templating";

Template.MainMenu.events({
    'click .myboard':function(){
        if(Meteor.userId())
        {
            FlowRouter.go('/myBoard');
        }
        else{
            alert ("Please Login first!!!");
        }
    },
    'click .TodaysFeeds':function(){
        if(Meteor.userId())
        {
            FlowRouter.go('/today');
        }
        else{
            alert ("Please Login first!!!");
        }
    },
    'click .SavedForLaterReading':function(){
        if(Meteor.userId())
        {
            FlowRouter.go('/savedForLaterReading');
        }
        else{
            alert ("Please Login first!!!");
        }
    },
    'click .ByCategory':function(){
        if(Meteor.userId())
        {
            FlowRouter.go('/home');
        }
        else{
            alert ("Please Login first!!!");
        }
    },
    'click .SearchFeedsByQ':function(event){

        console.log(event);
        //var searchText = event.target.parentElement.previousSibling.previousSibling.value;
        //Session.set("searchText",searchText);
        //FlowRouter.go('/searchPage');
       

        FlowRouter.go('/today');
    }




    
});