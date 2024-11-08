import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <div className="">
      <div>{<Outlet />}</div>
    </div>
  );
}
