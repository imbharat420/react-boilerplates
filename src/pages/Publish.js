import {
  redirect,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

import NewPostForm from "../components/NewPostForm";
import { savePost } from "../utils/api";

function Publish() {
  const data = useActionData();

  const navigation = useNavigation();
  console.log(navigation.state);

  const navigate = useNavigate();

  function cancelHandler() {
    navigate("/data");
  }

  return (
    <>
      {data && data.isError && <p>{data.message}</p>}
      <NewPostForm
        onCancel={cancelHandler}
        submitting={navigation.state === "submitting"}
      />
    </>
  );
}

export default Publish;

export async function action({ request }) {
  const data = await request.formData();
  console.log("data", data);
  const validationError = await savePost(data);
  if (validationError) {
    return validationError;
  }
  return redirect("/data");
}
