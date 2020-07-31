import React, { useCallback, useState } from 'react';

interface Categoria {
  id: number;
  titulo: string;
  descricao: string;
  cor: string;
}

interface Cadastro {
  values: Categoria;
  clearForm: () => void;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
}

function useForm(valoresIniciais: Categoria): Cadastro {
  const [values, setValues] = useState<Categoria>(valoresIniciais);

  const setValue = useCallback(
    (key, value) =>
      setValues({
        ...values,
        [key]: value,
      }),
    [values],
  );

  const handleChange = useCallback(
    e => {
      setValue(e.target.getAttribute('name'), e.target.value);
    },
    [setValue],
  );

  const clearForm = useCallback(() => {
    setValues(valoresIniciais);
  }, [setValues]);

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
