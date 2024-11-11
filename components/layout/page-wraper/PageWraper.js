import Header from "@/components/header/Header";
import classes from "./page-wraper.module.scss";

function PageWraper(props) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
}

export default PageWraper;
