# TDD with JEST

This project calls the Open Weather Map API through RapidApi and returns simple html. The testing framework used in this project is JEST by Facebook.

To begin the test enter into the command line:

    npm test

My 2 simple tests are just checking to make sure that I am getting back what I think I should be getting back depending on what is being sent to the function call.

    const Streamer = require('./ElevatorMedia');

    describe("ElevatorMedia::Streamer", () => {
        it("returns a string containing Tampa", async() => {
            expect(await Streamer.getContent()).toEqual("<div>Tampa</div>");
        });
        it("returns a string containing Toronto", async() => {
            expect(await Streamer.getContent({city: "Toronto"})).toEqual("<div>Toronto</div>");
        });
    });

Here is the result of running the test.

    Test Suites: 1 passed, 1 total
    Tests:       2 passed, 2 total
    Snapshots:   0 total
    Time:        1.878s, estimated 2s
    Ran all test suites.
