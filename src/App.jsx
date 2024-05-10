import { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Earth from "../public/Earth";

function App() {
  return (
    <>
      <div>
        <h1>Welcome To My 3D World</h1>
      </div>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
      <footer
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "20px",
          textAlign: "center",
          fontFamily: "sans-serif",
          fontSize: "20px",
        }}
      >
        &copy; 2024 Jetnik Syla. All rights reserved.
      </footer>
    </>
  );
}

export default App;
