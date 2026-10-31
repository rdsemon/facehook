import React from "react";

function Field({ children, label, htmlFor, error }) {
  const id = htmlFor || getChildId(children);
  return (
    <div className="form-control">
      <label htmlFor={id} className="auth-control">
        {label}
      </label>
      {children}
      {error && <p className="text-red-500">{error.message}</p>}
    </div>
  );
}

export default Field;

const getChildId = (children) => {
  const child = React.Children.only(children);

  if ("id" in child.props) {
    return child.props.id;
  }
};
