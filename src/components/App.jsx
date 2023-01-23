import { Routes, Route, Navigate } from 'react-router-dom';
import { LolinPage, DashBoardPage } from 'pages';
import { Layout } from './Layout/Layout';
// import { Counter } from "./Counter/Counter";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="login" element={<LolinPage />} />
          <Route path="dashboard" element={<DashBoardPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};
