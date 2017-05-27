import PostsTransformer from './transformers/posts';

const axios = require('axios');

export default {
  getFrontPage() {
    return axios.get('https://www.reddit.com/.json', {
      transformResponse: PostsTransformer,
    });
  },
  getSubreddit(subreddit, mode) {
    let url = `https://www.reddit.com/r/${subreddit}`;

    if (typeof (mode) !== 'undefined') {
      url += mode;
    }

    url += '.json';

    return axios.get(url, {
      transformResponse: PostsTransformer,
    });
  },
  getPostDetail(subreddit, id) {
    return axios.get(`https://www.reddit.com/r/${subreddit}/comments/${id}.json`, {
      transformResponse: axios.defaults.transformResponse.concat(data => ({
        post: data[0].data.children[0].data,
        comments: data[1].data.children.map(item => item.data),
      })),
    });
  },
  getUserComments(username) {
    return axios.get(`https://www.reddit.com/user/${username}/.json`, {
      transformResponse: axios.defaults.transformResponse.concat(data => data.data.children),
    });
  },
};
