import test from "ava"
import imageAverageColour from "."

test("main", async (t) => {
    t.deepEqual(await imageAverageColour("test/image.png"), { red: 3, green: 3, blue: 3, rgb: "rgb(3, 3, 3)", hex: "#030303" })
})
