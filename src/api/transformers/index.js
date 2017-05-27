const axios = require('axios');

function transformToInnerData(item) {
  const data = item.data;

  data.kind = item.kind;

  return data;
}

function transformListing(item, transformFunc) {
  const innerData = transformToInnerData(item);

  innerData.children = transformFunc(innerData.children);

  return innerData;
}

function transformComment(item, transformFunc) {
  const innerData = transformToInnerData(item);

  innerData.replies = transformFunc(innerData.replies);

  // remove non-comment comments (more)
  if (Array.isArray(innerData.replies)) {
    innerData.replies = innerData.repleis.filter(comment => comment.kind === 't1');
  }

  return innerData;
}

function ignore() {
  return undefined;
}

const transformers = {
  Listing: transformListing,
  // post
  t3: transformToInnerData,
  t1: transformComment,
  more: ignore,
  undefined: ignore,
};

function transform(data) {
  let output;

  // some endpoints, like the comments section, will return multiple items.
  if (Array.isArray(data)) {
    output = data.map(transform).filter(item => item !== null && typeof (item) !== 'undefined');
  } else {
    const kind = data.kind;
    if (transformers[kind]) {
      output = transformers[kind](data, transform);
    } else {
      console.warn(`Unknown kind while transforming: "${kind}", defaulting to data.data if exists`);
      output = data.data ? data.data : data;
    }
  }

  return output;
}

export default axios.defaults.transformResponse.concat(transform);
