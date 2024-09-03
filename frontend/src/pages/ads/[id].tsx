import { useRouter } from "next/router";

export default function AdDetailComponant() {
  const router = useRouter();

  console.log(router);
  const adId: number = parseInt(router.query.id as string);

  return <p>Display details of ad with id {router.query.id}</p>;
}
