import { ICPGithubIconWhite } from '@icongo/ic';
import { LGGithubIcon, LGGoogleGmail, } from '@icongo/lg';
import ADPhone from '@icongo/ad/ADPhone';
import { AELinkedin } from '@icongo/ae/lib/AELinkedin';

const LinkInfos = [
  {
    href: 'mailto:martin94chavez.tech@gmail.com',
    icon: {
      dark: LGGoogleGmail,
      light: LGGoogleGmail,
    },
    label: 'Google Mail',
  },
  {
    href: 'https://www.linkedin.com/in/martin-chavez-591901392',
    icon: {
      dark: AELinkedin,
      light: AELinkedin,
    },
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/dreamspace000',
    icon: {
      dark: LGGithubIcon,
      light: ICPGithubIconWhite,
    },
    label: 'Github',
  },
  {
    href: 'callto:+12136720983',
    icon: {
      dark: ADPhone,
      light: ADPhone,
    },
    label: 'Phone',
  }
];

export default LinkInfos;
