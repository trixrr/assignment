const mongoose = require('mongoose');
mongoose.connect('mongodb://user:password@ds115625.mlab.com:15625/uniproject');
mongoose.connection
 .once('open', () => console.log('Good to go!'))
 .on('error', (error) => {
 console.warn('Warning', error);
 });