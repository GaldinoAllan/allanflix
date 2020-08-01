import React, { useCallback, useState } from 'react';

interface Video {
  id: number;
  categoria: string;
  titulo: string;
  descricao: string;
  url: string;
}

interface Cadastro {
  values: Video;
  clearForm: () => void;
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
}

function useFormVideos(valoresIniciais: Video): Cadastro {
  const [values, setValues] = useState<Video>(valoresIniciais);

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
  }, [setValues, valoresIniciais]);

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useFormVideos;
