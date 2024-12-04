import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Html } from '@react-three/drei';
import { MasjidModel } from './masjid/MasjidModel';

export function Hero() {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-[#050a15] via-[#030812] to-black">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [80, 40, 80], fov: 45 }}>
          <Suspense fallback={
            <Html center>
              <div className="text-[#C5A572] text-xl">Loading...</div>
            </Html>
          }>
            <color attach="background" args={['#020617']} />
            <fog attach="fog" args={['#030812', 50, 200]} />
            <ambientLight intensity={0.1} />
            <spotLight
              position={[100, 100, 100]}
              angle={0.15}
              penumbra={1}
              intensity={1}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
            />
            <pointLight position={[-50, 50, -50]} intensity={0.3} color="#C5A572" />
            <Stars radius={100} depth={50} count={7000} factor={4} fade saturation={0.5} speed={0.5} />
            <MasjidModel />
            <OrbitControls
              enableZoom={true}
              maxDistance={150}
              minDistance={30}
              autoRotate={true}
              autoRotateSpeed={0.2}
              maxPolarAngle={Math.PI / 2.2}
              minPolarAngle={Math.PI / 4}
            />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="w-16 h-[1px] bg-[#C5A572] mx-auto"></div>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#C5A572] mb-6 tracking-wider">
            Dār al-Islām
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-[#C5A572]/90 max-w-2xl mx-auto leading-relaxed font-light">
            Journey through the sacred architecture of Islam
          </p>
          <div className="mt-8">
            <div className="w-16 h-[1px] bg-[#C5A572] mx-auto"></div>
          </div>
          <button className="mt-12 px-8 py-3 bg-[#C5A572]/10 border border-[#C5A572]/20 text-[#C5A572] 
                           rounded-full hover:bg-[#C5A572]/20 transition-all duration-300 
                           transform hover:scale-105 backdrop-blur-sm">
            Explore Sacred Architecture
          </button>
        </div>
      </div>
    </section>
  );
}