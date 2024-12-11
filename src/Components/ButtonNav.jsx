import { NavLink } from "react-router-dom"

const ButtonNav = (props) => {
    const {path, children} = props;
    return (
        <NavLink to={path} className="flex items-center gap-8 text-xl font-semibold px-8 py-3 transition hover:bg-body hover:text-primary max-sm:p-6">
            {children}
        </NavLink>
    )
}

export default ButtonNav