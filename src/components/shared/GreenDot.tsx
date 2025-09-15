type GreenDotProps = {
    isOnline: boolean;
  };
  
  const GreenDot = ({ isOnline }: GreenDotProps) => {
    return (
      <div
        className={`w-4 h-4 rounded-full ${isOnline ? "bg-green-500" : "bg-gray-500"}`}
      ></div>
    );
  };
  
  export default GreenDot;
  