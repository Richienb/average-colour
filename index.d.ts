declare interface AverageData {
    /**
     * The average amount of `red` in the image.
    */
    red: number

    /**
     * The average amount of `green` in the image.
    */
    green: number

    /**
     * The average amount of `blue` in the image.
    */
    blue: number

    /**
     * The serialized RGB code.
    */
    rgb: string

    /**
     * The serialized HEX code.
    */
    hex: string
}

/**
 * Find the average colour of an image.
 * @param path The path to the image.
 * @example
 * ```
 * const imageAverageColour = require("image-average-colour");
 *
 * theModule("unicorns");
 * //=> 'unicorns & rainbows'
 * ```
*/
declare function imageAverageColour(path: string): Promise<AverageData>

export = imageAverageColour
