import { type ReactNode } from "react";
import Container from "@/components/common/Container";

import DashboardSidebar from "./DashboardSidebar";

interface Props {
  children: ReactNode;
}

const DashboardLayout = ({
  children,
}: Props) => {
  return (
    <section className="bg-slate-50 py-10">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <DashboardSidebar />

          {children}
        </div>
      </Container>
    </section>
  );
};

export default DashboardLayout;