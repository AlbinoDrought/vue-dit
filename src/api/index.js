import PostsTransformer from './transformers/posts';
import Client from './client';

const axios = require('axios');

export default {
  getFrontPage() {
    return Client.get('/', {
      transformResponse: PostsTransformer,
    });
  },
  getSubreddit(subreddit, mode) {
    let url = `/r/${subreddit}`;

    if (typeof (mode) !== 'undefined') {
      url += mode;
    }

    return Client.get(url, {
      transformResponse: PostsTransformer,
    });
  },
  getPostDetail(subreddit, id) {
    return Client.get(`/r/${subreddit}/comments/${id}`, {
      transformResponse: axios.defaults.transformResponse.concat(data => ({
        post: data[0].data.children[0].data,
        comments: data[1].data.children.map(item => item.data),
      })),
    });
  },
  getUserComments(username) {
    return Client.get(`/user/${username}/`, {
      transformResponse: axios.defaults.transformResponse.concat(data => data.data.children),
    });
  },
};
