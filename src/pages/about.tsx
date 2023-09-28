import { Icon } from '@iconify/react';
import { Layout } from '~/layouts';

const Section = ({ title, items }) => (
	<div className="section mt-8">
	  <h1 className="text-2xl font-bold mb-4">{title}</h1>
	  {items.map((item, index) => (
		<div key={index} className={`${item.type}-item`}>
		  <h2 className="text-xl font-semibold">{item.title}</h2>
		  <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
			{Array.isArray(item.description) ? (
			  item.description.map((desc, descIndex) => (
				<li key={descIndex} style={{ listStyleType: 'disc',  marginBottom: '10px'  }}>
				{desc.includes(": ") ? 
                  desc.split(": ").map((part, i) => i === 0 ? <strong key={i}>{part}:</strong> : <span key={i}> {part}</span>) 
                  : desc}
				</li>
			  ))
			) : (
			<li style={{ listStyleType: 'disc' }}>
				{item.description.includes(": ") ? 
					item.description.split(": ").map((part, i) => <strong key={i}>{i === 0 ? `${part}:` : ` ${part}`}</strong>) 
					: item.description
				}
				</li>
			)}
		  </ul>
		</div>
	  ))}
	</div>
  );
  
  
const workItems = [
{
	type: 'work',
	title: 'Software Engineer & Co-Founder @ A3i',
	description: ['Predictive Pricing Engine: Developed a real-time predictive pricing model for vehicles using Long Short-Term Memory (LSTM) algorithms in PyTorch. \
					Incorporated clustering techniques to adaptively learn from dealership inventory patterns in Python. \
					Deployed the model on AWS SageMaker, boosting revenue by $500-$1000 per seller for 70 sellers in 3 months.',
					"Automated Chatbot: Implemented a 24/7 automated chatbot for price and scheduling negotiations, utilizing OpenAI's GPT-3 for text generation and Twilio for SMS. Reduced manual outreach by 80% and negotiation time by 60%.",
					"Vehicle Bidding System: Designed a real-time vehicle bidding and appointment tracking system with a ReactJS front-end and AWS Lambda and DynamoDB back-end. Managed data for over 1,000 vehicles monthly.",
				"Data Pipeline: Orchestrated an ETL (Extract, Transform, Load) pipeline for sales and customer data. Utilized Java for data transformations and SQL for database operations. \
				Hosted on AWS EC2, with data storage in AWS S3. Improved lead conversion rates by 15% through real-time dashboards developed with D3.js.",
				"Team Leadership: Led a team of three interns focusing on software engineering and data analytics. Employed Agile methodologies, coordinated via Slack, and tracked project progress through Jira, resulting in on-time delivery for all projects."
			]
},
{
	type: 'work',
	title: 'Data Scientist @ Knowsmoke',
	description: ['Web Scraping: Designed an AWS Lambda-based web scraping pipeline in Python using Selenium and Playwright. \
					Integrated text recognition in Objective-C and automated the workflow with AWS Step Functions. \
					Achieved an 80% reduction in operational overhead while enriching 70% of the internal VIN database with over 10,000 comprehensive vehicle records.',
					"Data Analytics: Employed complex SQL queries and Tableau to analyze brand influence and customer behaviors on smoke-free vehicle statuses, resulting in a 20% boost in metrics like website visits.",
					"Certificate Creation: Created and stored responsive Smoke-Free Vehicle Certificates using HTML5 and CSS3 in AWS S3. \
					These certificates serve as a trusted document for customers and led to partnerships with five Southern California dealerships and an $80,000/month revenue bump.",
					"API Integration: Integrated PDF-based vehicle certificates into 20 dealer websites using JavaScript and SQL. Achieved a 40% increase in downloads, thereby augmenting brand trust and customer conversion.",
					"Mobile App Contribution: Enhanced the Knowsmoke mobile app, focusing on UI/UX improvements and end-to-end tests. Employed Postman for RESTful API testing and Swift for E2E tests, contributing to a 500+ active user pool."]
},
// ... other work items
];

const researchItems = [
	{
		type: 'research',
		title: 'Machine Learning Research Assistant @ UCSD, supervised by Prof. Rose Yu and Prof. Yian Ma',
		description: ["Initiated with COVID-19 research, leveraging deep learning models for epidemic forecasting; pivoted the focus to seasonal flu, applying flu time series analysis for targeted predictions.",
						"Engineered a hybrid model combining MLP and DeepGLEAM algorithms, achieving an 11.85% improvement in Mean Absolute Error (MAE). This work contributes to AI applications in scientific research, particularly in epidemic forecasting."]
	},
	{
		type: 'research',
		title: 'Machine Learning Research Assistant @ UCSD, supervised by Prof. Erik Gartzke and Thomas Leo Scherer',
		description: ['Utilized Python and R to systematically catalog the full modern history of international peace and conflict',
		'Built Supervised Learning Models to identify actors and events in international conflicts from Wiki database',
		'Utilized HTML and CSS to visualize geography constraints in the history of international conflicts']
	},
	{
		type: 'research',
		title: 'Research Assistant @ A Global Registry of Violent Deaths (GReVD) Lab, supervised by Dr Gary Milante',
		description: ['Updated open-source package MELTT in R to plot the geographical information of violent deaths across the world that contributes to the cross-validation process of the GReVD database; executed MELTT on existing GReVD database',
		'Planned and constructed API for GReVD database linked to open media sources (ACLED, UCDP and GTD)',
		'Built Machine Learning Models in Python to generate different levels of actor, event and spatiotemporal taxonomies to match 650000 violence events reported by media sources with bootstrapping; enriched 30% data in GReVD database']
	},
	// ... other work items
	];

const lifeItems = [
{
	type: 'life',
	title: 'Traveling Across Asia',
	description: 'TBD...',
},
// ... other life items
];

const hobbyItems = [
{
	type: 'hobby',
	title: 'Photography',
	description: 'TBD...',
},
// ... other hobby items
];
export default function AboutPage() {

  return (
    <Layout.Default seo={{ title: 'Xiangyi - About Me' }}>
      <div className="flex flex-grow min-h-screen pt-16 pb-12">
        <div className="flex-grow flex flex-col justify-center max-w-sm sm:max-w-6xl w-full mx-auto px-0 sm:px-16">
          <Section title="Work Experience" items={workItems} />
		  <Section title="Research Experience" items={researchItems} />
          <Section title="Life Experience" items={lifeItems} />
          <Section title="Hobbies" items={hobbyItems} />
        </div>
      </div>
    </Layout.Default>
  );
}
