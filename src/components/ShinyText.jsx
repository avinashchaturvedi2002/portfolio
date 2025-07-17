const ShinyText = ({ text, disabled = false, speed = 1, className = '' }) => {
  const animationDuration = `${speed}s`;

  return (
    <div className="bg-black rounded-3xl">
      <div
      className={`text-[#eee7e7a4]  border  border-white px-4 py-3 text-sm rounded-3xl inline-block ${disabled ? '' : 'animate-shine'} ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
    </div>
    
  );
};

export default ShinyText;

