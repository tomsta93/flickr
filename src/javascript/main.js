/* globals window, document */

import DisplayImages from './display-images';

const TAGS = 'london';
const API = `http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=dataHandler&tags=${TAGS}`;

window.dataHandler = function (data) {
  new DisplayImages(data);
};

let script = document.createElement('script');
script.src = API;
document.body.appendChild(script);

export let callback = 'dataHandler';