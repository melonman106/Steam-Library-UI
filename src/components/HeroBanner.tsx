import React from 'react';
interface HeroBannerProps {
  banner: string;
  title: string;
}
export function HeroBanner({ banner, title }: HeroBannerProps) {
  return (
    <div
      style={{
        height: '420px',
        position: 'relative',
        overflow: 'hidden'
      }}>

      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: banner ? `url('${banner}')` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundColor: '#1b2838'
        }} />


      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(to bottom,
              rgba(23,26,33,0.2) 0%,
              transparent 30%,
              transparent 50%,
              rgba(23,26,33,0.6) 70%,
              rgba(23,26,33,0.95) 90%,
              rgba(23,26,33,1) 100%
            )
          `
        }} />


      {/* Side gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
          'linear-gradient(to right, rgba(23,26,33,0.4) 0%, transparent 40%)'
        }} />


      {/* Content */}
      <div
        style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '40px 50px'
        }}>

        {/* Breadcrumb */}
        <div
          style={{
            fontSize: '11px',
            color: '#8f98a0',
            marginBottom: '8px',
            fontWeight: 500,
            letterSpacing: '0.3px'
          }}>

          <span
            style={{
              color: '#66c0f4',
              cursor: 'pointer'
            }}>

            ALL GAMES
          </span>
          <span
            style={{
              margin: '0 8px',
              color: '#556772'
            }}>

            &gt;
          </span>
          <span>{title.toUpperCase()}</span>
        </div>

        {/* Title */}
        <h1
          style={{
            fontSize: '52px',
            fontWeight: 800,
            color: '#fff',
            margin: 0,
            lineHeight: 1.05,
            letterSpacing: '-0.5px'
          }}>

          {title}
        </h1>
      </div>
    </div>);

}