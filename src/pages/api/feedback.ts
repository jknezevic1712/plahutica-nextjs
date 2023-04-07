import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const SendFeedback = (formData: HTMLFormElement) => {
  emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(
      (result) => {
        toast("Hvala na povratnoj informaciji!", {
          icon: "👍",
          position: "top-right",
        });
        console.log(result.text);
      },
      (error) => {
        toast("Nešto je pošlo po krivu...", {
          icon: "👎",
          position: "top-right",
        });
        console.log(error.text);
      }
    );
};

export default SendFeedback;
