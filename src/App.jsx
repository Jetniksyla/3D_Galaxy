import { Suspense, useRef, useEffect } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Earth from "../public/Earth";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function App() {
  const earthRef = useRef();
  const starsRef = useRef();

  // Load galaxy stars model
  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      "../public/galaxy.gltf",
      function (gltf) {
        starsRef.current = gltf.scene;
        starsRef.current.position.set(10, 10, 20, 10); 
        starsRef.current.scale.set(10, 10, 10, 10); 
        earthRef.current.add(starsRef.current);
      },
      undefined,
      function (error) {
        console.error("Error loading galaxy stars model:", error);
      }
    );
  }, []);

  return (
    <>
      <div>
        <h1>Welcome To My 3D World</h1>
      </div>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <group ref={earthRef}>
            <Earth />
          </group>
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
