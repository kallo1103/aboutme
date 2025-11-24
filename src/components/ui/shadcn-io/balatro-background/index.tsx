"use client";

import React, { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Triangle, Color } from 'ogl';

interface BalatroBackgroundProps {
  className?: string;
  children?: React.ReactNode;
}

export const BalatroBackground: React.FC<BalatroBackgroundProps> = ({ className, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<Renderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const renderer = new Renderer({ 
      alpha: true,
      dpr: Math.min(window.devicePixelRatio, 2) 
    });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 1);

    containerRef.current.appendChild(gl.canvas);
    rendererRef.current = renderer;

    const geometry = new Triangle(gl);

    const vertex = /* glsl */ `
      attribute vec2 uv;
      attribute vec2 position;
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
      }
    `;

    const fragment = /* glsl */ `
      precision highp float;
      uniform float uTime;
      uniform vec2 uResolution;
      varying vec2 vUv;

      // Simplex 2D noise
      vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

      float snoise(vec2 v){
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                 -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod(i, 289.0);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
          + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.y, uResolution.x);
        
        float t = uTime * 0.5;
        
        // Domain warping
        float n = snoise(uv * 3.0 + vec2(t * 0.2, t * 0.3));
        
        vec2 warpedUv = uv + vec2(n * 0.5);
        
        // Create the Balatro-like ripple/swirl effect
        float dist = length(warpedUv);
        float angle = atan(warpedUv.y, warpedUv.x);
        
        float f = sin(dist * 20.0 - t * 2.0 + angle * 5.0);
        
        // Color palette (Dark Gray/Blackish)
        vec3 col1 = vec3(0.05, 0.05, 0.05); // Very dark gray
        vec3 col2 = vec3(0.2, 0.2, 0.2); // Dark gray
        vec3 col3 = vec3(0.4, 0.4, 0.4); // Lighter gray
        
        vec3 finalColor = mix(col1, col2, smoothstep(-1.0, 1.0, f));
        finalColor = mix(finalColor, col3, smoothstep(-0.5, 0.5, sin(angle * 3.0 + t)));
        
        // Add some noise texture
        float grain = snoise(uv * 100.0 + t * 10.0) * 0.05;
        
        gl_FragColor = vec4(finalColor + grain, 1.0);
      }
    `;

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Color(window.innerWidth, window.innerHeight, 0) }, // Using Color as vec3 container or just array
      },
    });

    const mesh = new Mesh(gl, { geometry, program });

    let animationId: number;
    
    const update = (t: number) => {
      animationId = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    };
    
    animationId = requestAnimationFrame(update);

    const handleResize = () => {
      if (!containerRef.current) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      renderer.setSize(width, height);
      
      // Update resolution uniform
      // OGL uniforms can be updated directly
      if (program.uniforms.uResolution) {
         program.uniforms.uResolution.value = [width, height];
      }
    };

    // Initial size
    handleResize();

    window.addEventListener('resize', handleResize);

    // Cleanup
    const container = containerRef.current;

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (container && container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
    };
  }, []);

  return (
    <div className={`relative w-full min-h-screen overflow-clip ${className || ''}`}>
      <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

