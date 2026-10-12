import logoImage from "../_______________________.png";

export default function Component() {
  return (
    <div className="relative size-full" data-name="_레이어_1">
      <img src={logoImage} alt="기린대학교 로고" className="absolute block inset-0 size-full object-contain" />
    </div>
  );
}
