type Props = {
  link: string;
  children: string;
};

export default function Button(props: Props) {
  return (
    <a
      href={props.link}
      className="text-orange uppercase font-sfPro font-light"
    >
      {props.children} +
    </a>
  );
}
