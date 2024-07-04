# Pixel Smiley in Console

This TypeScript program draws a simple Smiley face using pixels (`X`) in the console.

## How it Works

The "Pixels" are represented by a `boolean[]` array (`true` = pixel on, `false` = pixel off), stored in a row-major order, meaning that each subsequent array's member is a pixel next to the previous one.

## Main Functions

### `drawDot(x: number, y: number)`
Draws a single dot at the given `(x, y)` position, if it is within image boundaries.

### `drawHorizontalLine(x: number, y: number, length: number)`
Draws a horizontal line starting from the `(x, y)` position for the specified length in pixels.

### `drawVerticalLine(x: number, y: number, length: number)`
Draws a vertical line starting from the `(x, y)` coordinates for the specified length in pixels.

### `drawRectangle(x: number, y: number, width: number, height: number)`
Draws a rectangle of specified `width` and `height`, starting from position `(x, y)`.

### `outputImage(onChar = "X", offChar = " ")`
Prints the current state of `imageData` to the console, representing "on" pixels as `"X"` (default) or whatever character is passed as `onChar`, and "off" pixels as `" "` (default) or whatever character is passed as `offChar`.

### `createImageData(): boolean[]`
This function initializes the array `imageData` with the `false` values, effectively "clearing" our canvas image.

## Visual Output

Here is what the output looks like in console: 
<br><br>
<p align="center">
<img src="/src/assets/pixel-smile.jpg?raw=true" alt="Console Pixel Smiley" title="Pixel Smile">
</p>

## Unleash Your Creativity!

This code is really a starting point. From here you can expand this to draw more complex images or even animations in your console. Creativity is your only limitation. Plus, it would be a fun way to get more understanding of how images are drawn digitally. Enjoy your coding journey!  Happy coding adventure! 🚀
