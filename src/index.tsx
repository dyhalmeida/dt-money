import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer, Model } from 'miragejs';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Luz',
          type: 'withdraw',
          category: 'Energia',
          amount: 100.87,
          createdAt: new Date('2021-12-01 16:00:00'),
        },
        {
          id: 2,
          title: 'Cata',
          type: 'deposit',
          category: 'Salário',
          amount: 4900,
          createdAt: new Date('2021-12-11 13:00:00'),
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
