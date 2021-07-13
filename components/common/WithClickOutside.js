import { createRef, useEffect, useState } from 'react';

export default function WithClickOutside(WrappedComponent) {
  const Component = (props) => {
    const [open, setOpen] = useState(false);

    const ref = createRef();

    console.log(ref);
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (!ref.current?.contains(event.target)) {
          setOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
    }, [ref]);

    return <WrappedComponent props={props} open1={open} setOpen1={setOpen} ref={ref} />;
  };

  return Component;
}
