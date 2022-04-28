import React, { FormEvent } from 'react';

interface PicturesPageFormProps {
  formSubmitHandler: (e: FormEvent<HTMLFormElement>) => void;
}

const PicturesPageForm = React.forwardRef<
  HTMLInputElement,
  PicturesPageFormProps
>(({ formSubmitHandler }, ref) => {
  return (
    <form className="form" onSubmit={formSubmitHandler}>
      <input
        ref={ref}
        type="text"
        placeholder="Keyword.."
        className="form__input"
      />
      <button className="form__btn" type="submit">
        Search
      </button>
    </form>
  );
});

export default PicturesPageForm;
