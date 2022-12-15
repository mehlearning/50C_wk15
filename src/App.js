// import logo from './logo.svg';
import './App.css';

import React from 'react';
import { render } from 'react-dom';

const jsonData = [
  {
    id: 1,
    title: 'Basic Javascript',
    description: 'Finish all of the free Introduction to Computer Science levels.',
    thumbnail: '../images/1_50c.png'
  },
  {
    id: 2,
    title: 'More Javascript',
    description: "Write a triangle loop, FizzBuzz, Chessboard in javascript",
    thumbnail: '../images/2_50c.png'
  },
  {
    id: 3,
    title: 'Events + Objects',
    description: 'Create an HTML file and create javascript game ui elements',
    thumbnail: '../images/3_50c.png'
  },
  {
    id: 4,
    title: 'Shared Libraries',
    description: 'Create a browser quiz and use jquery',
    thumbnail: '../images/4_50c.png'
  },
  {
    id: 5,
    title: 'Enhanced User Interfaces',
    description: 'Add more jquery to the quiz.',
    thumbnail: '../images/5_50c.png'
  },
  {
    id: 6,
    title: 'jQuery Plugin Promotional Site',
    description: 'Make 2 jquery plugins for a promo site.',
    thumbnail: '../images/6_50c.png'
  }
];

const App = () => {
  const rows = jsonData.map(data => {
    return (
      <tr key={data.id}>
        <td>
          <img src={data.thumbnail} alt={data.title} />
        </td>
        <td>{data.title}</td>
        <td>{data.description}</td>
      </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Thumbnail Image</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

render(<App />, document.getElementById('root'));

export default App;
