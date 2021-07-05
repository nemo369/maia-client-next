import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import useForm from '../../src/hooks/useForm';
import Button from '../common/Button';

function JobsForm() {
  const { t } = useTranslation('common');
  const [loader, setLoader] = useState(false);
  const { inputs, handleChange } = useForm({
    profession: null,
    field: null,
    suties: 'ALL',
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    console.log(inputs);

    // const { data, status } = await UserAPI.register(dataToSend);

    setLoader(false);
  };

  return (
    <section className="jobs-form">
      <form action="" onSubmit={handleSubmit}>
        <Button type="submit" disabled={loader}>
          {t('חיפוש')}
        </Button>
      </form>
    </section>
  );
}

export default JobsForm;
