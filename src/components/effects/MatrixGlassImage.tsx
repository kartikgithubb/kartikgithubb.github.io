
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ScanEye, Aperture, Activity, Loader2, Cpu } from 'lucide-react';
import { processTensorFlow, getPixelGrid } from '@/utils/imageProcessing';

// Minimal type definition for global tf
declare global {
  interface Window {
    tf: any;
  }
}

type VisionMode = 'original' | 'gaussian' | 'pixelate' | 'pixel_grid' | 'noise' | 'sharpen' | 'edge_detection';

interface MatrixGlassImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'video' | 'square' | 'portrait' | 'auto';
}

const MatrixGlassImage: React.FC<MatrixGlassImageProps> = ({
  src,
  alt,
  className,
  aspectRatio = 'video'
}) => {
  const [mode, setMode] = useState<VisionMode>('original');
  const [isProcessing, setIsProcessing] = useState(false);
  const [sequenceStep, setSequenceStep] = useState(0); // 0: Idle, 1: Noise, 2: Pixelate, 3: Pixel Grid, 4: Original (Done)
  const [tfReady, setTfReady] = useState(false);

  // Grid Data State
  const [gridData, setGridData] = useState<{ data: Int32Array | Uint8Array, width: number, height: number } | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const originalImageDataRef = useRef<ImageData | null>(null);

  // Direction State: 'forward' (destroy) or 'reverse' (heal)
  const [diffusionDirection, setDiffusionDirection] = useState<'forward' | 'reverse' | null>(null);

  // Educational Note State
  const [showEducationNote, setShowEducationNote] = useState(false);
  const [noteContent, setNoteContent] = useState({ title: '', message: '' });

  // Check for TensorFlow
  useEffect(() => {
    const checkTf = setInterval(() => {
      if (window.tf && window.tf.ready) {
        window.tf.ready().then(() => {
          console.log("TensorFlow.js is ready! Backend:", window.tf.getBackend());
          setTfReady(true);
          clearInterval(checkTf);
        });
      }
    }, 500);
    return () => clearInterval(checkTf);
  }, []);

  // Load image
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = src;

    img.onload = () => {
      console.log("MatrixGlassImage loaded:", src, img.naturalWidth, img.naturalHeight);
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
      originalImageDataRef.current = ctx.getImageData(0, 0, canvas.width, canvas.height);

      // Initial State: Start with Original visible
      setMode('original');
    };

    img.onerror = (e) => {
      console.error("MatrixGlassImage failed to load source:", src, e);
    };
  }, [src, tfReady]);

  const handleSequenceComplete = (direction: 'forward' | 'reverse') => {
    // 500ms delay after final step
    setTimeout(() => {
      if (direction === 'forward') {
        setNoteContent({
          title: "Forward Process Complete",
          message: "The image has been destroyed by adding Gaussian Noise (Entropy), creating a pure latent state."
        });
      } else {
        setNoteContent({
          title: "Reverse Process Complete",
          message: "The model has reconstructed the image from pure noise, simulating how Generative AI creates content."
        });
      }
      setShowEducationNote(true);
    }, 500);
  };

  // Forward Diffusion: Original -> Grid -> Pixel -> Noise (Entropy Increase)
  const startForwardDiffusion = () => {
    if (isProcessing) return;
    setDiffusionDirection('forward');
    setSequenceStep(1);

    // Step 1: Start at Original (0s)
    setMode('original');

    // Step 2: Show Grid (1s)
    setTimeout(() => {
      setSequenceStep(2);
      setMode('pixel_grid');
    }, 1000);

    // Step 3: Pixelate (2.5s)
    setTimeout(() => {
      setSequenceStep(3);
      setMode('pixelate');
    }, 2500);

    // Step 4: Noise (4s)
    setTimeout(() => {
      setSequenceStep(4);
      setMode('noise');
      // Complete
      handleSequenceComplete('forward');
    }, 4000);
  };

  // Reverse Diffusion: Noise -> Pixel -> Grid -> Original (Reconstruction)
  const startReverseDiffusion = () => {
    if (isProcessing) return;
    setDiffusionDirection('reverse');
    setSequenceStep(1);

    // Step 1: Start at Noise (0s)
    setMode('noise');

    // Step 2: Pixelate (1.5s)
    setTimeout(() => {
      setSequenceStep(2);
      setMode('pixelate');
    }, 1500);

    // Step 3: Grid (3s)
    setTimeout(() => {
      setSequenceStep(3);
      setMode('pixel_grid');
    }, 3000);

    // Step 4: Original (5s)
    setTimeout(() => {
      setSequenceStep(4);
      setMode('original');
      // Complete
      handleSequenceComplete('reverse');
    }, 5000);
  };

  // Main Effect Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !originalImageDataRef.current) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Reset if Original
    if (mode === 'original') {
      ctx.putImageData(originalImageDataRef.current, 0, 0);
      setGridData(null);
      return;
    }

    if (!tfReady) return;

    setIsProcessing(true);

    setTimeout(async () => {
      const start = performance.now();
      try {
        if (mode === 'pixel_grid') {
          // Special Rendering for Data Grid
          let currentGridData = gridData;
          if (!currentGridData) {
            currentGridData = await getPixelGrid(window.tf, originalImageDataRef.current!, 24);
            setGridData(currentGridData);
          }

          // 1. Draw "Pixelated" background first (helps visibility)
          const bgData = await processTensorFlow(window.tf, originalImageDataRef.current!, 'pixelate');
          ctx.putImageData(bgData, 0, 0);

          // 2. Draw Grid Overlay
          if (currentGridData) {
            drawDataGrid(ctx, canvas.width, canvas.height, currentGridData);
          }

        } else {
          // Standard TF Modes
          setGridData(null); // Clear grid if moving away
          const newData = await processTensorFlow(window.tf, originalImageDataRef.current!, mode as any);
          ctx.putImageData(newData, 0, 0);
        }

        const end = performance.now();
        console.log(`Deep Learning Process (${mode}) took ${Math.round(end - start)}ms`);
      } catch (err) {
        console.error("TF Process Error", err);
      }
      setIsProcessing(false);
    }, 10);

  }, [mode, tfReady]);

  const drawDataGrid = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    grid: { data: Int32Array | Uint8Array, width: number, height: number }
  ) => {
    const cellW = width / grid.width;
    const cellH = height / grid.height;

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = "bold 10px monospace";

    // Draw Grid
    ctx.strokeStyle = "rgba(0, 255, 0, 0.3)";
    ctx.lineWidth = 1;

    for (let y = 0; y < grid.height; y++) {
      for (let x = 0; x < grid.width; x++) {
        const i = (y * grid.width + x) * 3;
        if (i + 2 >= grid.data.length) continue;

        const r = grid.data[i];
        const g = grid.data[i + 1];
        const b = grid.data[i + 2];

        const screenX = x * cellW;
        const screenY = y * cellH;

        ctx.strokeRect(screenX, screenY, cellW, cellH);

        const lum = (0.299 * r + 0.587 * g + 0.114 * b);
        ctx.fillStyle = lum > 128 ? "black" : "white";
        ctx.fillText(`${Math.floor((r + g + b) / 3)}`, screenX + cellW / 2, screenY + cellH / 2);
      }
    }
  };

  const getModeLabel = () => {
    switch (mode) {
      case 'noise': return 'Gaussian Noise (Entropy)';
      case 'gaussian': return 'Gaussian Pooling';
      case 'pixelate': return 'Downsampling Layer';
      case 'pixel_grid': return 'Data Grid View';
      case 'sharpen': return 'Feature Sharpen';
      case 'edge_detection': return 'Edge Detection';
      default: return 'Live View';
    }
  };

  const getModeIcon = () => {
    if (isProcessing) return <Loader2 className="w-4 h-4 mr-2 animate-spin" />;
    switch (mode) {
      case 'noise': return <Activity className="w-4 h-4 mr-2 text-white" />;
      case 'gaussian': return <Aperture className="w-4 h-4 mr-2 text-cyan-400" />;
      case 'pixelate': return <Cpu className="w-4 h-4 mr-2 text-violet-500" />;
      case 'pixel_grid': return <Activity className="w-4 h-4 mr-2 text-yellow-400" />;
      case 'sharpen': return <Activity className="w-4 h-4 mr-2 text-pink-500" />;
      case 'edge_detection': return <ScanEye className="w-4 h-4 mr-2 text-green-500" />;
      default: return <ScanEye className="w-4 h-4 mr-2 text-primary" />;
    }
  };

  const aspectRatioClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    auto: '',
  };

  const getProgressWidth = () => {
    const p = Math.min(100, (sequenceStep / 4) * 100);
    return `${p}%`;
  };

  // Typewriter Hook
  const useTypewriter = (text: string, speed = 30) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
      if (!text) {
        setDisplayText('');
        return;
      }

      let i = 0;
      setDisplayText(''); // Start empty

      const timer = setInterval(() => {
        if (i < text.length) {
          i++;
          setDisplayText(text.substring(0, i));
        } else {
          clearInterval(timer);
        }
      }, speed);

      return () => {
        clearInterval(timer);
      };
    }, [text, speed]);

    return displayText;
  };

  const typewriterTitle = useTypewriter(showEducationNote ? noteContent.title : '', 50);
  const typewriterMessage = useTypewriter(showEducationNote ? noteContent.message : '', 20);

  return (
    <div className={cn("relative group z-10", className)} style={{ perspective: '1000px' }}>

      {/* Chalk Note (Slides out from behind) */}
      <div
        className={cn(
          "absolute top-8 bottom-8 w-72 bg-[#1a1a1a] border-l-4 border-l-cyan-500/50 rounded-l-xl p-6 shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]",
          "flex flex-col justify-center -z-10",
          showEducationNote ? "-translate-x-[92%] opacity-100" : "translate-x-0 opacity-0"
        )}
      >
        <div className="font-['Caveat'] text-2xl text-cyan-400 font-bold mb-3 flex items-center gap-2">
          <Activity className="w-4 h-4" />
          {typewriterTitle}
        </div>
        <div className="font-['Caveat'] text-xl text-white/90 leading-relaxed border-l border-white/10 pl-4 h-40 overflow-y-auto">
          {typewriterMessage}
        </div>

        <button
          onClick={() => setShowEducationNote(false)}
          className={cn(
            "mt-4 text-[10px] uppercase tracking-widest text-white/40 hover:text-white transition-colors text-left",
            showEducationNote ? "opacity-100 delay-1000 duration-500" : "opacity-0"
          )}
        >
          [ Dismiss Note ]
        </button>
      </div>

      {/* Main Image Card (The "Glass") */}
      <div
        ref={containerRef}
        className={cn(
          "relative w-full h-full overflow-hidden rounded-xl border border-border/30 bg-muted/20 shadow-2xl z-20 bg-black",
          aspectRatioClasses[aspectRatio]
        )}
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover transition-opacity duration-300"
          aria-label={alt}
        />

        {/* Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        {mode === 'noise' && <div className="absolute inset-0 bg-white/10 pointer-events-none mix-blend-overlay" />}
        {mode === 'pixelate' && <div className="absolute inset-0 bg-violet-500/10 pointer-events-none mix-blend-overlay" />}
        {mode === 'pixel_grid' && <div className="absolute inset-0 bg-yellow-500/10 pointer-events-none mix-blend-overlay" />}

        {/* AI Process Status Bar */}
        {sequenceStep > 0 && sequenceStep <= 4 && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
            <div
              className="h-full bg-primary transition-all duration-1000 ease-linear"
              style={{ width: getProgressWidth() }}
            />
          </div>
        )}

        {/* Control Buttons */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 w-full justify-center px-4">
          {/* Forward Diffusion Button */}
          <Button
            onClick={(e) => { e.preventDefault(); startForwardDiffusion(); }}
            disabled={isProcessing}
            variant="outline"
            size="sm"
            className={cn(
              "backdrop-blur-md bg-black/60 border-white/10 shadow-xl hover:bg-black/80 transition-all duration-300 rounded-full px-4",
              diffusionDirection === 'forward' && "ring-1 ring-red-500/50 text-red-300"
            )}
          >
            <Activity className="w-3 h-3 mr-2 text-red-400" />
            <span className="text-xs uppercase font-medium">Diffuse</span>
          </Button>

          {/* Center Display / Status */}
          <div className="hidden md:flex backdrop-blur-md bg-black/40 border border-white/5 rounded-full px-4 items-center h-9">
            <span className="text-[10px] uppercase tracking-widest text-white/70">
              {isProcessing ? 'CALCULATING...' : getModeLabel()}
            </span>
          </div>

          {/* Reverse Diffusion Button */}
          <Button
            onClick={(e) => { e.preventDefault(); startReverseDiffusion(); }}
            disabled={isProcessing}
            variant="outline"
            size="sm"
            className={cn(
              "backdrop-blur-md bg-black/60 border-white/10 shadow-xl hover:bg-black/80 transition-all duration-300 rounded-full px-4",
              diffusionDirection === 'reverse' && "ring-1 ring-green-500/50 text-green-300"
            )}
          >
            <ScanEye className="w-3 h-3 mr-2 text-green-400" />
            <span className="text-xs uppercase font-medium">Heal</span>
          </Button>
        </div>

        {/* Decorative Matrix Dots */}
        <div className="absolute top-4 right-4 flex gap-1.5 opacity-80">
          <div className={cn("w-1.5 h-1.5 rounded-full transition-colors duration-300", sequenceStep >= 1 ? "bg-white animate-pulse" : "bg-white/20")} />
          <div className={cn("w-1.5 h-1.5 rounded-full transition-colors duration-300", sequenceStep >= 2 ? "bg-white animate-pulse" : "bg-white/20")} />
          <div className={cn("w-1.5 h-1.5 rounded-full transition-colors duration-300", sequenceStep >= 3 ? "bg-white animate-pulse" : "bg-white/20")} />
          <div className={cn("w-1.5 h-1.5 rounded-full transition-colors duration-300", sequenceStep >= 4 ? "bg-white animate-pulse" : "bg-white/20")} />
        </div>
      </div>
    </div>
  );
};

export default MatrixGlassImage;

