import ChooseAppointment from "./ChooseAppointment";
import Confirmation from "./Confirmation";
import YourInfo from "./YourInfo";

type Props = {
  currentStep: number;
};

export default function SubmissionForm(props: Props) {
  const { currentStep } = props;

  const renderForm = () => {
    switch (currentStep) {
      case 0: {
        return <ChooseAppointment />;
      }
      case 1: {
        return <YourInfo />;
      }
      case 2: {
        return <Confirmation />;
      }
      default: {
        return (
          <div>
            <p>Internal error: Unknown step number.</p>
          </div>
        );
      }
    }
  };

  return (
    <div
      className="flex w-full"
      style={{
        maxWidth: 700,
      }}
    >
      {renderForm()}
    </div>
  );
}
