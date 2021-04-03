const Streamer = require('./ElevatorMedia');

describe("ElevatorMedia::Streamer", () => {
    it("returns a string containing Tampa", async() => {
        expect(await Streamer.getContent()).toEqual("<div>Tampa</div>");
    });
    it("returns a string containing Toronto", async() => {
        expect(await Streamer.getContent({city: "Toronto"})).toEqual("<div>Toronto</div>");
    });
});
