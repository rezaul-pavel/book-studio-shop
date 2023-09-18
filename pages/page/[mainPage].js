import { useRouter } from "next/router";

const MainPage = () => {
  const router = useRouter();
  const { mainPage } = router.query;
  return <h1 className="text-center">This is {mainPage}</h1>;
};

export default MainPage;
