
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanyard } from '@/lib/lanyard';
import { useVisitorCount } from '@/lib/visitorCounter';
import { cn } from '@/lib/utils';
import { Music2, Disc, Eye } from 'lucide-react';

interface ProfileCardProps {
  className?: string;
  imageSrc?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ 
  className, 
  imageSrc = "/kartik-diffusion.jpg" 
}) => {
  const { data: lanyard } = useLanyard();
  const { count: visitorCount } = useVisitorCount();

  const status = lanyard?.discord_status || 'offline';
  const spotify = lanyard?.spotify;

  const statusColors = {
    online: 'bg-green-500',
    idle: 'bg-yellow-500',
    dnd: 'bg-red-500',
    offline: 'bg-gray-500'
  };

  const statusLabels = {
    online: 'Online',
    idle: 'Away',
    dnd: 'Busy',
    offline: 'Offline'
  };

  return (
    <div className={cn("flex flex-col items-center gap-6", className)}>
      {/* Profile Image & Status Pulse */}
      <div className="relative">
        {/* Visitor Counter Corner Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-2 -right-2 z-20 bg-black/60 backdrop-blur-md border border-white/10 px-2 py-1 rounded-full flex items-center gap-1.5 shadow-xl"
        >
          <Eye className="w-3 h-3 text-cyan-400" />
          <span className="text-[10px] font-mono text-white/90">
            {visitorCount?.toLocaleString() || '...'}
          </span>
        </motion.div>

        {/* Outer Animated Ring */}
        <motion.div
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className={cn(
            "absolute inset-0 rounded-full blur-xl -z-10",
            status === 'offline' ? 'bg-white/5' : 'bg-primary/20'
          )}
        />

        <div className="relative w-48 h-48 rounded-full p-1 bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-sm border border-white/10 overflow-hidden shadow-2xl">
          <motion.img 
            src={imageSrc} 
            alt="Profile" 
            className="w-full h-full object-cover rounded-full grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </div>

      {/* Status Indicators */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2.5 bg-black/40 backdrop-blur-md border border-white/5 px-4 py-1.5 rounded-full shadow-lg">
          <span className="relative flex h-2.5 w-2.5">
            <span className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              statusColors[status]
            )}></span>
            <span className={cn(
              "relative inline-flex rounded-full h-2.5 w-2.5",
              statusColors[status]
            )}></span>
          </span>
          <span className="text-sm font-medium text-white/80">
            {statusLabels[status]} 
            {lanyard?.activities?.[0] ? ` · ${lanyard.activities[0].name}` : ' · Currently exploring'}
          </span>
        </div>

        {/* Spotify Section */}
        <AnimatePresence mode="wait">
          {spotify && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-3 bg-green-500/10 backdrop-blur-md border border-green-500/20 px-4 py-2 rounded-xl mt-2 max-w-[280px]"
            >
              <div className="relative shrink-0">
                <img 
                  src={spotify.album_art_url} 
                  alt="Album Art" 
                  className="w-10 h-10 rounded-lg shadow-lg"
                />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-1 -right-1 bg-black rounded-full p-0.5"
                >
                  <Disc className="w-3 h-3 text-green-500" />
                </motion.div>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] uppercase tracking-wider text-green-500 font-bold mb-0.5">Listening to</span>
                <span className="text-xs text-white/90 font-medium truncate">{spotify.song}</span>
                <span className="text-[10px] text-white/60 truncate">{spotify.artist}</span>
              </div>
              <div className="ml-auto flex items-center gap-0.5">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [4, 12, 4] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }}
                    className="w-0.5 bg-green-500 rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProfileCard;
