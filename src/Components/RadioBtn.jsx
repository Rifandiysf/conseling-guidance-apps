

const RadioBtn = ({ id, value, name, onChange }) => {
    return (
      <label className="flex justify-center items-center border-[3px] border-secondry cursor-pointer h-10 w-10 rounded-full max-sm:w-8 max-sm:h-8">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="peer hidden"
        />
        {value}
      </label>
    )
  }

export default RadioBtn