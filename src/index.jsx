import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.eot';
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.svg';
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff';
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff2';
import BookStore from './components/BookStore';

import './styles/app.scss';

ReactDOM.render(
  <BookStore />,
  document.getElementById('app')
);
