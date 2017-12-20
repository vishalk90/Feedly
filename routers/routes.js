import {ArticlesDB} from '../collections/articles.js';
import {searchDataDB} from '../collections/searchData.js';
if(Meteor.isClient){
	Accounts.onLogin(function(){
		FlowRouter.go('home');
	});

	Accounts.onLogout(function(){
		FlowRouter.go('/');
	});
}
FlowRouter.triggers.enter([function(context, redirect){
	if(!Meteor.userId()) {
		FlowRouter.go('/');
	}

}]);

FlowRouter.route('/', {
	name: '/',
	action() {
		
		BlazeLayout.render('FrontPageLayout',{frontPage:'frontPage'});
	}
});

FlowRouter.route('/home', {
	name: 'home',
	action() {
		if(Meteor.userId()){
			FlowRouter.go('home');
		}

		BlazeLayout.render('MainLayout', {main: 'homePage'});
	}
});

FlowRouter.route('/singleSource', {
	name: 'singleSource',
	action() {

		_sourceId = Session.get('sourceId');
		console.log(_sourceId);
		
		Meteor.call('removeAll',function(){
			Meteor.call('GetTopStories', _sourceId, function (error, response) {
				if (error) {
					console.log(error);
				} else {
	
					var result = JSON.parse(response);
					console.log(result);
					var size = result.articles.length;
					console.log(size);
					//TodaysFeedsDB.insert(result.articles);
					//ArticlesDB.remove();
	
					for (var i = 0; i < size; i++) {
						ArticlesDB.insert(result.articles[i]);
						//console.log(result.articles[i]);
					}
	
				}
				//return Category.find();
			});
		});


        


		BlazeLayout.render('MainLayout', {main: 'Articles1'});
	}
});

FlowRouter.route('/myBoard', {
	name: 'myBoard',
	action() {

		BlazeLayout.render('MainLayout', {main: 'MyBoard'});
	}
});

FlowRouter.route('/singleArticle', {
	name: 'singleArticle',
	action() {

		BlazeLayout.render('MainLayout', {main: 'SingleArticle'});
	}
});

FlowRouter.route('/today', {
	name: 'today',
	action() {

		BlazeLayout.render('MainLayout', {main: 'TodaysFeeds'});
	}
});

FlowRouter.route('/source', {
	name: 'source',
	action() {

		BlazeLayout.render('MainLayout', {main: 'Source1'});
	}
});


FlowRouter.route('/savedForLaterReading', {
	name: 'savedForLaterReading',
	action() {

		BlazeLayout.render('MainLayout', {main: 'SavedForLaterReading'});
	}
});


FlowRouter.route('/addNewArticle1', {
	name: 'addNewArticle1',
	action() {
		BlazeLayout.render('MainLayout', {main: 'addNewArticle1'});
	}
});

FlowRouter.route('/searchPage', {
	name: 'searchPage',
	action() {
		var searchText = Session.set("searchText");

		Meteor.call('SearchArticles',searchText,function(error, response) {
			if (error) {
				console.log(error);
			} else {
				var result = JSON.parse(response);
				console.log(result);

			searchDataDB.insert(result);
			}
		});

		
		lazeLayout.render('MainLayout', {main: 'searchPage'});

		
	}
});

FlowRouter.route('/shopping-list', {
	name: 'shopping-list',
	action() {
		BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
	}
});