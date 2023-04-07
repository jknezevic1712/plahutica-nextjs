import React, {
  useRef,
  type FormEvent,
  type RefObject,
  useState,
  useEffect,
} from "react";

import SendFeedback from "pages/api/feedback";

const FeedbackForm = (props: {
  form: RefObject<HTMLFormElement>;
  setShowFeedbackForm: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const scrollToBottom = () => {
    window.scrollTo({
      top: window.document.body.offsetHeight,
      behavior: "smooth",
    });
  };

  const sendForm = (e: FormEvent) => {
    e.preventDefault();

    if (!props.form.current) return;

    SendFeedback(props.form.current);
    props.form.current?.reset();
  };

  const resetForm = (
    e: FormEvent,
    setShowFeedbackForm: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    e.preventDefault();

    props.form.current?.reset();
    setShowFeedbackForm(false);
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div className="z-10 flex w-full items-center justify-center py-8">
      <div className="flex h-full w-full items-center justify-center px-8">
        <form
          ref={props.form}
          onSubmit={sendForm}
          onReset={(e) => resetForm(e, props.setShowFeedbackForm)}
          className="flex w-full flex-col rounded-md border border-emerald-600 bg-slate-100 p-8 text-center md:w-4/5 lg:w-3/5 xl:w-2/5 2xl:w-1/3 3xl:w-1/4"
        >
          <div className="flex w-full flex-col pb-4">
            <label className="pb-2 font-medium lg:text-lg 3xl:text-xl">
              E-mail
            </label>
            <input
              type="email"
              name="sender_email"
              className="rounded-md p-1 outline-stone-800"
            />
          </div>
          <div className="flex w-full flex-col pb-4">
            <label className="pb-2 font-medium lg:text-lg 3xl:text-xl">
              Poruka
            </label>
            <textarea
              name="message"
              rows={5}
              className="min-h-[125px] rounded-md p-1 outline-stone-800"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
            <button
              type="submit"
              className="flex h-[40px] w-full min-w-[100px] grow items-center justify-center rounded-md border-2 border-emerald-600 bg-stone-50 py-4 px-3 text-base font-medium text-stone-800 transition-all md:h-[50px] md:min-w-[120px] lg:text-lg lg:hover:border-stone-50 lg:hover:bg-emerald-600 lg:hover:text-stone-50 3xl:py-6 3xl:px-8 3xl:text-xl"
            >
              Pošalji
            </button>
            <button
              type="reset"
              className="flex h-[40px] w-full min-w-[100px] grow items-center justify-center rounded-md border-2 border-red-600 bg-stone-50 py-4 px-3 text-base font-medium text-stone-800 transition-all md:h-[50px] md:min-w-[120px] lg:text-lg lg:hover:border-stone-50 lg:hover:bg-red-600 lg:hover:text-stone-50 3xl:py-6 3xl:px-8 3xl:text-xl"
            >
              Odustani
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Feedback = () => {
  const form = useRef<HTMLFormElement>(null);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  if (showFeedbackForm)
    return (
      <FeedbackForm form={form} setShowFeedbackForm={setShowFeedbackForm} />
    );
  else {
    return (
      <div className="z-10 flex w-full items-center justify-center py-8">
        <button
          className="flex h-[40px] min-w-[100px] max-w-[200px] items-center justify-center rounded-md border-2 border-emerald-600 bg-stone-50 py-4 px-3 text-base font-medium text-stone-800 transition-all md:h-[50px] md:min-w-[120px] md:text-lg lg:hover:border-stone-50 lg:hover:bg-emerald-600 lg:hover:text-stone-50 3xl:py-6 3xl:px-8 3xl:text-xl"
          onClick={() => setShowFeedbackForm(true)}
        >
          Komentar
        </button>
      </div>
    );
  }
};

export default Feedback;
