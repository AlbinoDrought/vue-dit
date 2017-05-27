import Client from './client';

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

    return Client.get(url, {
      params,
    }).then(resp => resp.data);
  },
  getPostDetail(subreddit, id) {
    return Client.get(`/r/${subreddit}/comments/${id}`).then(resp => ({
      post: resp.data[0].children[0],
      comments: resp.data[1],
    }));
  },
  getUserComments(username) {
    return Client.get(`/user/${username}/`).then(resp => resp.data);
  },
};
