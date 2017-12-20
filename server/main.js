import { Meteor } from 'meteor/meteor';
import jQuery from 'jquery';
import {Categories} from '../collections/category.js';

import { TodaysFeedsDB} from '../collections/todaysFeeds.js';
import { MyBoardDB } from '../collections/myBoard.js';
import { SourcesDB } from '../collections/sources.js';
import {ArticlesDB} from '../collections/articles.js';

Meteor.startup(() => {
  // code to run on server at startup
});


Meteor.methods({
  'removeAll': function () {
    ArticlesDB.remove({});
  }
});
