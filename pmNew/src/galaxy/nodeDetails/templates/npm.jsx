import React from 'react';
import commonPackageTemplate from './commonPackageTempalte.jsx';

export default require('maco').template(npmTempalte, React);

function npmTempalte(props) {
  var model = props.model;

  var link = 'https://www.npmjs.org/package/' + model.name;
  var linkText = model.name;

  return commonPackageTemplate(model, link, linkText);
}
