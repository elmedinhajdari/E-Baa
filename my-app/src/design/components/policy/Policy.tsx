import "./policy.scss";
import ShieldIcon from '@mui/icons-material/Shield';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import GavelIcon from '@mui/icons-material/Gavel';

const Policy = () => {
  return (
    <div className="pt-5 pb-5">
      <ul className="policy-links">
        <li>
          <GavelIcon />
          Terms & Services
        </li>
        <li>
          <KeyboardReturnIcon />
          Return Policy
        </li>
        <li>
          <ShieldIcon />
          Privacy Policy
        </li>
      </ul>
    </div>
  );
};

export default Policy;
