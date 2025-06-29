import Preloader from "./components/Preloader";

const App = () => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      <Preloader
        sentence="One sec, please..."
        manualMode={false}
        blurAmount={5}
        borderColor="red"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
    </div>
  );
};

export default App;
