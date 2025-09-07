import { CastleIcon } from "@/src/components/icons";

export const animations = () => {
  return (
    <div className='absolute inset-0 overflow-hidden pointer-events-none'>
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className='absolute animate-float-up'
          style={{
            left: `${Math.random() * 100}%`,
            top: `${100 + Math.random() * 20}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${25 + Math.random() * 15}s`,
          }}
        >
          <div
            className='bg-accent/20 rounded-full'
            style={{
              width: `${4 + Math.random() * 8}px`,
              height: `${4 + Math.random() * 8}px`,
            }}
          />
        </div>
      ))}

      <div className='absolute top-20 left-10 animate-sparkle'>
        <div className='text-accent/50 text-lg'>⚔️</div>
      </div>
      <div
        className='absolute top-40 right-20 animate-sparkle'
        style={{ animationDelay: "1s" }}
      >
        <CastleIcon className='h-6 w-6 text-accent/60' />
      </div>
      <div
        className='absolute bottom-40 left-20 animate-sparkle'
        style={{ animationDelay: "2s" }}
      >
        <div className='text-accent/45 text-sm'>🏰</div>
      </div>
      <div className='absolute top-60 left-1/2 animate-float'>
        <div className='w-3 h-3 bg-accent/30 rounded-full animate-mystical-pulse'></div>
      </div>
      <div
        className='absolute bottom-60 right-1/3 animate-float'
        style={{ animationDelay: "1.5s" }}
      >
        <div className='w-2 h-2 bg-primary/40 rounded-full animate-mystical-pulse'></div>
      </div>
    </div>
  );
};
