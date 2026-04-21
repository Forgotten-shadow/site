import React, { useState, useEffect } from 'react'

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export function ImageWithFallback({ 
  src, 
  alt, 
  fallbackSrc, 
  className, 
  style, 
  ...rest 
}: SmartImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [currentSrc, setCurrentSrc] = useState(src);

  // Сбрасываем состояние, если внешний src изменился
  useEffect(() => {
    setCurrentSrc(src);
    setStatus('loading');
  }, [src]);

  const handleError = () => {
    setStatus('error');
    // Если есть кастомный fallback, ставим его, иначе — пустоту или системную заглушку
    if (fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
  };

  const DEFAULT_ERROR_SVG = 'data:image/svg+xml;base64,...'; // ваш SVG из файла

  return (
    <div className={`relative overflow-hidden inline-block ${className ?? ''}`} style={style}>
      {/* Скелетон/Заполнитель */}
      {status === 'loading' && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Сама картинка */}
      <img
        {...rest}
        src={status === 'error' && !fallbackSrc ? DEFAULT_ERROR_SVG : currentSrc}
        alt={alt}
        loading="lazy"
        onLoad={() => setStatus('loaded')}
        onError={handleError}
        className={`transition-opacity duration-300 ${
          status === 'loaded' ? 'opacity-100' : 'opacity-0'
        } ${className ?? ''}`}
      />
    </div>
  );
}
