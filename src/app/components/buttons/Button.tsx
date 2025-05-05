import Link from "next/link";

type Props = {
  link?: string;
  target?: string;
  children: string;
  type?: string;
};

export default function Button(props: Props) {
  return (
    <Link
      href={props.link!}
      target={props.target ? props.target : ""}
      className="text-orange uppercase font-sfPro font-light cursor-pointer text-base lg:text-lg"
      type={props.type ? props.type : ""}
    >
      {props.children} +
    </Link>
  );
}
