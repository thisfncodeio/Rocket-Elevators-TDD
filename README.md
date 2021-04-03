# Testing functions with JEST // Javascript

This project is used to test the concept of TDD implementations.

It uses JEST to test one simple function(getContent) that's getting back
the astronomical picture of the day using the NASA Api. To use this navigate to
the command line and enter this command:

    npm test

It will trigger 'index.test.js' which contains this simple test

    const getContent = require('./index');

    describe('getContent', () => {
        it('can fetch', async() => {
            response = await getContent("https://api.nasa.gov/planetary/apod?api_key=zOo3dMwTVU2F039jljNCfbowWVnMjRvYAqEIWBv8");
            expect(response).toContain("title");
        })
    });

'index.test.js' is gonna test the getContent function which is located in the
'index.js' file and looks like this.

    const fetch = require("node-fetch");

    async function getContent() {
        const url = 'https://api.nasa.gov/planetary/apod?api_key=zOo3dMwTVU2F039jljNCfbowWVnMjRvYAqEIWBv8';
        const response = await fetch(url);
        const json = await response.json();
        const data = JSON.stringify(json);
        const html = "<div>" + data + "</div>";
        console.log(html);
        return html;
    };

    module.exports = getContent;

In the terminal you should see that the test works by receiving a message that
contains something like this.

    Test Suites: 1 passed, 1 total
    Tests:       1 passed, 1 total
    Snapshots:   0 total
    Time:        3.156s
    Ran all test suites.