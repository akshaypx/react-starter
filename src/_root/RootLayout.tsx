import { Outlet, Navigate } from "react-router-dom";

const RootLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/home" />
      ) : (
        <>
          <nav className="w-1/5 bg-blue-200">
            <div className="font-bold p-4 bg-red-200">
              <p>Task Manager</p>
            </div>
          </nav>
          <section>
            <Outlet />
          </section>
        </>
      )}
    </>
  );
};

export default RootLayout;
