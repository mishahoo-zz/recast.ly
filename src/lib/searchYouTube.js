var searchYouTube = ({query, key, max = 5}, callback) => {
  // TODO
  $.get('https://www.googleapis.com/youtube/v3/search', {
    'key': key,
    'maxResults': max,
    'part': 'snippet',
    'q': query,
    'type': 'video',
    'videoEmbeddable': 'true'
  }).done(({items}) => {
    if (callback) {
      callback(items);
    }
  }).fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) => {
      console.error(err);
    });
  });
};

window.searchYouTube = searchYouTube;
