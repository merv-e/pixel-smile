// create the image data
const imageWidth = 20;
const imageHeight = 8;
const imageData = createImageData();

/**
 * Attempts to draw a pixel ("dot") on the image at the specified (x, y) position. If the specified position is within the boundaries of the image, sets the corresponding element in the `imageData` array to `true` (pixel on). If the specified position is outside of the image boundaries, does nothing.
 
 * @param x - The x (horizontal) coordinate of the pixel to draw.
 * @param y - The y (vertical) coordinate of the pixel to draw.
 */
const drawDot = (x:number, y:number) => {
  if (isPointInImage(x,y)) {
    imageData[y * imageWidth + x] = true;
  }
}

/**
* Draws a horizontal line on the image starting from the specified (x, y) position, for the specified length. 
* Uses the `drawDot` function to draw each dot of the line.
* If a dot position is outside of the image boundaries, does nothing for that dot.

* @param x - The x (horizontal) coordinate of the starting point of the line.
* @param y - The y (vertical) coordinate of the starting point of the line.
* @param length - The length of the line to draw in pixels.
*/
const drawHorizontalLine = (x:number, y:number, length: number) => {
  for (let i = 0; i < length; i++) {
    drawDot(x + i, y);
  }
}

/**
* Draws a vertical line on the image starting from the specified (x, y) position, for the specified length.
* Uses the `drawDot` function to draw each dot of the line.
* If a dot position is outside of the image boundaries, does nothing for that dot.
* 
* @param x - The x (horizontal) coordinate of the starting point of the line.
* @param y - The y (vertical) coordinate of the starting point of the line.
* @param length - The length of the line to draw in pixels.
*/
const drawVerticalLine = (x:number, y:number, length: number) => {
  for (let i = 0; i < length; i++) {
    drawDot(x, y + i);
  }
}

// draw head
drawRectangle(0, 0, 20, 8);

// eyes
drawDot(7, 2);
drawDot(12, 2);

// smile
drawDot(4, 4);
drawHorizontalLine(4, 5, 12);
drawDot(15, 4);

// output what we drew to the console
outputImage();


function drawRectangle(
  x: number,
  y: number,
  width: number,
  height: number
) {
  // top
  drawHorizontalLine(x, y, width);
  // bottom
  drawHorizontalLine(x, y + height - 1, width);
  // left
  drawVerticalLine(x, y, height);
  // right
  drawVerticalLine(x + width - 1, y, height);
}


/**
 * Gets if the provided point is in the image.
 * @param x - The horizontal position within
 * the image.
 * @param y - The vertical position within
 * the image.
 */
function isPointInImage(x: number, y: number) {
  return x >= 0 && x < imageWidth && y >= 0 && y < imageHeight;
}

/**
 * Outputs the image data state to the console.
 * @param onChar - Character to render an
 * "on" pixel with.
 * @param offChar - Character to render an
 * "off" pixel with.
 */
function outputImage(onChar = "X", offChar = " ") {
  let text = "";

  for (let i = 0; i < imageData.length; i++) {
    if (i > 0 && i % imageWidth === 0) {
      text += "\n"; // new line
    }

    text += imageData[i] ? onChar : offChar;
  }

  console.log(text);
}

/**
 * Creates an array of booleans where a pixel
 * is "on" when the value is `true` and "off"
 * when the value is `false`.
 *
 * The pixel values are stored in rows
 * (row-major order) where the index of a
 * pixel in the array can be found via:
 *
 *     index = y * imageWidth + x
 *  
 * `x` is the horizontal position in the image
 * and `y` is the vertical position from the top
 * left corner.
 * 
 * Note: This function has a return type annotation
 * of `boolean[]`. That means it's an array of
 * booleans. We'll learn more about this in a
 * future module.
 */
function createImageData(): boolean[] {
  // create array of size `length` containing `false` values
  const length = imageWidth * imageHeight;
  return new Array(length).fill(false);
}
