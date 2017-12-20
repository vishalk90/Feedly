import { TodaysFeedsDB} from '../../../collections/todaysFeeds.js';
import { MyBoardDB } from '../../../collections/myBoard.js';
Template.TodaysFeeds.helpers({
    todaysFeedsDB: function(){

        var sorces = "";

        var myBoardArticles = MyBoardDB.find();
        console.log(myBoardArticles);

        for(var i = 0 ; i< myBoardArticles.length ; i++)
        {
            if(i===0)
            {
                sorces= sorces.insert(myBoardArticles[i].id);
            }
            sorces+= sorces.insert(myBoardArticles[i].id);
        }
        console.log(sorces);

        Meteor.call('GetTopStories',sorces,function(error, response){
            console.log(response);
        });
            
       return TodaysFeedsDB.find();
    }
});