import { MyBoardDB } from '../../../collections/myBoard.js';

Template.addNewArticle1.events({
    'submit .addNewArticleForm':function(event){
        console.log('in submit');
        console.log(event.target.articleName.value);
        var articleName = event.target.articleName.value;
        var url = event.target.url.value;
        var category =event.target.category.value;
        var description = event.target.Description.value;

        MyBoardDB.insert({name:articleName,description:description,url:url,category:category});
    }
});