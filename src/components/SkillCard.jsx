function SkillCard({ logo, name }) {
  return (
    <div className="size-[150px] flex items-center  justify-center rounded-md bg-primary    hover:-translate-y-[15px] transition duration-300 ease-in-out text-white hover:shadow-md cursor-pointer">
      {name}
    </div>
  );
}

export default SkillCard;
