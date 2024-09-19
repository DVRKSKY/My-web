import { Title, Buttons, IconDownload, IconMail } from "../components";
import { activeEmail } from "../redux/actions";
import CarrouselAutoplay from "../components/CarrouselAutoplay";
import { useDispatch } from "react-redux";

export default function MySkills() {
  const dispatch = useDispatch();

  const openEmail = (value) => {
    dispatch(activeEmail(value));
  };
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div
      id="skills"
      className="w-screen h-auto  flex flex-col bg-backgroundLight justify-center items-center md:px-24 px-6 pt-28"
    >
      <Title
        type="title"
        textPrimary="My"
        textSecondary="stack"
        where="other"
      />
      <CarrouselAutoplay />

      <div className=" mt-10 flex w-full md:flex-row flex-col justify-center items-center">
        <Buttons
          text="Contact"
          type="secondary"
          icon={<IconMail />}
          action={() => openEmail(true)}
        />
        <Buttons
          text="Download Cv"
          type="primary"
          action={() =>
            openInNewTab(
              "https://firebasestorage.googleapis.com/v0/b/insomnio-98e06.appspot.com/o/Archivos%2FENG%20-%20Amadeo%20Flores%20-%20Senior%20Frontend%20Developer%20-%202024.docx%20(1).pdf?alt=media&token=0b6934c9-d1e8-47a8-b67f-5a423dc4109e"
            )
          }
          icon={<IconDownload />}
        />
      </div>
    </div>
  );
}
