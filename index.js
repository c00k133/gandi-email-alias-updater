const { DOMAIN, MAILBOX_ID, APIKEY, PORT = 3000 } = process.env;

const PATH = `/v5/email/mailboxes/${DOMAIN}/${MAILBOX_ID}`;

const axios = require('axios');
axios.defaults.baseURL = 'https://api.gandi.net';
axios.defaults.headers.common['Authorization'] = `Apikey ${APIKEY}`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (request, response) => {
    response.render('index');
});

app.get('/set', async (request, response) => {
    const { alias: newAlias } = request.query;

    const { data: { address, aliases } } = await axios.get(PATH);
    const newAliases = [...aliases, newAlias];

    axios
        .patch(PATH, { aliases: newAliases })
        .then(() => response.render('index', { address, newAlias, aliases: newAliases }))
        .catch(() => response.render('index', { error: true }));
});

app.get('/list', async (request, response) => {
    const { data: { address, aliases } } = await axios.get(PATH);
    response.render('index', { address, aliases });
});

app.get('/delete', async (request, response) => {
    const { alias: deleteAlias } = request.query;

    const { data: { address, aliases } } = await axios.get(PATH);
    const newAliases = aliases.filter(alias => alias !== deleteAlias);

    axios
        .patch(PATH, { aliases: newAliases })
        .then(() => response.render('index', { address, deleteAlias, aliases: newAliases }))
        .catch(() => response.render('index', { error: true }));
});

app.listen(PORT, error => {
    if (error) {
        return console.log('Something went wrong:', error);
    }

    console.log(`Server is listening on ${PORT}`);
});

module.exports = app;
