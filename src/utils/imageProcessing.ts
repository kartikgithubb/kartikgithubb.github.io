export type Kernel = number[][];

// Kernel Definitions
export const KERNELS = {
    // Gaussian Blur (3x3) - Divisor 16
    gaussian: [
        [1, 2, 1],
        [2, 4, 2],
        [1, 2, 1]
    ],
    // Sharpen (Edge Detection variant) - Divisor 1
    sharpen: [
        [0, -1, 0],
        [-1, 5, -1],
        [0, -1, 0]
    ],
    // Edge Detection (Laplacian) - Divisor 1
    edge_detection: [
        [-1, -1, -1],
        [-1, 8, -1],
        [-1, -1, -1]
    ]
};

export const DIVISORS = {
    gaussian: 16,
    sharpen: 1,
    edge_detection: 1
};

/**
 * Processes image data using TensorFlow.js (Deep Learning Conv2D)
 * 
 * @param tf - The global TensorFlow instance
 * @param imageData - Source image data
 * @param mode - The processing mode
 * @returns Promise<ImageData> - Processed ImageData
 */
export const processTensorFlow = async (
    tf: any,
    imageData: ImageData,
    mode: 'gaussian' | 'sharpen' | 'edge_detection' | 'pixelate' | 'noise'
): Promise<ImageData> => {
    // 1. Get Kernel & Divisor
    // The kernel and divisor are only needed for convolution modes, so they are moved inside the convolution logic.

    // Use tf.tidy ONLY for the synchronous tensor operations
    const rgbaTensor = tf.tidy(() => {
        // Convert to Tensor [height, width, 3] (ignoring alpha for now)
        const tensor = tf.browser.fromPixels(imageData, 3);
        const [h, w, d] = tensor.shape;

        // Reshape to batch [1, height, width, 3]
        const input = tensor.expandDims(0).toFloat();

        // NOISE LOGIC (Diffusion Step)
        if (mode === 'noise') {
            // Pure Noise (Standard Gaussian / TV Static)
            // Ignore input image completely for "No Visibility"
            // Using randomUniform [0, 255] for pure static
            const output = tf.randomUniform([1, h, w, 3], 0, 255, 'int32');

            const result3d = output.squeeze([0]);
            const alpha = tf.fill([h, w, 1], 255, 'int32');
            return tf.concat([result3d, alpha], 2);
        }

        // PIXELATE / POOLING LOGIC
        if (mode === 'pixelate') {
            // Downsample by 10x using Average Pooling
            // poolSize=10, strides=10
            const pooled = tf.avgPool(input, 10, 10, 'valid');

            // Upsample back to original (Nearest Neighbor for blocky look)
            // resizeNearestNeighbor(images, size, alignCorners)
            const resized = tf.image.resizeNearestNeighbor(pooled, [h, w]);

            // Cast to int for output
            const output = resized.clipByValue(0, 255).toInt();
            const result3d = output.squeeze([0]);
            const alpha = tf.fill([h, w, 1], 255, 'int32');
            return tf.concat([result3d, alpha], 2);
        }

        // CONVOLUTION LOGIC (Gaussian, Sharpen, Edge)
        // 1. Get Kernel & Divisor
        const kernel = KERNELS[mode as keyof typeof KERNELS];
        const divisor = DIVISORS[mode as keyof typeof DIVISORS];

        // Create 4D weight tensor for standard image convolution
        const kData = kernel.flat().map(v => v / divisor);

        // Manual 4D Weight construction for Depthwise Conv2D
        const weightsArr = new Float32Array(3 * 3 * 3 * 1);
        let idx = 0;

        // Order: row, col, inChannel, multiplier
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                const val = kData[r * 3 + c];
                weightsArr[idx++] = val; // R
                weightsArr[idx++] = val; // G
                weightsArr[idx++] = val; // B
            }
        }

        const weights = tf.tensor4d(weightsArr, [3, 3, 3, 1]);

        // Apply Depthwise Conv2d
        const conv = tf.depthwiseConv2d(input, weights, 1, 'same');

        // Normalize result
        const output = conv.clipByValue(0, 255).toInt();

        // Remove batch dim -> [height, width, 3]
        const result3d = output.squeeze([0]);

        // We need 4 channels (RGBA) for canvas. 
        const alpha = tf.fill([h, w, 1], 255, 'int32');

        // Return the RGBA tensor to exist OUTSIDE of this tidy block
        return tf.concat([result3d, alpha], 2);
    });

    try {
        // Async conversion from the kept tensor
        const bytes = await tf.browser.toPixels(rgbaTensor);
        return new ImageData(new Uint8ClampedArray(bytes.buffer), imageData.width, imageData.height);
    } finally {
        // Essential: Dispose the kept tensor manually
        rgbaTensor.dispose();
    }
};

/**
 * Extracts a low-resolution grid of pixel data for visualization.
 * 
 * @param tf - Global TF instance
 * @param imageData - Source image
 * @param gridSize - Target grid size (e.g. 24 for 24x24)
 */
export const getPixelGrid = async (
    tf: any,
    imageData: ImageData,
    gridSize: number = 24
) => {
    return tf.tidy(() => {
        const tensor = tf.browser.fromPixels(imageData, 3);
        const [h, w] = tensor.shape;

        // Calculate pooling stride to fit target grid size
        // We want output size ~ gridSize
        // stride = input_size / target_size
        const size = Math.min(h, w);
        // const stride = Math.floor(size / gridSize); 

        // Better: Resize directly to target size using nearest neighbor or bilinear
        // resizing gives us the exact grid dimensions we want without math on strides
        const resized = tf.image.resizeBilinear(tensor, [gridSize, gridSize]);
        const intData = resized.toInt();

        const data = intData.dataSync(); // Sync is fine for small 24x24 grid
        return {
            data: data,
            width: gridSize,
            height: gridSize
        };
    });
};
