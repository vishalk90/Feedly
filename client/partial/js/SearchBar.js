Template.SearchBar.rendered = () => {
    this.$('.ui.search')
    .api({
        url: 'http://www.google.com?q={value}'
      });
}


