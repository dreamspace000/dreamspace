import { FCBriefcase } from '@icongo/fc';
import { ICIconEducation } from '@icongo/ic';

interface ITimelineData {
  type: string;
  icon: any;
  since: string;
  until: string;
  title: string;
  company: string;
  address: string;
  site: string;
  details: Array<string>;
}

const VerticalTimelineElementData = ({ since, until, icon, ...props }: ITimelineData) => ({
  elementProps: {
    date: [since, until].filter(Boolean).join(' - '),
    contentStyle: {
      background: 'rgba(33, 33, 33, 0.5)',
      color: '#ddd',
    },
    contentArrowStyle: {
      borderRight: '10px solid #ccc',
    },
    iconStyle: {
      background: '#2d1950',
    },
    icon: icon,
  },
  ...props,
});

const Experiences = [
  VerticalTimelineElementData({
    type: 'education',
    icon: <ICIconEducation />,
    since: 'Sep 2011',
    until: 'May 2015',
    title: 'Bachelor of Computer Science',
    company: 'Coleman University',
    address: 'San Diego, CA. United States',
    site: 'https://www.coleman.edu.gl/',
    details: ['Computer Science', 'Computer Graphics', 'Web Programming'],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: 'Oct 2015',
    until: 'Dec 2017',
    title: 'Junior Software Engineer',
    company: 'Medigap Life',
    address: 'Boca Raton, FL',
    site: 'https://www.medigaplife.com/',
    details: [
      'Gained a foundational understanding of software development principles and best practices through hands-on coding experience with various programming languages (e.g., Python, Java)',
      'Actively participated in team projects, collaborating with senior developers and contributing to ongoing initiatives such as building core functionalities for the Fastly platform.',
      'Played a key role in expanding the service portfolio, resulting in a 20% increase in service offerings.',
      'Successfully developed and implemented bug fixes for critical system components, reducing downtime by 10% and improving platform reliability.',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: 'Jan 2017',
    until: 'June 2019',
    title: 'Software Engineer',
    company: 'Medigap Life',
    address: 'Boca Raton, FL',
    site: 'https://www.medigaplife.com/',
    details: [
      "Expanded technical expertise by mastering new programming languages, frameworks (e.g ReactJS, Vue, NodeJS), and tools (e.g., AWS, Docker) relevant to Fastly's platform.",
      'Proactively stayed updated on industry trends and emerging technologies, incorporating them into assigned projects such as implementing machine learning algorithms for anomaly detection, which resulted in a 15% reduction in downtime.',
      'Successfully optimized software performance through code refactoring and resource management techniques, resulting in a 20% reduction in server load and improved user experience.',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: 'Aug 2019',
    until: 'Dec 2023',
    title: 'Full Stack & DevOps Engineer',
    company: "Walt Disney",
    address: 'Burbank, CA(full time for remote)',
    site: 'https://www.disney.com/',
    details: [
      'Architected and implemented microservices architecture, improving system scalability by 40%.',
      "Implemented real-time features using WebSockets, enhancing the platform's collaboration capabilities.",
      'Collaborated with operations, QA, and product teams to streamline deployment processes and improve release pipelines.',
      'Conducted code reviews and introduced best practices, reducing bugs by 25% and improving code quality.',
      'Utilized AWS ECS, Lambda, Batch, and Opensearch for backend development and cloud deployment.',
      'Leveraged Terraform in AWS for deployment automation, resulting in streamlined processes.',
      'Worked closely with product managers to gather and analyze requirements for new features.',
      'Contributed to GitOps-aligned workflows through Terraform-managed environments and version-controlled deployments.',
    ],
  }),
  VerticalTimelineElementData({
    type: 'work',
    icon: <FCBriefcase />,
    since: 'jan 2024',
    until: 'Nov 2025',
    title: 'Senior FullStack Developer',
    company: "Walt Disney",
    address: 'Burbank, CA',
    site: 'https://www.disney.com/',
    details: [
      'Mentored and coached junior developers, providing guidance and support for their professional growth and development, resulting in a 20% increase in their productivity.',
      'Collaborated with cross-functional teams, including product managers and QA engineers, to define project requirements and specifications.',
      'Developed and maintained RESTful APIs using Node.js, ensuring seamless integration with external systems and third-party services.',
      'Implemented scalable and responsive user interfaces using Vue, resulting in a 20% increase in user engagement.',
      'Led the development of the product roadmap, aligning with market trends and user needs.',
      'Played a crucial role in cloud-premises deployment, optimizing the operational efficiency of the tech stack.',
      'Collaborated closely with a world-class engineering team, ensuring rapid feature integration and deployment.',
      'Conducted regular training sessions for team members to keep them updated on the latest technologies and industry best practice.',
      'Actively participated in the Agile development process, contributing to sprint planning, daily stand-ups, and retrospective meetings.',
    ],
  }),
].sort(({ since: as, until: au }: any, { since: bs, until: bu }: any) => (as > bs || au > bu ? 1 : -1));

export default Experiences;
