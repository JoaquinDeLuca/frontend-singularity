import { PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../header-footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="content">
      <Header />
      <main>
        {children ? children : <Outlet />}
      </main>
      <Footer />
    </div>
  )
}
