// import Client from './client';
import CachedClient from './cachedClient';

export default {
  getSubreddit(subreddit, mode, after) {
    let url;

    if (typeof (subreddit) !== 'undefined' && subreddit.length > 0) {
      url = `/r/${subreddit}/`;
    } else {
      // assume frontpage
      url = '/';
    }

    if (typeof (mode) !== 'undefined') {
      url += mode;
    }

    const params = {};

    if (typeof (after) !== 'undefined') {
      params.after = after;
    }

    return CachedClient.get(url, {
      params,
      ttl: 30,
    }).then((resp) => resp.data);
  },
  getPostDetail(subreddit, id) {
    return CachedClient.get(`/r/${subreddit}/comments/${id}`, { ttl: 60 }).then((resp) => ({
      post: resp.data[0].children[0],
      comments: resp.data[1],
    }));
  },
  getUserComments(username) {
    return CachedClient.get(`/user/${username}/`, { ttl: 120 }).then((resp) => resp.data);
  },
};
