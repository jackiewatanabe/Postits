// postit_notes.js

import Backbone from 'backbone';
import Postit from '../models/postit.js';

var PostitNotes = Backbone.Collection.extend({
  model: Postit
});

export default PostitNotes;
