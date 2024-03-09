import EditEmployee from "./EditEmployee";

export const Employee = ({ id, name, role, img, updateEmployee }) => {
  return (
    <div className="w-[350px] m-2 py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img
        className="object-cover h-[100px] w-[100px] block mx-auto rounded-full sm:mx-0 sm:shrink-0"
        src={img}
        alt="Employee"
      />
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">{name}</p>
          <p className="text-slate-500 font-medium">{role}</p>
        </div>
        <EditEmployee
          id={id}
          name={name}
          role={role}
          updateEmployee={updateEmployee}
        />
      </div>
    </div>
  );
};
