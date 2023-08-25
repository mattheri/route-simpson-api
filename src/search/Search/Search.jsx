import { Form, Formik } from "formik";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const initialValues = {
  search: "",
};

const Search = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    navigate(`/results/${values.search}`);
  };

  return (
    <section>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnChange
        validationSchema={Yup.object({
          search: Yup.string().required("Required"),
        })}
      >
        <Form className="flex flex-col gap-4 max-w-2xl mx-auto pt-12">
          <Input id="search" label="Search" />
          <Button type="submit">Search</Button>
        </Form>
      </Formik>
    </section>
  );
};

export default Search;
