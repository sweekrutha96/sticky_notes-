// import React from "react";
// import { Routes, Route, HashRouter } from "react-router-dom";
// import Dashboard from "./components/Dashboard/Dashboard";
// import DrawingArea from "./components/Draw/DrawingArea";
// import StickyNote from "./components/sticky/StickyNote";

// const App = () => {
//   return (
//     <HashRouter>
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="drawing" element={<DrawingArea />} />
//       </Routes>
//       <StickyNote initialX={200} initialY={200} />
//     </HashRouter>
//   );
// };

// export default App;



import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import DrawingArea from "./components/Draw/DrawingArea";
import StickyNote from "./components/sticky/StickyNote";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="drawing"
          element={
            <>
              <DrawingArea />
              <StickyNote initialX={200} initialY={200} />
            </>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default App;




