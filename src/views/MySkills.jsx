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
      className="w-screen h-auto  flex flex-col bg-backgroundLight justify-center items-center md:px-24 px-6"
    >
      <CarrouselAutoplay />
    </div>
  );
}
