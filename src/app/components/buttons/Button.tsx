type Props = {
  link: string;
  target?: string;
  children: string;
};

export default function Button(props: Props) {
  return (
    <a
      href={props.link}
      target={props.target ? props.target : ""}
      className="text-orange uppercase font-sfPro font-light cursor-pointer text-base lg:text-lg"
    >
      {props.children} +
    </a>
  );
}
